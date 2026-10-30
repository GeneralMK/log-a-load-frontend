import { useEffect } from "react";
export function useWebsiteInteractions() {
  useEffect(() => {
    const menu = document.querySelector(".menu"),
      nav = document.querySelector("nav");
    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", open);
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        menu.setAttribute("aria-expanded", "false");
      }),
    );
    document.getElementById("enquiry").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim(),
        email = document.getElementById("email").value.trim(),
        interest = document.getElementById("interest").value,
        message = document.getElementById("message").value.trim();
      if (!name || !message) return;
      location.href =
        "mailto:bookings@log-a-load.co.za?subject=" +
        encodeURIComponent(interest + " — " + name) +
        "&body=" +
        encodeURIComponent(
          "Name: " +
            name +
            "\nEmail: " +
            email +
            "\nInterest: " +
            interest +
            "\n\n" +
            message,
        );
      document.querySelector(".form-status").textContent =
        "Your email draft is ready. If your email app did not open, email bookings@log-a-load.co.za directly.";
    });
    const policies = {
      privacy: [
        "Privacy notice",
        "This introduction website does not provide user accounts, process payments or store enquiry form submissions on a server. The enquiry form prepares an email in your own email application.",
        "If you choose to email us, Log-A-Load (Pty) Ltd receives the information you include and uses it to respond to your enquiry and discuss the requested service. Do not send sensitive documents through this form.",
        "This site uses no advertising cookies or analytics. Your browser may request fonts from Google Fonts, which receives standard connection information.",
        "For questions about personal information, access, corrections or deletion requests, contact bookings@log-a-load.co.za.",
      ],
      terms: [
        "Website terms",
        "This website introduces Log-A-Load (Pty) Ltd, registration number 2023/996751/07, based in Mdantsane, East London, South Africa.",
        "Information about the app describes a service in development. Illustrations are conceptual. Availability, routes, vehicles, prices and features are subject to confirmation.",
        "An enquiry does not confirm a booking or driver appointment. Transport bookings and driver participation require separately agreed terms. No payment is collected on this website.",
        "For service enquiries, contact bookings@log-a-load.co.za. For accounts, contact accounts@log-a-load.co.za.",
      ],
      cancellation: [
        "Cancellations & refunds",
        "This website does not accept payments or confirm bookings, so submitting an enquiry carries no website booking charge.",
        "Before accepting a transport booking or making payment, request the applicable cancellation conditions, refund arrangements, service price and fulfilment details in writing from the Log-A-Load team.",
        "To discuss a cancellation or refund relating to a separately arranged service, contact bookings@log-a-load.co.za and copy accounts@log-a-load.co.za. Include your booking reference and relevant details, without sharing banking credentials.",
        "Any applicable statutory consumer rights remain unaffected.",
      ],
    };
    const dialog = document.getElementById("policy");
    document.querySelectorAll("[data-policy]").forEach((b) =>
      b.addEventListener("click", () => {
        const [title, ...paragraphs] = policies[b.dataset.policy];
        document.getElementById("policy-title").textContent = title;
        document.getElementById("policy-body").replaceChildren(
          ...paragraphs.map((text) => {
            const p = document.createElement("p");
            p.textContent = text;
            return p;
          }),
        );
        dialog.showModal();
      }),
    );
    document.getElementById("close-policy").onclick = () => dialog.close();
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) {
        const r = dialog.getBoundingClientRect();
        if (
          e.clientX < r.left ||
          e.clientX > r.right ||
          e.clientY < r.top ||
          e.clientY > r.bottom
        )
          dialog.close();
      }
    });
  }, []);
}
