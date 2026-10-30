import { FiHome, FiShoppingBag, FiTool } from "react-icons/fi";
export function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-heading">
        <div>
          <div className="eyebrow">{"Room for your next move"}</div>
          <h2>
            {"Different loads."}
            <br />
            {"One starting point."}
          </h2>
        </div>
        <p>
          {
            "Tell us what you need to transport. Vehicle suitability and service availability are confirmed with each enquiry."
          }
        </p>
      </div>
      <div className="service-grid">
        <article className="service">
          <FiHome className="icon" aria-hidden="true" />
          <h3>{"Home & everyday"}</h3>
          <p>
            {
              "Furniture, household items and the bulky things that won’t fit in your car."
            }
          </p>
        </article>
        <article className="service">
          <FiShoppingBag className="icon" aria-hidden="true" />
          <h3>{"Business & retail"}</h3>
          <p>
            {
              "Stock, shop purchases and deliveries that keep your business moving."
            }
          </p>
        </article>
        <article className="service">
          <FiTool className="icon" aria-hidden="true" />
          <h3>{"Building & projects"}</h3>
          <p>
            {
              "Materials and equipment for your next job, subject to load and vehicle requirements."
            }
          </p>
        </article>
      </div>
    </section>
  );
}
