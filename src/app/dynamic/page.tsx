import InfoCard from "@/components/infoCard";
import UnsplashImage from "@/components/unsplashImage";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Dynamic fetching - Next Gallery",
};

export default async function Page() {
  return (
    <div className="flex flex-col  px-5 content-center justify-center items-center pt-10">
      <InfoCard> This page fetches and caches data at build time.</InfoCard>
      <Suspense fallback="Loading...">
        <UnsplashImage fetchType={"dynamic"} />
      </Suspense>
    </div>
  );
}
