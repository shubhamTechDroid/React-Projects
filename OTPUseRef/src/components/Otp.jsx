import { useRef, useState } from "react";

export default function Otp() {
  const inputsRef = useRef([]);
  const [otp, setOtp] = useState(["","","",""]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputsRef.current[index - 1].focus();
    }
  };

  const submitOtp = () => {
    alert("Entered OTP: " + otp.join(""));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>OTP Input</h1>
      {otp.map((_, index) => (
        <input
          key={index}
          maxLength="1"
          ref={el => (inputsRef.current[index] = el)}
          onChange={e => handleChange(e, index)}
          onKeyDown={e => handleBackspace(e, index)}
          value={otp[index]}
          style={{
            width: "40px",
            height: "40px",
            fontSize: "20px",
            textAlign: "center",
            margin: "5px",
          }}
        />
      ))}

      <br />
      <button onClick={submitOtp}>Submit OTP</button>
    </div>
  );
}
