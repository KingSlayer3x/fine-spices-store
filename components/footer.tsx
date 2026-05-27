"use client";

import Link from "next/link";
import { Facebook, MessageCircle, MapPin, Phone, ArrowUp as ArrowUpIcon } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { SpicePatternBackground } from "./spice-icons";

export function Footer() {
  const { t, language } = useLanguage();

  const navigation = {
    main: [
      { name: t("nav.home"), href: "#" },
      { name: t("nav.blends"), href: "#blends" },
      { name: t("nav.spices"), href: "#spices" },
      { name: t("nav.recipes"), href: "#recipes" },
      { name: t("nav.about"), href: "#about" },
    ],
    social: [
      {
        name: "WhatsApp",
        href: "https://wa.me/963988130047",
        icon: MessageCircle,
      },
      {
        name: "Facebook",
        href: "https://www.fb.com/habakeeatforspices",
        icon: Facebook,
      },
    ],
  };

  return (
    <footer id="contact" className="relative bg-foreground text-background overflow-hidden">
      <SpicePatternBackground />
      
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {/* Brand */}
          <motion.div 
            className="lg:col-span-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <Link href="/" className="inline-block mb-6">
              <span className={`font-serif text-3xl font-semibold text-background ${language === "ar" ? "font-sans" : ""}`}>
                {language === "en" ? "Habakeeat" : "حبقيات"}
              </span>
              <span className="block text-lg text-background/60 mt-1">
                {language === "en" ? "حبقيات" : "Habakeeat"}
              </span>
            </Link>
            <p className="text-background/70 leading-relaxed max-w-md mb-6">
              {t("footer.description")}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {navigation.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={item.name}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <item.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
            }}
          >
            <h3 className="font-semibold text-background mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              {navigation.main.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className="text-background/70 hover:text-background transition-colors inline-block relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
            }}
          >
            <h3 className="font-semibold text-background mb-4">{t("footer.contactUs")}</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/963988130047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="h-5 w-5 mt-0.5 shrink-0" />
                  <span dir="ltr">+963 988 130 047</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                <span>
                  {language === "en" ? (
                    <>
                      Drikeish, Tartous
                      <br />
                      Syria
                    </>
                  ) : (
                    <>
                      دريكيش، طرطوس
                      <br />
                      سوريا
                    </>
                  )}
                </span>
              </li>
            </ul>

            {/* CTA */}
            <motion.a
              href="https://wa.me/963988130047"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-full hover:bg-accent/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="h-4 w-4" />
              <span>{t("footer.orderWhatsApp")}</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>&copy; {new Date().getFullYear()} {language === "en" ? "Habakeeat" : "حبقيات"}. {t("footer.rights")}</p>
            <p>{t("footer.crafted")}</p>
          </motion.div>
        </div>
      </div>
    <motion.div
  className="fixed bottom-8 right-8 cursor-pointer"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  whileHover={{ y: -4 }}
>
  <a href="#top" aria-label="Back to top">
    <ArrowUpIcon className="h-6 w-6 text-white" />
  </a>
</motion.div>
</footer>
  );
}
