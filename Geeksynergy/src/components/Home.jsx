import React from "react";

export const Home = () => {
  return (
    <div className="geekHomePage">
      <div
        className="textDiv"
        style={{
          width: "40%",
          height: "40%",
          textAlign: "center",
          marginLeft: "30%",
          position: "absolute",
        }}
      >
        <h3>Wellcome to GEEKSYNERGY's HomePage 🌱</h3>
        <h4>We help your business grow by multifolds</h4>
        <p>
          We're most preferred company for{" "}
          <span style={{ color: "#49832b", fontWeight: "bold" }}>
            Software Development & Services
          </span>
          . We help enterprises and fast growing startups scale by automating
          the business processes.
        </p>
      </div>
    </div>
  );
};
