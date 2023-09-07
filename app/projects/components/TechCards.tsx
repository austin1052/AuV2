import styles from "@/app/projects/styles/projects.module.css";

export default function TechCards({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <div className={styles.techCards}>
      {technologies.map((technology, i) => {
        return <div key={i}>{technology}</div>;
      })}
    </div>
  );
}
