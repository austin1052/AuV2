// "use client";

import styles from "@/projects/styles/projects.module.css";
import TechCards from "@/projects/components/TechCards";
import ProjectLinks from "@/projects/components/ProjectLinks";
import LightDarkMode from "@/projects/walk-that-duck/LightDarkMode";
import AuthFormValidation from "@/projects/walk-that-duck/AuthFormValidation";
import Animations from "@/projects/walk-that-duck/Animations";

const technologies = ["Typescript", "Next.js", "React", "CSS", "Supabase"];
const links = {
  github: "https://github.com/austin1052/drag-race-supabase",
  site: "https://walkthatduck.vercel.app",
};

export default function WalkThatDuck() {
  return (
    <article className={styles.walkThatDuck}>
      <div className={styles.projectTitle}>
        <h2>walk that duck</h2>
      </div>
      <div className={styles.projectSummary}>
        an interactive Ru Paul&apos;s Drag Race fantasy league
      </div>
      <TechCards technologies={technologies} />
      <ProjectLinks links={links} />
      {/* <section> */}
      <div className={styles.projectDescription}>
        <p>
          I watched my first episode of Drag Race in November 2022 and I was
          hooked. When season 15 was announced, a friend invited me to join his
          fantasy league and asked that I text him my top picks for the season.
          After the first episode aired, I watched him use a calculator to
          determine the scores and manually put them into a Google sheet.
        </p>
        <p>
          I started the first version of this app the same night. By the end of
          the season, it only had a page to input scores and a page to display
          scores. It didn&apos;t do much, but it made watching the show more
          fun, and it was an easy place to check our standing in the league.
        </p>
        <p>
          I am working with a partner on Walk that Duck v2, and we will have a
          full featured app when season 16 aires in January 2024. Users will be
          able to create a profile, join and create leagues, complete weekly
          polls for extra points, and chat with others who enjoy Drag Race and
          queer culture.
        </p>
        <p>
          Some of the completed features are highlighted here. I will be
          updating this page as the app progresses, so check back in to stay up
          to date!
        </p>
      </div>
      {/* </section> */}
      <LightDarkMode />
      <AuthFormValidation />
      <Animations />
    </article>
  );
}
