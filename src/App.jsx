// import { useReducer } from "react";

// // Initial state
// const initialState = {
//   grade: "", // Initially empty grade
// };

// // Reducer function to set the grade based on input
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SET_GRADE":
//       const grade = action.payload;
//       if (grade >= 90) return { ...state, grade: "A+" };
//       if (grade >= 80) return { ...state, grade: "A" };
//       if (grade >= 70) return { ...state, grade: "B" };
//       if (grade >= 60) return { ...state, grade: "C" };
//       if (grade >= 50) return { ...state, grade: "D" };
//       return { ...state, grade: "F" }; // F for below 50
//     default:
//       return state;
//   }
// };

// // Component to display and update grade
// const Card = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const handleGradeChange = () => {
//     const gradeInput = parseInt(prompt("Enter your grade (0-100):"), 10);
//     dispatch({ type: "SET_GRADE", payload: gradeInput });
//   };

//   return (
//     <div>
//       <h1>Sameer Ali</h1>
//       <p>Grade: {state.grade}</p>
//       <button onClick={handleGradeChange}>Set Grade</button>
//     </div>
//   );
// };

// export default Card;


import { useCallback } from "react";
import UseCallBackComp from "./componet/Callback";
// import { Alert } from "bootstrap";
 function App(){
// const[loggin,setloggin]=useState(false)
// const[massage,setmassage]=useState(null)

// const loginForm=useCallback((email,password)=>{
//   if(email==="example@gmail.com" && password===123456 ){
//     setloggin(true)
//     setmassage("loggin in successfully")
//   }else{
//     setmassage("loggin in fail")
// }})
  return(
    <UseCallBackComp/>
  )
 }
export default App