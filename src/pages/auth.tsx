import React, { useEffect, useState } from "react";
import { pageStyles } from ".";
//https://www.strava.com/api/v3/oauth/token?client_id=78592&client_secret=9e1233176130473d2683006ebaec52b28ba46eb3&code=de4fb1e1194f6f393b1f668141f8c1647f8d3d6c&grant_type=authorization_code

const apiKey =
  "MK4KtrSxvYJrF4JjghfnKjzciEgetkg5KbHhBqXSPMy4lZwRkcqjC3cCLypYwD7a";

export default function Auth() {
  const [accessToken, setAccessToken] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    const error = url.searchParams.get("error");
    if (error) {
      console.log(error);
    }
    if (code) {
      console.log(code);
    }
    if (state) {
      console.log(state);
    }
    const storeData = async (
      runnerToken: string,
      runnerId: string,
      runnerName: string
    ) => {
      await fetch(
        "https://data.mongodb-api.com/app/data-khocl/endpoint/addRunner",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + apiKey,
          },
          body: JSON.stringify({
            runner: runnerToken,
            id: runnerId,
            name: runnerName,
          }),
        }
      );
    };
    const fetchToken = async () => {
      const res = await fetch(
        `https://www.strava.com/api/v3/oauth/token?client_id=78592&client_secret=9e1233176130473d2683006ebaec52b28ba46eb3&code=${code}&grant_type=authorization_code`,
        {
          method: "POST",
        }
      );
      const json = await res.json();
      setAccessToken(json.access_token);
      setName(json.athlete.firstname);
      setId(json.athlete.id);
      storeData(json.access_token, json.athlete.id, json.athlete.firstname);
    };

    fetchToken();
  }, []);

  return (
    <main style={pageStyles}>
      <h1>🍺Runner has been registered🍻</h1>
      <section>
        <h2>🏃‍♀️{name}🏃‍♂️</h2>
        <a href="/">go home</a>
      </section>
    </main>
  );
}
