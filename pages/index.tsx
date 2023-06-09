import Head from "next/head";
import Image from "next/image";
import { Noto_Sans_KR } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Todolist from "./components/Todolist";

const noto = Noto_Sans_KR({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Todolist items={tododata} />
      </main>
    </>
  );
}

const tododata: { id: number; content: string; complete: boolean }[] = [
  { id: 0, content: "banana", complete: false },
  { id: 1, content: "apple", complete: false },
  { id: 2, content: "peach", complete: false },
  { id: 3, content: "pear", complete: false },
];
