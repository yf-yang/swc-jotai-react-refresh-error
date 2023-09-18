"use client";
import SampleComponent from "./_component";
import ClientOnly from "./_ClientOnly";
import { useAtomsDebugValue } from "jotai-devtools";

import styles from "./page.module.css";

export default function Home() {
  useAtomsDebugValue();
  return (
    <main className={styles.main}>
      <ClientOnly>
        <SampleComponent />
      </ClientOnly>
    </main>
  );
}
