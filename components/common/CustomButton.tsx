import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CusBtn = styled(Button)`
  border-radius: 50px;
  text-transform: none;
  padding: 15px 25px;
`;

export default function CustomButton(props: any) {
  return <CusBtn {...props}></CusBtn>;
}
