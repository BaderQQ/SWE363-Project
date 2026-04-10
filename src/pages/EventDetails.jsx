import { useParams, Link } from "react-router-dom";

function EventDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Event Details #{id}</h2>

      <p>Date: Mar 12</p>
      <p>Location: Building 14</p>
      <p>Seats: 45 / 60</p>

      <Link to={`/booking/${id}`} className="btn btn-success">
        Book Ticket
      </Link>
    </div>
  );
}

export default EventDetails;