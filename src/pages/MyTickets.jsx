function MyTickets() {
  const tickets = [
    {
      id: "EVT-2026-0001",
      event: "AI Workshop",
      date: "Mar 12, 2:00 PM",
      location: "Building 14 - Room 203",
      status: "Upcoming",
    },
    {
      id: "EVT-2026-0002",
      event: "Cybersecurity Talk",
      date: "Mar 15, 11:00 AM",
      location: "Main Auditorium",
      status: "Upcoming",
    },
  ];

  return (
    <div>
      <h2>My Tickets</h2>

      <div className="row mt-3">
        {tickets.map((ticket) => (
          <div className="col-md-6 mb-3" key={ticket.id}>
            <div className="card p-3">
              <h5>{ticket.event}</h5>
              <p><strong>Ticket ID:</strong> {ticket.id}</p>
              <p><strong>Date:</strong> {ticket.date}</p>
              <p><strong>Location:</strong> {ticket.location}</p>
              <p><strong>Status:</strong> {ticket.status}</p>

              <div className="d-flex gap-2">
                <button className="btn btn-outline-primary">View QR</button>
                <button className="btn btn-outline-danger">Cancel</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyTickets;