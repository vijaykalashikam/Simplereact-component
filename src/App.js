import React, { useEffect, useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import User from "./components/User";


console.log("Another merge conflict")

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const onAdd = (newUser) => {
    setUsers([...users, newUser]);
  };

  const onDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="App">
      <h3>React Crud Using Jsonplaceholder</h3>
      <br />
      <AddUser onAdd={onAdd} />
      <div>
        {users.map((user) => (
          <User
            id={user.id}
            key={user.id}
            name={user.name}
            email={user.email}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
