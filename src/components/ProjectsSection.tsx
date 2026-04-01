import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "KarigariKart",
    description:
      "A structured web project focusing on responsive design and usability. Emphasizes layout clarity, UI polish, and frontend logic for a seamless shopping experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://yashoda07.github.io/frontend-projects/KaarigariKart/html-files/",
    github: "https://github.com/Yashoda07/frontend-projects/tree/main/KaarigariKart",
  },
  {
    title: "YouTube UI Clone",
    description:
      "A pixel-perfect recreation of YouTube's interface, demonstrating deep understanding of layout structuring, responsiveness, and real-world design patterns.",
    tags: ["HTML", "CSS", "Responsive"],
    liveDemo: "https://yashoda07.github.io/frontend-projects/youtube-clone/",
    github: "https://github.com/Yashoda07/frontend-projects/tree/main/youtube-clone",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase border border-primary/40 text-primary mb-4"
        >
          Projects
        </motion.span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="gradient-text">work</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Projects are continuously being refined — focusing on improving
          design, performance, and interactivity.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass glass-hover rounded-2xl p-8 group"
            >
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.liveDemo || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a
                  href={project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={14} /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
