import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AnimatedSection } from './AnimatedSection';

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
    <section id="services" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <span className="font-mono text-xs sm:text-sm text-muted-foreground uppercase tracking-widest">
            FAQS
          </span>
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Have <span className="text-primary">Questions?</span>
          </h2>
        </AnimatedSection>

        {/* FAQ Accordion */}
        <AnimatedSection animation="fade-up" delay={200}>
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg sm:rounded-xl px-4 sm:px-6 bg-card/50 hover:border-primary/30 transition-colors data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="font-mono text-left hover:no-underline py-4 sm:py-6 text-xs sm:text-sm md:text-base">
                  <span className="flex items-start sm:items-center gap-2 sm:gap-4">
                    <span className="text-primary font-semibold shrink-0">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-left">{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-mono text-xs sm:text-sm pb-4 sm:pb-6 pl-6 sm:pl-10">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;
