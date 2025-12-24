import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowRight, Circle, Phone, Mail, Linkedin, Github, Code, Briefcase, Lightbulb, Users, Rocket, GraduationCap, Target, TrendingUp, Send, RotateCcw, MessageSquare, Globe, Star, Crosshair } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { AnimatedSection } from './AnimatedSection';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const opportunities = [
    'Web Development',
    'Frontend / Backend Development',
    'Full-Stack Development',
    'Machine Learning / AI',
    'Software Development'
  ];

  const whyRecruitMe = [
    {
      icon: Code,
      title: 'Strong Technical Foundation',
      description: 'Good understanding of modern technologies like React, Node.js, Python, Flask, Machine Learning, and databases.'
    },
    {
      icon: Briefcase,
      title: 'Hands-On Project Experience',
      description: 'Worked on multiple academic and personal projects including web apps, AI models, and real-time applications.'
    },
    {
      icon: Lightbulb,
      title: 'Quick Learner & Adaptable',
      description: 'Fast at learning new technologies and adapting to team environments.'
    },
    {
      icon: GraduationCap,
      title: 'Professional Work Ethics',
      description: 'Committed to writing clean code, documenting work, and delivering tasks on time.'
    }
  ];

  const whatIBring = [
    { icon: Users, title: 'Team Collaboration', description: 'Ready to work with cross-functional teams and contribute effectively.' },
    { icon: Target, title: 'Problem-Solving Mindset', description: 'Ability to break down complex problems and find efficient solutions.' },
    { icon: Rocket, title: 'Modern Tech Approach', description: 'Familiar with tools and technologies used in the industry today.' },
    { icon: TrendingUp, title: 'Growth-Oriented Attitude', description: 'Always learning, improving, and evolving.' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[\d\s-]{10,}$/;

    if (!formData.firstName.trim() || formData.firstName.length > 50) {
      toast({ title: 'Invalid First Name', description: 'Please enter a valid first name (max 50 characters)', variant: 'destructive' });
      return false;
    }
    if (!formData.lastName.trim() || formData.lastName.length > 50) {
      toast({ title: 'Invalid Last Name', description: 'Please enter a valid last name (max 50 characters)', variant: 'destructive' });
      return false;
    }
    if (!emailRegex.test(formData.email) || formData.email.length > 100) {
      toast({ title: 'Invalid Email', description: 'Please enter a valid email address', variant: 'destructive' });
      return false;
    }
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      toast({ title: 'Invalid Phone', description: 'Please enter a valid phone number', variant: 'destructive' });
      return false;
    }
    if (!formData.message.trim() || formData.message.length > 1000) {
      toast({ title: 'Invalid Message', description: 'Please enter a message (max 1000 characters)', variant: 'destructive' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:pradhananush.sagar@gmail.com?subject=${subject}&body=${body}`;
    
    toast({ title: 'Opening Email Client', description: 'Your default email client will open with the message.' });
    setIsSubmitting(false);
    handleReset();
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-card/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/10">
            <Circle className="h-1.5 w-1.5 sm:h-2 sm:w-2 fill-primary text-primary animate-pulse" />
            <span className="font-mono text-xs sm:text-sm text-primary">Actively Looking for Opportunities</span>
          </div>

          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Let's <span className="text-primary">Connect</span>
          </h2>

          <p className="text-muted-foreground font-mono text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto px-2">
            I'm a passionate Computer Science (AI & ML) student and an aspiring developer eager to contribute to real-world projects.
            If you're hiring or looking for a motivated fresher to join your tech team, I'd love to connect.
          </p>
        </AnimatedSection>

        {/* Opportunities Section */}
        <AnimatedSection animation="fade-up" delay={100} className="max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h3 className="font-mono text-lg sm:text-xl md:text-2xl font-semibold text-center mb-4 sm:mb-6 px-2">
            Currently Seeking <span className="text-primary">Internships</span>, <span className="text-primary">Full-Time Roles</span>, or <span className="text-primary">Entry-Level Positions</span> in:
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {opportunities.map((opp, index) => (
              <span 
                key={index} 
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-xs sm:text-sm"
              >
                {opp}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Contact Form Section */}
        <AnimatedSection animation="fade-up" delay={200} className="max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h3 className="font-mono text-lg sm:text-xl md:text-2xl font-semibold text-center mb-6 sm:mb-8 flex items-center justify-center gap-2">
            <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            Get In Touch
          </h3>
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 rounded-2xl border border-border bg-card space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="font-mono text-sm">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  className="font-mono text-sm"
                  maxLength={50}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="font-mono text-sm">Last Name *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  className="font-mono text-sm"
                  maxLength={50}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-mono text-sm">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="font-mono text-sm"
                  maxLength={100}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-mono text-sm">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91-XXXXXXXXXX"
                  className="font-mono text-sm"
                  maxLength={20}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="font-mono text-sm">Your Message *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Type your message here..."
                className="font-mono text-sm min-h-[120px] sm:min-h-[150px] resize-none"
                maxLength={1000}
                required
              />
              <p className="text-xs text-muted-foreground text-right">{formData.message.length}/1000</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 font-mono bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
              >
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
                className="flex-1 font-mono border-border hover:bg-muted transition-all"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset
              </Button>
            </div>
          </form>
        </AnimatedSection>

        {/* Connect With Me Section */}
        <AnimatedSection animation="fade-up" delay={300} className="max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h3 className="font-mono text-lg sm:text-xl md:text-2xl font-semibold text-center mb-6 sm:mb-8 flex items-center justify-center gap-2">
            <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            Connect With Me
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <a 
              href="https://www.linkedin.com/in/anush-pradhan-49412428a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs sm:text-sm text-muted-foreground group-hover:text-foreground">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/Anush005" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs sm:text-sm text-muted-foreground group-hover:text-foreground">GitHub</span>
            </a>
            <a 
              href="mailto:pradhananush.sagar@gmail.com"
              className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs sm:text-sm text-muted-foreground group-hover:text-foreground">Email</span>
            </a>
            <a 
              href="tel:+917319229955"
              className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs sm:text-sm text-muted-foreground group-hover:text-foreground">Phone</span>
            </a>
          </div>
        </AnimatedSection>

        {/* Why Recruit Me Section */}
        <AnimatedSection animation="fade-left" delay={400} className="max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h3 className="font-mono text-lg sm:text-xl md:text-2xl font-semibold text-center mb-6 sm:mb-8 flex items-center justify-center gap-2">
            <Star className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            Why Recruit Me?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {whyRecruitMe.map((item, index) => (
              <div 
                key={index}
                className="p-4 sm:p-5 md:p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] ring-1 ring-white/10 shrink-0">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-mono font-semibold text-sm sm:text-base text-foreground mb-1 sm:mb-2">{item.title}</h4>
                    <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* What I Bring Section */}
        <AnimatedSection animation="fade-right" delay={500} className="max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h3 className="font-mono text-lg sm:text-xl md:text-2xl font-semibold text-center mb-6 sm:mb-8 flex items-center justify-center gap-2">
            <Crosshair className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            What I Bring to Your Team
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {whatIBring.map((item, index) => (
              <div 
                key={index}
                className="p-3 sm:p-4 md:p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] ring-1 ring-white/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h4 className="font-mono font-semibold text-foreground mb-1 sm:mb-2 text-xs sm:text-sm">{item.title}</h4>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed line-clamp-3">{item.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="scale" delay={600} className="max-w-xl mx-auto text-center px-4">
          <p className="font-mono text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">
            Feel free to reach out for any career opportunities, collaborations, or technical discussions.
          </p>
          <Button
            size="lg"
            className="font-mono text-sm sm:text-base bg-primary text-primary-foreground hover:bg-primary/90 transition-all group px-6 sm:px-8"
            asChild
          >
            <a href="mailto:pradhananush.sagar@gmail.com">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
