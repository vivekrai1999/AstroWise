import { Planet } from "react-planet";

function App() {
  return (
    <div className="main">
      <div className="nav">
        <span>AstroWise</span>
      </div>
      <div className="content">
        <div className="horoscope">
          <h1 className="sign-name">Sagittarius</h1>
          <p className="date">Nov. 22 - Dec. 21</p>
          <p className="horoscope-content">
            Curious and energetic, Sagittarius is one of the biggest travelers
            among all zodiac signs. Their open mind and philosophical view
            motivates them to wander around the world in search of the meaning
            of life.
          </p>
        </div>
        <div className="horoscope-menu"></div>
      </div>
    </div>
  );
}

function Button({ content }) {
  return <button>{content}</button>;
}

export default App;
