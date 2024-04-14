import React from "react";
import { IExperiencePageProps } from "./types";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";

const ExperiencePage = (props: IExperiencePageProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ ...(!isMobile && { m: "0 80px" }) }}>
      <Typography variant="h5" fontWeight={"bold"}>
        Summary
      </Typography>
      <Typography fontSize={18} mt={1}>
        Enthusiastic and skilled Full Stack Developer with a passion for
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
      <Typography fontSize={18} mt={1}>
        <span style={{ fontWeight: "bold" }}>Software Developer</span>,{" "}
        <span style={{ fontStyle: "italic" }}>Cellock Ltd</span>, Nicosia,
        Cyprus (Oct 2022 - Present)
      </Typography>
      <Typography fontSize={18} mt={1}>
        Developed full-stack web applications performing coding, debugging and
        unit testing tasks in support of projects.
      </Typography>
      <Typography fontSize={18} mt={1}>
        Developed new features and improved existing ones using latest
        industry-adopted technologies and frameworks such as Typescript,
        Express.js and Next.js.
      </Typography>
      <Typography fontSize={18} mt={1}>
        Designed and implemented scalable backend solutions to efficiently
        handle data processing and server-side logic, enhancing application
        performance and responsiveness.
      </Typography>
      <Typography fontSize={18} mt={1}>
        Acquired valuable experience working on microservices architecture.
      </Typography>
      <Typography fontSize={18} mt={1}>
        Led development as the primary OutSystems developer, showcasing
        expertise in low-code solutions.
      </Typography>

      <Typography fontSize={18} mt={4}>
        <span style={{ fontWeight: "bold" }}>Military Service</span>,{" "}
        <span style={{ fontStyle: "italic" }}>Cypriot National Guard</span>,
        Larnaca, Cyprus (Jul 2014 - Jul 2016)
      </Typography>
      <Typography fontSize={18} mt={1}>
        Served my military service as a Corporal.
      </Typography>

      <Typography variant="h5" fontWeight={"bold"} mt={6}>
        Education
      </Typography>
      <Typography fontSize={18} mt={1}>
        <span style={{ fontWeight: "bold" }}>
          MEng Computer Engineering and Informatics
        </span>
        , <span style={{ fontStyle: "italic" }}>CEID</span>, University of
        Patras, Greece (Oct 2016 - Apr 2022)
      </Typography>
      <Typography fontSize={18} mt={1}>
        Thesis: Experimenting with Sim2Real Methods in Robotics Tasks.
      </Typography>

      <Typography fontSize={18} fontWeight={"bold"} mt={4}>
        Other
      </Typography>
      <Typography fontSize={18} mt={1}>
        <span style={{ fontWeight: "bold" }}>Online learning</span>,{" "}
        <span style={{ fontStyle: "italic" }}>LeetCode</span> (Oct 2023 -
        Present)
      </Typography>
      <Typography fontSize={18} mt={1}>
        Actively engaged in solving algorithmic problems using Python.
      </Typography>

      <Typography fontSize={18} mt={4}>
        <span style={{ fontWeight: "bold" }}>Online courses</span>,{" "}
        <span style={{ fontStyle: "italic" }}>Coursera</span> (May 2022 - Aug
        2022)
      </Typography>
      <Typography fontSize={18} mt={1}>
        Attended and completed the Deep Learning Specialization from
        DeepLearning.AI consisting of 5 online courses covering a very broad
        range of topics, including Software Engineering, Artificial Intelligence
        and Machine Learning.
      </Typography>

      <Typography fontSize={18} mt={4}>
        <span style={{ fontWeight: "bold" }}>High School</span>,{" "}
        <span style={{ fontStyle: "italic" }}>Lyceum Agiou Georgiou</span>,
        Larnaca, Cyprus (Sep 2011 - Sep 2014)
      </Typography>
      <Typography fontSize={18} mt={1}>
        Specialized in Mathematics, Physics & Informatics.
      </Typography>

      <Typography fontSize={18} mt={5}>
        <u>Note:</u> This is a short version of my CV. For work-related
        inquiries or complete PDF version of this page please reach out to me.
      </Typography>
    </Box>
  );
};

export default ExperiencePage;
