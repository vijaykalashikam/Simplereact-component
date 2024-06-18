import React, { useEffect, useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import User from "./components/User";


const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

useEffect(() => {
    fetchUsers();
}, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((userdata) => setUsers(userdata))
      .catch((error) => {
        console.log(error);
        console.log("error");
      });
  };
  

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
};
const FetchUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
      try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const data = await response.json();
          setUsers(data);
      } catch (error) {
          console.error('Error fetching users:', error);
      }
  };

  useEffect(() => {
      fetchUsers();
  }, []);

    
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
