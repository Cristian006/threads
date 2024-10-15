import React, { useMemo } from 'react';
import { format } from 'date-fns';

const EventTimeline = ({ events, selectedRange }) => {
  const getColorBySource = (source, idx) => {
    const sourceColors = [
      '#FF7A82', '#88C6AF', '#82B2FF', '#FFBA91', '#C2D0AB', '#A7AECA',
    ];
    return sourceColors[idx % sourceColors.length] || '#909090';
  };

  // Memoize the grouping, coloring, and sorting of events
  const sortedColoredEvents = useMemo(() => {
    // Group events by source
    const groupedEvents = events.reduce((acc, event) => {
      if (!acc[event.source]) {
        acc[event.source] = [];
      }
      acc[event.source].push(event);
      return acc;
    }, {});

    // Assign colors to sources and flatten the array
    const coloredEvents = Object.entries(groupedEvents).flatMap(([source, sourceEvents], sourceIndex) => {
      const color = getColorBySource(source, sourceIndex);
      return sourceEvents.map(event => ({
        ...event,
        color,
      }));
    });

    // Sort events chronologically
    return coloredEvents.sort((a, b) => new Date(a.start) - new Date(b.start));
  }, [events]); // Only recompute when events change

  // Memoize the filtered events
  const filteredEvents = useMemo(() => {
    if (!selectedRange) return sortedColoredEvents;

    return sortedColoredEvents.filter(event => {
      const eventStart = new Date(event.start);
      const eventEnd = new Date(event.end);
      return (
        (eventStart >= selectedRange.start && eventStart <= selectedRange.end) ||
        (eventEnd >= selectedRange.start && eventEnd <= selectedRange.end) ||
        (eventStart <= selectedRange.start && eventEnd >= selectedRange.end)
      );
    });
  }, [sortedColoredEvents, selectedRange]);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Event Timeline</h2>
      <div className="relative">
        {filteredEvents.map((event, index) => (
          <div key={event.id} className="flex items-start">
            <div className="w-24 flex-shrink-0 text-sm text-gray-500 mt-4">
              {format(new Date(event.start), 'MMM d, yyyy')}
            </div>
            <div className="flex-grow relative pl-4">
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5"
                style={{ backgroundColor: event.color }}
              ></div>
              <div
                className="w-3 h-3 rounded-full absolute left-[-5px] top-4"
                style={{ backgroundColor: event.color }}
              ></div>
              <div className="p-3 rounded-lg">
                <h3 className="font-semibold">{event.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{event.source}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventTimeline;