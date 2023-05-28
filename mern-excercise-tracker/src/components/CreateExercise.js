import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CreateExercise = () => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  const saveExercise = () => {
    const saveExerciseData = {
      username,
      description,
      duration,
      date,
    };

    axios
      .post("http://localhost:5000/excercises/add", saveExerciseData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Create New Exercises Log</h2>
      <form className="">
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Duration (in Minutes)</label>
          <input
            value={duration}
            type="number"
            className="form-control"
            onChange={(e) => {
              setDuration(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            value={date}
            type="date"
            className="form-control"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <input
          type="submit"
          value={"Save New Exercise"}
          onClick={saveExercise}
        />
      </form>
    </div>
  );
};

export default CreateExercise;
