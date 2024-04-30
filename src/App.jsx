import { useState } from 'react';
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
  //  console.log(data)

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
      <div className='flex justify-center items-center h-screen flex-col'>
      <table className='shadow-2xl border-5 border-black-500 w-6/12 overflow-hidden'>
        <thead className='text-black'>
          <tr>
          <th className='py-5 px-5 bg-cyan-300'>ID</th>
          <th className='py-5 px-5 bg-cyan-300'>Name</th>
          <th className='py-5 px-5 bg-cyan-300'>url</th>
          </tr>
          
        </thead>
        <tbody className='text-cyan-900 text-center'>
          {records.map((d, i) => (
            <tr key={i} className='hover:bg-cyan-100 hover:scale-100 bg-cyan-300 cursor-pointer-duration-300'>
              <td className='px-3 py-3'>{d.id}</td>
              <td className='px-3 py-3'> <Link to={`/${d.name}`}>{d.name}</Link></td>
              <td className='px-3 py-3'>{d.url}</td>
            </tr>
            
          ) 
              )}
        </tbody>
      </table>

      <nav>

        <div className='flex justify-center'>
        <ul className='flex justify-center rounded-lg bg-white my-5'>
          <li className='mx-5'>
            <a href="#" onClick={prePage}>Prev</a>
          </li>

          {
          number.map((n, i) => (
            <li key={i} className='px-5'>
              <a href="#" onClick={() =>changeCPage (n)} >{n}</a>

            </li>
          ))
        }

<li className=''>
            <a href="#" onClick={nextPage}>Next</a>
          </li>
        </ul>
  
        </div>
        
      
      </nav>
      </div>
     
    </>
  )
}


export default App
