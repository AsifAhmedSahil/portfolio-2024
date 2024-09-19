'use client'
import { SectionHeader } from "@/components/SectionHeader";
import { useState } from "react";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    
    console.log("Form submitted", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contact" className="py-32 bg-gray-900 text-white">
        <SectionHeader
        eyebrow="Contact Me"
        title="Let&apos;s Get in Touch"
        description=" If you have any questions or inquiries, feel free to reach out! I’m always eager to connect and explore new opportunities that align with my skills and passions."
      />
      <div className="container mx-auto flex flex-col md:flex-row gap-8 mt-8">
        {/* Form Section */}
        <div className="flex-1 bg-gray-800 rounded-lg shadow-lg p-8">
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-emerald-700 to-sky-600 text-white py-2  hover:bg-emerald-600 transition animate-pulse"
            >
              Let's get in touch
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="flex-1 bg-gray-800 rounded-lg shadow-lg">
  
  <div className="h-full">
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d146474.3081450746!2d91.77531069999999!3d22.3568499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd01e934af4a3%3A0x1a9f71cdd2b0e4c9!2sChittagong%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1618610123456!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>
</div>

      </div>
    </div>
  );
};
