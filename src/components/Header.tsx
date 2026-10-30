import { FiArrowUpRight, FiMenu } from "react-icons/fi";
export function Header() {
  return (
    <header>
      <a href="#" className="logo" aria-label="Log-A-Load home">
        <img src="logo.svg" alt="Log-A-Load — When no-one else is around" />
      </a>
      <button
        className="menu"
        aria-label="Toggle navigation"
        aria-expanded="false"
      >
        Menu <FiMenu className="ui-icon" aria-hidden="true" />
      </button>
      <nav aria-label="Main navigation">
        <a href="#app">The app</a>
        <a href="#how-it-works">{"How it works"}</a>
        <a href="#services">{"What we move"}</a>
        <a href="#drivers">{"For drivers"}</a>
        <a className="button dark" href="#contact">
          {"Get in touch "}
          <FiArrowUpRight className="ui-icon" aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
