import { Outlet, Link } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">CampusEvents</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/events">Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-tickets">My Tickets</Link>
            </li>
          </ul>

          <Link className="btn btn-outline-light" to="/login">
            Login
          </Link>
        </div>
      </nav>

      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;