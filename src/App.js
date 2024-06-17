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
  const FetchComments = () => {
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const data = await response.json();
            setComments(data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div>
            {comments.map(comment => (
                <div key={comment.id}>
                    <h3>{comment.name}</h3>
                    <p>{comment.body}</p>
                    <p><strong>Email:</strong> {comment.email}</p>
                </div>
            ))}
        </div>
    );
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
