import { motion } from "framer-motion";
import { Target, Briefcase, TrendingUp, Lightbulb } from "lucide-react";

const goals = [
  { icon: Briefcase, text: "Actively seeking internship opportunities" },
  { icon: TrendingUp, text: "Strong foundational knowledge in web technologies" },
  { icon: Lightbulb, text: "Eager for real-world project exposure" },
  { icon: Target, text: "Goal: build meaningful, scalable web solutions" },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding section-light">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase border border-primary/40 text-primary mb-4"
        >
          Career Objective
        </motion.span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
          Ready to <span className="gradient-text">grow & contribute</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          As a fresher with a strong academic foundation and hands-on project
          experience, I'm eager to apply my skills in a professional
          environment and learn from industry mentors.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-6 flex flex-col items-center text-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <goal.icon size={18} className="text-primary" />
              </div>
              <p className="text-sm">{goal.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
