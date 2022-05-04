import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary"

export default function App() {
  return (
    <div className="App">
      <div className="containter">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Welcome" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Georgie and open-sourced on{" "}
            <a
              href="https://github.com/geebee22202/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
