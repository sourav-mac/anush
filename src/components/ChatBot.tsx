import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useChatSounds } from "@/hooks/use-chat-sounds";

/* ===================== TYPES ===================== */
interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

/* ===================== DATA ===================== */
const portfolioData = {
  name: "Anush Pradhan",
  role: "Computer Science Student (Final Year CSE)",

  about:
    "Anush Pradhan is a final-year Computer Science and Engineering student with a strong interest in programming, technology innovation, and real-world problem solving. He is self-motivated, quick to learn, and passionate about turning ideas into impactful solutions.",

  education: {
    college: "B.Tech in Computer Science and Engineering at Techno India University (TIU), Kolkata (2022–2026)",
    higherSecondary: {
      school: "Sundarban Janakalyan Sangha Vidyaniketan",
      percentage: "94.08%",
    },
    secondary: {
      school: "Manasadwip Ramakrishna Mission High School",
      percentage: "85%",
    },
  },

  skills: {
    programmingLanguages: ["C", "C++", "Python"],
    webDevelopment: ["HTML", "CSS"],
    tools: ["MySQL", "Git", "VS Code"],
    operatingSystems: ["Windows", "Linux (Ubuntu)", "macOS"],
  },

  projects: [
    {
      name: "Fraud Detection System for E-commerce",
      description: "Built a system to detect fraudulent activities using pattern recognition and data analysis.",
    },
    {
      name: "E-Waste Management Platform",
      description: "Designed a solution for efficient disposal and recycling of e-waste materials.",
    },
    {
      name: "AI-Driven Disaster Management System",
      description: "Developed an AI model to assist in predicting and managing disaster response strategies.",
    },
  ],

  experience: [
    "Freelance Developer – Worked on independent tech-based assignments",
    "Entrepreneurship Skill Development Projects",
    "Vultr Cloud Innovate Hackathon – All India Rank 20",
  ],

  certifications: [
    "Vultr Cloud Innovate Hackathon Certificate – AIR 20",
    "IBM Certificate",
    "SAP Certificate",
    "Google Cloud Certificate",
  ],

  languagesSpoken: ["Bengali", "English", "Hindi"],

  strengths: ["Self-motivated", "Quick learner", "Strong work ethic"],

  hobbiesAndInterests: ["Listening to music", "Playing cricket", "Playing badminton", "Writing", "Photography"],

  family: {
    father: "Tapas Pradhan",
    mother: "Priyashi Pradhan",
    elderSister: "Ankita Pradhan",
  },

  relationships: {
    girlfriend: { name: "Sudipta Bera", nickname: "Tuli" },
    bestFriend: "Sourav Mandal",
  },

  socialMedia: {
    instagram: "https://www.instagram.com/anush_2021129?igsh=Z2s3ZXQ1a3JxbWti",
  },

  contact: {
    email: "pradhananush.sagar@gmail.com",
    phone: "+91 7319229955",
    location: "Harinbari, Sagar, South 24 Parganas, West Bengal – 743373",
  },
};

/* ===================== LOGIC ===================== */
const generateResponse = (query: string): string => {
  const q = query.toLowerCase();

  const offTopic = /what is|how to|explain|solve|write|calculate|news|weather|capital|president/;

  if (offTopic.test(q) && !q.includes("anush")) {
    return "I'm designed to answer only questions about Anush Pradhan and his portfolio.";
  }

  if (q.includes("who") || q.includes("introduce")) {
    return `${portfolioData.name} is a ${portfolioData.role}. ${portfolioData.about}`;
  }

  if (q.includes("education") || q.includes("college") || q.includes("school")) {
    const e = portfolioData.education;
    return `Education:
• ${e.college}
• Higher Secondary: ${e.higherSecondary.school} (${e.higherSecondary.percentage})
• Secondary: ${e.secondary.school} (${e.secondary.percentage})`;
  }

  if (q.includes("skill") || q.includes("tech")) {
    const s = portfolioData.skills;
    return `Skills:
• Programming: ${s.programmingLanguages.join(", ")}
• Web: ${s.webDevelopment.join(", ")}
• Tools: ${s.tools.join(", ")}
• OS: ${s.operatingSystems.join(", ")}`;
  }

  if (q.includes("project")) {
    return portfolioData.projects.map((p) => `• ${p.name}: ${p.description}`).join("\n");
  }

  if (q.includes("experience") || q.includes("hackathon")) {
    return portfolioData.experience.map((e) => `• ${e}`).join("\n");
  }

  if (q.includes("certificate")) {
    return portfolioData.certifications.map((c) => `• ${c}`).join("\n");
  }

  if (q.includes("language")) {
    return `Languages: ${portfolioData.languagesSpoken.join(", ")}`;
  }

  if (q.includes("hobby") || q.includes("interest")) {
    return `Hobbies: ${portfolioData.hobbiesAndInterests.join(", ")}`;
  }

  if (q.includes("family") || q.includes("father") || q.includes("mother")) {
    const f = portfolioData.family;
    return `Family:
• Father: ${f.father}
• Mother: ${f.mother}
• Sister: ${f.elderSister}`;
  }

  if (q.includes("contact") || q.includes("email") || q.includes("phone")) {
    const c = portfolioData.contact;
    return `Contact:
• Email: ${c.email}
• Phone: ${c.phone}
• Location: ${c.location}`;
  }

  if (q.includes("instagram")) {
    return `Instagram Profile: ${portfolioData.socialMedia.instagram}`;
  }

  if (q.includes("hi") || q.includes("hello")) {
    return "Hello! I’m Anush Pradhan’s portfolio assistant. Ask me about his skills, projects, or education.";
  }

  return "Please ask something related to Anush Pradhan’s portfolio.";
};

/* ===================== COMPONENT ===================== */
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I’m Anush Pradhan’s portfolio assistant. Ask me about his education, skills, or projects.",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { playSendSound, playReceiveSound } = useChatSounds();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    playSendSound();

    setTimeout(() => {
      const reply = generateResponse(userMsg.content);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          content: reply,
          role: "assistant",
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
      playReceiveSound();
    }, 800);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg"
      >
        {isOpen ? <X /> : <MessageCircle />}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 rounded-xl bg-card border shadow-xl flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
          >
            <div className="p-3 border-b font-semibold flex items-center gap-2">
              <Bot size={18} /> Portfolio Assistant
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${
                      msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && <div className="text-xs text-muted-foreground">Assistant is typing...</div>}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 border-t flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 rounded-md border px-2 text-sm"
                placeholder="Ask about Anush..."
              />
              <Button size="icon" onClick={handleSend}>
                <Send size={16} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
