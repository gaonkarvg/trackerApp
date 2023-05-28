import React, { useEffect, useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [username, setUsername] = useState("");

  const saveUser = () => {
    const saveUser = { username };
    axios
      .post("http://localhost:5000/users/add", saveUser)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Create New User</h2>
      <form className="">
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value={"Create User"}
          className="btn btn-primary"
          onClick={saveUser}
        />
      </form>
    </div>
  );
};

export default CreateUser;
