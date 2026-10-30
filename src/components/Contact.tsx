import { FiArrowUpRight } from "react-icons/fi";
export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div>
        <div className="eyebrow">{"Let’s talk logistics"}</div>
        <h2>
          {"Every move starts"}
          <br />
          {"with a hello."}
        </h2>
        <p>
          {
            "Enquiring about a load, joining as a driver or looking to partner with us? We’d like to hear from you."
          }
        </p>
        <a className="email" href="mailto:bookings@log-a-load.co.za">
          {"bookings@log-a-load.co.za "}
          <FiArrowUpRight className="ui-icon" aria-hidden="true" />
        </a>
        <p>
          {"Accounts enquiries"}
          <br />
          <a href="mailto:accounts@log-a-load.co.za">
            {"accounts@log-a-load.co.za"}
          </a>
        </p>
        <p>
          {"Mdantsane, East London"}
          <br />
          {"Eastern Cape, South Africa"}
        </p>
      </div>
      <form id="enquiry">
        <label htmlFor="name">{"Your name"}</label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          required
          placeholder="Full name"
        />
        <label htmlFor="email">{"Email address"}</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
        />
        <label htmlFor="interest">{"How can we help?"}</label>
        <select id="interest" name="interest">
          <option>{"Transport enquiry"}</option>
          <option>{"Driver / vehicle owner enquiry"}</option>
          <option>{"App launch updates"}</option>
          <option>{"Business partnership"}</option>
        </select>
        <label htmlFor="message">{"Tell us a little more"}</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Your load, pickup, destination and preferred date…"
        ></textarea>
        <button className="button dark" type="submit" style={{ width: "100%" }}>
          {"Prepare email enquiry "}
          <FiArrowUpRight className="ui-icon" aria-hidden="true" />
        </button>
        <p className="form-note">
          {
            "Opens your email app with these details. Your enquiry is sent only when you send the email. Please do not include identity documents or banking details."
          }
        </p>
        <div className="form-status" role="status"></div>
      </form>
    </section>
  );
}
