"use client";

import styles from "@/app/projects/styles/projects.module.css";
import TechCards from "./components/TechCards";
import ProjectLinks from "./components/ProjectLinks";
import LightDarkMode from "./walk-that-duck/LightDarkMode";

const technologies = ["Next.js", "React", "CSS", "Supabase"];
const links = {
  github: "/",
  site: "/",
};

export default function WalkThatDuck() {
  return (
    <article>
      <div className={styles.projectTitle}>
        <h2>walk that duck</h2>
      </div>
      <p className={styles.projectDescription}>
        an interactive Ru Paul&apos;s Drag Race fantasy league
      </p>
      <TechCards technologies={technologies} />
      <ProjectLinks links={links} />
      <section>
        <div className="placeholder">
          <p>
            I watched my first episode of Drag Race in November 2022 and I was
            hooked. When season 15 was announced, a friend invited me to join
            his fantasy league and asked that I text him my top picks for the
            season. After the first episode aired, I watched him use a
            calculator to determine the scores and manually put them into a a
            Google sheet.
          </p>
          <p>
            I started the first version of this app the same night. By the end
            of the season, it only had a page to input scores and a page to
            display scores. It didn&apos;t do much, but it made watching the
            show more fun, and it was an easy place to check our standing in the
            league.
          </p>
          <p>
            I am working with a partner on Walk that Duck v2, and we will have a
            full featured app when season 16 aires in January 2024. Users will
            be able to create a profile, join and create leagues, complete
            weekly polls for extra points, and chat with others who enjoy Drag
            Race and queer culture.
          </p>
          <p>
            Some of the completed features are highlighted here. I will be
            updating this page as the app progresses, so check back in to stay
            up to date!
          </p>
        </div>
      </section>
      <div className={styles.sectionContainer}>
        <LightDarkMode />
      </div>
    </article>
  );
}
