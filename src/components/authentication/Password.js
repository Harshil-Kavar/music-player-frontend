// import React, { useState } from "react";

// const Password = () => {
//   const [passwordType, setPasswordType] = useState("password");
//   const [passwordInput, setPasswordInput] = useState("");

//   const handlePasswordChange = (evnt) => {
//     setPasswordInput(evnt.target.value);
//     console.log(evnt.target.value)
//   };
//   const togglePassword = () => {
//     if (passwordType === "password") {
//       setPasswordType("text");
//       return;
//     }
//     setPasswordType("password");
//   };
//   return (
//     <>
//       <input
//         type={passwordType}
//         onChange={handlePasswordChange}
//         value={passwordInput}
//         name="password"
//         class="form-control"
//         placeholder="Password"
//       />

//       <button className="btn btn-outline-primary" onClick={togglePassword}>
//         {passwordType === "password" ? (
//           <i className="bi bi-eye-slash"></i>
//         ) : (
//           <i className="bi bi-eye"></i>
//         )}
//       </button>
//     </>
//   );
// };

// export default Password;

//old Form


// const [userData, setuserData] = useState(false);
// const [isLogin, setisLogin] = useState(false);
// const [userDataVal, setuserDataVal] = useState({
//   username: "",
//   password: "",
// });
// const [userEmail, setuserEmail] = useState("harshilkavar@gmail.com");
// const [userPassword, setuserPassword] = useState("harshil2531");
// const [logIn, setlogIn] = useState(false);
// const [passIconCls, setpassIconCls] = useState("bi-eye-slash");
// const [passwordType, setPasswordType] = useState("password");

 // password show and hide
//  const togglePassword = () => {
//   if (passwordType === "password") {
//     setpassIconCls("bi-eye");
//     setPasswordType("text");
//     return;
//   }
//   setPasswordType("password");
//   setpassIconCls("bi-eye-slash");
// };

// //log in data handle
// const onInputChange = (e) => {
//   setuserDataVal({ [e.target.name]: e.target.value });
//   console.log(userDataVal.username)
//   console.log(userDataVal.password)
// };

// const logInBtn = () => {
//   // if (userDataVal.username===userEmail && userDataVal.password===userPassword)
//   //  {
//   // }
//   setisLogin(true);
//   setuserData(true)
//   // console.log(isLogin)
// };

// {!userData && (
//   <div className="login-box">
//     <input
//       type="text"
//       name="username"
//       id="username"
//       placeholder="UserName"
//       autoComplete="off"
//       onChange={onInputChange}
//       value={userDataVal.username}
//     />
//     <div>
//       <input
//         type={passwordType}
//         name="password"
//         id="password"
//         placeholder="Password"
//         autoComplete="off"
//         onChange={onInputChange}
//         value={userDataVal.password}
//       />
//       <span className="password-icon" onClick={togglePassword}>
//         <i className={`bi ${passIconCls}`} id="togglePassword"></i>
//       </span>
//     </div>
//     <button onClick={() => logInBtn()}>Log In</button>
//   </div>
// )}

// {isLogin && (

// )}
