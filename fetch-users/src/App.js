import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch users.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <h1>Fetch Users from API</h1>
      <p>[ https://jsonplaceholder.typicode.com/users ]</p>

      {loading && <p>Loading users...</p>}
      {error && <p className="error">{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> <br />
            Email: {user.email} <br />
            City: {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
