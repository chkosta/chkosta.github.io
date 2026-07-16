import React from "react";
import { IExperiencePageProps } from "./types";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";

const ExperiencePage = (props: IExperiencePageProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ ...(!isMobile && { m: "0 200px" }) }}>
      <Typography fontSize={18} fontWeight={"bold"}>
        PROFESSIONAL SUMMARY
      </Typography>
      <Typography mt={1}>
        Software Engineer with 3+ years of experience designing, building, and
        maintaining scalable backend services and REST APIs using Node.js,
        TypeScript, Express.js, and PostgreSQL. Experienced in microservices
        architecture, third-party integrations, authentication systems, Docker,
        and production deployments. Passionate about writing clean, maintainable
        code and building reliable systems that scale.
      </Typography>

      <Typography fontSize={18} fontWeight={"bold"} mt={5}>
        PROFESSIONAL EXPERIENCE
      </Typography>
      <Typography mt={1} fontSize={16}>
        <span style={{ fontWeight: "bold" }}>Full-Stack Developer</span> |
        Cellock Ltd (Nicosia, Cyprus)
      </Typography>
      <Typography mt={1} component="ul">
        <li>
          Designed, developed, and maintained scalable RESTful APIs and backend
          services using Node.js, Express.js and PostgreSQL
        </li>
        <li>
          Integrated secure third-party API integrations, implementing robust
          authentication and authorization mechanisms.
        </li>
        <li>
          Enhanced an accounting microservice by designing and implementing new
          business functionality for financial transactions.
        </li>
        <li>
          Collaborate daily within cross-functional teams in an Agile/Scrum
          structure, converting complex business requirements into clean,
          self-documenting, and maintainable code.
        </li>
        <li>
          Participate in code reviews and enforce best practices to improve code
          quality and team productivity.
        </li>
      </Typography>

      <Typography fontSize={18} fontWeight={"bold"} mt={5}>
        PROJECTS
      </Typography>
      <Typography mt={1} fontSize={16}>
        <span style={{ fontWeight: "bold" }}>Quizzify</span> | Mobile
        Application
      </Typography>
      <Typography mt={1} component="ul">
        <li>
          Built and launched an Android mobile application featuring real-time
          multiplayer games, custom game creation, competitive leaderboards,
          ranking systems, and player progression tracking.
        </li>
        <li>
          Built an administration portal for user management, system analytics,
          and platform oversight, improving operational monitoring and control.
        </li>
        <li>
          Architected backend services with Node.js, Express.js, Socket.IO, and
          PostgreSQL to support low-latency gameplay, real-time communication,
          and persistent user data.
        </li>
        <li>
          Developed the frontend using React Native, Expo, and TypeScript,
          delivering a responsive and engaging experience across Android
          devices.
        </li>
      </Typography>

      <Typography fontSize={18} fontWeight={"bold"} mt={5}>
        EDUCATION & ACADEMIC RESEARCH
      </Typography>
      <Typography mt={1} fontSize={16}>
        <span style={{ fontWeight: "bold" }}>
          Integrated Master in Computer Engineering & Informatics
        </span>{" "}
        | University of Patras (Patras, Greece)
      </Typography>
      <Typography mt={1}>
        <span style={{ fontWeight: "bold" }}>Thesis:</span> Experimenting with
        Sim2Real Methods in Robotics Tasks
      </Typography>
      <Typography mt={1} component="ul">
        <li>
          Investigated Sim2Real transfer in robotics by evaluating Domain
          Randomization as a method for bridging the reality gap between
          simulated and physical robotic systems. Developed and benchmarked
          Reinforcement Learning agents across multiple control tasks, including
          pendulum stabilization, robotic arm joint control, and manipulation
          with the Franka Emika robot. Demonstrated improved policy robustness
          and cross-domain generalization through systematic experimentation
          using Python, PyTorch, Stable-Baselines3, RobotDART, and OpenAI Gym.
        </li>
      </Typography>

      <Typography fontSize={18} fontWeight={"bold"} mt={5}>
        CERTIFICATIONS
      </Typography>
      <Typography mt={1} fontSize={16}>
        <span style={{ fontWeight: "bold" }}>Deep Learning Specialization</span>{" "}
        | DeepLearning.AI
      </Typography>
      <Typography mt={1} component="ul">
        <li>
          Completed a five-course specialization covering neural networks, deep
          learning, convolutional neural networks, sequence models, and
          practical machine learning techniques such as optimization,
          regularization, and hyperparameter tuning.
        </li>
      </Typography>

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
