"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <main className="text-center pt-32 px-5 ">
        <h2>Oi.. Something went wrong!</h2>
        <h2>{error.message}</h2>
        <div className=" mb-10"></div>
        <Button
          variant={"destructive"}
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
      </main>
    </div>
  );
}
