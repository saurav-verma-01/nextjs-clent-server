"use client";

import Image from "next/image";
import ExampleClient from "@/components/ExamleClient";
// import ExampleServe from "@/components/ExampleServe";

export default function Home() {
  console.log("Where do I render?");
  return (
    <main>
      <h2>Welcome 👋</h2>
      <ExampleClient />
      {/* <ExampleServe /> */}
    </main>
  );
}
