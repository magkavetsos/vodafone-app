import styles from "./Home.module.css";
import React, { useEffect, useState } from "react";
import ImagesSection from "./components/ImagesSection/index.js";
import OurServices from "./components/OurServices/index.js";
import { getHomeData } from "../../backend/homeData";
import { useQuery } from "react-query";

export async function getStaticProps() {
  const homeData = await getHomeData();
  return { props: { homeData } };
}

export default function Home(props) {
  const { homeData } = props;
  const [currentSectionId, setCurrentSectionId] = useState("");
  const { data, isLoading } = useQuery("home", getHomeData, {initialData: homeData});
  useEffect(() => {
    if (data) {
      setCurrentSectionId(data[0]?.sections[0]?.id);
    }
  }, [data]);
  if (isLoading) {
    return "loading";
  }

  const handleCurrentSectionId = (id) => {
    setCurrentSectionId(id);
  };

  const renderSectionContent = () => {
    const caseData = data[0].sections.find(
      (section) => section.id === currentSectionId
    );
    if (caseData) {
      switch (currentSectionId) {
        case "01":
          return <ImagesSection imagesArray={caseData.images} />;
        case "02":
          return <OurServices data={caseData} />;
        default:
          return null;
      }
    }
    return null;
  };

  return (
    <div className={styles.sectionGrid}>
      <div className={styles.sectionTitle}>{data[0]?.description}</div>
      <div className={styles.tabMenu}>
        {data[0]?.sections?.map((section, i) => {
          return (
            <div
              key={section.id}
              onClick={() => handleCurrentSectionId(section.id)}
              className={`${styles.tabLink} ${
                currentSectionId === section.id
                  ? styles.active
                  : styles.inactive
              }`}
            >
              {`Section ${i + 1}`}
              <p
                className={`${
                  currentSectionId === section.id
                    ? styles.dotActive
                    : styles.dotInactive
                }`}
              ></p>
            </div>
          );
        })}
      </div>
      {renderSectionContent()}
    </div>
  );
}
