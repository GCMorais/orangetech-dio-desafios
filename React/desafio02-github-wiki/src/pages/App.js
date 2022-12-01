import { TfiGithub } from "react-icons/tfi";
import Input from "../components/input";
import { StyledAppContainer } from "./styles";

function App() {
  return (
    <StyledAppContainer>
      <a href="#"><TfiGithub size={100}/></a>
      <Input />
    </StyledAppContainer>
  );
}

export default App;
