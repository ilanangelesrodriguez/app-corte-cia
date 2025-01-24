import { FAQAccordion, FAQCategories, FAQHeader } from "@/components/faq";

export default function FAQPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block text-center justify-center">
        <FAQHeader />
        <FAQCategories />
        <FAQAccordion />
      </div>
    </section>
  );
}