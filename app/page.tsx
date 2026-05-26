"use client";

import { useLanguage } from "@/lib/language-context";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SpiceBlends } from "@/components/spice-blends";
import { PureSpices } from "@/components/pure-spices";
import { Recipes } from "@/components/recipes";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";

export default function HomePage() {
  const { dir } = useLanguage();
  
  return (
    <div dir={dir}>
      <Header />
      <main>
        <Hero />
        <SpiceBlends />
        <PureSpices />
        <Recipes />
        <About />
      </main>
      <Footer />
    </div>
  );
}
