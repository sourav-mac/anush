import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Code2, Palette, Zap, ArrowRight, RotateCcw } from 'lucide-react';

interface HireMeDialogProps {
  children: React.ReactNode;
}

const HireMeDialog = ({ children }: HireMeDialogProps) => {
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
      badge: 'Eager Learner',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      badge: 'Fresh Perspective',
    },
    {
      icon: Zap,
      title: 'Quick Adapter',
      badge: 'Ready to Grow',
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-mono text-2xl md:text-3xl font-bold text-center">
            Let's <span className="text-primary">Connect</span>
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {/* Left - Contact Form */}
          <div className="space-y-4">
            <div>
            <h3 className="font-mono text-lg font-bold mb-1">
                Get in <span className="text-primary">Touch</span>
              </h3>
              <p className="text-muted-foreground font-mono text-sm">
                Looking for opportunities to contribute and grow!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-xs mb-1">First Name</label>
                  <Input
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="bg-background border-border font-mono h-9"
                    required
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs mb-1">Last Name</label>
                  <Input
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="bg-background border-border font-mono h-9"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-xs mb-1">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border font-mono h-9"
                    required
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs mb-1">Phone</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background border-border font-mono h-9"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs mb-1">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project..."
                  className="bg-background border-border font-mono min-h-[80px]"
                  required
                />
              </div>

              <div className="flex gap-2">
                <Button
                  type="submit"
                  className="font-mono bg-primary text-primary-foreground hover:bg-primary/90 px-4 h-9"
                >
                  Send
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleReset}
                  className="font-mono border-border hover:bg-secondary h-9"
                >
                  Reset
                  <RotateCcw className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>

          {/* Right - Why Choose Me */}
          <div className="space-y-4">
            <h3 className="font-mono text-lg font-bold">
              Why Choose <span className="text-primary">Me?</span>
            </h3>

            <div className="space-y-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <skill.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-mono font-bold text-sm">{skill.title}</h4>
                        <span className="px-2 py-0.5 text-xs font-mono bg-primary/20 text-primary rounded-full">
                          {skill.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HireMeDialog;
