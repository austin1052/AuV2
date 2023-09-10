import { BsLinkedin, BsGithub } from "react-icons/bs";
import styles from "@/app/styles/SocialMediaIcons.module.css";

const SocialMediaIcons = () => {
  return (
    <div className={styles.icons}>
      <a
        href="https://github.com/austin1052"
        className={styles.icon}
        aria-label="Github"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/austin1052/"
        className={styles.icon}
        aria-label="Linked In"
      >
        <BsLinkedin />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
