"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { StarAniseIcon, LeafIcon, CinnamonIcon, PepperIcon, CardamomIcon, CloveIcon } from "./spice-icons";

export function Hero() {
  const { t, language } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const { scrollYProgress: pageScroll } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 120]);

  
  return (
    <section id="top" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/hero-banner.jpg"
          alt="Artisan spice workshop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>


      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.span 
          className="inline-block mb-6 text-sm font-medium tracking-[0.3em] uppercase text-white/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t("hero.location")}
        </motion.span>
        
        <motion.h1 
          className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 leading-[1.1] text-balance ${language === "ar" ? "font-sans" : ""}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t("hero.title1")}
          <br />
          <motion.span 
            className="italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {t("hero.title2")}
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="mx-auto max-w-2xl text-lg sm:text-xl text-white/80 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {t("hero.description")}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-medium rounded-xl"
          >
            <a href="#blends">{t("hero.exploreBlends")}</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-medium bg-transparent rounded-xl"
          >
            <a
              href="https://wa.me/963988130047"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("hero.contactUs")}
            </a>
          </Button>
        </motion.div>
      </div>

    </section>
  );
}
