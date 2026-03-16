import { PhoneIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const router = useRouter();
  const navItems = [
    { label: "Home", href: "home" },
    { label: "Reviews", href: "reviews" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" },
  ];
  const handleScrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      // Navigate to home first
      router.push("/");
    } else {
      // Already on home, just scroll
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -100;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    setOpen(false);
  };
  // Fade-in variants for overlay
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-background dark:bg-zinc-800 z-30 md:hidden"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => setOpen(false)}
        >
          {/* Centered Sidebar Content */}
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center text-secondary-800 dark:text-blue-100 gap-8 text-2xl font-medium pt-8"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Nav Items */}
            <motion.div
              className="flex flex-col items-center gap-6 text-2xl font-medium"
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleScrollTo(item.href)}
                  className="px-6 py-3 rounded-lg hover:bg-white/20 transition"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
            <div className="flex items-center gap-2 text-secondary-800 dark:text-blue-100 bg-gray-200 dark:bg-zinc-700 transition-colors duration-300 p-2 rounded-lg ">
              <PhoneIcon size={20} />
              <a className=" text-sm font-semibold " href="tel:(437) 505-2388">
                (437) 505-2388
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
