import { useEffect } from 'react';
import { searchGithub } from '../api/API';
import  Candidate  from '../components/Candidate';

const CandidateSearch = () => {

  useEffect(() => {
    const fetchdata = async () => {
      const data = await searchGithub();
      console.log("test1")
      console.log(data);

    }
    fetchdata();
  })
  const testUser = "John";
  return (
    <div>
  <h1>Candidate Search</h1>
  <Candidate user={testUser}/>
  </div>
  )

};

export default CandidateSearch;
