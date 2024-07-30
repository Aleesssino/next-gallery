import InfoCard from "@/components/infoCard";

export default function Home() {
  return (
    <main className="text-center pt-12 px-5">
      <h1 className="font-bold mb-5 text-4xl md:text-5xl">Next Gallery</h1>
      <InfoCard>
        <section>
          <h2 className="text-bold text-lg">About</h2>

          <p>
            This project showcases Next.js 14&apos;s app router and its key
            features:
          </p>

          <ul>
            <li>Static and dynamic server-side rendering</li>
            <li>Incremental static regeneration</li>
            <li>Route handlers (API endpoints)</li>
            <li>Metadata API</li>
            <li>And more</li>
          </ul>

          <p>The website utilizes the Unsplash API for image content.</p>

          <p>
            Next Gallery: Exploring Next.js 14 and TailwindCSS through a simple,
            elegant image showcase.
          </p>
        </section>
      </InfoCard>
    </main>
  );
}
