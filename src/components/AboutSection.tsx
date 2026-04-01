import { motion } from "framer-motion";
import { GraduationCap, Palette, Code } from "lucide-react";

const education = [
  {
    period: "2024 – 2027",
    title: "B.Sc. IT (Major) + Management Studies (Minor)",
    place: "St. Xavier's College, Mumbai",
  },
  {
    period: "2022 – 2024",
    title: "Higher Secondary",
    place: "St. Xavier's College, Mumbai",
  },
  {
    period: "Till 2022",
    title: "Schooling",
    place: "R.G.S English High School, Ulhasnagar",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase border border-primary/40 text-primary mb-4"
        >
          About Me
        </motion.span>

        <div className="grid md:grid-cols-2 gap-12 mt-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Building the web with{" "}
              <span className="gradient-text">passion & precision</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a frontend developer specializing in HTML, CSS, and JavaScript,
              focused on creating clean, structured, and user-friendly interfaces.
              My design thinking is deeply influenced by my background in art and
              creativity, giving my work a unique aesthetic edge.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Currently expanding into React, Node.js, and data analysis tools,
              I'm passionate about bridging design and functionality to build
              meaningful digital experiences.
            </p>

            <div className="flex gap-6 mt-6">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Code size={18} className="text-primary" /> Frontend Dev
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Palette size={18} className="text-accent" /> UI Design
              </div>
            </div>
          </motion.div>

          {/* Education timeline */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={20} className="text-primary" />
              <h3 className="font-display text-lg font-semibold">Education</h3>
            </div>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass glass-hover rounded-xl p-5"
              >
                <span className="text-xs text-primary font-medium">{edu.period}</span>
                <h4 className="font-display font-semibold mt-1">{edu.title}</h4>
                <p className="text-sm text-muted-foreground">{edu.place}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
