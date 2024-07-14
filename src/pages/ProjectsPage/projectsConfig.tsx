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
        "Mobile app which offers users an engaging platform to participate in games across various categories and difficulty levels.",
      icons: [
        {
          name: "View App",
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
          name: "View Repo",
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
          name: "View Repo",
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
    {
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
  ],
};
