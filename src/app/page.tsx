import Quiz from "./components/Quiz";

export default function Home() {
  return (
    <div>
      <div className="container header">
        <div>HTML / CSS Quiz</div>
      </div>
      <div className="container">
        <Quiz />
      </div>
    </div>
  );
}
