import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
export function AppPreview() {
  return (
    <section className="section app-introduction" id="app">
      <div className="app-intro-photo">
        <img
          src="/images/customer-driver.webp"
          alt="Illustrative scene of a customer with a smartphone meeting a delivery driver beside a truck"
          loading="lazy"
          width="1536"
          height="1024"
        />
        {/* <span className="photo-caption">
          Illustrative scene · people, loads and possibilities
        </span> */}
        <div className="photo-badge">
          <FiArrowUpRight className="ui-icon" aria-hidden="true" size="1px" />
          <div>
            One connection.
            <br />
            <strong>A whole lot moving.</strong>
          </div>
        </div>
      </div>
      <div className="app-intro-copy">
        <div className="eyebrow">Introducing the Log-A-Load app</div>
        <h2>
          A load to move?
          <br />A vehicle to drive?
          <br />
          <span>Meet in the app.</span>
        </h2>
        <p>
          We’re building a simpler connection between customers who need
          transport and vehicle owners ready to move a load.
        </p>
        <div className="app-audiences">
          <div>
            <b>01 / FOR CUSTOMERS</b>
            <p>
              Plan a pickup, choose a destination and share what needs moving.
            </p>
          </div>
          <div>
            <b>02 / FOR DRIVERS</b>
            <p>
              Create a driver profile, complete the review and explore suitable
              load requests.
            </p>
          </div>
        </div>
        <a className="button dark" href="#how-it-works">
          Explore the app journey{" "}
          <FiArrowDown className="ui-icon" aria-hidden="true" />
        </a>
        <p className="availability-note">
          Coming soon · Android and iOS availability will be announced.
        </p>
      </div>
    </section>
  );
}
