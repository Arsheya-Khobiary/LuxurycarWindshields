import { SEO_FAQ_ENTRIES } from '../data/seoFaq';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

export function SeoFaqSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-slate-200 bg-white py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2 id="faq-heading" className="mb-3 text-center text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
          Windscreen & car glass <span className="text-violet-700">FAQs</span>
        </h2>
        <p className="mb-10 text-center text-slate-600 md:text-lg">
          Quick answers for London drivers — same information search engines and AI assistants use to understand our
          service.
        </p>
        <Accordion type="single" collapsible className="w-full">
          {SEO_FAQ_ENTRIES.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-slate-200">
              <AccordionTrigger className="text-left text-base font-semibold text-slate-900 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
