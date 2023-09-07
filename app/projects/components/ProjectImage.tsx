import Image, { StaticImageData } from "next/image";
import styles from "@/app/projects/styles/projects.module.css";

export default function ProjectImage({
  src,
  alt,
}: {
  src: StaticImageData;
  alt: string;
}) {
  return (
    <div className={styles.imageContainer}>
      <Image src={src} alt={alt} />
    </div>
  );
}
