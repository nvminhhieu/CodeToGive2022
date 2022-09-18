import CustomTextField from "../../components/common/CustomTextField";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";

const Test = () => {
  const { control, handleSubmit } = useForm();
  return (
    <Form>
      <CustomTextField
        control={control}
        name="email"
        label="E-mail address"
        variant="outlined"
        sx={{ marginTop: "15px" }}
      ></CustomTextField>
      <CustomTextField
        control={control}
        name="password"
        label="Password"
        type="password"
        variant="outlined"
      ></CustomTextField>
    </Form>
  );
};

export default Test;

const Form = styled("form")`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (min-width: 1300px) {
    width: 30%;
  }
`;
