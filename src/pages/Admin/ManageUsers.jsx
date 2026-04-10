function ManageUsers() {
  const users = [
    { id: 1, name: "Ahmed Ali", role: "Attendee", status: "Active" },
    { id: 2, name: "Sara Khalid", role: "Organizer", status: "Active" },
    { id: 3, name: "Omar Hassan", role: "Attendee", status: "Inactive" },
  ];

  return (
    <div>
      <h2>Manage Users</h2>

      <div className="card p-3 mt-3">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search users..."
          />
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>
                  <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-primary">Edit Role</button>
                    <button className="btn btn-sm btn-warning">Deactivate</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageUsers;