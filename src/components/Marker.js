import { useState } from "react";
import FridgeIcon from "../images/fridge-icon.png";

const Marker = ({ onClick }) => {
  const [isActive, setIsActive] = useState(false);

 

  return (
    <div
      className={
        isActive
          ? "flex items-center justify-center marker-active"
          : "flex items-center justify-center"
      }
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      style={{
        width: "3rem",
        height: "3rem",
        borderRadius: "100%",
        cursor: "pointer",
      }}
    >
      <img
        onClick={onClick}
        src={FridgeIcon}
        style={{ width: "2rem" }}
        alt=""
      />
    </div>
  );
};
export default Marker;
