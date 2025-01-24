"use client"

import { useState } from "react";
import { FAQAccordion, FAQCategories, FAQHeader } from "@/components/faq";

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    
    return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block text-center justify-center">
        <FAQHeader setSearchQuery={setSearchQuery} />
        <FAQCategories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <FAQAccordion searchQuery={searchQuery} selectedCategory={selectedCategory} />
        </div>
    </section>
  );
}