import { useParams } from "react-router-dom";

function ManageEvent() {
  const { id } = useParams();

  return (
    <div className="col-md-8 mx-auto">
      <h2>Manage Event #{id}</h2>

      <form className="mt-3">
        <div className="mb-3">
          <label className="form-label">Event Title</label>
          <input type="text" className="form-control" defaultValue="AI Workshop" />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" rows="4" defaultValue="Updated event description"></textarea>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Date</label>
            <input type="date" className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Time</label>
            <input type="time" className="form-control" />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Location</label>
          <input type="text" className="form-control" defaultValue="Building 14 - Room 203" />
        </div>

        <div className="mb-3">
          <label className="form-label">Capacity</label>
          <input type="number" className="form-control" defaultValue="60" />
        </div>

        <button type="button" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default ManageEvent;