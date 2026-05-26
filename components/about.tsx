"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { FloatingSpices } from "./spice-icons";

export function About() {
  const { t, language } = useLanguage();

  const features = [
    {
      title: t("about.feature1.title"),
      description: t("about.feature1.desc"),
    },
    {
      title: t("about.feature2.title"),
      description: t("about.feature2.desc"),
    },
    {
      title: t("about.feature3.title"),
      description: t("about.feature3.desc"),
    },
    {
      title: t("about.feature4.title"),
      description: t("about.feature4.desc"),
    },
  ];
  
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      <FloatingSpices section="about" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-spices.jpg"
                alt="Artisan spice collection"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <motion.div 
              className={`absolute -bottom-8 ${language === "ar" ? "-left-4 lg:-left-8" : "-right-4 lg:-right-8"} bg-accent text-accent-foreground p-6 rounded-2xl shadow-2xl max-w-xs`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <p className={`font-serif text-3xl font-semibold mb-2 ${language === "ar" ? "font-sans" : ""}`}>
                {t("about.since")}
              </p>
              <p className="text-sm opacity-90">
                {t("about.sinceDesc")}
              </p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary-foreground/60 mb-4 block">
              {t("about.label")}
            </span>
            <h2 className={`font-serif text-4xl sm:text-5xl font-semibold mb-6 ${language === "ar" ? "font-sans" : ""}`}>
              {t("about.title")}
            </h2>
            <div className="space-y-4 text-primary-foreground/80 text-lg leading-relaxed mb-10">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </div>

            {/* Features Grid */}
            <motion.div 
              className="grid sm:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title} 
                  className={`border-${language === "ar" ? "r" : "l"}-2 border-accent ${language === "ar" ? "pr-4" : "pl-4"}`}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { duration: 0.4, delay: index * 0.1 }
                    }
                  }}
                >
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
