import React from "react";

const LaunchItem = ({
  launch: { flight_number, mission_name, launch_date_local, launch_success }
}) => {
  // Makes the date readable
  let date = launch_date_local.split("").slice(0, 10);

  let missionColor = launch_success ? "#62c462" : "#ee5f5b"

  console.log(date);
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <p>Flight number: {flight_number}</p>
          <h4 style={{color: missionColor, fontWeight: 400}}>Mission: {mission_name}</h4>
          <p>Date: {date} </p>
        </div>
        <div className="col-md-3">
          <button className="btn btn-info">Launch Details</button>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
