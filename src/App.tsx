/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Dna, 
  Database, 
  BarChart3, 
  Microscope, 
  Mail, 
  Linkedin, 
  ExternalLink,
  ChevronRight,
  Target,
  Lightbulb,
  AlertCircle,
  TrendingUp,
  FileText
} from "lucide-react";

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2">{title}</h2>
    {subtitle && <p className="text-gray-500 font-medium">{subtitle}</p>}
    <div className="h-1 w-12 bg-blue-600 mt-4"></div>
  </div>
);

const ArtifactCard = ({ icon: Icon, title, description, tags }: { icon: any, title: string; description: string; tags: string[] }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col h-full"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-white rounded-lg border border-gray-100 shadow-sm">
        <Icon size={20} className="text-blue-600" />
      </div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="px-2 py-1 bg-white border border-gray-100 rounded text-[10px] font-mono text-gray-500 uppercase tracking-wider">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const ReflectionCard = ({ icon: Icon, question, answer }: { icon: any, question: string; answer: string }) => (
  <div className="flex gap-6 p-6 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-colors duration-200">
    <div className="flex-shrink-0">
      <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
        <Icon size={24} />
      </div>
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 mb-2">{question}</h4>
      <p className="text-gray-600 leading-relaxed text-sm">{answer}</p>
    </div>
  </div>
);

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-bottom border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold tracking-tight text-gray-900">June Roh</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#project" className="hover:text-blue-600 transition-colors">Research</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Artifacts</a>
            <a href="#reflection" className="hover:text-blue-600 transition-colors">Reflection</a>
          </div>
          <a h-id="contact-btn" href="#contact" className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Get in touch
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section h-id="hero-section" id="hero" className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-6 uppercase tracking-wider">
                <Microscope size={12} />
                Researcher at Princess Margaret Cancer Centre
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 font-sans">
                June Roh.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                I am a 4th-year Medical Sciences student at Western University, 
                dedicated to bridging clinical practice with molecular diagnostics through 
                translational oncology research.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  h-id="pm-link"
                  href="https://www.uhn.ca/PrincessMargaret" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-sm font-medium text-gray-900 border border-gray-200 px-5 py-2.5 rounded-full hover:bg-gray-50 transition-colors"
                >
                  Princess Margaret Cancer Centre <ExternalLink size={14} />
                </a>
                <a 
                  h-id="western-link"
                  href="https://www.uwo.ca/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-sm font-medium text-gray-900 border border-gray-200 px-5 py-2.5 rounded-full hover:bg-gray-50 transition-colors"
                >
                  Western University <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The B-FIRST Study */}
        <section h-id="project-section" id="project" className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <SectionHeader 
                  title="The B-FIRST Study" 
                  subtitle="Evaluating the clinical utility of longitudinal structural variant tracking in metastatic breast cancer" 
                />
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    The B-FIRST Study evaluates the clinical utility of longitudinal structural variant (SV) tracking in metastatic breast cancer. Using a tumor-informed digital PCR workflow, we achieved a sensitivity of 94% and a negative predictive value of 98% for detecting radiographic progression.
                  </p>
                  <p>
                    This research highlights how molecular signals can provide a significant "lead time" advantage, identifying therapeutic failure weeks before it appears on a standard CT scan. Structural variants (SVs), large-scale genomic rearrangements, serve as highly specific trackers for longitudinal monitoring.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div h-id="stat-box-1" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <div className="text-3xl font-bold text-blue-600 mb-1">94%</div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Sensitivity</div>
                    </div>
                    <div h-id="stat-box-2" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest">NPV (Negative Predictive Value)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <Dna className="text-blue-600" />
                    <span className="font-mono text-sm text-gray-400">RESEARCH_PIVOT_v1.0</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Clinical-Molecular Concordance</h3>
                  <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                    Our analysis demonstrated that longitudinal SV monitoring provides a highly accurate reflection 
                    of clinical treatment response and disease progression, often preceding radiological evidence.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Identification of private SVs for personalized tracking",
                      "Correlation with RECIST radiological findings",
                      "Automated bioinformatic pipeline for SV detection",
                      "Detection of low Allele Frequency (AF) variants"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                        <div h-id={`li-dot-${i}`} className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                {/* Decorative background element */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-200/20 blur-3xl rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Artifacts */}
        <section h-id="skills-section" id="skills" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader 
              title="Skills & Artifacts" 
              subtitle="Technical expertise at the intersection of biology and informatics" 
            />
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: BarChart3,
                  title: "Technical Proficiency",
                  description: "Advanced statistical analysis using R (v4.3.1), specifically for generating longitudinal kinetic plots and confusion matrices.",
                  tags: ["R v4.3.1", "Tidyverse", "ggplot2", "Statistical Modeling"]
                },
                {
                  icon: Database,
                  title: "Clinical Integration",
                  description: "Bridging the gap between raw genomic data (TGC/mL) and clinical milestones (RECIST 1.1).",
                  tags: ["Clinical Milestones", "RECIST 1.1", "Data Fusion"]
                },
                {
                  icon: Microscope,
                  title: "Research Artifacts",
                  description: "Access to the standardized bioinformatic workflows and R-code appendix used for clinical-molecular concordance evaluation.",
                  tags: ["Bioinformatics", "Scripts", "Documentation"]
                }
              ].map((artifact, i) => (
                <motion.div h-id={`artifact-${i}`} key={i} variants={itemVariants}>
                  <ArtifactCard {...artifact} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Deliverables */}
        <section h-id="deliverables-section" id="deliverables" className="py-24 px-6 bg-blue-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Research Deliverables</h2>
              <p className="text-blue-200 font-medium tracking-wide border-l-2 border-blue-400 pl-4 py-1">Official publications and presentations from the B-FIRST study</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Poster Embedding */}
              <div className="lg:col-span-2 space-y-4">
                <div h-id="poster-container" className="relative aspect-video w-full bg-blue-800 rounded-2xl overflow-hidden border border-blue-700 shadow-2xl">
                  <iframe 
                    src="https://drive.google.com/file/d/1pgem5AxKoMulb_Q-NvDZZA7Pu5nNsvb3/preview" 
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay"
                  ></iframe>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-blue-200 font-medium italic">SABCS 2025 Poster Presentation</span>
                  <a 
                    href="https://drive.google.com/file/d/1pgem5AxKoMulb_Q-NvDZZA7Pu5nNsvb3/view?usp=sharing" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-white hover:text-blue-300 flex items-center gap-1 transition-colors"
                  >
                    View Full Screen <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Action Cards */}
              <div h-id="deliverables-actions" className="flex flex-col gap-6">
                <div className="bg-blue-800/50 p-8 rounded-3xl border border-blue-700">
                  <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Full Written Paper</h3>
                  <p className="text-blue-100/80 text-sm leading-relaxed mb-8">
                    Comprehensive study detail encompassing patient cohorts, bioinformatic methodologies, and molecular-clinical correlation analysis.
                  </p>
                  <a 
                    href="https://drive.google.com/file/d/17qi_mEYkk397WipMAiCcWwlI11TIozZ2/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-full bg-white text-blue-900 font-bold py-3 px-6 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    Download Full Paper
                  </a>
                </div>

                <div className="bg-blue-800/50 p-8 rounded-3xl border border-blue-700">
                  <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <ExternalLink size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">SABCS Abstract</h3>
                  <p className="text-blue-100/80 text-sm leading-relaxed mb-8">
                    Official conference abstract published in Clinical Cancer Research.
                  </p>
                  <a 
                    href="https://aacrjournals.org/clincancerres/article/32/4_Supplement/PS2-07-08/773231/Abstract-PS2-07-08-Longitudinal-ctDNA-Tracking-in"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-full border border-blue-400 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-800/80 transition-colors"
                  >
                    View Online Abstract
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reflective Synthesis */}
        <section h-id="reflection-section" id="reflection" className="py-24 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <SectionHeader 
              title="Reflective Synthesis" 
              subtitle="A continuous journey of learning and discovery" 
            />
            <div className="grid md:grid-cols-2 gap-8">
              <ReflectionCard 
                icon={Target}
                question="What went well?"
                answer="The high concordance (94% sensitivity) between our molecular assay and radiographic progression was a major success, proving that patient-specific SVs are robust biomarkers resistant to biological noise like clonal hematopoiesis."
              />
              <ReflectionCard 
                icon={Lightbulb}
                question="What would I change?"
                answer="If I were to repeat this project, I would expand the cohort size and investigate a 'plasma-informed' workflow to see if we can generate these panels without needing archival tissue, which is sometimes unavailable."
              />
              <ReflectionCard 
                icon={AlertCircle}
                question="Gaps in knowledge?"
                answer="A key gap remains in understanding the biological mechanisms behind a ctDNA rise. While we can see the tumor is growing, our current assay doesn't tell us why (e.g., a specific new mutation)."
              />
              <ReflectionCard 
                icon={TrendingUp}
                question="Next steps?"
                answer="The logical next step is a prospective interventional trial, where clinical decisions, like switching a treatment, are made based on the molecular rise rather than waiting for the scan to fail."
              />
            </div>
          </div>
        </section>

        {/* Contact/Footer */}
        <footer h-id="footer" id="contact" className="py-24 px-6">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-8">Let's connect.</h2>
            <div h-id="contact-links" className="flex gap-4 mb-12">
              <a 
                href="mailto:jroh9@uwo.ca" 
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <Mail size={18} />
                <span>Email me</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/june-roh/?skipRedirect=true" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
            <div h-id="footer-bottom" className="w-full pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
              <p>&copy; 2024 June Roh. All rights reserved.</p>
              <div className="flex gap-6">
                <span>Medical Sciences, Western University</span>
                <span>Princess Margaret Cancer Centre</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
