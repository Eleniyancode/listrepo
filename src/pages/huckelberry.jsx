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



const huckelberryData = data[10];
console.log(huckelberryData)



export default function Huckelberry() {
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
              <td>{huckelberryData.id}</td>
              <td>{huckelberryData.name}</td>
              <td>{huckelberryData.url}</td>
              <td>{huckelberryData.full_name}</td>
              <td>{huckelberryData.created_at}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
