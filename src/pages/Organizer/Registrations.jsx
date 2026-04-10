import { useParams } from "react-router-dom";

function Registrations() {
  const { id } = useParams();

  const attendees = [
    { ticketId: "TCK-001", name: "Ahmed Ali", status: "Checked-in" },
    { ticketId: "TCK-002", name: "Sara Khalid", status: "Registered" },
    { ticketId: "TCK-003", name: "Fahad Salem", status: "Registered" },
  ];

  return (
    <div>
      <h2>Registrations for Event #{id}</h2>

      <div className="card p-3 mt-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Search attendee..."
          />
          <button className="btn btn-success">Export CSV</button>
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendees.map((attendee) => (
              <tr key={attendee.ticketId}>
                <td>{attendee.ticketId}</td>
                <td>{attendee.name}</td>
                <td>{attendee.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Registrations;