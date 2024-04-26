import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <Link href="/test-error-handling">
            Test error handler page
          </Link>
        </div>
      </div>
    </main>
  );
}
