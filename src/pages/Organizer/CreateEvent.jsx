function CreateEvent() {
  return (
    <div className="col-md-8 mx-auto">
      <h2>Create Event</h2>

      <form className="mt-3">
        <div className="mb-3">
          <label className="form-label">Event Title</label>
          <input type="text" className="form-control" placeholder="Enter event title" />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <select className="form-select">
            <option>Workshop</option>
            <option>Talk</option>
            <option>Competition</option>
            <option>Exhibition</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" rows="4" placeholder="Enter event description"></textarea>
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
          <input type="text" className="form-control" placeholder="Building / Room or Online" />
        </div>

        <div className="mb-3">
          <label className="form-label">Capacity</label>
          <input type="number" className="form-control" placeholder="Enter capacity" />
        </div>

        <div className="d-flex gap-2">
          <button type="button" className="btn btn-secondary">Save Draft</button>
          <button type="button" className="btn btn-primary">Submit for Approval</button>
        </div>
      </form>
    </div>
  );
}

export default CreateEvent;