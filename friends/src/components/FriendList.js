import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/AxiosWithAuth";
import Axios from "axios";

function FriendList() {
  const [friends, setFriends] = useState([]);

  const [friend, setFriend] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: ""
  });
  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => setFriends(res.data));
  }, []);

  const handleChange = e => {
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };

  const addFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", friend)
      .then(res => setFriends(res.data));
  };

  return (
    <div>
      <form onSubmit={addFriend}>
        <label>
          name:
          <input
            type="text"
            name="name"
            value={friend.name}
            onChange={handleChange}
          />
        </label>
        <label>
          age:
          <input
            type="text"
            name="age"
            value={friend.age}
            onChange={handleChange}
          />
        </label>
        <label>
          email:
          <input
            type="text"
            name="email"
            value={friend.email}
            onChange={handleChange}
          />
        </label>
        <button>Add Friend!</button>
      </form>

      {friends.map(info => (
        <div key={info.id}>
          <h1>{info.name}</h1>
          <h2>{info.age}</h2>
          <h3>{info.email}</h3>
        </div>
      ))}
    </div>
  );
}

export default FriendList;
