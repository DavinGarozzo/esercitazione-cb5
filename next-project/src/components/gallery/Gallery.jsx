import Image from "next/image";
import styles from "./index.module.scss";
const Gallery = () => {
  return (
    <div className={styles.Hero}>
      <Image
        src="https://picsum.photos/id/23/1920/1080"
        alt="Gallery image"
        width={300}
        height={300}
      />
      <Image
        src="https://picsum.photos/id/24/1920/1080"
        alt="Gallery image"
        width={300}
        height={300}
      />
      <Image
        src="https://picsum.photos/id/25/1920/1080"
        alt="Gallery image"
        width={300}
        height={300}
      />
    </div>
  );
};
export default Gallery;
