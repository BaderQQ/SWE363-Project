import { Outlet, Link } from "react-router-dom";

function AdminLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger px-3">
        <Link className="navbar-brand" to="/admin">
          Admin Panel
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Review Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/manage-users">
                Manage Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/applications">
                Applications
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/analytics">
                Analytics
              </Link>
            </li>
          </ul>

          <Link className="btn btn-light" to="/">
            Back to Site
          </Link>
        </div>
      </nav>

      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
}

export default AdminLayout;