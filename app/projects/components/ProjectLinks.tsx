import Link from "next/link";
import styles from "@/app/projects/styles/projects.module.css";

export default function ProjecetLinks({ links }: { links: TechLinks }) {
  return (
    <div className={styles.techLinks}>
      <Link href={links.github}>view on github</Link>
      {links.site && <Link href={links.site}>visit website</Link>}
    </div>
  );
}
