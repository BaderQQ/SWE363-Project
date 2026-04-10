import { useParams, Link } from "react-router-dom";

function Booking() {
  const { id } = useParams();

  return (
    <div className="col-md-6 mx-auto">
      <h2>Book Ticket</h2>
      <p>Event ID: {id}</p>

      <form className="mt-3">
        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input type="number" className="form-control" min="1" max="1" defaultValue="1" />
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="policy" />
          <label className="form-check-label" htmlFor="policy">
            I agree to event rules and cancellation policy
          </label>
        </div>

        <Link to={`/confirmation/${id}`} className="btn btn-success">
          Confirm Booking
        </Link>
      </form>
    </div>
  );
}

export default Booking;