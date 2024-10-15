"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../ui/button';
import { ResetIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns'; // Add this import at the top of the file

const PADDING = 1 // day +/- to the min and max date to calculate the overall time range

const GanttChart = ({ events, onRangeChange }) => {
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
      '#FF7A82', // Darker Pink
      '#88C6AF', // Darker Green
      '#82B2FF', // Darker Blue
      '#FFBA91', // Darker Orange
      '#C2D0AB', // Darker Yellow-Green
      '#A7AECA', // Darker Purple
    ]
    return sourceColors[idx % sourceColors.length] || '#909090'; // Darker default gray color
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

  // Mini-map variables and handlers
  const miniMapRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeEdge, setResizeEdge] = useState(null);

  // Add new state variables for brush
  const [brushStart, setBrushStart] = useState(null);
  const [brushEnd, setBrushEnd] = useState(null);
  const [isBrushing, setIsBrushing] = useState(false);

  const [isDraggingBrush, setIsDraggingBrush] = useState(false);

  const handleMiniMapMouseDown = (e) => {
    const miniMapRect = miniMapRef.current.getBoundingClientRect();
    const clickPosition = (e.clientX - miniMapRect.left) / miniMapRect.width;
    setBrushStart(clickPosition);
    setBrushEnd(clickPosition);
    setIsBrushing(true);
  };

  const handleMiniMapMouseMove = (e) => {
    if (!isBrushing && !isResizing && !isDraggingBrush) return;

    const miniMapRect = miniMapRef.current.getBoundingClientRect();
    const currentPosition = (e.clientX - miniMapRect.left) / miniMapRect.width;

    if (isBrushing) {
      setBrushEnd(currentPosition);
    } else if (isResizing) {
      if (resizeEdge === 'left') {
        setBrushStart(Math.min(currentPosition, brushEnd));
      } else if (resizeEdge === 'right') {
        setBrushEnd(Math.max(currentPosition, brushStart));
      }
    } else if (isDraggingBrush) {
      const deltaX = e.clientX - dragStartX;
      const deltaPosition = deltaX / miniMapRect.width;
      
      let newBrushStart = brushStart + deltaPosition;
      let newBrushEnd = brushEnd + deltaPosition;

      // Ensure the brush stays within the mini-map bounds
      if (newBrushStart < 0) {
        newBrushEnd -= newBrushStart;
        newBrushStart = 0;
      } else if (newBrushEnd > 1) {
        newBrushStart -= (newBrushEnd - 1);
        newBrushEnd = 1;
      }

      setBrushStart(newBrushStart);
      setBrushEnd(newBrushEnd);
      setDragStartX(e.clientX);
    }
  };

  const handleMiniMapMouseUp = () => {
    setIsBrushing(false);
    setIsResizing(false);
    setIsDraggingBrush(false);
    // Remove the zoom and pan updates from here
  };

  const handleResizeStart = (e, edge) => {
    e.stopPropagation();
    setIsResizing(true);
    setResizeEdge(edge);
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setPanOffset(0);
    setBrushStart(null);
    setBrushEnd(null);
    
    // Trigger onRangeChange with default start and end dates
    onRangeChange({
      start: minDate,
      end: maxDate
    });
  };

  // Update visible date range when brush changes
  useEffect(() => {
    if (brushStart !== null && brushEnd !== null) {
      const newMinVisibleDateMs = minDate.getTime() + Math.min(brushStart, brushEnd) * totalTimeRangeMs;
      const newMaxVisibleDateMs = minDate.getTime() + Math.max(brushStart, brushEnd) * totalTimeRangeMs;
      const newVisibleTimeRangeMs = newMaxVisibleDateMs - newMinVisibleDateMs;
      const newZoomLevel = totalTimeRangeMs / newVisibleTimeRangeMs;
      const newPanOffset = (newMinVisibleDateMs - minDate.getTime()) / (totalTimeRangeMs - visibleTimeRangeMs);

      setZoomLevel(newZoomLevel);
      setPanOffset(newPanOffset);

      // Pass the selected range to the parent component
      onRangeChange({
        start: new Date(newMinVisibleDateMs),
        end: new Date(newMaxVisibleDateMs)
      });
    }
  }, [brushStart, brushEnd, minDate, totalTimeRangeMs, visibleTimeRangeMs, onRangeChange]);

  // Group events by source
  const groupedEvents = events.reduce((acc, event) => {
    if (!acc[event.source]) {
      acc[event.source] = [];
    }
    acc[event.source].push(event);
    return acc;
  }, {});

  const handleBrushMouseDown = (e) => {
    e.stopPropagation();
    setIsDraggingBrush(true);
    setDragStartX(e.clientX);
  };

  // Add this function to generate year markers for the mini-map
  const generateMiniMapYearMarkers = () => {
    const yearMarkers = [];
    const startYear = minDate.getFullYear();
    const endYear = maxDate.getFullYear();

    for (let year = startYear; year <= endYear; year++) {
      const yearDate = new Date(year, 0, 1);
      const position = (yearDate - minDate) / (maxDate - minDate);
      yearMarkers.push({ year, position });
    }

    return yearMarkers;
  };

  const miniMapYearMarkers = generateMiniMapYearMarkers();

  // Add this function to preprocess events and group them by source
  const preprocessEvents = () => {
    const sourceGroups = {};
    events.forEach((event) => {
      if (!sourceGroups[event.source]) {
        sourceGroups[event.source] = [];
      }
      sourceGroups[event.source].push(event);
    });

    return Object.entries(sourceGroups).map(([source, sourceEvents], index) => {
      const mergedRanges = sourceEvents.reduce((ranges, event) => {
        const start = new Date(event.start).getTime();
        const end = new Date(event.end).getTime();
        
        if (ranges.length === 0 || start > ranges[ranges.length - 1].end) {
          ranges.push({ start, end });
        } else {
          ranges[ranges.length - 1].end = Math.max(ranges[ranges.length - 1].end, end);
        }
        return ranges;
      }, []);

      return {
        source,
        ranges: mergedRanges,
        color: getColorBySource(source, index)
      };
    });
  };

  const groupedSources = preprocessEvents();

  // Add this constant for minimum visible width
  const MIN_VISIBLE_WIDTH = 0.5; // 0.5% of total width

  // Add this function to format the date range
  const formatDateRange = (start, end) => {
    return `${format(start, 'MMM d, yyyy')} - ${format(end, 'MMM d, yyyy')}`;
  };

  // Calculate the visible date range
  const visibleDateRange = brushStart !== null && brushEnd !== null
    ? formatDateRange(
        new Date(minDate.getTime() + Math.min(brushStart, brushEnd) * totalTimeRangeMs),
        new Date(minDate.getTime() + Math.max(brushStart, brushEnd) * totalTimeRangeMs)
      )
    : formatDateRange(minDate, maxDate);

  // Render the component
  return (
    <div className="w-full font-sans h-full flex flex-col">
      {/* Mini-map (stays visible) */}
      <div className="flex-shrink-0">
        <div className="bg-background py-1 px-2 flex flex-row justify-between items-center w-full sticky top-0 z-10">
          <div className="flex-1">

          </div>
          <div className="flex-1 text-sm text-gray-400 pl-2 text-center">
            {visibleDateRange}
          </div>
          <div className="flex-1 flex justify-end">
            <Button 
              disabled={brushStart === null && brushEnd === null} 
              size="icon" 
              variant="ghost" 
              onClick={resetZoom}
            >
              <ResetIcon />
            </Button>
          </div>
        </div>
        {/* Mini-map year markers */}
        <div className="relative h-6 w-full mb-1">
          {miniMapYearMarkers.map(({ year, position }) => (
            <div
              key={year}
              className="absolute top-0 text-xs text-gray-500"
              style={{ left: `${position * 100}%`, transform: 'translateX(-50%)' }}
            >
              {year}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <div
            className="relative h-24 bg-background cursor-crosshair w-full overflow-hidden"
            ref={miniMapRef}
            onMouseDown={handleMiniMapMouseDown}
            onMouseMove={handleMiniMapMouseMove}
            onMouseUp={handleMiniMapMouseUp}
            onMouseLeave={handleMiniMapMouseUp}
          >
            {/* Source lines */}
            {groupedSources.map(({ source, ranges, color }, index) => (
              <div key={source} className="absolute h-2" style={{ top: `${index * 10 + 4}px`, left: 0, right: 0 }}>
                {ranges.map((range, rangeIndex) => {
                  const startPosition = (range.start - minDate.getTime()) / (maxDate.getTime() - minDate.getTime());
                  const endPosition = (range.end - minDate.getTime()) / (maxDate.getTime() - minDate.getTime());
                  const width = Math.max((endPosition - startPosition) * 100, MIN_VISIBLE_WIDTH);
                  return (
                    <div
                      key={rangeIndex}
                      className="absolute h-full"
                      style={{
                        left: `${startPosition * 100}%`,
                        width: `${width}%`,
                        backgroundColor: color,
                      }}
                    />
                  );
                })}
              </div>
            ))}

            {/* Year marker lines */}
            {miniMapYearMarkers.map(({ year, position }) => (
              <div
                key={year}
                className="absolute top-0 bottom-0 w-px bg-gray-100 opacity-10"
                style={{ left: `${position * 100}%` }}
              ></div>
            ))}

            {/* Brush */}
            {brushStart !== null && brushEnd !== null && (
              <div
                className="absolute h-full bg-white bg-opacity-10 cursor-move"
                style={{
                  left: `${Math.min(brushStart, brushEnd) * 100}%`,
                  width: `${Math.abs(brushEnd - brushStart) * 100}%`,
                }}
                onMouseDown={handleBrushMouseDown}
              >
                {/* Left resize handle */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-2 cursor-ew-resize bg-white bg-opacity-50"
                  onMouseDown={(e) => handleResizeStart(e, 'left')}
                ></div>
                {/* Right resize handle */}
                <div
                  className="absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize bg-white bg-opacity-50"
                  onMouseDown={(e) => handleResizeStart(e, 'right')}
                ></div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scrollable timeline */}
      <div className="flex-grow overflow-y-auto">
        {/* Timeline Headers */}
        <div className="bg-background border-b border-foreground/20 py-2 flex flex-row items-center w-full sticky top-0 z-10">
          <div className="w-48 font-bold">Timeline</div>
          <div className="relative select-none w-full flex-1">
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
                  className="absolute top-0 text-center text-xs border-l border-gray-100/20 text-white"
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

        <div className="relative">
          {/* Reference lines */}
          <div className="absolute top-0 bottom-0 left-48 right-0">
            {timelineHeaders.map((year, index) => {
              const headerStartDate = new Date(year, 0, 0);
              const headerStartOffsetMs = headerStartDate.getTime() - minVisibleDate.getTime();
              const offsetPercentage = (headerStartOffsetMs / visibleTimeRangeMs) * 100;
              
              return (
                <div
                  key={year}
                  className="absolute top-0 bottom-0 w-px bg-gray-400 opacity-10"
                  style={{ left: `${offsetPercentage}%` }}
                ></div>
              );
            })}
          </div>

          {/* Grouped Events with Legend */}
          {Object.entries(groupedEvents).map(([source, sourceEvents], idx) => (
            <div key={source} className="my-6 pl-2 border-l-4 border-solid select-none" style={{ borderColor: getColorBySource(source, idx) }}>
              {/* Legend for this source */}
              <div className="flex items-center mb-2">
                <span className="font-semibold max-w-48 truncate" title={source}>{source}</span>
              </div>

              {/* Event Bars for this source */}
              {sourceEvents.map((event) => {
                const eventStart = new Date(event.start);
                const eventEnd = new Date(event.end);

                // Handle same-day events
                if (eventStart.getTime() === eventEnd.getTime()) {
                  eventEnd.setDate(eventEnd.getDate() + 1);
                }

                const eventStartMs = eventStart.getTime();
                const eventEndMs = eventEnd.getTime();

                // Check if the event is within the visible range
                if (eventEndMs <= minVisibleDate.getTime() || eventStartMs >= maxVisibleDate.getTime()) {
                  return null;
                }

                const visibleStartMs = Math.max(eventStartMs, minVisibleDate.getTime());
                const visibleEndMs = Math.min(eventEndMs, maxVisibleDate.getTime());

                const eventStartOffsetMs = visibleStartMs - minVisibleDate.getTime();
                const eventDurationMs = visibleEndMs - visibleStartMs;

                const offsetPercentage = (eventStartOffsetMs / visibleTimeRangeMs) * 100;
                const durationPercentage = (eventDurationMs / visibleTimeRangeMs) * 100;

                // Ensure a minimum width for very short events
                const minWidth = 0.5; // 0.5% of the visible range
                const adjustedDurationPercentage = Math.max(durationPercentage, minWidth);

                return (
                  <div key={event.id} className="flex items-center mt-1.5">
                    <div className="w-48 text-base flex-shrink-0 truncate " title={event.name}>{event.name}</div>
                    <div
                      className="relative h-10 w-full overflow-hidden select-none"
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseUp}
                    >
                      <div
                        className="absolute h-10 p-2 select-none rounded-[2px]"
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
    </div>
  );
};

export default GanttChart;