import React, { useEffect, useState } from "react";
import { docLinkStyle } from "../../pages";

interface RunnerProps {
  id: string;
  name: string;
  runner: string;
}

interface RunnerData {
  ytd_run_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
    achievement_count: number;
  };
}
export const RunnerListItem = ({ id, name, runner }: RunnerProps) => {
  const [runnerData, setRunnerData] = useState<RunnerData | undefined>(
    undefined
  );
  useEffect(() => {
    const fetchRunnerData = async () => {
      const res = await fetch(
        `https://www.strava.com/api/v3/athletes/${id}/stats`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + runner,
          },
        }
      );
      const json = await res.json();
      setRunnerData(json);
    };
    fetchRunnerData();
  }, []);

  if (!runnerData) return <li style={docLinkStyle}> getting runner data...</li>;

  return (
    <section>
      <h3>{name}</h3>
      <ul>
        <li style={docLinkStyle}>
          <b>count</b>: {runnerData.ytd_run_totals?.count}
        </li>
        <li style={docLinkStyle}>
          <b>distance</b>:{" "}
          {(Number(runnerData.ytd_run_totals?.distance) / 1000).toFixed(0)}
          km
        </li>
      </ul>
    </section>
  );
};
