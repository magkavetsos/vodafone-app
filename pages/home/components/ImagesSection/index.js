import Image from "next/image";
import styles from "./ImagesSection.module.css";
import { base64 } from "./blurDataURL";

export default function ImagesSection(props) {
  const { imagesArray } = props;
  return (
    <div className={styles.imagesSectionContainer}>
      <div>
        <Image
          src={imagesArray[0].img}
          width="370"
          height="700"
          placeholder="blur"
          blurDataURL={base64}
        />
      </div>
      <div className={styles.twoImagesColumn}>
        <Image
          src={imagesArray[1].img}
          width="371"
          height="301"
          placeholder="blur"
          blurDataURL={base64}
        />
        <Image
          src={imagesArray[2].img}
          width="371"
          height="301"
          placeholder="blur"
          blurDataURL={base64}
        />
      </div>
      <div className={styles.twoImagesColumn}>
        <Image
          src={imagesArray[3].img}
          width="371"
          height="301"
          placeholder="blur"
          blurDataURL={base64}
        />
        <Image
          src={imagesArray[4].img}
          width="371"
          height="301"
          placeholder="blur"
          blurDataURL={base64}
        />
      </div>
    </div>
  );
}
