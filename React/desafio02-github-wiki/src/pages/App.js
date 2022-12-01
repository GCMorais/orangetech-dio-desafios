import { TfiGithub } from "react-icons/tfi";
import Input from "../components/input";
import ItemRepo from "../components/ItemRepo";
import { StyledAppContainer } from "./styles";

function App() {
  return (
    <StyledAppContainer>
      <a href="#"><TfiGithub size={100}/></a>
      <Input />
      <ItemRepo />
    </StyledAppContainer>
  );
}

export default App;
