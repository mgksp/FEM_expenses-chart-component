import ChartCard from "./components/ChartCard";

function App() {
  return (
    <main className="min-h-screen w-full font-dmSans px-4 grid place-content-center text-15 md:text-lg">
      <ChartCard />
      <div className="absolute left-0 bottom-2 text-xs font-medium text-darkBrown w-full text-center">
        Challenge by{" "}
        <a
          className="text-sm text-softRed font-bold"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="text-sm text-softRed font-bold"
          href="https://www.github.com/mgksp"
          target="_blank"
        >
          Prabu
        </a>
        .
      </div>
    </main>
  );
}

export default App;
