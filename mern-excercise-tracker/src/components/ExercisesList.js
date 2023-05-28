import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

const ExercisesList = () => {
  const [exercisesList, setExercisesList] = useState([]);
//   const navigate = () => useNavigate();

  const editExercise = (id) => {
    window.location.href = `/edit/${id}`
  };

  const deleteExercise = (event, id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/excercises/` + id)
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/excercises/")
      .then((response) => {
        console.log(response.data);
        setExercisesList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2>Logged Exercises</h2>
      <table className="table">
        <thead>
          <td>Username</td>
          <td>Description</td>
          <td>Duration</td>
          <td>Date</td>
          <td>Action</td>
        </thead>
        <tbody>
          {exercisesList.map((d) => {
            return (
              <tr>
                <td>{d.username}</td>
                <td>{d.description}</td>
                <td>{d.duration}</td>
                <td>{d.date}</td>
                <td>
                  <button className="btn btn-primary" onClick={(e) => editExercise(d._id)}>
                    edit
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={(event) => {
                      deleteExercise(event, d._id);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ExercisesList;
