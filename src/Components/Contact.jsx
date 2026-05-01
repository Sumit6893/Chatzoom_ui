import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", form);
      alert("Message Sent ✅");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Error ❌");
    }
  };

  return (
    <section id="contact" className="py-16 px-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input name="name" value={form.name} onChange={handleChange}
          placeholder="Your Name" className="w-full p-2 border rounded" />

        <input name="email" value={form.email} onChange={handleChange}
          placeholder="Your Email" className="w-full p-2 border rounded" />

        <textarea name="message" value={form.message} onChange={handleChange}
          placeholder="Your Message" className="w-full p-2 border rounded" />

        <button className="bg-green-600 text-white px-6 py-2 rounded">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;