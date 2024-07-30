import InfoCard from "@/components/infoCard";
import UnsplashImage from "@/components/unsplashImage";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Static fetching - Next Gallery",
};

export default async function Page() {
  return (
    <div className="flex flex-col  px-5 content-center justify-center items-center pt-10">
      <InfoCard>
        This page fetches and caches data at build time. Even though the
        Unsplash API always returns a new image, we see the same image after
        refreshing the page until we compile the project again.
      </InfoCard>
      <Suspense fallback="Loading...">
        <UnsplashImage fetchType={"static"} />
      </Suspense>
    </div>
  );
}
