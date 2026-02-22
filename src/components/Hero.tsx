import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <motion.section
      className="relative z-10 overflow-hidden py-24 md:py-32 bg-[#0A0A0A] text-neutral-200"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 bg-[length:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_80%)]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.p
          className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-bold text-indigo-400 mb-6 px-3 py-1 bg-indigo-400/10 rounded-full border border-indigo-400/20"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-indigo-300 to-purple-300 text-transparent bg-clip-text">
            Launching Soon
          </span>
          <ChevronRight className="ml-1 w-3 h-3 text-indigo-400" />
        </motion.p>

        <motion.h1
          className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 to-neutral-400 mb-6"
          variants={itemVariants}
        >
          Reimagine <br /> your workflow.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-400 leading-relaxed font-light max-w-3xl mx-auto mb-10"
          variants={itemVariants}
        >
          Elevate your team's productivity with intuitive tools and seamless collaboration.
          Experience the future of work, designed for the modern enterprise.
        </motion.p>

        <motion.div className="flex justify-center space-x-4" variants={itemVariants}>
          <motion.button
            className="group relative inline-flex h-12 items-center justify-center rounded-full bg-white px-8 font-medium text-black transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Get Started
            <span className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600 transition-transform group-hover:translate-x-1">
              <ChevronRight className="w-full h-full" />
            </span>
          </motion.button>
          <motion.button
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-8 font-medium text-neutral-200 transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
