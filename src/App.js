import { useRef, useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';
function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username must be 3-16 character and no special char use",
      label: "Username",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Email would be valid",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "dob",
      type: "date",
      placeholder: "Dob",
      label: "Dob",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "password must be have one upper,lower,special,numeric letter",
      label: "Password",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "password must be same",
      label: "Confirm Password",
      required: true,
      pattern: values.password
    },
  ]

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  // const [username, setUsername] = useState("");
  //const usernameRef = useRef()
  const submitHandler = (e) => {
    e.preventDefault();

    /* const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries())); */
  }

  console.log(values);
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <h1>Register</h1>
        {inputs.map((input) => (<FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}

        {/* <FormInput name="username" placeholder="Username" refer={usernameRef}  setUsername={setUsername}  />
        <FormInput name="email" placeholder="Email" />
        <FormInput name="age" placeholder="Age" />
        <FormInput name="city" placeholder="City" /> */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
