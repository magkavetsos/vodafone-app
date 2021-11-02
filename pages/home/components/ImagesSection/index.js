import Image from "next/image";
import styles from "./ImagesSection.module.css";

export default function ImagesSection(props) {
  const { imagesArray } = props;
  return (
    <div className={styles.imagesSectionContainer}>
      <div>
        <Image
          src={imagesArray[0].img}
          width="370"
          height="630"
          placeholder="blur"
          blurDataURL="data:text/plain;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM88x8AAp0BzdNtlUkAAAAASUVORK5CYII="
        />
      </div>
      <div className={styles.twoImagesColumn}>
        <Image
          src={imagesArray[1].img}
          width="371"
          height="301"
          placeholder="blur"
          blurDataURL="data:text/plain;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM88x8AAp0BzdNtlUkAAAAASUVORK5CYII="
        />
        <Image
          src={imagesArray[2].img}
          width="371"
          height="301"
          placeholder="blur"
          blurDataURL="data:text/plain;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM88x8AAp0BzdNtlUkAAAAASUVORK5CYII="
        />
      </div>
      <div className={styles.twoImagesColumn}>
        <Image
          src={imagesArray[3].img}
          width="371"
          height="301"
          placeholder="blur"
          blurDataURL="data:text/plain;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM88x8AAp0BzdNtlUkAAAAASUVORK5CYII="
        />
        <Image
          src={imagesArray[4].img}
          width="371"
          height="301"
          placeholder="blur"
          blurDataURL="data:text/plain;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM88x8AAp0BzdNtlUkAAAAASUVORK5CYII="
        />
      </div>
    </div>
  );
}
