function Analytics() {
  const stats = [
    { title: "Events Created", value: 24 },
    { title: "Approved Events", value: 18 },
    { title: "Total Bookings", value: 356 },
    { title: "Attendance Rate", value: "82%" },
  ];

  return (
    <div>
      <h2>Analytics</h2>

      <div className="row mt-3">
        {stats.map((stat, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div className="card p-3 text-center">
              <h5>{stat.title}</h5>
              <h3>{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-4 mt-3">
        <h5>Reports</h5>
        <p>Filter by date range, organizer, and category.</p>
        <div className="d-flex gap-2">
          <button className="btn btn-primary">Generate PDF</button>
          <button className="btn btn-success">Export CSV</button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;