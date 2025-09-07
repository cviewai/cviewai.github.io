import React from "react";

const ContactPage = () => (
  <div className="bg-white py-12">
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="prose prose-lg max-w-none text-gray-700">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p>
          We'd love to hear from you. Please fill out the form below to get in
          touch with our team.
        </p>
        <div className="mt-8 overflow-hidden" style={{ height: "790px" }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe9rwtgdn6eLJEcSK4bVQVPDxvc0lX1fYjiGnH56Mj0f9_aGQ/viewform?embedded=true"
            width="100%"
            height="841"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            style={{ marginTop: "-50px" }}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;
