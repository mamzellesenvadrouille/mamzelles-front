// app/voyage/[slug]/CheckList.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/CheckList.tsx
"use client";

import { useState } from "react";
import type { ChecklistItem } from "@/lib/carnets";
import styles from "./carnet.module.css";

export default function CheckList({ items }: { items: ChecklistItem[] }) {
  const [coches, setCoches] = useState<boolean[]>(items.map((i) => i.coche));

  function toggle(i: number) {
    setCoches((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  }

  return (
    <div className={styles.checkList}>
      {items.map((item, i) => (
        <div
          key={i}
          className={`${styles.checkItem} ${coches[i] ? styles.checked : ""}`}
          onClick={() => toggle(i)}
        >
          <div className={styles.checkBox} />
          <div className={styles.checkLabel}>{item.label}</div>
        </div>
      ))}
    </div>
  );
}
