import InfoCard from "@/components/infoCard";
import UnsplashImage from "@/components/unsplashImage";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Incremantal Static Regeneration - Next Gallery",
};

export default async function Page() {
  return (
    <div className="flex flex-col  px-5 content-center justify-center items-center pt-10">
      <InfoCard>
        {" "}
        This page uses incremental static regeneration. A new image is fetched
        every 15 seconds (after refreshing the page) and then served from the
        cache for that duration.
      </InfoCard>
      <Suspense fallback="Loading...">
        <UnsplashImage fetchType={"isr"} />
      </Suspense>
    </div>
  );
}
