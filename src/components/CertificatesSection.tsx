import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certificates = [
  {
    title: "Certificate Title 1",
    name: "Issuing Organization",
    period: "Month Year",
    description: "Brief description of the certificate and what it covers.",
    url: "https://example.com/certificate1",
  },
  {
    title: "Certificate Title 2",
    name: "Issuing Organization",
    period: "Month Year",
    description: "Brief description of the certificate and what it covers.",
    url: "https://example.com/certificate2",
  },
  {
    title: "Certificate Title 3",
    name: "Issuing Organization",
    period: "Month Year",
    description: "Brief description of the certificate and what it covers.",
    url: "https://example.com/certificate3",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="section-padding section-dark">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase border border-primary/40 text-primary mb-4"
        >
          Certificates
        </motion.span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          My <span className="gradient-text">certifications</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass glass-hover rounded-2xl p-6 group flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Award size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">
                {cert.title}
              </h3>
              <p className="text-sm text-primary/80 font-medium mb-2">
                {cert.name}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                <Calendar size={13} />
                {cert.period}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {cert.description}
              </p>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
              >
                View certificate here
                <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
