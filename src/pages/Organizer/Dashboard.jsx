import { Link } from "react-router-dom";

function Dashboard() {
  const myEvents = [
    { id: 1, title: "AI Workshop", status: "Pending Approval" },
    { id: 2, title: "Cybersecurity Talk", status: "Approved" },
  ];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Organizer Dashboard</h2>
        <Link to="/organizer/create-event" className="btn btn-primary">
          + Create New Event
        </Link>
      </div>

      <div className="row">
        {myEvents.map((event) => (
          <div className="col-md-6 mb-3" key={event.id}>
            <div className="card p-3">
              <h5>{event.title}</h5>
              <p>Status: {event.status}</p>

              <div className="d-flex gap-2">
                <Link to={`/organizer/manage-event/${event.id}`} className="btn btn-outline-primary">
                  Manage
                </Link>
                <Link to={`/organizer/registrations/${event.id}`} className="btn btn-outline-secondary">
                  Registrations
                </Link>
                <Link to={`/organizer/check-in/${event.id}`} className="btn btn-outline-success">
                  Check-In
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;