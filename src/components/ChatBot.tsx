import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useChatSounds } from '@/hooks/use-chat-sounds';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const portfolioData = {
  name: "Anush Pradhan",
  role: "Computer Science Student (Final Year CSE)",
  about: "Anush Pradhan is a final-year Computer Science and Engineering student with a strong interest in programming, technology innovation, and real-world problem solving. He is self-motivated, quick to learn, and passionate about turning ideas into impactful solutions.",
  education: [
    "B.Tech in Computer Science and Engineering at Techno India University (TIU), Kolkata (2022–2026)",
    "Higher Secondary (12th): 94.08% (2022–2023)",
    "Secondary (10th): 85% (2020–2021)"
  ],
  skills: ["C", "C++", "Python", "HTML", "CSS", "MySQL", "Git", "VS Code", "Windows", "Linux (Ubuntu)", "macOS"],
  projects: [
    { name: "Fraud Detection System for E-commerce", desc: "Built a system to detect fraudulent activities using pattern recognition and data analysis." },
    { name: "E-Waste Management Platform", desc: "Designed a solution for efficient disposal and recycling of e-waste materials." },
    { name: "AI-Driven Disaster Management System", desc: "Developed an AI model to assist in predicting and managing disaster response strategies." }
  ],
  experience: [
    "Freelance Developer – Worked on various independent tech-based assignments",
    "Entrepreneurship Skill Development Projects – Participated in ideation, planning, and execution of startup-oriented tech solutions",
    "Vultr Cloud Innovate Hackathon – Achieved All India Rank 20"
  ],
  certifications: ["Vultr Cloud Innovate Hackathon Certificate – AIR 20", "IBM Certificate", "SAP Certificate", "Google Cloud Certificate"],
  languages: ["Bengali", "English", "Hindi"],
  strengths: ["Self-motivated", "Quick learner and adaptable", "Strong work ethic"],
  hobbies: ["Listening to music", "Playing games (cricket and badminton)", "Writing", "Tidying up the house", "Photography"],
  contact: {
    email: "pradhananush.sagar@gmail.com",
    phone: "+91 7319229955",
    location: "Harinbari, Sagar, South 24 Parganas, West Bengal – 743373"
  }
};

const generateResponse = (query: string): string => {
  const q = query.toLowerCase();
  
  // Check for off-topic questions
  const offTopicPatterns = [
    /what is .*(capital|president|minister|country|city|weather|news)/,
    /how to .*(code|program|cook|make|build|create|fix|solve)/,
    /explain .*(concept|theory|algorithm|formula)/,
    /tell me about .*(history|science|math|physics|chemistry)/,
    /who is .*(celebrity|politician|actor|singer)/,
    /what do you think/,
    /your opinion/,
    /write .*(code|program|essay|story)/,
    /calculate/,
    /solve/,
  ];
  
  for (const pattern of offTopicPatterns) {
    if (pattern.test(q) && !q.includes('anush') && !q.includes('portfolio')) {
      return "I'm designed to answer only questions about Anush Pradhan and his portfolio.";
    }
  }

  // Name/Introduction
  if (q.includes('who') && (q.includes('anush') || q.includes('you') || q.includes('he'))) {
    return `${portfolioData.name} is a ${portfolioData.role}. ${portfolioData.about}`;
  }
  
  if (q.includes('name') || q.includes('introduce')) {
    return `This portfolio belongs to ${portfolioData.name}, a ${portfolioData.role}.`;
  }

  // About
  if (q.includes('about') || q.includes('tell me') || q.includes('describe')) {
    return portfolioData.about;
  }

  // Education
  if (q.includes('education') || q.includes('study') || q.includes('degree') || q.includes('college') || q.includes('university') || q.includes('school') || q.includes('academic')) {
    return `Education Background:\n• ${portfolioData.education.join('\n• ')}`;
  }

  // Skills
  if (q.includes('skill') || q.includes('technology') || q.includes('tech stack') || q.includes('programming') || q.includes('language') && q.includes('programming')) {
    return `Technical Skills: ${portfolioData.skills.join(', ')}. Anush is proficient in multiple programming languages and development tools.`;
  }

  // Projects
  if (q.includes('project') || q.includes('work') || q.includes('built') || q.includes('developed')) {
    const projectList = portfolioData.projects.map(p => `• ${p.name}: ${p.desc}`).join('\n');
    return `Projects by Anush Pradhan:\n${projectList}`;
  }

  // Experience
  if (q.includes('experience') || q.includes('internship') || q.includes('job') || q.includes('freelance')) {
    return `Professional Experience:\n• ${portfolioData.experience.join('\n• ')}`;
  }

  // Certifications
  if (q.includes('certificate') || q.includes('certification') || q.includes('achievement') || q.includes('award')) {
    return `Certifications & Achievements:\n• ${portfolioData.certifications.join('\n• ')}`;
  }

  // Languages
  if (q.includes('language') && !q.includes('programming')) {
    return `Languages Spoken: ${portfolioData.languages.join(', ')}`;
  }

  // Strengths
  if (q.includes('strength') || q.includes('quality') || q.includes('trait')) {
    return `Key Strengths: ${portfolioData.strengths.join(', ')}`;
  }

  // Hobbies
  if (q.includes('hobby') || q.includes('hobbies') || q.includes('interest') || q.includes('free time') || q.includes('fun')) {
    return `Hobbies & Interests: ${portfolioData.hobbies.join(', ')}`;
  }

  // Contact
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('hire') || q.includes('connect')) {
    return `Contact Information:\nEmail: ${portfolioData.contact.email}\nPhone: ${portfolioData.contact.phone}\nLocation: ${portfolioData.contact.location}`;
  }

  // Location
  if (q.includes('location') || q.includes('where') || q.includes('address') || q.includes('live')) {
    return `Anush Pradhan is based in ${portfolioData.contact.location}.`;
  }

  // Hackathon
  if (q.includes('hackathon') || q.includes('vultr') || q.includes('rank')) {
    return "Anush Pradhan participated in the Vultr Cloud Innovate Hackathon and achieved All India Rank 20, demonstrating his ability to develop innovative solutions under time pressure.";
  }

  // Greeting
  if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('good')) {
    return `Hello! Welcome to Anush Pradhan's portfolio. I'm here to help you learn about his education, skills, projects, experience, and more. What would you like to know?`;
  }

  // Help
  if (q.includes('help') || q.includes('what can you')) {
    return "I can help you learn about Anush Pradhan's education, technical skills, projects, work experience, certifications, hobbies, and contact information. Feel free to ask!";
  }

  // Default response for unclear questions
  return "I can answer questions about Anush Pradhan's education, skills, projects, experience, certifications, and contact details. Could you please be more specific about what you'd like to know?";
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Anush's portfolio assistant. Ask me about his education, skills, projects, or anything else from his portfolio.",
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { playSendSound, playReceiveSound } = useChatSounds();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    playSendSound();

    // Simulate typing delay
    setTimeout(() => {
      const response = generateResponse(input);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
      playReceiveSound();
    }, 800 + Math.random() * 700);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center group"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary) / 0.8), hsl(var(--primary) / 0.4))',
          backdropFilter: 'blur(20px)',
          border: '1px solid hsl(var(--primary) / 0.5)',
          boxShadow: '0 8px 32px hsl(var(--primary) / 0.3), inset 0 1px 0 hsl(var(--primary) / 0.5)'
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <X className="h-6 w-6 text-primary-foreground" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <MessageCircle className="h-6 w-6 text-primary-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulse ring */}
        {!isOpen && (
          <motion.span 
            className="absolute inset-0 rounded-full bg-primary/30"
            animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0.2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          />
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)]"
            initial={{ opacity: 0, scale: 0.85, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ 
              type: 'spring', 
              stiffness: 350, 
              damping: 25,
              mass: 0.8
            }}
          >
            {/* Glass container */}
            <motion.div
              className="rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--card) / 0.7), hsl(var(--card) / 0.4))',
                backdropFilter: 'blur(40px) saturate(180%)',
                border: '1px solid hsl(var(--primary) / 0.2)',
                boxShadow: `
                  0 25px 50px -12px hsl(var(--background) / 0.5),
                  0 0 0 1px hsl(var(--primary) / 0.1),
                  inset 0 1px 0 hsl(var(--primary) / 0.15),
                  inset 0 -1px 0 hsl(var(--primary) / 0.05)
                `
              }}
              initial={{ backdropFilter: 'blur(0px)' }}
              animate={{ backdropFilter: 'blur(40px) saturate(180%)' }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {/* Header */}
              <motion.div 
                className="px-5 py-4 flex items-center gap-3"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--primary) / 0.05))',
                  borderBottom: '1px solid hsl(var(--primary) / 0.15)'
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
              >
                <motion.div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--primary) / 0.6), hsl(var(--primary) / 0.3))',
                    boxShadow: '0 4px 12px hsl(var(--primary) / 0.3)'
                  }}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Bot className="h-5 w-5 text-primary-foreground" />
                </motion.div>
                <div>
                  <h3 className="font-mono font-semibold text-sm text-foreground">Portfolio Assistant</h3>
                  <p className="text-xs text-muted-foreground">Ask about Anush Pradhan</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <motion.span 
                    className="w-2 h-2 rounded-full bg-emerald-400"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs text-muted-foreground">Online</span>
                </div>
              </motion.div>

              {/* Messages */}
              <div 
                className="h-[340px] overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary/20"
                style={{
                  background: 'linear-gradient(180deg, transparent, hsl(var(--background) / 0.3))'
                }}
              >
                <AnimatePresence mode="popLayout">
                  {messages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      className={`flex gap-2.5 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ 
                        type: 'spring', 
                        stiffness: 350, 
                        damping: 25,
                        delay: index === messages.length - 1 ? 0 : 0
                      }}
                      layout
                    >
                      {/* Avatar */}
                      <motion.div 
                        className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${
                          message.role === 'user' 
                            ? 'bg-primary/20' 
                            : ''
                        }`}
                        style={message.role === 'assistant' ? {
                          background: 'linear-gradient(135deg, hsl(var(--primary) / 0.5), hsl(var(--primary) / 0.2))',
                        } : {}}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 25, delay: 0.1 }}
                      >
                        {message.role === 'user' ? (
                          <User className="h-4 w-4 text-primary" />
                        ) : (
                          <Bot className="h-4 w-4 text-primary-foreground" />
                        )}
                      </motion.div>

                      {/* Message bubble */}
                      <motion.div
                        className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                          message.role === 'user'
                            ? 'rounded-tr-sm'
                            : 'rounded-tl-sm'
                        }`}
                        style={{
                          background: message.role === 'user'
                            ? 'linear-gradient(135deg, hsl(var(--primary) / 0.8), hsl(var(--primary) / 0.6))'
                            : 'linear-gradient(135deg, hsl(var(--muted) / 0.6), hsl(var(--muted) / 0.3))',
                          backdropFilter: 'blur(10px)',
                          border: `1px solid ${message.role === 'user' ? 'hsl(var(--primary) / 0.4)' : 'hsl(var(--border) / 0.5)'}`,
                          color: message.role === 'user' ? 'hsl(var(--primary-foreground))' : 'hsl(var(--foreground))'
                        }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <p className="whitespace-pre-line">{message.content}</p>
                      </motion.div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing indicator */}
                <AnimatePresence>
                  {isTyping && (
                    <motion.div 
                      className="flex gap-2.5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, hsl(var(--primary) / 0.5), hsl(var(--primary) / 0.2))',
                        }}
                      >
                        <Bot className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div 
                        className="px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5"
                        style={{
                          background: 'linear-gradient(135deg, hsl(var(--muted) / 0.6), hsl(var(--muted) / 0.3))',
                          border: '1px solid hsl(var(--border) / 0.5)'
                        }}
                      >
                        {[0, 1, 2].map((i) => (
                          <motion.span 
                            key={i}
                            className="w-2 h-2 rounded-full bg-primary/60"
                            animate={{ y: [0, -6, 0] }}
                            transition={{ 
                              duration: 0.6, 
                              repeat: Infinity, 
                              delay: i * 0.15,
                              ease: 'easeInOut'
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <motion.div 
                className="p-4"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--card) / 0.8), hsl(var(--card) / 0.5))',
                  borderTop: '1px solid hsl(var(--primary) / 0.1)'
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
              >
                <motion.div 
                  className="flex items-center gap-2 px-4 py-2 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--muted) / 0.4), hsl(var(--muted) / 0.2))',
                    border: '1px solid hsl(var(--primary) / 0.15)',
                    boxShadow: 'inset 0 2px 4px hsl(var(--background) / 0.2)'
                  }}
                  whileFocus={{ boxShadow: '0 0 0 2px hsl(var(--primary) / 0.3)' }}
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about Anush..."
                    className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none font-mono"
                  />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Button
                      size="icon"
                      onClick={handleSend}
                      disabled={!input.trim()}
                      className="h-8 w-8 rounded-xl bg-primary hover:bg-primary/90 disabled:opacity-40 transition-all"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </motion.div>
                <p className="text-[10px] text-muted-foreground text-center mt-2 font-mono">
                  Powered by Anush's Portfolio
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
