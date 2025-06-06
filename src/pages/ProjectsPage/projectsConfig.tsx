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
      group: "MOBILE DEVELOPMENT",
      title: "Quizzify",
      description:
        "Quizzify is a mobile app offering a collection of educational and logic-based games, featuring custom game creation, real-time multiplayer, and personalized progress tracking.",
      icons: [
        {
          name: "Google Play",
          icon: <ShopIcon style={iconStyle} />,
          link: "https://play.google.com/store/apps/details?id=com.quizzify",
        },
      ],
    },
    {
      group: "WEB DEVELOPMENT",
      title: "Personal Website",
      description: "Web app for my personal website.",
      icons: [
        {
          name: "Github",
          icon: <GitHubIcon style={iconStyle} />,
          link: "https://github.com/chkosta/chkosta.github.io",
        },
      ],
    },
    {
      group: "WEB DEVELOPMENT",
      title: "Crowdsourced data collection and analysis system HTTP traffic",
      description:
        "Web app developed for a course in Web Development at University of Patras.",
      icons: [
        {
          name: "Github",
          icon: <GitHubIcon style={iconStyle} />,
          link: "https://github.com/chkosta/WebProject",
        },
      ],
    },
    {
      group: "RL SOLUTION",
      title: "Experimenting with Sim2Real Methods in Robotics Tasks",
      description:
        "Solutions to three robotic problems using reinforcement learning.",
      icons: [
        {
          name: "Youtube (Video 1)",
          icon: <YouTubeIcon style={iconStyle} />,
          link: "https://www.youtube.com/watch?v=qVi099TT53o",
        },
        {
          name: "Youtube (Video 2)",
          icon: <YouTubeIcon style={iconStyle} />,
          link: "https://www.youtube.com/watch?v=sS8tYinLqds",
        },
        {
          name: "Youtube (Video 3)",
          icon: <YouTubeIcon style={iconStyle} />,
          link: "https://www.youtube.com/watch?v=G_Xds8WAR4A",
        },
      ],
    },
    {
      group: "ONLINE LEARNING",
      title: "LeetCode Solutions",
      description:
        "Solutions to various LeetCode algorithmic problems using Python.",
      icons: [
        {
          name: "Github",
          icon: <GitHubIcon style={iconStyle} />,
          link: "https://github.com/chkosta/leetcode-solutions",
        },
      ],
    },
  ],
};
