import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Code2, Palette, Zap, Clock, Headphones, Cpu, Search, ArrowRight, RotateCcw } from 'lucide-react';

const HireMe = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:pradhananush.sagar@gmail.com?subject=Project Inquiry from ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(formData.message)}%0A%0AContact: ${formData.email} | ${formData.phone}`;
    window.location.href = mailtoLink;
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const skills = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      badge: '2+ Years Experience',
      description: 'Building scalable web applications with modern technologies like React, Next.js, Node.js, and databases.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design Excellence',
      badge: '10+ Projects Delivered',
      description: 'Creating intuitive and visually stunning interfaces that enhance user engagement and conversion rates.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      badge: '98% Client Satisfaction',
      description: 'Ensuring your applications load fast, rank well in search engines, and provide seamless user experiences.',
    },
  ];

  const benefits = [
    { icon: Clock, title: 'Quick Turnaround', description: 'Fast delivery without compromising quality' },
    { icon: Headphones, title: '24/7 Support', description: 'Available for urgent fixes and consultations' },
    { icon: Cpu, title: 'Modern Tech Stack', description: 'Using latest technologies for future-proof solutions' },
    { icon: Search, title: 'SEO Optimized', description: 'Built with search engine optimization in mind' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        {/* Hero Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold">
            Let's Build <span className="text-primary">Something</span>
            <br />
            Amazing Together
          </h2>
          <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
            Transform your digital vision into reality with a passionate developer who delivers exceptional results. Ready to take your project to the next level?
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-mono text-2xl font-bold mb-2">
              Start <span className="text-primary">Your Project</span>
            </h3>
            <p className="text-muted-foreground font-mono text-sm mb-6">
              Ready to bring your ideas to life? Let's discuss your project requirements and create something extraordinary together!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-sm mb-2">First Name</label>
                  <Input
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="bg-background border-border font-mono"
                    required
                  />
                </div>
                <div>
                  <label className="block font-mono text-sm mb-2">Last Name</label>
                  <Input
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="bg-background border-border font-mono"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-sm mb-2">Email Address</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border font-mono"
                    required
                  />
                </div>
                <div>
                  <label className="block font-mono text-sm mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background border-border font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-sm mb-2">Your Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type your message here"
                  className="bg-background border-border font-mono min-h-[120px]"
                  required
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="submit"
                  className="font-mono bg-primary text-primary-foreground hover:bg-primary/90 px-6"
                >
                  Send
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleReset}
                  className="font-mono border-border hover:bg-secondary"
                >
                  Reset
                  <RotateCcw className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>

          {/* Right - Why Choose Me */}
          <div className="space-y-6">
            <h3 className="font-mono text-2xl font-bold">
              Why Choose <span className="text-primary">Me?</span>
            </h3>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <skill.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-mono font-bold">{skill.title}</h4>
                        <span className="px-3 py-1 text-xs font-mono bg-primary/20 text-primary rounded-full">
                          {skill.badge}
                        </span>
                      </div>
                      <p className="text-muted-foreground font-mono text-sm">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8">
          <h3 className="font-mono text-xl font-bold mb-8 text-center">
            What You Get When You Work With Me
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-mono font-bold text-sm shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-mono font-bold text-sm mb-1">{benefit.title}</h4>
                  <p className="text-muted-foreground font-mono text-xs">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;