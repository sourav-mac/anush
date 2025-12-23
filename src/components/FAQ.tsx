import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is your current status?',
    answer:
      "I'm currently pursuing B.Tech in Computer Science and Engineering at Techno India University, Kolkata (2022-2026). I'm actively looking for internship opportunities and freelance projects to gain more industry experience.",
  },
  {
    question: 'What are your technical skills?',
    answer:
      'I have hands-on experience with C, C++, HTML, CSS, Microsoft Office Suite, and Project Management & Documentation. I continuously learn new technologies and have participated in hackathons to sharpen my problem-solving skills.',
  },
  {
    question: 'What achievements do you have?',
    answer:
      'I achieved All India Rank 20 in the Vulture Cloud Hackathon and hold an IBM Certificate. I also scored 94.08% in Higher Secondary (12th) and 85% in Secondary (10th) examinations.',
  },
  {
    question: 'Are you available for opportunities?',
    answer:
      "Yes, I'm open to internships, freelance projects, and full-time opportunities that align with my interests in software development, tech innovation, and problem-solving. Feel free to reach out via email or LinkedIn.",
  },
];

const FAQ = () => {
  return (
    <section id="services" className="py-16 md:py-20">
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
