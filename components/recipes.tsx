"use client";

import Image from "next/image";
import { Clock, Users, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { FloatingSpices } from "./spice-icons";

const recipes = [
  {
    id: 1,
    title: "Classic Syrian Shawarma",
    titleAr: "شاورما سورية كلاسيكية",
    image: "/images/shawarma-spice.jpg",
    time: "45 min",
    timeAr: "45 دقيقة",
    serves: "4-6",
    difficulty: "Medium",
    difficultyAr: "متوسط",
    spiceUsed: "Shawarma Spice",
    spiceUsedAr: "بهارات شاورما",
    description: "Tender, aromatic chicken or lamb marinated in our signature shawarma blend. Served with garlic sauce and pickles.",
    descriptionAr: "دجاج أو لحم طري وعطري متبل بخلطة الشاورما المميزة. يقدم مع صلصة الثوم والمخللات.",
  },
  {
    id: 2,
    title: "Authentic Kabsa Rice",
    titleAr: "كبسة أصلية",
    image: "/images/kabsa-spice.jpg",
    time: "1.5 hrs",
    timeAr: "ساعة ونصف",
    serves: "6-8",
    difficulty: "Medium",
    difficultyAr: "متوسط",
    spiceUsed: "Kabsa Spice",
    spiceUsedAr: "بهارات كبسة",
    description: "Saudi Arabia's beloved rice dish. Fragrant basmati with tender meat and our aromatic kabsa blend.",
    descriptionAr: "طبق الأرز السعودي المحبوب. أرز بسمتي عطري مع لحم طري وخلطة الكبسة العطرية.",
  },
  {
    id: 3,
    title: "Crispy Kibbeh",
    titleAr: "كبة مقلية مقرمشة",
    image: "/images/kibbeh-spice.jpg",
    time: "1 hr",
    timeAr: "ساعة",
    serves: "4-6",
    difficulty: "Advanced",
    difficultyAr: "متقدم",
    spiceUsed: "Kibbeh Spice",
    spiceUsedAr: "بهارات كبة",
    description: "Golden, crispy shells with seasoned meat filling. A Syrian classic perfected with our kibbeh blend.",
    descriptionAr: "قشرة ذهبية مقرمشة مع حشوة لحم متبلة. كلاسيكية سورية مثالية بخلطة الكبة.",
  },
  {
    id: 4,
    title: "Grilled Kofta Skewers",
    titleAr: "أسياخ كفتة مشوية",
    image: "/images/kofta-spice.jpg",
    time: "30 min",
    timeAr: "30 دقيقة",
    serves: "4",
    difficulty: "Easy",
    difficultyAr: "سهل",
    spiceUsed: "Kofta Spice",
    spiceUsedAr: "بهارات كفتة",
    description: "Juicy meat skewers with the perfect balance of spices. Great for barbecues and family gatherings.",
    descriptionAr: "أسياخ لحم طرية بتوازن مثالي من البهارات. رائعة للشواء والتجمعات العائلية.",
  },
  {
    id: 5,
    title: "Muhammara Dip",
    titleAr: "صلصة المحمرة",
    image: "/images/muhammara-spice.jpg",
    time: "20 min",
    timeAr: "20 دقيقة",
    serves: "6-8",
    difficulty: "Easy",
    difficultyAr: "سهل",
    spiceUsed: "Muhammara Spice",
    spiceUsedAr: "بهارات محمرة",
    description: "Creamy roasted red pepper and walnut dip. A Syrian appetizer that steals the show.",
    descriptionAr: "صلصة كريمية من الفلفل الأحمر المشوي والجوز. مقبلات سورية تخطف الأضواء.",
  },
  {
    id: 6,
    title: "Upside-Down Maqluba",
    titleAr: "مقلوبة",
    image: "/images/maqluba-spice.jpg",
    time: "1.5 hrs",
    timeAr: "ساعة ونصف",
    serves: "6-8",
    difficulty: "Medium",
    difficultyAr: "متوسط",
    spiceUsed: "Maqluba Spice",
    spiceUsedAr: "بهارات مقلوبة",
    description: "The dramatic flip everyone loves. Layered rice, vegetables, and meat with golden spices.",
    descriptionAr: "القلبة المثيرة التي يحبها الجميع. طبقات من الأرز والخضار واللحم مع بهارات ذهبية.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Recipes() {
  const { t, language } = useLanguage();
  
  return (
    <section id="recipes" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <FloatingSpices section="recipes" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4 block">
              {t("recipes.label")}
            </span>
            <h2 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-6 ${language === "ar" ? "font-sans" : ""}`}>
              {t("recipes.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("recipes.description")}
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              variant="outline"
              className="w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl"
            >
              <a
                href="https://wa.me/963988130047?text=I'd%20like%20to%20learn%20more%20recipes!"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("recipes.requestMore")}
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Recipes Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {recipes.map((recipe) => (
            <motion.article
              key={recipe.id}
              variants={itemVariants}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-shadow duration-500"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={language === "ar" ? recipe.titleAr : recipe.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div 
                  className="absolute top-4 left-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="px-4 py-2 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    {language === "ar" ? recipe.spiceUsedAr : recipe.spiceUsed}
                  </span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className={`font-serif text-xl font-semibold text-foreground group-hover:text-accent transition-colors ${language === "ar" ? "font-sans" : ""}`}>
                    {language === "ar" ? recipe.titleAr : recipe.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {language === "ar" ? recipe.descriptionAr : recipe.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{language === "ar" ? recipe.timeAr : recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{recipe.serves}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <ChefHat className="h-4 w-4" />
                    <span>{language === "ar" ? recipe.difficultyAr : recipe.difficulty}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
