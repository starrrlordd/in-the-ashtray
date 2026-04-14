import Navbar from "./layouts/Navbar";

import classes from "../styles/Homepage.module.css";
import ThreeDots from "./UI/ThreeDots";

import BuyMeAcoffee from "./UI/BuyMeAcoffee";

type HomepageProps = {};

type Post = {
  id: number;
  createdAt: string;
  userId: string;
  header: string;
  content: string;
};

const ITA_POST: Post[] = [
  {
    id: 1,
    createdAt: "01:51",
    userId: "starrrlordd",
    header: "Rodri, the most disrespected Ballon dór winner.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proinegestas nibh vel mauris luctus luctus. Donec ornare non tellus inultrices. Phasellus nisl mauris, varius eget mauris id, pharetraegestas dolor. Vivamus eget tellus cursus, tempus quam vel,vulputate lorem. Donec fringilla posuere dui, eget blandit dolorsodales tempor. Sed placerat ante ut tempor efficitur. Nullam mattisvolutpat erat, vel porta felis porttitor ut. Sed dui velit, gravidaeget dui id, imperdiet viverra nibh.",
  },
  {
    id: 2,
    createdAt: "02:19",
    userId: "starrrlordd",
    header: "Rodri, the most disrespected Ballon dór winner.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proinegestas nibh vel mauris luctus luctus. Donec ornare non tellus inultrices. Phasellus nisl mauris, varius eget mauris id, pharetraegestas dolor. Vivamus eget tellus cursus, tempus quam vel,vulputate lorem. Donec fringilla posuere dui, eget blandit dolorsodales tempor. Sed placerat ante ut tempor efficitur. Nullam mattisvolutpat erat, vel porta felis porttitor ut. Sed dui velit, gravidaeget dui id, imperdiet viverra nibh.",
  },
  {
    id: 3,
    createdAt: "02:19",
    userId: "starrrlordd",
    header: "Rodri, the most disrespected Ballon dór winner.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proinegestas nibh vel mauris luctus luctus. Donec ornare non tellus inultrices. Phasellus nisl mauris, varius eget mauris id, pharetraegestas dolor. Vivamus eget tellus cursus, tempus quam vel,vulputate lorem. Donec fringilla posuere dui, eget blandit dolorsodales tempor. Sed placerat ante ut tempor efficitur. Nullam mattisvolutpat erat, vel porta felis porttitor ut. Sed dui velit, gravidaeget dui id, imperdiet viverra nibh.",
  },
];

const Homepage = ({}: HomepageProps) => {
  const links = [
    { label: "Arts", path: "/arts" },
    { label: "Writing", path: "/writing" },
    { label: "Contact me", path: "/contact-me" },
  ];

  return (
    <>
      <Navbar links={links} />

        <div className={classes.itaInterface}>
      <div className={classes.homepage}>
        {ITA_POST.map((post) => (
          <div className={classes.itaPost} key={post.id}>
            <div className={classes.userTimeInfo}>
              <p className={classes.userId}>{post.userId}</p>
              <div className={classes.timeDots}>
                <p className={classes.createdAt}>{post.createdAt}</p>
                <ThreeDots />
              </div>
            </div>

            <div className={classes.itaHeader}>
              <h1>{post.header}</h1>
            </div>

            <div className={classes.itaContent}>
              <p>{post.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.buyMeAcoffee}>
        <BuyMeAcoffee />
      </div>
      </div>
    </>
  );
};

export default Homepage;
