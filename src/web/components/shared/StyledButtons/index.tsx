import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const PrimaryButton = styled(Button)(({ theme }) => ({
  borderRadius: 10,
  padding: "0.4rem 1.4rem 0.4rem 1.4rem",
  textTransform: "none",
  backgroundColor: "#2F2F2F",
  color: "#FFFFFF",
}));

export const SecondaryButton = styled(Button)(({ theme }) => ({
  borderRadius: 10,
  padding: "0.4rem 1.4rem 0.4rem 1.4rem",
  textTransform: "none",
  borderColor: "#cfcfcf",
  backgroundColor: "#2F2F2F",
  color: "#FFFFFF",
}));
