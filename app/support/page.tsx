import ContactForm from "@/components/support/contactForm";
import SupportHeader from "@/components/support/supportHeader";
import SupportOptions from "@/components/support/supportOptions";

export default function SupportPage() {
  return (
    <div>
      <SupportHeader />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm />
          <SupportOptions />
        </div>
      </div>
    </div>
  )
}
