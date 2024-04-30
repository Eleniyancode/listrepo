import { useState } from 'react';
import './App.css'
import { Octokit } from 'octokit';
import { Link } from 'react-router-dom';

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
  
  const data = result.data;
  // console.log(data)

function  App() {
   console.log(data)

   const [currentPage, setCurrentPage] = useState(1)
   const recordsPerPage = 3;
   const lastIndex = currentPage * recordsPerPage;
   const firstIndex = lastIndex - recordsPerPage;
   const records = data.slice(firstIndex, lastIndex);
   const npage = Math.ceil(data.length / recordsPerPage);
   const number = [...Array(npage + 1).keys()].slice(1)

   function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
    }
    
    function prePage() {
      if (currentPage !== 1) {
        setCurrentPage(currentPage - 1)
      } 
    }
    
    function changeCPage(id) {
      setCurrentPage(id)
    }
   

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
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td> <Link to={`/${d.name}`}>{d.name}</Link></td>
              <td>{d.url}</td>
            </tr>
            
          ) 
              )}
        </tbody>
      </table>

      <nav>
        <ul>
          <li>
            <a href="#" onClick={prePage}>Prev</a>
          </li>

          {
          number.map((n, i) => (
            <li key={i}>
              <a href="#" onClick={() =>changeCPage (n)} >{n}</a>

            </li>
          ))
        }

<li>
            <a href="#" onClick={nextPage}>Next</a>
          </li>
        </ul>

      
      </nav>
      </div>
     
    </>
  )
}


export default App
