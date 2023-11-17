"use client";

import { useRef } from "react";
import { createFrom } from "./_action/fetch-action";
import Button from "./_components/Buntton";

export default function Home() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-4">
      <form
        ref={ref}
        action={(formData: FormData) => {
          ref.current?.reset();
          createFrom(formData);
        }}
        className="flex flex-col w-[300px] my-16 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="type yours name"
          required
          className="flex flex-col items-center justify-between p-2 gap-4
          "
        />

        <Button />
      </form>
    </main>
  );
}
