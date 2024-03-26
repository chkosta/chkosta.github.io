import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const PrimaryButton = styled(Button)(({ theme }) => ({
  borderRadius: 10,
  width: 100,
  textTransform: "none",
  backgroundColor: "#2F2F2F",
  color: "#FFFFFF",
}));

export const SecondaryButton = styled(Button)(({ theme }) => ({
  borderRadius: 10,
  width: 100,
  textTransform: "none",
  borderColor: "#cfcfcf",
  backgroundColor: "#FFFFFF",
  color: "#FFFFFF",
}));
