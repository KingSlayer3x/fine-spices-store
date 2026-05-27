"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { FloatingSpices } from "./spice-icons";

const pureSpices = [
  {
    id: 1,
    name: "Cumin Seeds",
    nameAr: "كمون",
    image: "./images/cumin.jpg",
    origin: "Syria",
    originAr: "سوريا",
    description: "Earthy and warm with a slight citrus note. Essential for Middle Eastern cuisine.",
    descriptionAr: "ترابي ودافئ مع لمسة حمضيات خفيفة. أساسي للمطبخ الشرق أوسطي.",
  },
  {
    id: 2,
    name: "Turmeric",
    nameAr: "كركم",
    image: "./images/turmeric.jpg",
    origin: "India",
    originAr: "الهند",
    description: "Golden spice with earthy flavor and powerful health benefits.",
    descriptionAr: "البهار الذهبي بنكهة ترابية وفوائد صحية قوية.",
  },
  {
    id: 3,
    name: "Paprika",
    nameAr: "بابريكا",
    image: "./images/paprika.jpg",
    origin: "Hungary",
    originAr: "المجر",
    description: "Sweet and smoky red pepper. Adds color and mild heat to dishes.",
    descriptionAr: "فلفل أحمر حلو ومدخن. يضيف اللون والحرارة الخفيفة للأطباق.",
  },
  {
    id: 4,
    name: "Cardamom",
    nameAr: "هال",
    image: "./images/cardamom.jpg",
    origin: "Guatemala",
    originAr: "غواتيمالا",
    description: "The queen of spices. Intensely aromatic with sweet, floral notes.",
    descriptionAr: "ملكة البهارات. عطري بشكل مكثف مع نكهات حلوة وزهرية.",
  },
  {
    id: 5,
    name: "Cinnamon",
    nameAr: "قرفة",
    image: "./images/cinnamon.jpg",
    origin: "Sri Lanka",
    originAr: "سريلانكا",
    description: "Sweet warmth in every stick. Ceylon cinnamon of the finest quality.",
    descriptionAr: "دفء حلو في كل عود. قرفة سيلانية من أجود الأنواع.",
  },
  {
    id: 6,
    name: "Sumac",
    nameAr: "سماق",
    image: "./images/sumac.jpg",
    origin: "Syria",
    originAr: "سوريا",
    description: "Tangy, lemony spice. The secret to authentic fattoush and grilled meats.",
    descriptionAr: "بهار حامض بنكهة الليمون. سر الفتوش الأصيل واللحوم المشوية.",
  },
  {
    id: 7,
    name: "Saffron",
    nameAr: "زعفران",
    image: "./images/saffron.jpg",
    origin: "Iran",
    originAr: "إيران",
    description: "Liquid gold. Precious threads that add color, aroma, and luxury.",
    descriptionAr: "الذهب السائل. خيوط ثمينة تضيف اللون والعطر والفخامة.",
  },
  {
    id: 8,
    name: "Allspice",
    nameAr: "بهار حلو",
    image: "/images/allspice.jpg",
    origin: "Jamaica",
    originAr: "جامايكا",
    description: "A symphony of flavors. Hints of clove, cinnamon, and nutmeg in one.",
    descriptionAr: "سيمفونية من النكهات. لمسات من القرنفل والقرفة وجوزة الطيب في واحد.",
  },
  {
    id: 9,
    name: "Black Pepper",
    nameAr: "فلفل أسود",
    image: "/images/black-pepper.jpg",
    origin: "Vietnam",
    originAr: "فيتنام",
    description: "The king of spices. Bold heat and complex flavor for every dish.",
    descriptionAr: "ملك البهارات. حرارة جريئة ونكهة معقدة لكل طبق.",
  },
  {
    id: 10,
    name: "Coriander",
    nameAr: "كزبرة",
    image: "/images/coriander.jpg",
    origin: "Morocco",
    originAr: "المغرب",
    description: "Citrusy and slightly sweet. A foundation of spice blends worldwide.",
    descriptionAr: "حمضي وحلو قليلاً. أساس خلطات البهارات في جميع أنحاء العالم.",
  },
  {
    id: 11,
    name: "Cloves",
    nameAr: "قرنفل",
    image: "/images/cloves.jpg",
    origin: "Indonesia",
    originAr: "إندونيسيا",
    description: "Intensely aromatic with a warm, sweet flavor. Use sparingly for best results.",
    descriptionAr: "عطري بشكل مكثف مع نكهة دافئة وحلوة. استخدمه باعتدال للحصول على أفضل النتائج.",
  },
  {
    id: 12,
    name: "Nutmeg",
    nameAr: "جوزة الطيب",
    image: "/images/nutmeg.jpg",
    origin: "Indonesia",
    originAr: "إندونيسيا",
    description: "Warm and nutty. Adds depth to both sweet and savory dishes.",
    descriptionAr: "دافئ وبنكهة الجوز. يضيف عمقاً للأطباق الحلوة والمالحة.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export function PureSpices() {
  const { t, language } = useLanguage();
  
  return (
    <section id="spices" className="relative py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <FloatingSpices section="spices" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4 block">
            {t("spices.label")}
          </span>
          <h2 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-6 ${language === "ar" ? "font-sans" : ""}`}>
            {t("spices.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("spices.description")}
          </p>
        </motion.div>

        {/* Spices Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {pureSpices.map((spice) => (
            <motion.article
              key={spice.id}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/30 hover:shadow-xl transition-shadow duration-500"
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={spice.image}
                  alt={language === "ar" ? spice.nameAr : spice.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <span className="text-xs text-white/60 mb-1">
                    {language === "ar" ? spice.originAr : spice.origin}
                  </span>
                  <h3 className={`font-serif text-lg font-semibold text-white leading-tight ${language === "ar" ? "font-sans" : ""}`}>
                    {language === "ar" ? spice.nameAr : spice.name}
                  </h3>
                  <span className="text-sm text-white/70">
                    {language === "ar" ? spice.name : spice.nameAr}
                  </span>
                </div>
              </div>

              {/* Hover Description */}
              <motion.div 
                className="absolute inset-0 bg-primary/95 flex items-center justify-center p-4 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm text-primary-foreground text-center leading-relaxed">
                  {language === "ar" ? spice.descriptionAr : spice.description}
                </p>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
