import { formatDateStr } from "@/utils/time";
// Utility function to calculate age at the time of the event
const calculateAge = (dob, eventDate) => {
  const birthDate = new Date(dob);
  const event = new Date(eventDate);
  let age = event.getFullYear() - birthDate.getFullYear();
  const m = event.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && event.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

function Sidebar({ events, artists, onClose }) {
  // Helper function to find artist information by ID
  const getArtistInfo = (artistId) => artists.find(artist => artist.id === artistId);

  // Function to render the artists' images for the first event
  const renderFirstEventArtistsImages = () => {
    return events && events[0].artists.map(artistId => {
      const artist = getArtistInfo(artistId);
      return artist ? (
        <img key={artist.id} src={artist.img} alt={artist.artist} className="w-16 h-16 rounded-full inline-block m-2 border-white border-2 object-cover" />
      ) : null;
    });
  };

  return (
    <div className="fixed top-0 right-0 w-96 h-full overflow-auto rounded-xl border bg-card text-card-foreground shadow dark:bg-black-900">
      <div>
        <button onClick={onClose} className="mb-4 px-4 py-2 text-sm font-semibold rounded hover:bg-red-600 focus:outline-none">
          X
        </button>
        <div className="text-center mb-4">
          {events.length > 0 && renderFirstEventArtistsImages()}
        </div>
        <h1 className="text-center mb-4">{events.length > 0 ? events[0].artists.map(artistId => getArtistInfo(artistId).artist).join(' <> ') : ""}</h1>
        <ul className="p-4">
          {events.map((event, index) => (
            <li key={index} className="mb-4 p-2 rounded shadow">
              <sup className="text-xs">{formatDateStr(event.date)}</sup>
              {event.title && (
                <h2 className="text-lg font-bold">
                  {event.title}
                </h2>
              )}
              {/* Include event description */}
              {event.description && (
                <p className="text-sm my-2">
                  {event.description}
                </p>
              )}
              <ul className="mt-2">
                {event.artists.map(artistId => {
                  const artistInfo = getArtistInfo(artistId);
                  const age = calculateAge(artistInfo.dob, event.date)
                  return artistInfo ? (
                    <li key={artistInfo.id} className="text-sm">
                      {artistInfo.artist} - {age > 18 ? age : <span style={{ background: "#ff474c" }}><strong>{age}</strong> yo</span>}
                    </li>
                  ) : null;
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;