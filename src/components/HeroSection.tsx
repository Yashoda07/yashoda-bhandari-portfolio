import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
const profileImg = "https://i.postimg.cc/HkCykRMK/IMG-20260401-162653.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BG */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-32 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center md:text-left"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase border border-primary/40 text-primary mb-6">
            Frontend Developer • IT Student
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="gradient-text">Yashoda Bhandari</span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
            Passionate about building user-focused, responsive web applications
            with clean code. B.Sc. IT student with a growing interest in
            full-stack development and data analysis.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-secondary transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-muted-foreground font-medium hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex-shrink-0"
        >
          <div className="w-56 h-72 md:w-64 md:h-80 rounded-3xl overflow-hidden gradient-border glow">
            <img
              src={profileImg}
              alt="Yashoda Bhandari"
              className="w-full h-full object-cover"
              width={512}
              height={680}
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute -inset-4 rounded-3xl border border-primary/20 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
