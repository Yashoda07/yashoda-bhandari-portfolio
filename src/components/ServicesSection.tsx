import { motion } from "framer-motion";
import { Paintbrush, Code, Smartphone, Zap } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Web Design",
    description:
      "Creating visually appealing, intuitive interfaces with a focus on usability, aesthetics, and user experience.",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building interactive UIs with clean, structured, and readable code using HTML, CSS, and JavaScript.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Ensuring seamless experiences across all devices with mobile-first, responsive layouts.",
  },
  {
    icon: Zap,
    title: "Performance & Accessibility",
    description:
      "Optimizing for fast load times and ensuring accessible, inclusive web experiences for all users.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase border border-primary/40 text-primary mb-4"
        >
          Services
        </motion.span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          What I <span className="gradient-text">offer</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass glass-hover rounded-2xl p-6 text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
