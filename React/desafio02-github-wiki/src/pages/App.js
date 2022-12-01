import { useState } from "react";
import { TfiGithub } from "react-icons/tfi";
import Input from "../components/input";
import ItemRepo from "../components/ItemRepo";
import { StyledAppContainer } from "./styles";
import Button from '../components/Button';
import { api } from '../services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }
    }
  }

  return (
    <StyledAppContainer>
      <a href="#"><TfiGithub size={100}/></a>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo repo={repo}/>)}
    </StyledAppContainer>
  );
}

export default App;
