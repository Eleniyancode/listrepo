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


const gitRepoData = data[8];
console.log(gitRepoData)


export default function GitRepo() {
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
              <td>{gitRepoData.id}</td>
              <td>{gitRepoData.name}</td>
              <td>{gitRepoData.url}</td>
              <td>{gitRepoData.full_name}</td>
              <td>{gitRepoData.created_at}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
