"use client"

import React, { useEffect, useRef, useState } from 'react';
import MultiTimelineScrubber from '../multiTimelineScrubber';
import Sidebar from '../sideBar';
import { events, entities } from '../../../data/jfk';
import TemporalForceDirectedGraph from '../temporalGraphSize';
import Threads from '../threads';
import GraphLayout from '../graphLayout';
import { formatDateStr } from '@/lib/utils/time';
import { ZoomIn, ZoomOut, } from 'lucide-react';
import { Button } from './button';
import HorizontalTimeline from '../horizontalTimeline';


function useContainerSize(containerRef) {
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleResize = () => {
        setContainerWidth(container.offsetWidth);
        setContainerHeight(container.offsetHeight);
      };

      handleResize(); // Set initial size

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [containerRef]);

  return [containerWidth, containerHeight];
}



export default function GraphView() {
  const [currentDate, setCurrentDate] = useState("");
  const [dates, setDates] = useState([]);
  const [selectedLinkEvents, setSelectedLinkEvents] = useState(null);
  const containerRef = useRef(null);
  const [containerWidth, containerHeight] = useContainerSize(containerRef);

  useEffect(() => {
    // Extract and sort unique dates from events
    const uniqueDates = [...new Set(events.map(event => event.approxStart))].sort((a, b) => new Date(a) - new Date(b));
    setDates(uniqueDates);
    // Set the initial currentDate to the last date in the dataset
    setCurrentDate(uniqueDates[0]);
  }, []);



  return (
    <GraphLayout
      sidebarContent={
        // Assuming you have a component to display the selected link events
        <Sidebar
          events={selectedLinkEvents}
          entities={entities}
          onClose={() => setSelectedLinkEvents(null)}
        />
      }
      openSideBar={!!selectedLinkEvents}
      bottomContent={dates.length > 0 && (
        <div style={{ height: 300, width: '100%' }}>

          <HorizontalTimeline events={events} />
        </div>

        /*<MultiTimelineScrubber onCurrentTimeChanged={setCurrentDate} events={events} entities={entities} /> */
      )}
      topLeftContent={(
        <div>
          <div>
            {formatDateStr(currentDate)}
          </div>
        </div>
      )}
      topRightContent={
        <div className="flex flex-col">
          <Button variant="ghost" size="icon">
            <ZoomIn />
          </Button>
          <Button variant="ghost" size="icon">
            <ZoomOut />
          </Button>
        </div>
      }
      containerRef={containerRef}
    >
      <Threads
        events={events}
        entities={entities}
        currentDate={currentDate}
        setSelectedLinkEvents={setSelectedLinkEvents}
        containerHeight={containerHeight}
        containerWidth={containerWidth}
      />
      {
        /**      <TemporalForceDirectedGraph
              events={events}
              entities={entities}
              currentDate={currentDate}
              setSelectedLinkEvents={setSelectedLinkEvents}
              containerHeight={containerHeight}
              containerWidth={containerWidth}
            /> */
      }
    </GraphLayout>
  );
}
