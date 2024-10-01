// Internal config
import { config } from "@/config";
// Internal components
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQSectionProps {}

export const FAQSection: React.FC<FAQSectionProps> = () => {
  if (!config.faqs || !config.faqs.questions.length) return null;

  return (
    <section className="faq-container flex md:flex-row flex-col gap-[474px]">
      <h2 className="heading-md w-[346px] min-w-[346px] text-left">{config.faqs.title}</h2>

      <Accordion type="multiple">
        {config.faqs.questions.map(({ title, description }, i) => (
          <AccordionItem value={`${i}-${title}`} key={`${i}-${title}`}>
            <AccordionTrigger>
              <p className="body-md-semibold">{title}</p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="body-sm py-4">{description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
