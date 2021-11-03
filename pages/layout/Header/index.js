import styles from "./Header.module.css";
import React, { useEffect, useState } from "react";
import Carousel from "./components/Carousel/index.js";
import Navbar from "./components/Navbar/index.js";
import Search from "./components/Search/index.js";

export default function Header() {
  const mockDataMenu = [{ title: "Home" }, { title: "Page 2" }];
  const mockDataSlider = [
    {
      title: "Slide 1",
      subtitle: "Text for slide 1",
      image:
        "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      title: "Slide 2",
      subtitle: "Text for slide 2",
      image:
        "https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      title: "Slide 3",
      subtitle: "Text for slide 3",
      image:
        "https://images.pexels.com/photos/1655166/pexels-photo-1655166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ];
  const inputItems = [
    {
      title: "home",
      href: "home",
      subContent: [
        { title: "All", href: "home" },
        { title: "section1", href: "home#section1" },
        { title: "section2", href: "home#section2" },
      ],
    },
    { title: "Page 2", href: "page2", subContent: [] },
  ];
  return (
    <div className={styles.headerGrid}>
      <div className={styles.menuGrid}>
        <Navbar data={mockDataMenu} />
        <Search data={inputItems} />
      </div>
      <div>
        <Carousel data={mockDataSlider} />
      </div>
    </div>
  );
}
