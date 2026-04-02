import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Thank you for your message! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding section-dark">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase border border-primary/40 text-primary mb-4"
        >
          Contact
        </motion.span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          Let's <span className="gradient-text">connect</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to new opportunities, collaborations, or just a
              friendly hello. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:yashoda.bhandari@email.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} className="text-primary" />
                yashoda.bhandari@email.com
              </a>
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Phone size={18} className="text-primary" />
                +91 XXXXXXXXXX
              </a>
              <a
                href="https://www.linkedin.com/in/yashoda-bhandari-0b2783378/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={18} className="text-primary" />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/Yashoda07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Github size={18} className="text-primary" />
                GitHub Profile
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 space-y-5"
          >
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary rounded-xl px-4 py-3 text-sm text-foreground border border-border focus:border-primary outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary rounded-xl px-4 py-3 text-sm text-foreground border border-border focus:border-primary outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary rounded-xl px-4 py-3 text-sm text-foreground border border-border focus:border-primary outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow"
            >
              <Send size={16} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
