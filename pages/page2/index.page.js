import styles from "./Page2.module.css";
import Image from "next/image";
import React, { useState } from "react";
import { getPage2Data } from "../../backend/page2Data";
import { useQuery } from "react-query";

export async function getStaticProps() {
  const page2Data = await getPage2Data();
  return { props: { page2Data } };
}

export default function Page2(props) {
  const { page2Data } = props;
  const { data, isLoading } = useQuery("page2", getPage2Data, {
    initialData: page2Data,
  });

  return (
    <div className={styles.sectionGrid}>
      <div className={styles.sectionTitle}>{data[0]?.description}</div>
      <div className={styles.tilesContainer}>
        {data[0]?.tiles?.map((tile, i) => {
          return (
            <div key={`tile-${i}`} className={styles.tile}>
              <div className={styles.image}>
                <Image src={`/section${i + 1}.png`} width="60" height="60" />
              </div>
              <div className={styles.title}>{tile.title}</div>
              <div className={styles.description}>{tile.description}</div>
              <div className={styles.link}>
                <div className={styles.linkText}>{tile.link}</div>
                <div>
                  <Image src="/arrow.svg" width="6" height="9" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
