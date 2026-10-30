export function FAQ() {
  return (
    <section className="section faq" id="faq">
      <div className="eyebrow" style={{ marginBottom: "20px" }}>
        {"A few useful answers"}
      </div>
      <h2>{"Before you load up."}</h2>
      <details>
        <summary>{"Can I book a load right now?"}</summary>
        <p>
          {
            "You can send an enquiry to bookings@log-a-load.co.za. Our team will confirm whether your route and load can be accommodated. Sending an enquiry does not create a confirmed booking."
          }
        </p>
      </details>
      <details>
        <summary>{"Where will Log-A-Load operate?"}</summary>
        <p>
          {
            "Our initial focus is Qonce / King William’s Town and the Eastern Cape. Our ambition is to connect all nine provinces. Please enquire about your specific pickup and delivery locations."
          }
        </p>
      </details>
      <details>
        <summary>{"How much does transport cost?"}</summary>
        <p>
          {
            "Pricing will be confirmed for your particular load and route before you agree to a booking. Include the load size, pickup, destination and preferred date when enquiring."
          }
        </p>
      </details>
      <details>
        <summary>{"Is the mobile app available to download?"}</summary>
        <p>
          {
            "The app is in development and is not yet available on the app stores. Contact us for launch updates."
          }
        </p>
      </details>
      <details>
        <summary>{"Can I make a payment on this website?"}</summary>
        <p>
          {
            "This website currently accepts enquiries only. Online payments are not enabled. Payment methods, cancellation conditions and any applicable charges must be confirmed with the team before you pay."
          }
        </p>
      </details>
    </section>
  );
}
