"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.blends": "Spice Blends",
    "nav.spices": "Pure Spices",
    "nav.recipes": "Recipes",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.orderNow": "Order Now",
    
    // Hero
    "hero.location": "Drikeish, Tartous, Syria",
    "hero.title1": "The Art of",
    "hero.title2": "Syrian Spices",
    "hero.description": "Handcrafted spice blends passed down through generations. Experience the authentic flavors that transform ordinary dishes into extraordinary culinary journeys.",
    "hero.exploreBlends": "Explore Our Blends",
    "hero.contactUs": "Contact Us",
    
    // Spice Blends
    "blends.label": "Our Collection",
    "blends.title": "Signature Spice Blends",
    "blends.description": "Each blend is carefully crafted using traditional recipes and the finest ingredients, bringing the authentic taste of Syrian cuisine to your kitchen.",
    "blends.more": "more",
    
    // Pure Spices
    "spices.label": "Premium Quality",
    "spices.title": "Pure Single Spices",
    "spices.description": "Sourced from the finest growing regions around the world. Each spice is carefully selected for its purity, aroma, and flavor intensity.",
    
    // Recipes
    "recipes.label": "Culinary Inspiration",
    "recipes.title": "Traditional Recipes",
    "recipes.description": "Discover how to use our spice blends with these time-honored recipes. From quick weeknight dinners to impressive feasts.",
    "recipes.requestMore": "Request More Recipes",
    
    // About
    "about.label": "Our Story",
    "about.title": "A Heritage of Flavor",
    "about.p1": "From our home in Drikeish, Tartous, we bring you the authentic taste of Syrian cuisine. Our passion for spices began in our family kitchen, where every meal was an expression of love and tradition.",
    "about.p2": "Today, Habakeeat continues this legacy, crafting premium spice blends that transform ordinary ingredients into extraordinary dishes. We believe that great food starts with great spices.",
    "about.since": "Since 2018",
    "about.sinceDesc": "Bringing the finest Syrian spices to kitchens across the region",
    "about.feature1.title": "Handcrafted Blends",
    "about.feature1.desc": "Each blend is carefully mixed by hand using traditional recipes passed down through generations.",
    "about.feature2.title": "Premium Ingredients",
    "about.feature2.desc": "We source only the finest spices from trusted suppliers around the world for authentic flavor.",
    "about.feature3.title": "Freshly Ground",
    "about.feature3.desc": "Our spices are ground fresh in small batches to preserve their essential oils and potency.",
    "about.feature4.title": "No Additives",
    "about.feature4.desc": "Pure spices, nothing else. No fillers, preservatives, or artificial colors ever.",
    
    // Footer
    "footer.description": "Premium handcrafted spice blends from Drikeish, Tartous, Syria. Bringing the authentic flavors of Syrian cuisine to your kitchen since 2018.",
    "footer.quickLinks": "Quick Links",
    "footer.contactUs": "Contact Us",
    "footer.orderWhatsApp": "Order on WhatsApp",
    "footer.rights": "All rights reserved.",
    "footer.crafted": "Crafted with passion in Syria",
  },
  ar: {
    // Header
    "nav.home": "الرئيسية",
    "nav.blends": "خلطات البهارات",
    "nav.spices": "البهارات",
    "nav.recipes": "الوصفات",
    "nav.about": "من نحن",
    "nav.contact": "تواصل معنا",
    "nav.orderNow": "اطلب الآن",
    
    // Hero
    "hero.location": "دريكيش، طرطوس، سوريا",
    "hero.title1": "فن",
    "hero.title2": "البهارات السورية",
    "hero.description": "خلطات بهارات مصنوعة يدوياً وموروثة عبر الأجيال. اختبر النكهات الأصيلة التي تحول الأطباق العادية إلى رحلات طهي استثنائية.",
    "hero.exploreBlends": "اكتشف خلطاتنا",
    "hero.contactUs": "تواصل معنا",
    
    // Spice Blends
    "blends.label": "مجموعتنا",
    "blends.title": "خلطات البهارات المميزة",
    "blends.description": "كل خلطة مصنوعة بعناية باستخدام وصفات تقليدية وأجود المكونات، لنقل طعم المطبخ السوري الأصيل إلى مطبخك.",
    "blends.more": "المزيد",
    
    // Pure Spices
    "spices.label": "جودة عالية",
    "spices.title": "بهارات نقية",
    "spices.description": "مستوردة من أجود مناطق الزراعة حول العالم. كل نوع بهار مختار بعناية لنقائه وعطره وكثافة نكهته.",
    
    // Recipes
    "recipes.label": "إلهام الطهي",
    "recipes.title": "وصفات تقليدية",
    "recipes.description": "اكتشف كيفية استخدام خلطات البهارات مع هذه الوصفات العريقة. من عشاء سريع إلى مآدب مميزة.",
    "recipes.requestMore": "اطلب المزيد من الوصفات",
    
    // About
    "about.label": "قصتنا",
    "about.title": "إرث من النكهات",
    "about.p1": "من منزلنا في دريكيش، طرطوس، نقدم لكم طعم المطبخ السوري الأصيل. بدأ شغفنا بالبهارات في مطبخ عائلتنا، حيث كانت كل وجبة تعبيراً عن الحب والتقاليد.",
    "about.p2": "اليوم، تواصل حبقيات هذا الإرث، بصنع خلطات بهارات فاخرة تحول المكونات العادية إلى أطباق استثنائية. نؤمن بأن الطعام الرائع يبدأ ببهارات رائعة.",
    "about.since": "منذ 2018",
    "about.sinceDesc": "نقدم أجود البهارات السورية للمطابخ في جميع أنحاء المنطقة",
    "about.feature1.title": "خلطات يدوية",
    "about.feature1.desc": "كل خلطة تُمزج يدوياً بعناية باستخدام وصفات تقليدية متوارثة عبر الأجيال.",
    "about.feature2.title": "مكونات فاخرة",
    "about.feature2.desc": "نحصل على أجود البهارات من موردين موثوقين حول العالم للحصول على نكهة أصيلة.",
    "about.feature3.title": "طحن طازج",
    "about.feature3.desc": "تُطحن بهاراتنا طازجة بكميات صغيرة للحفاظ على زيوتها الأساسية وقوتها.",
    "about.feature4.title": "بدون إضافات",
    "about.feature4.desc": "بهارات نقية فقط. لا مواد حافظة أو ألوان صناعية أبداً.",
    
    // Footer
    "footer.description": "خلطات بهارات فاخرة مصنوعة يدوياً من دريكيش، طرطوس، سوريا. نقدم نكهات المطبخ السوري الأصيلة لمطبخك منذ 2018.",
    "footer.quickLinks": "روابط سريعة",
    "footer.contactUs": "تواصل معنا",
    "footer.orderWhatsApp": "اطلب عبر واتساب",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.crafted": "صُنع بشغف في سوريا",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("habakeeat-lang") as Language;
    if (saved && (saved === "en" || saved === "ar")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("habakeeat-lang", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
