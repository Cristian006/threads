import React from 'react';
import { cn } from "@/lib/utils/cn";


const TimelineContent = ({ children }) => (
  <div className={cn("ml-4")}>{children}</div>
);

TimelineContent.displayName = "TimelineContent";

const TimelineDot = () => <div className={cn("h-3 w-3 bg-gray-700 rounded-full")}></div>;
TimelineDot.displayName = "TimelineDot";


const TimelineItem = ({ children, className }) => (
  <div className={cn("flex items-center", className)}>
    <TimelineDot />
    <TimelineContent>{children}</TimelineContent>
  </div>
);
TimelineItem.displayName = "TimelineItem";

const Timeline = ({ children }) => {
  const timelineItems = React.Children.toArray(children);

  return (
    <div className={cn("flex flex-col items-start")}>
      {timelineItems.map((child, index) => (
        <React.Fragment key={index}>
          {index > 0 && <div className={cn("h-16 w-[3px] bg-gray-400 self-stretch ml-[4px]")}></div>}
          {child}
        </React.Fragment>
      ))}
    </div>
  );
};
Timeline.displayName = "Timeline";

export { Timeline, TimelineItem };