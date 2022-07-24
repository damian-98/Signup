import React from "react";
import { useNavigate } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";

function Home() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className="col-md-12 text-center header-landing">
      <div className="header-inner dark-overlay">
        <h1 className="display-3 mb-4">Welcome!</h1>{" "}
        <button onClick={handleClick} className="btnSubmit btn-primary">
          <IoMdArrowRoundBack />
          Back
        </button>
      </div>
    </div>
  );
}

export default Home;
