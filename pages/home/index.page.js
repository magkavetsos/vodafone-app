import styles from "./Home.module.css";
import React, { useEffect, useState } from "react";
import ImagesSection from "./components/ImagesSection/index.js";
import OurServices from "./components/OurServices/index.js";

export default function Home() {
  const [currentSectionId, setCurrentSectionId] = useState("");

  useEffect(() => {
    if (mockData) {
      setCurrentSectionId(mockData[0]?.sections[0]?.id);
    }
  }, []);

  const handleCurrentSectionId = (id) => {
    setCurrentSectionId(id);
  };

  const renderSectionContent = () => {
    const caseData = mockData[0].sections.find(
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

  const mockData = [
    {
      id: "home",
      name: "Home",
      description: "Our Sections",
      sections: [
        {
          id: "01",
          title: null,
          images: [
            {
              img: "https://images.pexels.com/photos/3046638/pexels-photo-3046638.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
              title: "Image title 1",
            },
            {
              img: "https://images.pexels.com/photos/2125083/pexels-photo-2125083.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
              title: "Image title 2",
            },
            {
              img: "https://images.pexels.com/photos/1294230/pexels-photo-1294230.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
              title: "Image title 3",
            },
            {
              img: "https://images.pexels.com/photos/1341322/pexels-photo-1341322.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
              title: "Image title 4",
            },
            {
              img: "https://images.pexels.com/photos/2127969/pexels-photo-2127969.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
              title: "Image title 5",
            },
          ],
        },
        {
          id: "02",
          title: "Our Services",
          graphText:
            "We create websites and campaigns that expose new opportunities",
          stats: [
            { title: "Percentage 1", amount: 600 },
            { title: "Percentage 2", amount: 300 },
            { title: "Percentage 3", amount: 300 },
            { title: "Percentage 4", amount: 800 },
          ],
          formText: "Validate your info",
          formLabels: ["Your phone", "Your Email", "Your password"],
          buttonText: "Submit",
        },
      ],
    },
  ];

  return (
    <div className={styles.sectionGrid}>
      <div className={styles.sectionTitle}>{mockData[0]?.description}</div>
      <div className={styles.tabMenu}>
        {mockData[0]?.sections?.map((section, i) => {
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