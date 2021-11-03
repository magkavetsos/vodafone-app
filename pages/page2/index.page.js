import styles from "./Page2.module.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [hovered, setHovered] = useState(false);
  const mockData = [
    {
      id: "page2",
      name: "Page 2",
      description: "We match your unique business needs",
      tiles: [
        {
          icon: "icon1",
          title: "Work with us",
          description:
            "Let us know how we can help! Get in touch and we'll give you a fresh perspective on your business.",
          link: "Learn more",
        },
        {
          icon: "icon2",
          title: "Our process",
          description:
            "After a collaborative assessment we'll explore your business problems and needs co-creatively.",
          link: "Learn more",
        },
        {
          icon: "icon3",
          title: "How we help",
          description:
            "We provide business development, marketing, planning, operations and financial services. ",
          link: "Learn more",
        },
      ],
    },
  ];

  const redirectToLink = () => {
    window.location.href = "https://www.vodafone.gr/ypostirixi/";
  };

  const onMouseLeave = () => {
    // setHovered(!hovered);
  };

  const onMouseOver = () => {
    // setHovered(!hovered);
  };

  return (
    <div className={styles.sectionGrid}>
      <div className={styles.sectionTitle}>{mockData[0]?.description}</div>
      <div className={styles.tilesContainer}>
        {mockData[0]?.tiles?.map((tile, i) => {
          return (
            <div
              key={`tile-${i}`}
              className={styles.tile}
              onMouseOver={() => onMouseOver()}
              onMouseLeave={() => onMouseLeave()}
            >
              <div className={styles.image}>
                <Image src={`/section${i + 1}.png`} width="60" height="60" />
              </div>
              <div className={styles.title}>{tile.title}</div>
              <div className={styles.description}>{tile.description}</div>
              <div className={styles.link} onClick={() => redirectToLink()}>
                <div className={styles.linkText}>{tile.link}</div>
                <div>
                  <Image
                    src="/arrow.svg"
                    width="6"
                    height="9"
                    fill={hovered ? "#fff" : "#07c"}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
