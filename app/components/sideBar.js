import { formatDateStr } from "@/lib/utils/time";
import { X } from 'lucide-react';

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

function Sidebar({ events, entities, onClose }) {
  // Helper function to find artist information by ID
  const getArtistInfo = (entityId) => {
    return entities.find(entity => entity.id.toLowerCase() === entityId.toLowerCase() || entityId.toLowerCase() === entity.name.toLowerCase());
  }

  // Function to render the artists' images for the first event
  const renderFirstEventArtistsImages = () => {
    return events && events[0].parties.map(entityId => {
      const entity = getArtistInfo(entityId);
      return entity ? (
        <img key={`image-${entity.id}`} src={entity.image} alt={entity.name} className="w-16 h-16 rounded-full inline-block m-2 border-white border-2 object-cover" />
      ) : null;
    });
  };

  return (
    <div style={{ width: '30rem' }} className="h-full overflow-auto border-l border-l-black bg-card text-card-foreground shadow dark:bg-black-900">
      <div>
        <button onClick={onClose} className="mb-4 px-4 py-2 text-sm font-semibold rounded hover:bg-red-600 focus:outline-none">
          <X />
        </button>
        <div className="text-center mb-4">
          {events && events.length > 0 && renderFirstEventArtistsImages()}
        </div>
        <h1 className="text-center mb-4">{events && events.length > 0 ? events[0].parties.filter(x => !!getArtistInfo(x.toLowerCase())).map(entityId => getArtistInfo(entityId.toLowerCase()).name).join(' <> ') : ""}</h1>
        <ul className="pl-8">
          {events && events.sort((a, b) => new Date(a.approxStart) - new Date(b.approxStart)).map((event, index) => (
            <div key={index} className="relative pb-8">
              <div className="absolute top-1 left-0 -ml-1 w-3 h-3 bg-card dark:bg-black-900 rounded-full border-2 border-primary"></div>
              <div className="pl-8 pr-4">
                <sup className="text-xs">{event.date}</sup>
                <sup className="text-xs">{ }</sup>
                {event.title && <h2 className="text-lg font-bold">{event.title}</h2>}
                {event.description && <p className="text-sm my-2">{event.description}</p>}
                <ul className="mt-2">
                  {event.parties.map((entityId) => {
                    const entityInfo = getArtistInfo(entityId);
                    if (!entityInfo) return null;
                    const age = entityInfo && calculateAge(entityInfo.dob, event.date);
                    return (
                      <li key={entityInfo.id} className="text-sm">
                        {entityInfo.name} - {age && age > 18 ? age : <span style={{ background: "#ff474c" }}><strong>{age}</strong> yo</span>}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {index < events.length - 1 && (
                <div className="absolute top-8 left-0 bottom-3 w-0.5 bg-primary border-l-2 border-red-600"></div>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;