import { useReducer } from "react";

const initialValue = {
  studentName: "Sameer Ali",
  Grade: "",  // Initially empty grade
};

const reducer = (state, action) => {
  const grade = action.payload; // Get the grade from the action payload
  switch (true) {  // Use true here to evaluate conditions as a series of boolean checks
    case grade >= 90:
      return {
        ...state,
        Grade: "A+",
      };
    case grade >= 80 && grade < 90:
      return {
        ...state,
        Grade: "A",
      };
    case grade >= 70 && grade < 80:
      return {
        ...state,
        Grade: "B",
      };
    case grade >= 60 && grade < 70:
      return {
        ...state,
        Grade: "C",
      };
    case grade >= 50 && grade < 60:
      return {
        ...state,
        Grade: "D",
      };
    default:
      return state; // Default case should return the state directly
  }
};

const Card = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleGradeChange = () => {
    const grade = 85; // For example, you can set a grade here
    dispatch({ type: "SET_GRADE", payload: grade });
  };

  return (
    <div>
      <h1>{state.studentName}</h1>
      <p>Grade: {state.Grade}</p>
      <button onClick={handleGradeChange}>Set Grade</button>
    </div>
  );
};

export default Card;
