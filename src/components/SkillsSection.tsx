import { motion } from "framer-motion";

const technicalSkills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 70 },
  { name: "Java", level: 75 },
  { name: "MySQL", level: 90 },
  { name: "R Programming", level: 85 },
  { name: "Tableau", level: 55 },
  { name: "Microsoft Excel", level: 75 },
];

const conceptsKnown = [
  "Database",
  "Data Structure and Algorithm",
  "Fundamentals of OOPs Concepts",
  "Discrete Mathematics",
  "Applied Mathematics",
  "Descriptive Statistics",
  "Fundamentals of Management",
  "Organizational Behaviour",
  "Economics for Managers",
  "Elements of Service Sector Management",
];

const coreAreas = ["Web Development", "Software Development", "Data Analysis"];

const softSkills = [
  "Communication",
  "Public Speaking",
  "Problem Solving",
  "Critical Thinking",
  "Creativity",
  "Adaptability",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase border border-primary/40 text-primary mb-4"
        >
          Skills
        </motion.span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          My <span className="gradient-text">tech stack</span> & abilities
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical + Core Areas */}
          <div className="space-y-10">
            <div>
              <h3 className="font-display font-semibold text-lg mb-6">Technical Skills</h3>
              <div className="space-y-5">
                {technicalSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="flex justify-between text-sm mb-1.5">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.08 }}
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-primary)" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold text-lg mb-6">Core Areas</h3>
              <div className="flex flex-wrap gap-3">
                {coreAreas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 rounded-full text-sm font-medium border border-primary/40 text-primary"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Concepts Known + Soft Skills */}
          <div className="space-y-10">
            <div>
              <h3 className="font-display font-semibold text-lg mb-6">Concepts Known</h3>
              <div className="grid grid-cols-2 gap-3">
                {conceptsKnown.map((concept, i) => (
                  <motion.div
                    key={concept}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="glass glass-hover rounded-xl p-4 text-sm text-center"
                  >
                    {concept}
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold text-lg mb-6">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium border border-primary/40 text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
