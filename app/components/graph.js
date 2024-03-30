"use client"

import React, { useEffect, useRef, useState } from 'react';
import TimelineScrubber from './timeline';
import Sidebar from './sideBar';
import { events, artists } from '../../data/jayz';
import TemporalForceDirectedGraph from './temporalGraphSize';
import GraphLayout from './graphLayout';
import { formatDateStr } from '@/utils/time';

export default function GraphView() {
  const [currentDate, setCurrentDate] = useState("");
  const [dates, setDates] = useState([]);
  const [selectedLinkEvents, setSelectedLinkEvents] = useState(null);

  useEffect(() => {
    // Extract and sort unique dates from events
    const uniqueDates = [...new Set(events.map(event => event.date))].sort((a, b) => new Date(a) - new Date(b));
    setDates(uniqueDates);
    // Set the initial currentDate to the last date in the dataset
    setCurrentDate(uniqueDates[0]);
  }, []);

  return (
    <GraphLayout
      sidebarContent={
        selectedLinkEvents && (
          // Assuming you have a component to display the selected link events
          <Sidebar
            events={selectedLinkEvents}
            artists={artists}
            onClose={() => setSelectedLinkEvents(null)}
          />
        )
      }
      bottomContent={dates.length > 0 && (
        <TimelineScrubber dates={dates} onDateChange={setCurrentDate} />
      )}
      topLeftContent={(
        <div>
          <div>
            {formatDateStr(currentDate)}
          </div>

        </div>
      )}
    >
      <TemporalForceDirectedGraph events={events} currentDate={currentDate} setSelectedLinkEvents={setSelectedLinkEvents} />
    </GraphLayout>
  );
}
