import React from "react";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: "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",
});

const result = await octokit.request("GET /users/Eleniyancode/repos", {
  username: "Eleniyancode",
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
});

// console.log(result);

// const data = result.data;

const aboutResult = await octokit.request("GET /repos/Eleniyancode/about", {
  owner: "Eleniyancode",
  repo: "about",
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
});

const aboutData = aboutResult.data;
// console.log(aboutData)

let aboutDataValue = Object.values(aboutData);
console.log(typeof aboutDataValue);

export default function About() {
  return (
    <>
      <div>
        <table>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>url</th>
          </thead>
          <tbody>
            {aboutDataValue.forEach((d, i) => (
              <tr key={i}>
                <td>{d}</td>
                <td>{d}</td>
                <td>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
