import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="hero-bg-man min-h-screen flex flex-col items-center justify-center bg-black text-white px-4"
    >
      {/* ===== Page Heading ===== */}
      <h1
        id="contact-heading"
        className="text-5xl font-bold text-white mb-10 text-center"
      >
        Contact
      </h1>

      {/* ===== Container: Info + Form ===== */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 w-full max-w-5xl">
        
        {/* ============================= */}
        {/* LEFT SIDE: Business Contact Info */}
        {/* ============================= */}
        <aside
          className="glass p-10 w-full md:w-1/3 space-y-6"
          aria-label="Contact Information"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            Ashley — 46 Window Tinting
          </h2>

          {/* Phone */}
          <div className="flex items-center gap-3" aria-label="Phone number">
            <Phone className="text-blue-400 w-5 h-5" />
            <p className="text-gray-300">022 037 0369</p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3" aria-label="Email address">
            <Mail className="text-blue-400 w-5 h-5" />
            <p className="text-gray-300">as46tint@gmail.com</p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3" aria-label="Business location">
            <MapPin className="text-blue-400 w-5 h-5" />
            <p className="text-gray-300">Auckland, New Zealand</p>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-3 mt-6" aria-label="Business hours">
            <Clock className="text-blue-400 w-5 h-5 mt-1" />
            <p className="text-gray-300 text-sm leading-relaxed">
              <span className="font-semibold">Business Hours</span><br />
              Mon–Fri: 8:30 AM – 5:30 PM<br />
              Sat: By Appointment<br />
              Sun: Closed
            </p>
          </div>
        </aside>

        {/* ============================= */}
        {/* RIGHT SIDE: Contact Form */}
        {/* ============================= */}
        <form
          action="https://formspree.io/f/your_form_id"
          method="POST"
          aria-labelledby="contact-form-heading"
          className="glass p-8 rounded-2xl w-full md:w-2/3 space-y-6"
        >
          <h2 id="contact-form-heading" className="sr-only">
            Send us a message
          </h2>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full name"
              aria-label="Your full name"
              required
              className="w-full p-3 rounded-lg bg-black/40 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="_replyto"
              placeholder="you@example.com"
              aria-label="Your email address"
              required
              className="w-full p-3 rounded-lg bg-black/40 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="How can we help you today?"
              aria-label="Your message"
              required
              className="w-full p-3 rounded-lg bg-black/40 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all"
            aria-label="Send message button"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}
