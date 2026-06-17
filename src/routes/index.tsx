export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your App" },
      { name: "description", content: "Replace this with a one-sentence description of your app." },
      { property: "og:title", content: "Your App" },
      { property: "og:description", content: "Replace this with a one-sentence description of your app." },
      { title: "For My Aishuu ❤️" },
      { name: "description", content: "A little corner of the internet, made with love for Aishuu." },
      { property: "og:title", content: "For My Aishuu ❤️" },
      { property: "og:description", content: "A little corner of the internet, made with love for Aishuu." },
      { property: "og:type", content: "website" },
      { name: "theme-color", content: "#fde2e4" },
    ],
  }),
  component: Index,
});
// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
// The whole experience is a single self-contained HTML file in /public,
// ready to drop onto GitHub Pages. We embed it here so the live preview
// renders exactly what will ship.
function Index() {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: "#fcfbf8" }}
    >
      <img
        data-lovable-blank-page-placeholder="REMOVE_THIS"
        src="https://cdn.gpteng.co/blank-app-v1.svg"
        alt="Your app will live here!"
      />
    </div>
    <iframe
      src="/aishuu.html"
      title="For My Aishuu"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
      }}
    />
  );
}
