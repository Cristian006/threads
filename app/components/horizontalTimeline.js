import React, { useEffect, useMemo, useState } from 'react';
import { Timeline } from '@xzdarcy/react-timeline-editor';


const transformEvents = (events) => {
  const groupedEvents = {};

  // Find the minimum start date and maximum end date
  const startDates = events.map((event) => new Date(event.approxStart).getTime());
  const endDates = events.map((event) => new Date(event.approxEnd).getTime());
  const minStartDate = Math.min(...startDates);
  const maxEndDate = Math.max(...endDates);

  // Calculate the date difference in milliseconds
  const dateDiff = maxEndDate - minStartDate;

  // Determine the zoom level based on the date difference
  let zoom;
  if (dateDiff < 30 * 24 * 60 * 60 * 1000) { // Less than 30 days
    zoom = 'day';
  } else if (dateDiff < 2 * 365 * 24 * 60 * 60 * 1000) { // Less than 2 years
    zoom = 'month';
  } else {
    zoom = 'year';
  }

  // Calculate the tick duration based on the zoom level
  let tickDuration;
  switch (zoom) {
    case 'month':
      tickDuration = 30.436875 * 24 * 60 * 60 * 1000; // Average number of days in a month
      break;
    case 'year':
      tickDuration = 365.25 * 24 * 60 * 60 * 1000; // Average number of days in a year
      break;
    case 'day':
    default:
      tickDuration = 24 * 60 * 60 * 1000; // 1 day in milliseconds
  }

  events.forEach((event) => {
    const { source, title, approxStart, approxEnd } = event;
    const start = Math.floor((new Date(approxStart).getTime() - minStartDate) / tickDuration);
    const end = Math.ceil((new Date(approxEnd).getTime() - minStartDate) / tickDuration);

    if (!groupedEvents[source]) {
      groupedEvents[source] = {
        id: source,
        actions: [],
      };
    }

    groupedEvents[source].actions.push({
      id: title,
      start,
      end,
      effectId: 'default',
    });
  });

  return [Object.values(groupedEvents), zoom, tickDuration]
};

const CustomScale = (scale, zoom, tickDuration) => {
  const date = new Date(scale * tickDuration);

  let formattedScale;

  switch (zoom) {
    case 'month':
      formattedScale = date.toLocaleString('default', { month: 'long', year: 'numeric' });
      break;
    case 'year':
      formattedScale = date.getFullYear();
      break;
    case 'day':
    default:
      formattedScale = date.toLocaleDateString();
  }

  return <div>{formattedScale}</div>;
};

const EventTimeline = ({ events }) => {
  const [data, setData] = useState([]);
  const [tickDuration, setDuration] = useState(0);
  const [zoom, setZoom] = useState('');
  useEffect(() => {
    const [transformedEvents, zoom, tickDuration] = transformEvents(events);
    setData(transformedEvents);
    setDuration(tickDuration);
    setZoom(zoom)
  }, [events, setData]);



  return (
    <Timeline
      style={{ width: '100%' }}
      onChange={setData}
      editorData={data}
      hideCursor={false}
      autoScroll={true}
      disableDrag={true}
      getActionRender={(action) => {
        return <div className="prompt text-inherit" style={{ padding: 6 }}>{action.id}</div>
      }}
      scale={1}
      scaleSplitCount={10}
      getScaleRender={(scale) => CustomScale(scale, zoom, tickDuration)}
    />
  );
};

export default EventTimeline;