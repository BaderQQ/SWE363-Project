function Applications() {
  const applications = [
    {
      id: 1,
      organization: "Computer Science Club",
      applicant: "Ahmed Ali",
      status: "Pending",
    },
    {
      id: 2,
      organization: "IEEE Student Branch",
      applicant: "Sara Khalid",
      status: "Pending",
    },
  ];

  return (
    <div>
      <h2>Organizer Applications</h2>

      <div className="row mt-3">
        {applications.map((app) => (
          <div className="col-md-6 mb-3" key={app.id}>
            <div className="card p-3">
              <h5>{app.organization}</h5>
              <p><strong>Applicant:</strong> {app.applicant}</p>
              <p><strong>Status:</strong> {app.status}</p>

              <div className="d-flex gap-2">
                <button className="btn btn-success">Approve</button>
                <button className="btn btn-danger">Reject</button>
                <button className="btn btn-outline-secondary">View Document</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Applications;