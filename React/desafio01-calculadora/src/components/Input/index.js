import { StyledContainerInput } from "./styles";

const Input = ({value}) => {
    return (
      <StyledContainerInput>
        <decoration />
        <input disabled value={value} />
      </StyledContainerInput>
    );
  }
  
  export default Input;
  
