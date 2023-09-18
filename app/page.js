"use client";
import SampleComponent from "./_component";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <SampleComponent />
    </main>
  );
}
