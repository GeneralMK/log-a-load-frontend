import { FiArrowUpRight, FiCheck } from "react-icons/fi";
const registrationSteps = [
  {
    title: "Start your driver profile",
    text: "Enquire with your name, contact details, province and vehicle type. The team will explain the joining process.",
  },
  {
    title: "Prepare your documents",
    text: "Be ready to discuss your driving licence, identity, vehicle registration and vehicle photos. The final document list and eligibility checks will be confirmed by the team.",
  },
  {
    title: "Review & approval",
    text: "Driver and vehicle details need review before joining. Read and accept the driver agreement only after you understand the fees and payout terms.",
  },
  {
    title: "Get ready for your first load",
    text: "Once approved and the service is available, the intended app journey lets you review suitable loads, pickup locations and destinations.",
  },
];
export function Drivers() {
  return (
    <section className="section driver-registration" id="drivers">
      <div className="section-heading">
        <div>
          <div className="eyebrow">Your vehicle. Your next opportunity.</div>
          <h2>
            Get in the
            <br />
            driver’s seat.
          </h2>
        </div>
        <p>
          A guided registration journey for owner-drivers. Start an enquiry
          today; app registration and document uploads are coming later.
        </p>
      </div>
      <div className="registration-layout">
        <aside className="registration-card">
          <span className="registration-icon">
            <FiArrowUpRight className="ui-icon" aria-hidden="true" />
          </span>
          <h3>
            You bring
            <br />
            the wheels.
          </h3>
          <p>
            We’re building the connection. Join the conversation about driving
            with Log-A-Load in the Eastern Cape.
          </p>
          <a
            href="#contact"
            className="button dark"
            onClick={() => {
              const field = document.getElementById(
                "interest",
              ) as HTMLSelectElement | null;
              if (field) field.value = "Driver / vehicle owner enquiry";
            }}
          >
            Register driver interest{" "}
            <FiArrowUpRight className="ui-icon" aria-hidden="true" />
          </a>
          <small>
            This opens the enquiry section. No driver account is created on this
            website.
          </small>
          <div className="driver-checklist">
            <b>BEFORE YOU START</b>
            <span>
              <FiCheck className="ui-icon" aria-hidden="true" /> Your contact
              details
            </span>
            <span>
              <FiCheck className="ui-icon" aria-hidden="true" /> Vehicle type &
              operating area
            </span>
            <span>
              <FiCheck className="ui-icon" aria-hidden="true" /> Questions about
              joining
            </span>
          </div>
        </aside>
        <div className="registration-steps">
          {registrationSteps.map((step, index) => (
            <article className="registration-step" key={step.title}>
              <span className="registration-number">0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
          <div className="registration-note">
            <b>Know the terms before you join.</b>
            <p>
              Driver fees, earning arrangements, approval requirements and
              payout conditions must be confirmed in writing during onboarding.
              Please don’t send identity or banking documents through the
              website enquiry form.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
