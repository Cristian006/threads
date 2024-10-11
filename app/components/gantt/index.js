"use client";
import React, { useState, useRef } from 'react';

const PADDING = 365 * 2 // day +/- to the min and max date to calculate the overall time range

const GanttChart = ({ events }) => {
  // Calculate the overall time range
  const getTimeRange = (events) => {
    const dates = events.flatMap((event) => [
      new Date(event.start),
      new Date(event.end),
    ]);

    const minDate = new Date(Math.min(...dates));
    const maxDate = new Date(Math.max(...dates));

    // Apply padding
    minDate.setDate(minDate.getDate() - PADDING);
    maxDate.setDate(maxDate.getDate() + PADDING);

    return { minDate, maxDate };
  };

  const { minDate, maxDate } = getTimeRange(events);

  // State variables for zoom and pan
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState(0);

  const totalTimeRangeMs = maxDate - minDate;
  const visibleTimeRangeMs = totalTimeRangeMs / zoomLevel;

  // Calculate minVisibleDateMs based on panOffset
  const minVisibleDateMs =
    minDate.getTime() + panOffset * (totalTimeRangeMs - visibleTimeRangeMs);

  const minVisibleDate = new Date(minVisibleDateMs);
  const maxVisibleDate = new Date(minVisibleDateMs + visibleTimeRangeMs);

  // Generate timeline headers dynamically
  const generateTimelineHeaders = () => {
    const headers = [];
    const minYear = minVisibleDate.getFullYear();
    const maxYear = maxVisibleDate.getFullYear();

    for (let year = minYear; year <= maxYear; year++) {
      headers.push(year);
    }

    return headers;
  };

  const timelineHeaders = generateTimelineHeaders();
  console.log(timelineHeaders);
  // Get color by source
  const getColorBySource = (source, idx) => {
    const sourceColors = [
      '#ff5722', // Orange
      '#3f51b5', // Indigo
      '#4caf50', // Green
      '#9c27b0', // Purple
      '#795548', // Brown
      '#009688', // Teal
    ]
    return sourceColors[idx % sourceColors.length] || '#9e9e9e'; // Default gray color
  };

  // Event handlers for panning and zooming
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStartX;
    setDragStartX(e.clientX);

    const timelineWidth = e.currentTarget.offsetWidth;
    const panOffsetChange = (-deltaX / timelineWidth) * (1 / zoomLevel);

    setPanOffset((prevOffset) => {
      let newOffset = prevOffset + panOffsetChange;
      const maxOffset = 1 - 1 / zoomLevel;
      newOffset = Math.max(0, Math.min(newOffset, maxOffset));
      return newOffset;
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const deltaY = e.deltaY;
    const zoomFactor = 0.001;

    setZoomLevel((prevZoomLevel) => {
      let newZoomLevel = prevZoomLevel * (1 - deltaY * zoomFactor);
      newZoomLevel = Math.max(1, Math.min(newZoomLevel, 10));

      // Adjust panOffset to keep the timeline centered
      const panRange = 1 - 1 / newZoomLevel;
      setPanOffset((prevPanOffset) => {
        let newPanOffset = prevPanOffset + (deltaY * zoomFactor) / newZoomLevel;
        newPanOffset = Math.max(0, Math.min(newPanOffset, panRange));
        return newPanOffset;
      });

      return newZoomLevel;
    });
  };

  // Mini-map variables and handlers
  const miniMapRef = useRef(null);
  const [isMiniMapDragging, setIsMiniMapDragging] = useState(false);
  const [miniMapDragStartX, setMiniMapDragStartX] = useState(null);

  const handleMiniMapMouseDown = (e) => {
    setIsMiniMapDragging(true);
    setMiniMapDragStartX(e.clientX);
  };

  const handleMiniMapMouseMove = (e) => {
    if (!isMiniMapDragging) return;

    const deltaX = e.clientX - miniMapDragStartX;
    setMiniMapDragStartX(e.clientX);

    const miniMapWidth = miniMapRef.current.offsetWidth;
    const timePerPixel = totalTimeRangeMs / miniMapWidth;
    const panOffsetChangeMs = deltaX * timePerPixel;

    let newMinVisibleDateMs = minVisibleDateMs + panOffsetChangeMs;

    // Constrain newMinVisibleDateMs between minDate and maxDate - visibleTimeRangeMs
    newMinVisibleDateMs = Math.max(
      minDate.getTime(),
      Math.min(newMinVisibleDateMs, maxDate.getTime() - visibleTimeRangeMs)
    );

    const newPanOffset =
      (newMinVisibleDateMs - minDate.getTime()) /
      (totalTimeRangeMs - visibleTimeRangeMs);

    setPanOffset(newPanOffset);
  };

  const handleMiniMapMouseUp = () => {
    setIsMiniMapDragging(false);
  };

  // Add new state variables for resizing
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStartX, setResizeStartX] = useState(null);
  const [resizeEdge, setResizeEdge] = useState(null);

  // Add new handlers for resizing
  const handleResizeStart = (e, edge) => {
    setIsResizing(true);
    setResizeStartX(e.clientX);
    setResizeEdge(edge);
  };

  const handleResizeMove = (e) => {
    if (!isResizing) return;

    const deltaX = e.clientX - resizeStartX;
    setResizeStartX(e.clientX);

    const miniMapWidth = miniMapRef.current.offsetWidth;
    const timePerPixel = totalTimeRangeMs / miniMapWidth;
    const timeChange = deltaX * timePerPixel;

    if (resizeEdge === 'left') {
      // Logic for left handle
      const newMinVisibleDateMs = Math.max(
        minDate.getTime(),
        Math.min(minVisibleDateMs + timeChange, maxVisibleDate.getTime() - 1000 * 60 * 60 * 24) // Ensure at least one day visible
      );
      const newVisibleTimeRangeMs = maxVisibleDate.getTime() - newMinVisibleDateMs;
      const newZoomLevel = totalTimeRangeMs / newVisibleTimeRangeMs;
      const newPanOffset = (newMinVisibleDateMs - minDate.getTime()) / (totalTimeRangeMs - newVisibleTimeRangeMs);

      setZoomLevel(newZoomLevel);
      setPanOffset(newPanOffset);
    } else if (resizeEdge === 'right') {
      // Logic for right handle
      const newMaxVisibleDateMs = Math.min(
        maxDate.getTime(),
        Math.max(maxVisibleDate.getTime() + timeChange, minVisibleDate.getTime() + 1000 * 60 * 60 * 24) // Ensure at least one day visible
      );
      const newVisibleTimeRangeMs = newMaxVisibleDateMs - minVisibleDateMs;
      const newZoomLevel = totalTimeRangeMs / newVisibleTimeRangeMs;
      
      // Calculate new pan offset to keep the left edge of the visible area in place
      const newPanOffset = (minVisibleDateMs - minDate.getTime()) / (totalTimeRangeMs - newVisibleTimeRangeMs);

      setZoomLevel(newZoomLevel);
      setPanOffset(newPanOffset);
    }
  };

  const handleResizeEnd = () => {
    setIsResizing(false);
  };

  // Group events by source
  const groupedEvents = events.reduce((acc, event) => {
    if (!acc[event.source]) {
      acc[event.source] = [];
    }
    acc[event.source].push(event);
    return acc;
  }, {});

  // Render the component
  return (
    <div className="w-full font-sans overflow-hidden h-full">
      {/* Mini-map */}
      <div
        className="relative h-12 mb-2 bg-black/20 cursor-grab w-full overflow-hidden"
        ref={miniMapRef}
        onMouseDown={handleMiniMapMouseDown}
        onMouseMove={(e) => {
          handleMiniMapMouseMove(e);
          handleResizeMove(e);
        }}
        onMouseUp={() => {
          handleMiniMapMouseUp();
          handleResizeEnd();
        }}
        onMouseLeave={() => {
          handleMiniMapMouseUp();
          handleResizeEnd();
        }}
      >
        {/* Visible area indicator */}
        <div
          className="absolute h-full bg-blue-500 bg-opacity-50"
          style={{
            left: `${((minVisibleDateMs - minDate.getTime()) / totalTimeRangeMs) * 100}%`,
            width: `${(visibleTimeRangeMs / totalTimeRangeMs) * 100}%`,
          }}
        >
          {/* Left resize handle */}
          <div
            className="absolute left-0 top-0 bottom-0 w-2 cursor-ew-resize bg-blue-700"
            onMouseDown={(e) => handleResizeStart(e, 'left')}
          ></div>
          {/* Right resize handle */}
          <div
            className="absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize bg-blue-700"
            onMouseDown={(e) => handleResizeStart(e, 'right')}
          ></div>
        </div>
      </div>

      {/* Timeline Headers */}
      <div className="flex flex-row items-center w-full mb-6">
        <div className="w-48 font-bold">Timeline</div>
        <div
          className="relative select-none w-full flex-1"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
        >
          {timelineHeaders.map((year, index) => {
            const headerStartDate = new Date(year, 0, 1);
            const headerEndDate = new Date(year + 1, 0, 1);

            const headerStartOffsetMs = Math.max(
              headerStartDate.getTime(),
              minVisibleDate.getTime()
            ) - minVisibleDate.getTime();
            const headerEndOffsetMs = Math.min(
              headerEndDate.getTime(),
              maxVisibleDate.getTime()
            ) - minVisibleDate.getTime();

            const headerDurationMs = headerEndOffsetMs - headerStartOffsetMs;
            const offsetPercentage =
              (headerStartOffsetMs / visibleTimeRangeMs) * 100;
            const widthPercentage =
              (headerDurationMs / visibleTimeRangeMs) * 100;

            return (
              <div
                key={index}
                className="absolute top-0  text-center text-xs h-4 border-l border-gray-100/20 text-white"
                style={{
                  left: `${offsetPercentage}%`,
                  width: `${widthPercentage}%`,
                }}
              >
                {year}
              </div>
            );
          })}
        </div>
      </div>
    <div className="overflow-y-auto h-full">
      {/* Grouped Events with Legend */}
      {Object.entries(groupedEvents).map(([source, sourceEvents], idx) => (
        <div key={source} className="mb-6 pl-2 border-l-4 border-solid" style={{ borderColor: getColorBySource(source, idx) }}>
          {/* Legend for this source */}
          <div className="flex items-center mb-2">
            <span className="font-semibold">{source}</span>
          </div>

          {/* Event Bars for this source */}
          {sourceEvents.map((event) => {
            const eventStart = new Date(event.start);
            const eventEnd = new Date(event.end);

            // Handle same-day events
            if (eventStart.getTime() === eventEnd.getTime()) {
              eventEnd.setDate(eventEnd.getDate() + 1);
            }

            const eventStartMs = Math.max(
              eventStart.getTime(),
              minVisibleDate.getTime()
            );
            const eventEndMs = Math.min(
              eventEnd.getTime(),
              maxVisibleDate.getTime()
            );

            if (eventEndMs <= eventStartMs) {
              // Event is not visible in the current time range
              return null;
            }

            const eventStartOffsetMs = eventStartMs - minVisibleDate.getTime();
            const eventEndOffsetMs = eventEndMs - minVisibleDate.getTime();
            const eventDurationMs = eventEndOffsetMs - eventStartOffsetMs;

            const offsetPercentage =
              (eventStartOffsetMs / visibleTimeRangeMs) * 100;
            const durationPercentage =
              (eventDurationMs / visibleTimeRangeMs) * 100;

            // Ensure a minimum width for very short events
            const minWidth = 0.5; // 0.5% of the visible range
            const adjustedDurationPercentage = Math.max(durationPercentage, minWidth);

            return (
              <div key={event.id} className="flex items-center mt-1.5">
                <div className="w-48 text-base flex-shrink-0">{event.name}</div>
                <div
                  className="relative h-10 w-full overflow-hidden select-none"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  // onWheel={handleWheel}
                >
                  <div
                    className="absolute h-10 rounded-md p-2"
                    style={{
                      left: `${offsetPercentage}%`,
                      width: `${adjustedDurationPercentage}%`,
                      backgroundColor: getColorBySource(event.source, idx),
                    }}
                    title={`${event.name}\nSource: ${event.source}\nDate: ${event.start} to ${event.end}`}
                  >
                    <div className="text-sm absolute top-0 left-0 text-nowrap pl-2">
                        <div className="font-semibold">{event.name}</div>
                        <div className="text-xs">{event.start}{event.end && event.end !== event.start && ` - ${event.end}`}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GanttChart;