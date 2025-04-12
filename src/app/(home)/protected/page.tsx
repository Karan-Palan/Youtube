import { HydrateClient, trpc } from "@/trpc/server";
import { PageClient } from "./client";
import { Suspense } from "react";

export default async function Home() {
  void trpc.hello.prefetch({ text: "Example" });

  return (
    <HydrateClient>
      <Suspense fallback={<div>Loading...</div>}>
        <PageClient />
      </Suspense>
    </HydrateClient>
  );
}
