import { Container, Typography, Avatar, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../components/shared/StyledButtons";

const LandingPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: "70vh",
      }}
    >
      <Container maxWidth="lg">
        <Avatar
          alt="Christos Costa"
          src="/images/profile.jpg"
          sx={{
            width: { xs: 140, sm: 180, md: 220 },
            height: { xs: 140, sm: 180, md: 220 },
            mx: "auto",
            mb: 4,
            border: "4px solid rgba(255,255,255,0.2)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
          }}
        />

        <Typography
          variant="h2"
          fontWeight={700}
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "2.8rem",
              md: "3.8rem",
            },
            mb: 1,
          }}
        >
          Christos Costa
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "rgba(255,255,255,0.75)",
            mb: 3,
            fontSize: {
              xs: "1.1rem",
              sm: "1.3rem",
            },
          }}
        >
          Full-Stack Developer
        </Typography>

        <Typography
          sx={{
            maxWidth: 600,
            mx: "auto",
            mb: 5,
            color: "rgba(255,255,255,0.8)",
            fontSize: {
              xs: "1rem",
              sm: "1.1rem",
            },
          }}
        >
          Building modern, scalable applications focused on clean design,
          performance, and seamless user experiences. Passionate about turning
          ideas into reliable digital products.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Link to="/experience">
            <PrimaryButton
              sx={{
                minWidth: 160,
                py: 1,
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.3)",
                "&:hover": {
                  background: "rgba(255,255,255,0.08)",
                },
              }}
            >
              Experience
            </PrimaryButton>
          </Link>

          <Link to="/projects">
            <PrimaryButton
              sx={{
                minWidth: 160,
                py: 1,
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.3)",
                "&:hover": {
                  background: "rgba(255,255,255,0.08)",
                },
              }}
            >
              Projects
            </PrimaryButton>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default LandingPage;
