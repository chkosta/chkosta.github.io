import React from "react";
import { IExperiencePageProps } from "./types";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";

const ExperiencePage = (props: IExperiencePageProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ ...(!isMobile && { m: "0 200px" }) }}>
      <Typography variant="h5" fontWeight={"bold"}>
        Summary
      </Typography>
      <Typography mt={1}>
        Enthusiastic and skilled Full-Stack Developer with a passion for
        creating innovative digital solutions. With a solid foundation in both
        front-end and back-end technologies, I bring creativity and expertise to
        every project I undertake. Experienced in collaborating with
        cross-functional teams to deliver high-quality, user-centric
        applications. Proficient in a variety of programming languages and
        frameworks, I am dedicated to staying updated with emerging technologies
        to continually enhance my skills and contribute effectively to the
        success of any development initiative.
      </Typography>

      <Typography variant="h5" fontWeight={"bold"} mt={6}>
        Work Experience
      </Typography>
      <Typography mt={1}>
        <span style={{ fontWeight: "bold" }}>Full-Stack Developer</span>,{" "}
        <span style={{ fontStyle: "italic" }}>Cellock Ltd</span>, Nicosia,
        Cyprus (Oct 2022 - Present)
      </Typography>
      <Typography mt={1}>
        Developed and maintained full-stack web applications performing coding,
        debugging and testing tasks in support of projects.
      </Typography>
      <Typography mt={1}>
        Technologies: Typescript, Next.js, Node.js, Express.js, JWT, PostgreSQL
        {/* , OutSystems */}
      </Typography>

      <Typography mt={4}>
        <span style={{ fontWeight: "bold" }}>Military Service</span>,{" "}
        <span style={{ fontStyle: "italic" }}>Cypriot National Guard</span>,
        Larnaca, Cyprus (Jul 2014 - Jul 2016)
      </Typography>
      <Typography mt={1}>Served my military service as a Corporal.</Typography>

      <Typography variant="h5" fontWeight={"bold"} mt={6}>
        Education
      </Typography>
      <Typography mt={1}>
        <span style={{ fontWeight: "bold" }}>
          MEng Computer Engineering and Informatics
        </span>
        , <span style={{ fontStyle: "italic" }}>CEID</span>, University of
        Patras, Greece (Oct 2016 - Apr 2022)
      </Typography>
      <Typography mt={1}>
        Thesis: Experimenting with Sim2Real Methods in Robotics Tasks.
      </Typography>
      <Typography mt={1}>
        Technologies: Python, OpenAI Gym, PyTorch, Stable-Baselines3, RobotDART,
        NumPy, Matplotlib, Linux
      </Typography>

      <Typography fontSize={18} fontWeight={"bold"} mt={4}>
        Other
      </Typography>
      <Typography mt={1}>
        <span style={{ fontWeight: "bold" }}>Online learning</span>,{" "}
        <span style={{ fontStyle: "italic" }}>LeetCode</span> (Oct 2023 -
        Present)
      </Typography>
      <Typography mt={1}>
        Actively engaged in solving algorithmic problems using Python.
      </Typography>

      <Typography mt={4}>
        <span style={{ fontWeight: "bold" }}>Online courses</span>,{" "}
        <span style={{ fontStyle: "italic" }}>Coursera</span> (May 2022 - Aug
        2022)
      </Typography>
      <Typography mt={1}>
        Attended and completed the Deep Learning Specialization from
        DeepLearning.AI consisting of 5 online courses covering a very broad
        range of topics, including Software Engineering, Artificial Intelligence
        and Machine Learning.
      </Typography>

      {/* <Typography mt={4}>
        <span style={{ fontWeight: "bold" }}>High School</span>,{" "}
        <span style={{ fontStyle: "italic" }}>Lyceum Agiou Georgiou</span>,
        Larnaca, Cyprus (Sep 2011 - Sep 2014)
      </Typography>
      <Typography mt={1}>
        Specialized in Mathematics, Physics & Informatics.
      </Typography> */}

      <Typography mt={5}>
        <span style={{ fontWeight: "bold" }}>
          <u>Note:</u>
        </span>{" "}
        This is a short version of my CV. For work-related inquiries or complete
        PDF version of this page please reach out to me.
      </Typography>
    </Box>
  );
};

export default ExperiencePage;
