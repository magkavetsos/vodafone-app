import styles from "./Navbar.module.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link, { LinkProps } from 'next/link';
import NavLink from "./components/NavLink/index.js";

export default function Navbar(props) {
  const { data } = props;
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    if (data) {
      setActivePage(data[0].title);
    }
  }, []);

  const handleActivePage = (page) => {
    setActivePage(page);
  };
  return (
    <div className={styles.navbarGrid}>
      <div className={styles.tabMenu}>
        {data?.map((page, i) => {
          return (
            <NavLink title={page?.title} href={`/${page?.title.replace(/\s+/g, '').toLowerCase()}`} />
            // <div
            //   key={i}
            //   onClick={() => handleActivePage(page.title)}
            //   className={`${styles.tabLink} ${
            //     activePage === page.title
            //       ? styles.active
            //       : styles.inactive
            //   }`}
            // >
            //   {page.title}
            //   <p
            //     className={`${
            //       activePage === page.title
            //         ? styles.dotActive
            //         : styles.dotInactive
            //     }`}
            //   ></p>
            // </div>
          );
        })}
      </div>
    </div>
  );
}
