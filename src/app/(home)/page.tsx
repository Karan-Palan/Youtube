"use client";

import { trpc } from "@/trpc/client";

export default function Home() {
  const { data } = trpc.hello.useQuery({ text: "test" });
  return <div>Client Component says : {data?.greeting}</div>;
}
