import { FiArrowUpRight } from "react-icons/fi";
export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <a className="logo footer-logo" href="#">
            <img src="logo.svg" alt="Log-A-Load — When no-one else is around" />
          </a>
          <p>
            {"Your load. On the move."}
            <br />
            {"Log-A-Load (Pty) Ltd · 2023/996751/07"}
          </p>
        </div>
        <div className="footer-links">
          <a href="#how-it-works">{"How it works"}</a>
          <a href="#drivers">{"For drivers"}</a>
          <button data-policy="privacy">{"Privacy"}</button>
          <button data-policy="terms">{"Website terms"}</button>
          <button data-policy="cancellation">
            {"Cancellations & refunds"}
          </button>
        </div>
      </div>
      <div className="footer-bottom">
        {"© 2026 Log-A-Load (Pty) Ltd. All rights reserved."}
        <span>
          {"Rooted in the Eastern Cape. Moving forward. "}
          <FiArrowUpRight className="ui-icon" aria-hidden="true" />
        </span>
      </div>
    </footer>
  );
}
