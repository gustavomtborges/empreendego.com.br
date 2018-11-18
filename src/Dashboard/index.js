import React from "react";

const DashboardPage = ({ match }) => (
  <div>
    <h1>Dashboard</h1>
    <h1>{match.params.district}</h1>
    <h1>{match.params.city}</h1>
    <h1>{match.params.sector}</h1>
  </div>
);

export default DashboardPage;
