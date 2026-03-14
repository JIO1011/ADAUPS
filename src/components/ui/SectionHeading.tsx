import { motion } from 'motion/react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      className="text-center mb-10"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">{title}</h2>
      {subtitle && (
        <p className="text-base text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
