import React from "react";

const Home = ({ location }) => (
  <div>
    <h2>Home</h2>
    {location.state &&
      location.state.from &&
      `Redirected, you do not have access to ${location.state.from}`}
  </div>
);

export default Home;
