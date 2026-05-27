"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { FloatingSpices } from "./spice-icons";

const spiceBlends = [
  {
    id: 1,
    name: "Shawarma Spice",
    nameAr: "بهارات شاورما",
    image: "./images/shawarma-spice.jpg",
    description: "A warm, aromatic blend of cumin, coriander, turmeric, and paprika. Perfect for marinating chicken, beef, or lamb.",
    descriptionAr: "خلطة دافئة وعطرة من الكمون والكزبرة والكركم والبابريكا. مثالية لتتبيل الدجاج أو اللحم البقري أو الضأن.",
    ingredients: ["Cumin", "Coriander", "Turmeric", "Paprika", "Cinnamon", "Cardamom"],
    ingredientsAr: ["كمون", "كزبرة", "كركم", "بابريكا", "قرفة", "هال"],
  },
  {
    id: 2,
    name: "Kabsa Spice",
    nameAr: "بهارات كبسة",
    image: "./images/kabsa-spice.jpg",
    description: "The heart of Arabian rice dishes. Rich with cardamom, saffron, and bay leaves for authentic Gulf flavor.",
    descriptionAr: "قلب أطباق الأرز العربية. غنية بالهال والزعفران وورق الغار للحصول على نكهة خليجية أصيلة.",
    ingredients: ["Cardamom", "Saffron", "Bay Leaves", "Cinnamon", "Black Lime", "Cloves"],
    ingredientsAr: ["هال", "زعفران", "ورق غار", "قرفة", "ليمون أسود", "قرنفل"],
  },
  {
    id: 3,
    name: "Kibbeh Spice",
    nameAr: "بهارات كبة",
    image: "./images/kibbeh-spice.jpg",
    description: "Traditional Syrian blend for the beloved kibbeh. Warm allspice meets fragrant cinnamon and nutmeg.",
    descriptionAr: "خلطة سورية تقليدية للكبة المحبوبة. البهار الحلو الدافئ يلتقي بالقرفة العطرة وجوزة الطيب.",
    ingredients: ["Allspice", "Cinnamon", "Black Pepper", "Nutmeg", "Cumin"],
    ingredientsAr: ["بهار حلو", "قرفة", "فلفل أسود", "جوزة الطيب", "كمون"],
  },
  {
    id: 4,
    name: "Kofta Spice",
    nameAr: "بهارات كفتة",
    image: "./images/kofta-spice.jpg",
    description: "Perfectly balanced for grilled meat patties. Cumin and coriander with hints of parsley and onion.",
    descriptionAr: "متوازنة تماماً لأقراص اللحم المشوية. الكمون والكزبرة مع لمسات من البقدونس والبصل.",
    ingredients: ["Cumin", "Coriander", "Parsley", "Onion", "Black Pepper", "Paprika"],
    ingredientsAr: ["كمون", "كزبرة", "بقدونس", "بصل", "فلفل أسود", "بابريكا"],
  },
  {
    id: 5,
    name: "Muhammara Spice",
    nameAr: "بهارات محمرة",
    image: "./images/muhammara-spice.jpg",
    description: "For the famous Syrian red pepper dip. Smoky Aleppo pepper with cumin and pomegranate undertones.",
    descriptionAr: "لصلصة الفلفل الأحمر السورية الشهيرة. فلفل حلب المدخن مع الكمون ونكهات الرمان.",
    ingredients: ["Aleppo Pepper", "Cumin", "Coriander", "Garlic", "Sumac"],
    ingredientsAr: ["فلفل حلب", "كمون", "كزبرة", "ثوم", "سماق"],
  },
  {
    id: 6,
    name: "Potato Tray Spice",
    nameAr: "بهارات صينية بطاطا",
    image: "./images/potato-tray-spice.jpg",
    description: "Transform simple potatoes into a feast. Paprika, garlic, and herbs create irresistible roasted potatoes.",
    descriptionAr: "حول البطاطا البسيطة إلى وليمة. البابريكا والثوم والأعشاب تخلق بطاطا مشوية لا تقاوم.",
    ingredients: ["Paprika", "Garlic", "Rosemary", "Thyme", "Black Pepper", "Onion"],
    ingredientsAr: ["بابريكا", "ثوم", "إكليل الجبل", "زعتر", "فلفل أسود", "بصل"],
  },
  {
    id: 7,
    name: "Soup Spice",
    nameAr: "بهارات شوربا",
    image: "./images/soup-spice.jpg",
    description: "Warmth in every bowl. A comforting blend of bay, pepper, and herbs for hearty soups and stews.",
    descriptionAr: "دفء في كل طبق. خلطة مريحة من ورق الغار والفلفل والأعشاب للشوربات واليخنات الشهية.",
    ingredients: ["Bay Leaves", "Black Pepper", "Coriander", "Cumin", "Turmeric"],
    ingredientsAr: ["ورق غار", "فلفل أسود", "كزبرة", "كمون", "كركم"],
  },
  {
    id: 8,
    name: "Maqluba Spice",
    nameAr: "بهارات مقلوبة",
    image: "./images/maqluba-spice.jpg",
    description: "For the upside-down rice masterpiece. Turmeric, allspice, and cardamom create golden perfection.",
    descriptionAr: "لتحفة الأرز المقلوبة. الكركم والبهار الحلو والهال يخلقون الكمال الذهبي.",
    ingredients: ["Turmeric", "Allspice", "Cardamom", "Cinnamon", "Black Pepper"],
    ingredientsAr: ["كركم", "بهار حلو", "هال", "قرفة", "فلفل أسود"],
  },
  {
    id: 9,
    name: "Biryani Spice",
    nameAr: "بهارات برياني",
    image: "./images/biryani-spice.jpg",
    description: "Luxurious blend for royal rice dishes. Saffron threads meet cardamom and star anise.",
    descriptionAr: "خلطة فاخرة لأطباق الأرز الملكية. خيوط الزعفران تلتقي بالهال واليانسون النجمي.",
    ingredients: ["Saffron", "Cardamom", "Star Anise", "Cloves", "Cinnamon", "Bay Leaves"],
    ingredientsAr: ["زعفران", "هال", "يانسون نجمي", "قرنفل", "قرفة", "ورق غار"],
  },
  {
    id: 10,
    name: "Falafel Spice",
    nameAr: "بهارات فلافل",
    image: "./images/falafel-spice.jpg",
    description: "Authentic street food flavor. Fresh coriander and cumin for crispy, flavorful falafel.",
    descriptionAr: "نكهة طعام الشارع الأصيلة. الكزبرة الطازجة والكمون لفلافل مقرمشة ولذيذة.",
    ingredients: ["Coriander", "Cumin", "Parsley", "Garlic", "Onion", "Black Pepper"],
    ingredientsAr: ["كزبرة", "كمون", "بقدونس", "ثوم", "بصل", "فلفل أسود"],
  },
  {
    id: 11,
    name: "Taouk Spice",
    nameAr: "بهارات طاووق",
    image: "./images/taouk-spice.jpg",
    description: "Lebanese-style chicken perfection. Garlic, paprika, and oregano create juicy, charred chicken.",
    descriptionAr: "كمال الدجاج على الطريقة اللبنانية. الثوم والبابريكا والأوريغانو تخلق دجاجاً طرياً ومشوياً.",
    ingredients: ["Paprika", "Garlic", "Oregano", "Sumac", "Cumin", "Coriander"],
    ingredientsAr: ["بابريكا", "ثوم", "أوريغانو", "سماق", "كمون", "كزبرة"],
  },
  {
    id: 12,
    name: "Za'atar Blend",
    nameAr: "زعتر",
    image: "./images/zaatar-spice.jpg",
    description: "The iconic Levantine blend. Wild thyme, sesame, and sumac for manakeesh and beyond.",
    descriptionAr: "الخلطة الشامية الأيقونية. الزعتر البري والسمسم والسماق للمناقيش وأكثر.",
    ingredients: ["Wild Thyme", "Sesame Seeds", "Sumac", "Salt", "Oregano"],
    ingredientsAr: ["زعتر بري", "سمسم", "سماق", "ملح", "أوريغانو"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function SpiceBlends() {
  const { t, language } = useLanguage();
  
  return (
    <section id="blends" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <FloatingSpices section="blends" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="max-w-2xl mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4 block">
            {t("blends.label")}
          </span>
          <h2 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-6 ${language === "ar" ? "font-sans" : ""}`}>
            {t("blends.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("blends.description")}
          </p>
        </motion.div>

        {/* Spice Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {spiceBlends.map((blend) => (
            <motion.article
              key={blend.id}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                <Image
                  src={blend.image}
                  alt={language === "ar" ? blend.nameAr : blend.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className={`font-serif text-xl font-semibold text-foreground group-hover:text-accent transition-colors ${language === "ar" ? "font-sans" : ""}`}>
                    {language === "ar" ? blend.nameAr : blend.name}
                  </h3>
                  <span className="text-sm text-muted-foreground shrink-0">
                    {language === "ar" ? blend.name : blend.nameAr}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {language === "ar" ? blend.descriptionAr : blend.description}
                </p>
                
                {/* Ingredients Tags */}
                <div className="flex flex-wrap gap-2">
                  {(language === "ar" ? blend.ingredientsAr : blend.ingredients).slice(0, 4).map((ingredient, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full"
                    >
                      {ingredient}
                    </span>
                  ))}
                  {blend.ingredients.length > 4 && (
                    <span className="text-xs px-3 py-1.5 text-muted-foreground">
                      +{blend.ingredients.length - 4} {t("blends.more")}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
