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


const data = result.data;

// console.log(data);



const listrepoData = data[11];
console.log(listrepoData)


export default function Listrepo() {
  return (
    <>
      <div className='flex justify-center items-center h-screen flex-col'>
      <table className='shadow-2xl border-5 border-black-500 w-6/12 overflow-hidden'>
        <thead className='text-black'>
            <th>ID</th>
            <th>Name</th>
            <th>url</th>
            <th>full name</th>
            <th>Date Created</th>
          </thead>
          <tbody>
            <tr>
              <td>{listrepoData.id}</td>
              <td>{listrepoData.name}</td>
              <td>{listrepoData.url}</td>
              <td>{listrepoData.full_name}</td>
              <td>{listrepoData.created_at}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
