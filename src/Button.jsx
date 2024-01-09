import { useState } from "react";

function Button({ size, backgroundColor, disabled }) {
  const [isHovered, setIsHovered] = useState(false);

  let buttonStyle = {
    backgroundColor: isHovered ? "lightblue" : backgroundColor,
    width: size * 2,
    height: size,
    marginRight: "10px",
    marginTop: "40px",
    disabled: disabled,
    color: "white",
    borderRadius: "50px",
    fontSize: size / 3,
  };

  if (disabled && isHovered) {
    buttonStyle = {
      backgroundColor: backgroundColor,
      width: size * 2,
      height: size,
      marginRight: "10px",
      marginTop: "40px",
      disabled: disabled,
      color: "white",
      borderRadius: "50px",
      fontSize: size / 3,
    };
  }

  return (
    <div>
      <button
        style={buttonStyle}
        disabled={disabled}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        Knapp
      </button>
    </div>
  );
}

export default Button;
