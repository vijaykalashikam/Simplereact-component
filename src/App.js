import React, { useEffect, useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import User from "./components/User";


console.log("Another merge conflict")


const App = () => {
  const [users, setUsers] = useState([]);

  const clickHandler = (e) => {
    setCoder(e.target.value);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
        console.log("error");
      });
  };
  //  function addition (add) {
  //   console.log("Enter two numbers")
  //   setAdd = (e) => {
  //     e.target.value
  //   }
  //   return (a+b)
  // }

  <p>I have commented out the whole add function</p>
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

  

  const onAdd = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

    
  console.log(users);
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
