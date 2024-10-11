"use client";

import GanttChart from '@/app/components/gantt';
import { covidEvents, empireEvents } from '@/data/moq';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-screen overflow-hidden">
        <PanelGroup direction="vertical">
          <Panel minSize={20}>
            <PanelGroup direction="horizontal">
              <Panel minSize={20}>
                <div className="h-full">
                  {/* Content for the top-left panel */}
                  Top Left Panel
                </div>
              </Panel>
              <PanelResizeHandle className="w-0.5 bg-gray-100/20 hover:bg-gray-300/50 transition-colors" />
              <Panel minSize={20}>
                <div className="h-full">
                  {/* Content for the top-right panel */}
                  Top Right Panel
                </div>
              </Panel>
            </PanelGroup>
          </Panel>
          <PanelResizeHandle className="h-0.5 bg-gray-100/20 hover:bg-gray-300/50 transition-colors" />
          <Panel minSize={20}>
            <div className="h-full overflow-hidden">
              <GanttChart events={covidEvents} />
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </main>
  );
}
