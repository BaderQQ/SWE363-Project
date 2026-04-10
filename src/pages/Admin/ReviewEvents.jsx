import { Link } from "react-router-dom";

function ReviewEvents() {
  const events = [
    { id: 1, title: "AI Workshop", organizer: "CS Club", status: "Pending" },
    { id: 2, title: "Robotics Expo", organizer: "Engineering Dept.", status: "Pending" },
  ];

  return (
    <div>
      <h2>Admin Event Review Queue</h2>

      <div className="row mt-3">
        {events.map((event) => (
          <div className="col-md-6 mb-3" key={event.id}>
            <div className="card p-3">
              <h5>{event.title}</h5>
              <p><strong>Organizer:</strong> {event.organizer}</p>
              <p><strong>Status:</strong> {event.status}</p>

              <div className="d-flex gap-2">
                <button className="btn btn-success">Approve</button>
                <button className="btn btn-danger">Reject</button>
                <Link to={`/events/${event.id}`} className="btn btn-outline-secondary">
                  Preview
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewEvents;