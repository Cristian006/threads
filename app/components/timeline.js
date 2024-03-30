
function TimelineScrubber({ dates, onDateChange }) {
  const handleChange = (event) => {
    onDateChange(dates[event.target.value]);
  };

  return (
    <div className="flex p-8">
      <input className="w-72" type="range" min="0" max={dates.length - 1} defaultValue="0" onChange={handleChange} />
    </div>
  );
}
export default TimelineScrubber;