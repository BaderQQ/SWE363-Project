import { useParams, Link } from "react-router-dom";

function Confirmation() {
  const { id } = useParams();

  return (
    <div className="text-center">
      <h2>Booking Confirmed</h2>
      <p>Your ticket for event #{id} has been reserved successfully.</p>

      <div className="card mx-auto p-4 mt-4" style={{ maxWidth: "400px" }}>
        <h5>E-Ticket</h5>
        <p>Ticket ID: EVT-2026-000{id}</p>
        <p>QR Code Placeholder</p>
      </div>

      <div className="mt-3">
        <Link to="/my-tickets" className="btn btn-primary me-2">
          View My Tickets
        </Link>
        <Link to="/events" className="btn btn-outline-secondary">
          Back to Events
        </Link>
      </div>
    </div>
  );
}

export default Confirmation;