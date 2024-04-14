import ShopIcon from "@mui/icons-material/Shop";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const iconStyle = {
  color: "#FFFFFF",
  fontSize: 28,
};

export const projectsConfig = {
  projects: [
    {
      id: 0,
      group: "MOBILE DEVELOPMENT",
      title: "Quizzify",
      description:
        "Trivia android app developed using React Native and Express.js.",
      icons: [
        {
          name: "View App",
          icon: <ShopIcon style={iconStyle} />,
          link: "https://play.google.com/store/apps/details?id=com.quizzify",
        },
      ],
    },
    {
      id: 1,
      group: "WEB DEVELOPMENT",
      title: "Personal Website",
      description: "Web app for my personal website.",
      icons: [
        {
          name: "View Repo",
          icon: <GitHubIcon style={iconStyle} />,
          link: "https://github.com/chkosta/chkosta.github.io",
        },
      ],
    },
    {
      id: 2,
      group: "ONLINE LEARNING",
      title: "LeetCode Solutions",
      description:
        "Solutions to various LeetCode algorithmic problems using Python.",
      icons: [
        {
          name: "View Repo",
          icon: <GitHubIcon style={iconStyle} />,
          link: "https://github.com/chkosta/leetcode-solutions",
        },
      ],
    },
    {
      id: 3,
      group: "THESIS",
      title: "Experimenting with Sim2Real Methods in Robotics Tasks",
      description:
        "Solutions to three robotic problems using reinforcement learning.",
      icons: [
        {
          name: "View Repo",
          icon: <GitHubIcon style={iconStyle} />,
          link: "https://github.com/chkosta/MEngThesis",
        },
        {
          name: "View Pendulum Environment Video",
          icon: <YouTubeIcon style={iconStyle} />,
          link: "https://www.youtube.com/watch?v=qVi099TT53o",
        },
        {
          name: "View Arm Environment Video",
          icon: <YouTubeIcon style={iconStyle} />,
          link: "https://www.youtube.com/watch?v=sS8tYinLqds",
        },
        {
          name: "View Franka Environment Video",
          icon: <YouTubeIcon style={iconStyle} />,
          link: "https://www.youtube.com/watch?v=G_Xds8WAR4A",
        },
      ],
    },
  ],
};
