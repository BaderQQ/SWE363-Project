import { Link } from "react-router-dom";

const events = [
  { id: 1, title: "AI Workshop", date: "Mar 12", location: "Building 14" },
  { id: 2, title: "Cybersecurity Talk", date: "Mar 15", location: "Auditorium" },
];

function Events() {
  return (
    <div>
      <h2>Events</h2>

      <div className="row mt-3">
        {events.map((event) => (
          <div className="col-md-4 mb-3" key={event.id}>
            <div className="card p-3">
              <h5>{event.title}</h5>
              <p>{event.date}</p>
              <p>{event.location}</p>

              <Link to={`/events/${event.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;