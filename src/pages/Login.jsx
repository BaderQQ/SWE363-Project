function Login() {
  return (
    <div className="col-md-6 mx-auto">
      <h2>Login / Sign Up</h2>

      <form className="mt-3">
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="name@univ.edu" />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" />
        </div>

        <button className="btn btn-dark w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;