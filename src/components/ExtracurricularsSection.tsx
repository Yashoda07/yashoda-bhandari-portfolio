import { motion } from "framer-motion";
import { Award, Heart, Palette, Users } from "lucide-react";

const activities = [
  {
    category: "At St. Xavier's College",
    items: [
      {
        icon: Palette,
        title: "Kala Coordinator — MVM",
        period: "July 2025 – January 2026",
      },
      {
        icon: Users,
        title: "Creatives Member — Malhar",
        period: "June 2024 – August 2024",
      },
      {
        icon: Award,
        title: "Volantus — Participant & Winner",
        period: "2022, 2023",
      },
    ],
  },
];

const ExtracurricularsSection = () => {
  return (
    <section id="extracurriculars" className="section-padding section-dark">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase border border-primary/40 text-primary mb-4"
        >
          Extracurriculars
        </motion.span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          Events, Fests &amp; <span className="gradient-text">Social Work</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* College Activities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              At St. Xavier's College
            </h3>
            <div className="space-y-4">
              {activities[0].items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Work */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Social Work in Outreach
            </h3>
            <div className="glass rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Heart size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    Volunteer — Aadharvad Charitable Trust, Kalyan (W)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    January 2025 – July 2025
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed list-disc list-inside">
                <li>
                  Taught underprivileged students core academic subjects and foundational life skills over a 6-month period
                </li>
                <li>
                  Designed visual learning materials (numbers, days, months, body parts) to improve concept retention
                </li>
                <li>
                  Fostered disciplined classroom habits and basic social etiquette through structured guidance
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularsSection;
