import dynamic from "next/dynamic";

const Ace = dynamic(() => import("react-ace"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

export default function Index() {
  return (
    <main>
      <h1>Code editor</h1>
      <Ace />
    </main>
  );
}
