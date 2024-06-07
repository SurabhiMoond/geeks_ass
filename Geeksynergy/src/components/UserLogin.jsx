import { useState } from "react";
import { MovieList } from "./MovieList";
import { Link } from "react-router-dom";

export const UserLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [useLogin, isUserLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.name === name && userData.password === password) {
      alert("Login successful");
      isUserLogin(true);
    } else {
      alert("Incorrect user-name or password..");
    }
  };

  return (
    <div className="userLogin">
      {useLogin ? (
        <MovieList />
      ) : (
        <div className="userLoginPage">
          <h4 style={{ textAlign: "center" }}>User Login</h4>
          <form onSubmit={handleSubmit}>
            <div className="inputLogin">
              <label>User Name </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type name here"
              />

              <label>Password </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type password here"
              />

              <div className="btn" style={{ marginTop: "5px" }}>
                <button
                  type="submit"
                  style={{
                    width: "90%",
                    padding: "10px",
                    border: "1px solid #49832b",
                    borderRadius: "5px",
                    color: "#49832b",
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
          <hr />
          <div style={{ textAlign: "center" }}>
            <Link
              to={"/signIn"}
              style={{ color: "#49832b", textDecoration: "none" }}
            >
              Sign up{" "}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
