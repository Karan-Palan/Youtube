"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "Example",
  });
  return <div>Page client says : {data.greeting}</div>;
};
