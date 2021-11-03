import styles from "./Navbar.module.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link, { LinkProps } from "next/link";
import NavLink from "./components/NavLink/index.js";

export default function Navbar(props) {
  const { data } = props;

  return (
    <div className={styles.tabMenu}>
      {data?.map((page) => {
        return (
          <NavLink
            title={page.title}
            href={`/${page.title.replace(/\s+/g, "").toLowerCase()}`}
            key={`${page.title}`}
          />
        );
      })}
    </div>
  );
}
