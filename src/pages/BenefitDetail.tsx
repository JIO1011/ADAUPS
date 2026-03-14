import { useParams, Link, Navigate } from 'react-router-dom';
import { benefitsData } from '../data';
import { ArrowLeft, CheckCircle2, FileText, MapPin, Phone, Info } from 'lucide-react';
import { categoryIconMap, defaultCategoryIcon } from '../lib/icons';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../lib/motion';

export default function BenefitDetail() {
  const { benefitId } = useParams<{ benefitId: string }>();
  const benefit = benefitsData.find(b => b.id === benefitId);

  if (!benefit) {
    return <Navigate to="/beneficios" replace />;
  }

  const IconComponent = categoryIconMap[benefit.category] || defaultCategoryIcon;

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Link */}
        <motion.div initial="hidden" animate="visible" variants={itemVariants}>
          <Link to="/beneficios" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Beneficios
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mr-6">
                <IconComponent className="w-8 h-8" />
              </div>
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-2">
                  {benefit.category}
                </span>
                <h1 className="text-3xl font-bold text-slate-900">{benefit.title}</h1>
              </div>
            </div>

            {/* Logo if available */}
            {benefit.images && benefit.images.length > 0 && (
              <div className="hidden md:block h-16 w-32 relative">
                <img
                  src={benefit.images[0]}
                  alt={`${benefit.title} logo`}
                  className="h-full w-full object-contain mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">
            {benefit.description}
          </p>
          </motion.div>

          {/* Content Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">

          {/* Main Content Column */}
          <div className="md:col-span-2 space-y-8">

            {/* Condiciones */}
            {benefit.conditions && benefit.conditions.length > 0 && (
              <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <CheckCircle2 className="w-6 h-6 mr-3 text-emerald-500" />
                  Condiciones y Beneficios
                </h2>
                <ul className="space-y-4">
                  {benefit.conditions.map((condition, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3"></div>
                      <span className="text-slate-700">{condition}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Additional Images */}
            {benefit.images && benefit.images.length > 1 && (
              <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Información Adicional</h2>
                <div className="grid grid-cols-1 gap-4">
                  {benefit.images.slice(1).map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Detalle ${index + 1}`}
                      className="rounded-lg w-full object-contain border border-slate-100"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Cómo usar */}
            <div className="bg-slate-900 rounded-2xl p-6 shadow-sm text-white">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center">
                <Info className="w-4 h-4 mr-2" />
                Cómo acceder
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                {benefit.howToUse}
              </p>
            </div>

            {/* Ubicaciones */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3 flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Ubicaciones
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                {benefit.locations}
              </p>
            </div>

            {/* Documentos */}
            {benefit.documents && benefit.documents.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
                  Documentos
                </h3>
                <ul className="space-y-3">
                  {benefit.documents.map((doc, index) => (
                    <li key={index}>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start text-sm text-blue-600 hover:text-blue-800 transition-colors group"
                      >
                        <FileText className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-blue-400 group-hover:text-blue-600" />
                        <span className="underline-offset-2 hover:underline">{doc.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contacto */}
            <div className="bg-blue-50 rounded-2xl p-6 shadow-sm border border-blue-100">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-800 mb-3 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Contacto
              </h3>
              <p className="text-blue-900 text-sm leading-relaxed">
                {benefit.contact}
              </p>
            </div>

            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
