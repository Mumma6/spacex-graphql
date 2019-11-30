import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import LaunchItem from "./LaunchItem";

const LAUNCHES_QUERY = gql`
  {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return (
    <div>
      <h1 className="display-4 my-3">Launches</h1>
      <h4>
        <span style={{ color: "#62c462" }}>Green</span>: Successfull
      </h4>
      <h4>
        <span style={{ color: "#ee5f5b" }}>Red</span>: Failed
      </h4>
      {data.launches.map(launch => (
        <LaunchItem key={launch.flight_number} launch={launch} />
      ))}
    </div>
  );
};

export default Launches;
