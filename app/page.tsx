import Hello from "./components/hello";

export default function Home() {
  console.log("Where am i? - Server?")

  return (
    <>
      <h1 className="text-3xl">Welcome to Next.js</h1>
      <Hello />
    </>
  );
}
