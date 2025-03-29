import Quiz from "./components/Quiz";

export default function Home() {
  return (
    <div>
      <div className="container">
        <div>Header</div>
      </div>
      <div className="container">
        <Quiz />
      </div>
    </div>
  );
}
