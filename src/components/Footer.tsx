import { motion } from 'framer-motion';

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer
      className="bg-[#0A0A0A] py-12 border-t border-white/5 text-center text-sm text-gray-500"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} ElegantLaunch. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          {/* In a real app, these would navigate using state */}
          <span className="hover:text-neutral-300 cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-neutral-300 cursor-pointer transition-colors">Terms of Service</span>
          <span className="hover:text-neutral-300 cursor-pointer transition-colors">Contact</span>
        </div>
      </div>
    </motion.footer>
  );
}
