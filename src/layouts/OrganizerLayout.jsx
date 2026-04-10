import { Outlet, Link } from "react-router-dom";

function OrganizerLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
        <Link className="navbar-brand" to="/organizer">
          Organizer Panel
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/organizer">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/organizer/create-event">
                Create Event
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

export default OrganizerLayout;