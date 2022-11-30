import { StyledContainerInput } from "./styles";

const Input = ({value}) => {
    return (
      <StyledContainerInput>
        <input disabled value={value} />
      </StyledContainerInput>
    );
  }
  
  export default Input;
  
