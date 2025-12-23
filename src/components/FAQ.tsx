import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is your current role?',
    answer:
      'I am currently working as a Software Developer, building scalable web applications and contributing to full-stack development projects. I specialize in React, Node.js, and modern web technologies.',
  },
  {
    question: 'How much does it cost for a high-performing website?',
    answer:
      'The cost varies based on complexity, features, and timeline. A basic website starts from $500, while complex web applications can range from $2,000 to $10,000+. I provide detailed quotes after understanding your requirements.',
  },
  {
    question: 'How long will the work take from start to finish?',
    answer:
      'Project timelines depend on scope and complexity. A simple website takes 1-2 weeks, while complex applications may take 4-8 weeks. I always provide realistic timelines and keep you updated throughout.',
  },
  {
    question: 'Are you available to join as full-time?',
    answer:
      'I am open to full-time opportunities that align with my career goals. I am particularly interested in roles involving modern web technologies, challenging problems, and collaborative team environments.',
  },
];

const FAQ = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
            FAQS
          </span>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold">
            Have <span className="text-primary">Questions?</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-xl px-6 bg-card/50 hover:border-primary/30 transition-colors data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="font-mono text-left hover:no-underline py-6 text-sm md:text-base">
                <span className="flex items-center gap-4">
                  <span className="text-primary font-semibold">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-mono text-sm pb-6 pl-10">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
