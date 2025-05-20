import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const PrimaryButton = styled(Button)(({ theme }) => ({
  borderRadius: 10,
  width: 100,
  textTransform: "none",
  backgroundColor: "#2F2F2F",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#1a1a1a",
  },
}));
