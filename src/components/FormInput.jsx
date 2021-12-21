import { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, errorMessage, id, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      {/* <input
        {...inputProps}
        onChange={onChange}
        type="text"
        placeholder={props.placeholder}
        name={props.name} 
        // ref={props.refer} 
        //  onChange={(e) => props.setUsername(e.target.value)} 
      /> */}
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
