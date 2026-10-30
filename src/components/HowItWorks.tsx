import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiPackage,
  FiWifi,
  FiBattery,
} from "react-icons/fi";
import { useState } from "react";

type Journey = "customer" | "driver";
const journeys = {
  customer: [
    {
      title: "Create your profile",
      detail:
        "The planned customer journey starts with your name, contact details and a secure account.",
      screen: "Welcome to Log-A-Load",
      label: "YOUR PROFILE",
      fields: ["Full name", "Mobile number", "Email address"],
      action: "Create account",
      icon: "01",
    },
    {
      title: "Choose pickup & destination",
      detail:
        "Set where the load starts and where it needs to go. Add collection instructions so the driver knows where to meet you.",
      screen: "Where is your load going?",
      label: "YOUR ROUTE",
      fields: ["Pickup · Mdantsane", "Destination · Qonce"],
      action: "Confirm locations",
      icon: "02",
    },
    {
      title: "Tell us about your load",
      detail:
        "Describe the items, add photos and choose a preferred collection time. Review the vehicle requirements and price before confirming.",
      screen: "A little about your load",
      label: "LOAD DETAILS",
      fields: [
        "Household furniture",
        "2 boxes + 1 small table",
        "Preferred collection date",
      ],
      action: "Review request",
      icon: "03",
    },
    {
      title: "Meet your driver. Get moving.",
      detail:
        "Once a booking is confirmed, the intended app experience brings driver details and collection-to-delivery updates into one place.",
      screen: "Your load, on its way",
      label: "BOOKING UPDATES",
      fields: [
        "Booking confirmed",
        "Collection arranged",
        "Delivery confirmation",
      ],
      action: "View booking",
      icon: "04",
    },
  ],
  driver: [
    {
      title: "Register your interest",
      detail:
        "Tell the team you want to drive with Log-A-Load. Start with your contact details and the type of vehicle you own.",
      screen: "Drive with Log-A-Load",
      label: "GET STARTED",
      fields: ["Your name", "Mobile number", "Home province"],
      action: "Start driver profile",
      icon: "01",
    },
    {
      title: "Add yourself & your vehicle",
      detail:
        "The planned onboarding journey gathers driver and vehicle information. The team will confirm required documents and eligibility before submission.",
      screen: "You + your vehicle",
      label: "DRIVER ONBOARDING",
      fields: [
        "Driver details",
        "Vehicle type & registration",
        "Documents · requirements to confirm",
      ],
      action: "Review profile",
      icon: "02",
    },
    {
      title: "Complete the review",
      detail:
        "Your profile and vehicle will need approval. Review the driver agreement, fees and payout arrangements before deciding to join.",
      screen: "Profile under review",
      label: "APPROVAL",
      fields: ["Profile received", "Vehicle review", "Agreement to review"],
      action: "View review status",
      icon: "03",
    },
    {
      title: "Receive a load. Plan your route.",
      detail:
        "For approved drivers, the planned app shows load details, pickup and destination before accepting a suitable job, with progress updates through delivery.",
      screen: "Your next opportunity",
      label: "LOAD REQUEST",
      fields: [
        "Pickup · Mdantsane",
        "Drop-off · Qonce",
        "Load · Household items",
      ],
      action: "Review load details",
      icon: "04",
    },
  ],
};

export function RouteIllustration() {
  return (
    <svg
      className="journey-map"
      viewBox="0 0 320 170"
      role="img"
      aria-label="Illustrative route connecting a pickup point in Mdantsane to a destination in Qonce; not live navigation"
    >
      <rect width="320" height="170" rx="12" fill="#e8f0f8" />
      <path
        d="M-20 35L340 135M20 -20L180 190M110 -20L275 190M-20 120L340 30"
        stroke="#fff"
        strokeWidth="13"
      />
      <path
        d="M40 130L120 105L160 65L265 40"
        fill="none"
        stroke="#1e4779"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <circle
        cx="40"
        cy="130"
        r="9"
        fill="#1e4779"
        stroke="white"
        strokeWidth="4"
      />
      <circle
        cx="265"
        cy="40"
        r="10"
        fill="#009dce"
        stroke="white"
        strokeWidth="4"
      />
      <rect x="17" y="141" width="82" height="21" rx="5" fill="white" />
      <text x="26" y="155" fill="#1e4779" fontSize="10" fontFamily="Arial">
        A · PICKUP
      </text>
      <rect x="191" y="9" width="112" height="21" rx="5" fill="white" />
      <text x="200" y="23" fill="#1e4779" fontSize="10" fontFamily="Arial">
        B · DESTINATION
      </text>
    </svg>
  );
}

export function HowItWorks() {
  const [journey, setJourney] = useState<Journey>("customer");
  const [step, setStep] = useState(0);
  const selectJourney = (value: Journey) => {
    setJourney(value);
    setStep(0);
  };
  const current = journeys[journey][step];
  return (
    <section className="section app-journeys" id="how-it-works">
      <div className="section-heading">
        <div>
          <div className="eyebrow">Two sides. One connected journey.</div>
          <h2>
            From your phone.
            <br />
            To their doorstep.
          </h2>
        </div>
        <p>
          Explore how the app is planned to work for customers and drivers.
          Select a step to preview the journey.
        </p>
      </div>
      <div
        className="journey-switch"
        role="group"
        aria-label="Choose app journey"
      >
        <button
          type="button"
          aria-pressed={journey === "customer"}
          onClick={() => selectJourney("customer")}
        >
          I need a delivery{" "}
          <FiArrowUpRight className="ui-icon" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-pressed={journey === "driver"}
          onClick={() => selectJourney("driver")}
        >
          I want to drive{" "}
          <FiArrowUpRight className="ui-icon" aria-hidden="true" />
        </button>
      </div>
      <div className="journey-layout">
        <div
          className="journey-steps"
          role="group"
          aria-label={`${journey} journey steps`}
        >
          {journeys[journey].map((item, index) => (
            <button
              type="button"
              className={`journey-step ${step === index ? "selected" : ""}`}
              key={item.title}
              onClick={() => setStep(index)}
              aria-pressed={step === index}
            >
              <span className="step-badge">{item.icon}</span>
              <span>
                <strong>{item.title}</strong>
                <span className="step-detail">{item.detail}</span>
              </span>
              <span className="step-arrow">
                <FiArrowUpRight className="ui-icon" aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
        <div className="journey-stage">
          <div className="stage-heading">
            <span>
              {journey === "customer" ? "CUSTOMER APP" : "DRIVER APP"}
            </span>
            <span>0{step + 1} / 04</span>
          </div>
          <div className="journey-device" key={`${journey}-${step}`}>
            <div className="device-status">
              <span>9:41</span>
              <span className="device-indicators" aria-hidden="true">
                <FiWifi className="ui-icon" />
                <FiBattery className="ui-icon" />
              </span>
            </div>
            <div className="device-brand">
              LOG-A-LOAD{" "}
              <FiArrowUpRight className="ui-icon" aria-hidden="true" />
            </div>
            <div className="screen-label">{current.label}</div>
            <h3>{current.screen}</h3>
            {(step === 1 && journey === "customer") || step === 3 ? (
              <RouteIllustration />
            ) : (
              <div className="screen-symbol" aria-hidden="true">
                {step === 0 ? (
                  <FiArrowUpRight className="ui-icon" />
                ) : step === 2 && journey === "driver" ? (
                  <FiCheckCircle className="ui-icon" />
                ) : (
                  <FiPackage className="ui-icon" />
                )}
              </div>
            )}
            <div className="screen-fields">
              {current.fields.map((field, index) => (
                <div key={field}>
                  <span className="field-dot">{index + 1}</span>
                  {field}
                </div>
              ))}
            </div>
            <div className="screen-action">
              {current.action}{" "}
              <FiArrowRight className="ui-icon" aria-hidden="true" />
            </div>
            <p className="screen-disclaimer">
              Illustrative preview · no account or booking created
            </p>
          </div>
          <div className="preview-controls">
            <button
              type="button"
              disabled={step === 0}
              onClick={() => setStep(step - 1)}
              aria-label="Previous app step"
            >
              <FiArrowLeft className="ui-icon" aria-hidden="true" />
            </button>
            <span>
              {current.icon} — {journey === "customer" ? "Customer" : "Driver"}{" "}
              journey
            </span>
            <button
              type="button"
              disabled={step === 3}
              onClick={() => setStep(step + 1)}
              aria-label="Next app step"
            >
              <FiArrowRight className="ui-icon" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      {/* <p className="journey-note">
        The app is in development. Screens, registration steps and features are
        illustrative and may change. Enquiries are open by email.
      </p> */}
    </section>
  );
}
