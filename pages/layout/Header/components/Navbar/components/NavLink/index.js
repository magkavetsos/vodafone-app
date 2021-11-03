import styles from "./NavLink.module.css";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink(props) {
  const { asPath } = useRouter();
  const { title, href } = props;
  const isActive = asPath.includes(href);

  return (
    <Link href={href} passHref>
      <a>
        <div
          className={`${styles.tabLink} ${
            isActive ? styles.active : styles.inactive
          }`}
        >
          {title}
          <p
            className={`${isActive ? styles.dotActive : styles.dotInactive}`}
          ></p>
        </div>
      </a>
    </Link>
  );
}
