import React, { useEffect, useState } from "react";
import axios from "axios";

const EditExercise = () => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] =  useState("");

  const saveExercise = (id) => {
    const saveExerciseData = {
      username,
      description,
      duration,
      date,
    };

    axios
      .post(`http://localhost:5000/excercises/update/${id}`, saveExerciseData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const start = window.location.href.indexOf("edit/");
    if (start) {
      const id = window.location.href.slice(
        start + 5,
        window.location.href.length
      );
      if (id) {
        axios
          .get(`http://localhost:5000/excercises/${id}`)
          .then((response) => {
            let data = response.data;
            let date = data.date.slice(0, data.date.indexOf("T"));
            setUsername(data.username);
            setDescription(data.description);
            setDuration(data.duration);
            setDate(date);
            setId(data._id);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, []);

  return (
    <div>
      <h2>Update Exercises Log</h2>
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
          className="btn btn-primary"
          type="submit"
          value={"Update Exercise"}
          onClick={(e)=>{saveExercise(id)}}
        />
      </form>
    </div>
  );
};

export default EditExercise;
