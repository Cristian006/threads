"use client";

import { useState } from 'react';
import GanttChart from '@/components/gantt';
import { covidEvents, jfkEvents } from '@/data/moq';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { ModeToggle } from '@/components/theme/toggle';
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import EventTimeline from '@/components/timeline';
import Graph from '@/components/graph';

export default function Home() {
  const [selectedEvents, setSelectedEvents] = useState(covidEvents);
  const [eventLabel, setEventLabel] = useState("COVID Events");
  const [selectedRange, setSelectedRange] = useState(null);

  const handleEventChange = (eventType) => {
    if (eventType === 'covid') {
      setSelectedEvents(covidEvents);
      setEventLabel("COVID Events");
    } else {
      setSelectedEvents(jfkEvents);
      setEventLabel("JFK Events");
    }
  };

  const handleRangeChange = (range) => {
    setSelectedRange(range);
  };

  return (
    <main>
      <div className="h-screen w-screen overflow-hidden">
        <PanelGroup direction="vertical">
          <Panel minSize={20}>
            <PanelGroup direction="horizontal">
              <Panel minSize={20} defaultSize={70}>
                <div className="h-full flex flex-col relative">
                  <div className="flex-1">
                    <div className="h-full w-full">
                      <Graph events={selectedEvents} selectedRange={selectedRange} />
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 right-0 p-2 flex justify-between">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="justify-start">
                          {eventLabel}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuItem onSelect={() => handleEventChange('covid')}>
                          COVID Events
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => handleEventChange('jfk')}>
                          JFK Events
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <ModeToggle />
                  </div>
                </div>
              </Panel>
              <PanelResizeHandle className="w-0.5 bg-gray-100/20 hover:bg-gray-300/50 transition-colors" />
              <Panel minSize={20} maxSize={30} defaultSize={30}>
                <div className="h-full overflow-y-auto">
                  <EventTimeline events={selectedEvents} selectedRange={selectedRange} />
                </div>
              </Panel>
            </PanelGroup>
          </Panel>
          <PanelResizeHandle className="h-0.5 bg-gray-100/20 hover:bg-gray-300/50 transition-colors" />
          <Panel minSize={24}>
            <div className="h-full flex flex-col">
              <GanttChart events={selectedEvents} onRangeChange={handleRangeChange} />
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </main>
  );
}
