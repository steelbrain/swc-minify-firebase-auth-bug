import dynamic from "next/dynamic";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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

console.log("x", firebase);
