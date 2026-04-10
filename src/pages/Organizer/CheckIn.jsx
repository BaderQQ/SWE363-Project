import { useParams } from "react-router-dom";

function CheckIn() {
  const { id } = useParams();

  return (
    <div className="col-md-7 mx-auto">
      <h2>Check-In for Event #{id}</h2>

      <div className="card p-4 mt-3">
        <div className="mb-3">
          <label className="form-label">Ticket ID or University ID</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter ticket ID or university ID"
          />
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-success">Validate Ticket</button>
          <button className="btn btn-outline-primary">Scan QR</button>
        </div>

        <div className="alert alert-info mt-3 mb-0">
          Result will appear here after validation.
        </div>
      </div>
    </div>
  );
}

export default CheckIn;