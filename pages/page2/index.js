import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./Page2.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.sectionTitle}>Our Sections</div>
      </div>
    </div>
  );
}
