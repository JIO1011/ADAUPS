import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../../lib/motion';
import type { LucideIcon } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: {
    label: string;
    icon?: LucideIcon;
    colorClass?: string;
  };
}

export default function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="text-center max-w-3xl mx-auto mb-10"
    >
      {badge && (
        <motion.div variants={itemVariants} className="mb-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${badge.colorClass || 'bg-blue-50 text-blue-600'}`}>
            {badge.icon && <badge.icon className="w-4 h-4" />}
            <span>{badge.label}</span>
          </div>
        </motion.div>
      )}
      <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
        {title}
      </motion.h1>
      <motion.p variants={itemVariants} className="text-base text-slate-600">
        {subtitle}
      </motion.p>
    </motion.div>
  );
}
