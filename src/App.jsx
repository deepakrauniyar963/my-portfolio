import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  ChevronRight,
  Terminal,
  Cpu,
  Code,
  ExternalLink,
  Phone,
  GraduationCap,
  Calendar,
  Send,
  Menu,
  X,
  ArrowUp,
  Trophy,
  Star,
  BookOpen,
  Zap,
  FileText,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const skills = [
  { name: "React", icon: "⚛️", color: "cyan", level: 85 },
  { name: "Node.js", icon: "🟢", color: "green", level: 80 },
  { name: "MongoDB", icon: "🍃", color: "emerald", level: 75 },
  { name: "Express", icon: "🚂", color: "gray", level: 78 },
  { name: "Python", icon: "🐍", color: "yellow", level: 82 },
  { name: "OpenCV", icon: "👁️", color: "blue", level: 70 },
  { name: "Arduino", icon: "🔌", color: "teal", level: 75 },
  { name: "C / C++", icon: "⚙️", color: "orange", level: 72 },
  { name: "Java", icon: "☕", color: "red", level: 65 },
  { name: "SQLite", icon: "🗄️", color: "indigo", level: 70 },
  { name: "Git", icon: "🔀", color: "rose", level: 88 },
  { name: "Tailwind", icon: "🎨", color: "sky", level: 83 },
];

const levelLabel = (n) =>
  n >= 85
    ? "Expert"
    : n >= 75
      ? "Proficient"
      : n >= 65
        ? "Intermediate"
        : "Learning";
const levelColor = (n) =>
  n >= 85
    ? "text-cyan-400 bg-cyan-500/10 border-cyan-500/30"
    : n >= 75
      ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
      : n >= 65
        ? "text-yellow-400 bg-yellow-500/10 border-yellow-500/30"
        : "text-gray-400 bg-gray-500/10 border-gray-500/30";
const barColor = (n) =>
  n >= 85
    ? "from-cyan-500 to-blue-500"
    : n >= 75
      ? "from-emerald-500 to-cyan-500"
      : n >= 65
        ? "from-yellow-500 to-orange-500"
        : "from-gray-500 to-gray-400";

const colorMap = {
  cyan: "border-cyan-500/40 bg-cyan-500/5 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10",
  green:
    "border-green-500/40 bg-green-500/5 text-green-400 hover:border-green-400 hover:bg-green-500/10",
  emerald:
    "border-emerald-500/40 bg-emerald-500/5 text-emerald-400 hover:border-emerald-400 hover:bg-emerald-500/10",
  gray: "border-gray-500/40 bg-gray-500/5 text-gray-300 hover:border-gray-400 hover:bg-gray-500/10",
  yellow:
    "border-yellow-500/40 bg-yellow-500/5 text-yellow-400 hover:border-yellow-400 hover:bg-yellow-500/10",
  blue: "border-blue-500/40 bg-blue-500/5 text-blue-400 hover:border-blue-400 hover:bg-blue-500/10",
  teal: "border-teal-500/40 bg-teal-500/5 text-teal-400 hover:border-teal-400 hover:bg-teal-500/10",
  orange:
    "border-orange-500/40 bg-orange-500/5 text-orange-400 hover:border-orange-400 hover:bg-orange-500/10",
  red: "border-red-500/40 bg-red-500/5 text-red-400 hover:border-red-400 hover:bg-red-500/10",
  indigo:
    "border-indigo-500/40 bg-indigo-500/5 text-indigo-400 hover:border-indigo-400 hover:bg-indigo-500/10",
  rose: "border-rose-500/40 bg-rose-500/5 text-rose-400 hover:border-rose-400 hover:bg-rose-500/10",
  sky: "border-sky-500/40 bg-sky-500/5 text-sky-400 hover:border-sky-400 hover:bg-sky-500/10",
};

const projects = [
  {
    id: 1,
    tag: "HARDWARE & AI INTEGRATION",
    tagColor: "text-cyan-400",
    title: "SmartEntry 2FA",
    description:
      "An Enterprise-Grade Dual Biometric Attendance device. Uses a laptop interface for Real-time Facial Recognition (OpenCV) communicating with hardware-level Fingerprint scanning (Arduino R307). Features SMS/Email alerts via SIM800A and SQLite WAL-mode.",
    tech: ["Python", "OpenCV", "Arduino C++", "SQLite"],
    mockupBg: "from-cyan-950 to-gray-900",
    mockupAccent: "bg-cyan-500",
    mockupLines: ["cyan-400", "cyan-600", "gray-700"],
    accentColor: "cyan",
    borderHover: "hover:border-cyan-500/30",
    githubUrl: "https://github.com/deepakrauniyar963",
    demoUrl: null,
  },
  {
    id: 2,
    tag: "FULL-STACK WEB",
    tagColor: "text-emerald-400",
    title: "MERN Task Manager",
    description:
      "A full-stack productivity application built on the MERN stack with JWT authentication, real-time updates, and role-based access control. Features drag-and-drop Kanban boards, priority filtering, and deadline reminders.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    mockupBg: "from-emerald-950 to-gray-900",
    mockupAccent: "bg-emerald-500",
    mockupLines: ["emerald-400", "emerald-600", "gray-700"],
    accentColor: "emerald",
    borderHover: "hover:border-emerald-500/30",
    githubUrl: "https://github.com/deepakrauniyar963",
    demoUrl: null,
  },
  {
    id: 3,
    tag: "IoT & AUTOMATION",
    tagColor: "text-blue-400",
    title: "GSM Alert System",
    description:
      "A real-time IoT alert system using Arduino and SIM800A GSM module that sends automated SMS notifications on sensor triggers. Integrates temperature, motion, and door sensors with a lightweight web dashboard.",
    tech: ["Arduino C++", "SIM800A", "Serial Comm", "HTML/JS"],
    mockupBg: "from-blue-950 to-gray-900",
    mockupAccent: "bg-blue-500",
    mockupLines: ["blue-400", "blue-600", "gray-700"],
    accentColor: "blue",
    borderHover: "hover:border-blue-500/30",
    githubUrl: "https://github.com/deepakrauniyar963",
    demoUrl: null,
  },
];

const achievements = [
  {
    icon: <Trophy size={22} />,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/20",
    title: "MCA CGPA: 8.4",
    desc: "Completed Master of Computer Applications with 8.4 CGPA — consistent academic excellence across both BCA (8.5) and MCA.",
    year: "2026",
  },
  {
    icon: <Zap size={22} />,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    title: "SmartEntry 2FA — MCA Project",
    desc: "Built an enterprise-grade dual biometric attendance system combining AI face recognition + hardware fingerprint scanning as MCA final year project.",
    year: "2026",
  },
  {
    icon: <Star size={22} />,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    title: "Full-Stack MERN Portfolio",
    desc: "Designed and deployed multiple full-stack web projects using MERN stack with JWT auth, REST APIs, and responsive UI.",
    year: "2025",
  },
  {
    icon: <BookOpen size={22} />,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    title: "IoT + AI Integration",
    desc: "Successfully integrated real-world hardware (Arduino, GSM, fingerprint sensors) with Python AI pipelines — a rare skill combo in web developers.",
    year: "2026",
  },
];

const navLinks = [
  "About",
  "Skills",
  "Projects",
  "Achievements",
  "Education",
  "Contact",
];
const sectionIds = [
  "about",
  "skills",
  "projects",
  "achievements",
  "education",
  "contact",
];

// ─── SVG ICONS ───────────────────────────────────────────────────────────────
const GithubSVG = ({ size = 24 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
const LinkedinSVG = ({ size = 24 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const InstagramSVG = ({ size = 24 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// ─── PROJECT MOCKUP THUMBNAIL ─────────────────────────────────────────────────
function ProjectMockup({ project }) {
  const accent = project.accentColor;
  const accentColors = {
    cyan: {
      bar: "#22d3ee",
      dot: "#0e7490",
      line1: "#164e63",
      line2: "#083344",
    },
    emerald: {
      bar: "#34d399",
      dot: "#059669",
      line1: "#064e3b",
      line2: "#022c22",
    },
    blue: {
      bar: "#60a5fa",
      dot: "#2563eb",
      line1: "#1e3a5f",
      line2: "#0f1f3d",
    },
  };
  const c = accentColors[accent];

  return (
    <div
      className={`w-full h-56 rounded-xl overflow-hidden relative bg-gradient-to-br ${project.mockupBg} border border-gray-700/60 group-hover:border-opacity-60 transition-all duration-500`}
    >
      {/* fake browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-black/30 border-b border-gray-700/40">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <div className="flex-1 mx-2 h-4 bg-gray-800/60 rounded text-[8px] flex items-center px-2 text-gray-500 font-mono overflow-hidden">
          deepak.dev / {project.title.toLowerCase().replace(/\s+/g, "-")}
        </div>
      </div>

      {/* fake UI content */}
      <div className="p-3 space-y-2">
        {/* navbar bar */}
        <div className="flex items-center gap-2">
          <div
            className="h-2 w-16 rounded-sm"
            style={{ background: c.bar, opacity: 0.8 }}
          />
          <div className="flex gap-1.5 ml-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-1.5 w-8 rounded-sm bg-gray-600/60" />
            ))}
          </div>
        </div>
        {/* hero block */}
        <div className="rounded-lg p-2 bg-black/20 border border-gray-700/30">
          <div
            className="h-2 w-24 rounded-sm mb-1.5"
            style={{ background: c.bar, opacity: 0.6 }}
          />
          <div className="h-1.5 w-32 rounded-sm bg-gray-600/50 mb-1" />
          <div className="h-1.5 w-28 rounded-sm bg-gray-600/40" />
          <div className="mt-2 flex gap-2">
            <div
              className="h-5 w-14 rounded-md"
              style={{ background: c.bar, opacity: 0.7 }}
            />
            <div className="h-5 w-14 rounded-md bg-gray-700/60" />
          </div>
        </div>
        {/* cards row */}
        <div className="grid grid-cols-3 gap-1.5">
          {[0.9, 0.6, 0.75].map((op, i) => (
            <div
              key={i}
              className="rounded-md p-1.5 bg-black/20 border border-gray-700/30"
            >
              <div
                className="h-1.5 w-full rounded-sm mb-1"
                style={{ background: c.dot, opacity: op }}
              />
              <div className="h-1 w-3/4 rounded-sm bg-gray-600/40" />
            </div>
          ))}
        </div>
        {/* progress bars (for SmartEntry) or table rows */}
        <div className="space-y-1">
          {[70, 45, 85].map((w, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className="h-1.5 rounded-full bg-gray-700/50 flex-1 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${w}%`,
                    background: c.bar,
                    opacity: 0.5 + i * 0.1,
                  }}
                />
              </div>
              <span className="text-[7px] text-gray-600">{w}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* overlay glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${c.bar}15 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}

// ─── TYPEWRITER ───────────────────────────────────────────────────────────────
const roles = [
  "Full-Stack MERN Developer",
  "IoT & Hardware Enthusiast",
  "AI & Computer Vision Builder",
  "Arduino & Embedded Systems",
];

function TypeWriter() {
  const [state, setState] = useState({
    displayed: "",
    roleIdx: 0,
    charIdx: 0,
    deleting: false,
  });
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const { roleIdx, charIdx, deleting } = state;
    const current = roles[roleIdx];
    const next = () => {
      if (!deleting && charIdx < current.length)
        setState((s) => ({
          ...s,
          charIdx: s.charIdx + 1,
          displayed: current.slice(0, s.charIdx + 1),
        }));
      else if (!deleting && charIdx === current.length)
        setState((s) => ({ ...s, deleting: true }));
      else if (deleting && charIdx > 0)
        setState((s) => ({
          ...s,
          charIdx: s.charIdx - 1,
          displayed: current.slice(0, s.charIdx - 1),
        }));
      else if (deleting && charIdx === 0)
        setState((s) => ({
          ...s,
          deleting: false,
          roleIdx: (s.roleIdx + 1) % roles.length,
        }));
    };
    const delay =
      !deleting && charIdx === current.length ? 1800 : deleting ? 35 : 65;
    const t = setTimeout(next, delay);
    return () => clearTimeout(t);
  }, [state]);

  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">
      {state.displayed}
      <span
        className="inline-block w-[3px] ml-[2px] rounded-sm"
        style={{
          background: "linear-gradient(to bottom, #22d3ee, #3b82f6)",
          opacity: blink ? 1 : 0,
          transition: "opacity 0.1s",
          height: "0.9em",
          verticalAlign: "middle",
          marginBottom: "2px",
        }}
      />
    </span>
  );
}

// ─── PARTICLE CANVAS ──────────────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H;
    const particles = [];
    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < 70; i++)
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.5 + 0.4,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.15,
      });
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++)
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x,
            dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34,211,238,${0.07 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34,211,238,${p.alpha})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  );
}

// ─── PAGE LOADER ──────────────────────────────────────────────────────────────
function PageLoader({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const steps = [20, 45, 70, 90, 100];
    let i = 0;
    const run = () => {
      if (i < steps.length) {
        setProgress(steps[i]);
        i++;
        setTimeout(run, i === steps.length ? 200 : 180 + Math.random() * 120);
      } else {
        setTimeout(onDone, 300);
      }
    };
    setTimeout(run, 150);
  }, [onDone]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#080810] flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl font-bold tracking-tighter text-white mb-8"
      >
        Deepak<span className="text-cyan-400">.dev</span>
      </motion.div>

      <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-500 text-xs mt-3 font-mono"
      >
        {progress}%
      </motion.p>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-cyan-500/5 blur-[80px]" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-blue-500/5 blur-[80px]" />
      </div>
    </motion.div>
  );
}

// ─── SKILL BAR ────────────────────────────────────────────────────────────────
function SkillBar({ name, icon, color, level }) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setAnimate(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${colorMap[color]}`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <span className="text-sm font-semibold">{name}</span>
        </div>
        <span
          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${levelColor(level)}`}
        >
          {levelLabel(level)}
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-gray-700/60 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${barColor(level)} transition-all duration-1000 ease-out`}
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
      <div className="text-right mt-1">
        <span className="text-[10px] text-gray-500">{level}%</span>
      </div>
    </div>
  );
}

// ─── BACK TO TOP ──────────────────────────────────────────────────────────────
function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-gray-900 shadow-lg shadow-cyan-500/30 transition-all hover:-translate-y-1"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// ─── RESUME MODAL ─────────────────────────────────────────────────────────────
function ResumeModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-[#0d0d18] border border-gray-700 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <FileText size={18} className="text-cyan-400" />
              <span className="text-white font-semibold text-sm">
                Deepak_Rauniyar_Resume.pdf
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/Deepak_Rauniyar_Resume.pdf"
                download
                className="flex items-center gap-2 text-xs bg-cyan-500 hover:bg-cyan-400 text-gray-900 px-3 py-1.5 rounded-lg font-semibold transition-all"
              >
                Download
              </a>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* PDF viewer — uses browser's built-in PDF renderer */}
          <div
            className="bg-gray-900/50 p-4 text-center"
            style={{ height: "70vh" }}
          >
            <object
              data="/Deepak_Rauniyar_Resume.pdf"
              type="application/pdf"
              className="w-full h-full rounded-lg"
            >
              {/* Fallback if PDF can't render in browser */}
              <div className="flex flex-col items-center justify-center h-full gap-4">
                <FileText size={48} className="text-gray-600" />
                <p className="text-gray-400 text-sm">
                  Browser PDF preview not supported.
                </p>
                <a
                  href="/Deepak_Rauniyar_Resume.pdf"
                  download
                  className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-gray-900 px-5 py-2.5 rounded-lg font-semibold transition-all"
                >
                  Download Resume
                </a>
              </div>
            </object>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
function App() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [showResume, setShowResume] = useState(false);

  // scroll + active section tracker
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // find which section is in view
      let current = "about";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "d9dfdae6-c72e-4ec0-b6f7-8255e4a5d5f7");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("Message Sent Successfully! ✅");
      event.target.reset();
    } else setResult(data.message);
  };

  return (
    <>
      {/* ── PAGE LOADER ── */}
      <AnimatePresence>
        {loading && <PageLoader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {/* ── RESUME MODAL ── */}
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}

      <div className="min-h-screen bg-[#080810] text-gray-100 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
        <ParticleCanvas />
        <BackToTop />

        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-cyan-500/4 blur-[140px]" />
          <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/4 blur-[140px]" />
          <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-emerald-500/3 blur-[140px]" />
        </div>

        {/* ── NAVBAR ── */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#080810]/90 backdrop-blur-xl border-b border-gray-800/60 shadow-lg shadow-black/20" : "bg-transparent"}`}
        >
          <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-[1400px] mx-auto">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold tracking-tighter text-white z-10"
            >
              Deepak<span className="text-cyan-400">.dev</span>
            </motion.h1>

            {/* Desktop nav with active indicator */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex gap-7 text-sm font-medium"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.toLowerCase();
                return (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className={`relative py-1 transition-colors duration-200 group ${isActive ? "text-cyan-400" : "text-gray-400 hover:text-cyan-400"}`}
                  >
                    {link}
                    <span
                      className={`absolute bottom-0 left-0 h-px bg-cyan-400 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </a>
                );
              })}
            </motion.div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden z-10 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/60 transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="md:hidden overflow-hidden bg-[#0d0d18]/95 backdrop-blur-xl border-b border-gray-800/60"
              >
                <div className="flex flex-col px-6 py-4 gap-1">
                  {navLinks.map((link, i) => {
                    const isActive = activeSection === link.toLowerCase();
                    return (
                      <motion.a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        onClick={() => setMenuOpen(false)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className={`py-3 px-4 rounded-lg transition-all font-medium text-sm border ${isActive ? "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" : "text-gray-300 hover:text-cyan-400 hover:bg-gray-800/40 border-transparent hover:border-gray-700/50"}`}
                      >
                        {link}
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <main className="max-w-[1400px] mx-auto px-6 md:px-8 pt-28 pb-16 relative z-10">
          {/* ── HERO ── */}
          <div
            id="about"
            className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-8 max-w-7xl mx-auto"
          >
            {/* LEFT SIDE: TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-3/5"
            >
              {/* Badge row — MCA + Open to Work + Location */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="flex flex-wrap items-center gap-3 mb-6"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/60 border border-gray-700/80 text-cyan-400 text-sm">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  MCA Graduate 2026 · Integral University
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open to Work
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-800/40 border border-gray-700/50 text-gray-400 text-xs">
                  📍 Lucknow, India · Remote OK
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white leading-tight"
              >
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Deepak
                </span>
                .
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="text-2xl md:text-3xl font-semibold mb-6 min-h-[2.5rem] flex items-center"
              >
                <TypeWriter />
              </motion.div>

              {/* About Me — personal intro */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed text-justify"
              >
                I'm a{" "}
                <span className="text-white font-medium">
                  Full-Stack MERN Developer
                </span>{" "}
                from Lucknow who loves building things that work — both on the
                screen and in the real world. During my MCA at Integral
                University, I focused on bridging the gap between software and
                physical devices. I build projects that combine{" "}
                <span className="text-cyan-400 font-medium">
                  web technology
                </span>{" "}
                with{" "}
                <span className="text-emerald-400 font-medium">
                  hardware & AI
                </span>{" "}
                — from laptop-interfaced biometric devices to IoT alert
                networks. I'm currently looking for exciting opportunities to
                build, learn, and grow as an engineer.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 hover:-translate-y-0.5"
                >
                  <Mail size={20} /> Contact Me
                </a>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowResume(true)}
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-cyan-500/50 text-white px-5 py-3 rounded-lg font-semibold transition-all hover:-translate-y-0.5"
                  >
                    <FileText size={18} className="text-cyan-400" /> View Resume
                  </button>
                  <a
                    href="/Deepak_Rauniyar_Resume.pdf"
                    download
                    className="flex items-center gap-2 bg-gray-800/60 hover:bg-gray-700 border border-gray-700 text-gray-300 hover:text-white px-4 py-3 rounded-lg transition-all hover:-translate-y-0.5 text-sm font-medium"
                  >
                    <ChevronRight size={16} /> Download
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex gap-6 mt-10 text-gray-400"
              >
                <a
                  href="https://github.com/deepakrauniyar963"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white hover:-translate-y-1 transition-all"
                >
                  <GithubSVG />
                </a>
                <a
                  href="https://www.linkedin.com/in/deepakrauniyar963"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 hover:-translate-y-1 transition-all"
                >
                  <LinkedinSVG />
                </a>
                <a
                  href="https://www.instagram.com/rauniyar.js/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-500 hover:-translate-y-1 transition-all"
                >
                  <InstagramSVG />
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE: PHOTO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
              className="w-full md:w-2/5 flex justify-center md:justify-end relative"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px]">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

                {/* Profile Image Container */}
                <div className="relative w-full h-full rounded-full border-2 border-gray-800 p-2 overflow-hidden bg-[#0d0d18] shadow-2xl hover:border-cyan-500/50 transition-all duration-500 group">
                  <img
                    src="/profile.png"
                    alt="Deepak Rauniyar"
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Decorative Tech Elements */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute bottom-4 right-0 md:-right-4 bg-gray-900 border border-gray-700 px-4 py-2 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md"
                >
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </div>
                  <span className="text-xs font-bold text-gray-200">
                    Available for Work
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ── STATS STRIP ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              {
                value: "3+",
                label: "Projects Built",
                color: "text-cyan-400",
                border: "hover:border-cyan-500/40",
              },
              {
                value: "12",
                label: "Technologies",
                color: "text-emerald-400",
                border: "hover:border-emerald-500/40",
              },
              {
                value: "8.4",
                label: "MCA CGPA",
                color: "text-yellow-400",
                border: "hover:border-yellow-500/40",
              },
              {
                value: "2",
                label: "Degrees",
                color: "text-blue-400",
                border: "hover:border-blue-500/40",
              },
            ].map(({ value, label, color, border }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`text-center p-5 rounded-2xl bg-gray-900/40 border border-gray-800 ${border} transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`text-3xl md:text-4xl font-bold ${color} mb-1`}>
                  {value}
                </div>
                <div className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── PILLAR CARDS ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                Icon: Code,
                color: "text-cyan-400",
                border: "hover:border-cyan-500/50",
                title: "Full-Stack Web",
                desc: "C, Java, Python, MongoDB, Express.js, React, Node.js (MERN).",
              },
              {
                Icon: Cpu,
                color: "text-emerald-400",
                border: "hover:border-emerald-500/50",
                title: "IoT & Hardware",
                desc: "Arduino, SIM800A GSM, R307 Fingerprint modules & serial communication.",
              },
              {
                Icon: Terminal,
                color: "text-blue-400",
                border: "hover:border-blue-500/50",
                title: "AI & Vision",
                desc: "Python, OpenCV, and multi-threading for real-time facial recognition.",
              },
            ].map(({ Icon, color, border, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl bg-gray-900/50 border border-gray-800 ${border} transition-all duration-300 hover:-translate-y-1`}
              >
                <Icon className={`${color} mb-4`} size={32} />
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* ── SKILLS ── */}
          <motion.div
            id="skills"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32 pt-10 border-t border-gray-800"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Tech <span className="text-cyan-400">Stack</span>
            </h2>
            <p className="text-gray-500 mb-4 text-sm">
              Tools & technologies — with proficiency levels
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                {
                  label: "Expert (85%+)",
                  cls: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
                },
                {
                  label: "Proficient (75–84%)",
                  cls: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
                },
                {
                  label: "Intermediate (65–74%)",
                  cls: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
                },
              ].map(({ label, cls }) => (
                <span
                  key={label}
                  className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${cls}`}
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {skills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  <SkillBar {...s} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── PROJECTS with MOCKUP thumbnails ── */}
          <motion.div
            id="projects"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32 pt-10 border-t border-gray-800"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {projects.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`flex flex-col md:flex-row gap-8 bg-gray-900/40 border border-gray-800 rounded-2xl p-6 transition-all duration-300 group ${p.borderHover} hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30`}
                >
                  {/* Project Mockup Thumbnail */}
                  <div className="w-full md:w-5/12">
                    <ProjectMockup project={p} />
                  </div>
                  <div className="w-full md:w-7/12 flex flex-col justify-center">
                    <div
                      className={`${p.tagColor} text-xs font-bold tracking-widest mb-2 uppercase`}
                    >
                      {p.tag}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {p.title}
                    </h3>
                    <p className="text-gray-400 mb-5 leading-relaxed text-sm">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 bg-gray-800/80 text-gray-300 text-xs rounded-md border border-gray-700/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors border border-gray-700 hover:border-gray-500 px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50"
                        >
                          <GithubSVG size={16} /> Source Code
                        </a>
                      )}
                      {p.demoUrl && (
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm text-white hover:text-cyan-400 transition-colors"
                        >
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── ACHIEVEMENTS ── */}
          <motion.div
            id="achievements"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32 pt-10 border-t border-gray-800"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Achievements & <span className="text-cyan-400">Highlights</span>
            </h2>
            <p className="text-gray-500 mb-10 text-sm">
              Milestones, certifications & notable work
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex gap-4 p-5 rounded-2xl border bg-gray-900/40 hover:bg-gray-900/60 transition-all duration-300 hover:-translate-y-1 ${a.bg}`}
                >
                  <div
                    className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${a.bg} ${a.color} border`}
                  >
                    {a.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-bold text-white text-sm leading-tight">
                        {a.title}
                      </h3>
                      <span className="text-[10px] font-semibold text-gray-500 shrink-0 bg-gray-800 px-2 py-0.5 rounded-full">
                        {a.year}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {a.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── EDUCATION ── */}
          <motion.div
            id="education"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32 pt-10 border-t border-gray-800"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Education & <span className="text-cyan-400">Background</span>
            </h2>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
              {[
                {
                  year: "Graduated 2026",
                  degree: "Master of Computer Applications",
                  school: "Integral University, Lucknow",
                  note: "CGPA: 8.4",
                  noteType: "badge-emerald",
                  active: true,
                },
                {
                  year: "Graduated 2024",
                  degree: "Bachelor of Computer Applications",
                  school: "Integral University, Lucknow",
                  note: "CGPA: 8.5",
                  noteType: "badge-emerald",
                  active: false,
                },
                {
                  year: "2020",
                  degree: "Class 12th",
                  school: "U.P Board",
                  note: "Percentage: 69%",
                  noteType: "badge-gray",
                  active: false,
                },
                {
                  year: "2018",
                  degree: "Class 10th",
                  school: "U.P Board",
                  note: "Percentage: 75.83%",
                  noteType: "badge-gray",
                  active: false,
                },
              ].map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border ${edu.active ? "border-cyan-500 bg-gray-900 text-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.25)]" : "border-gray-600 bg-gray-900 text-gray-400"} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10`}
                  >
                    {i < 2 ? (
                      <GraduationCap size={20} />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-gray-600" />
                    )}
                  </div>
                  <div
                    className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-gray-900/40 border border-gray-800 transition-all ${edu.active ? "hover:border-cyan-500/50" : "hover:border-gray-600"}`}
                  >
                    <div
                      className={`flex items-center gap-2 text-sm font-bold mb-1 ${edu.active ? "text-cyan-400" : "text-gray-400"}`}
                    >
                      <Calendar size={14} /> {edu.year}
                    </div>
                    <h3
                      className={`font-bold mb-1 ${edu.active ? "text-xl text-white" : "text-lg text-gray-200"}`}
                    >
                      {edu.degree}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{edu.school}</p>
                    {edu.noteType === "text" && (
                      <p className="text-gray-500 text-sm">{edu.note}</p>
                    )}
                    {edu.noteType === "badge-emerald" && (
                      <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20">
                        {edu.note}
                      </span>
                    )}
                    {edu.noteType === "badge-gray" && (
                      <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 text-xs font-semibold rounded-full border border-gray-700">
                        {edu.note}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── CONTACT ── */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32 pt-10 border-t border-gray-800"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Get In <span className="text-cyan-400">Touch</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-900/40 p-8 rounded-2xl border border-gray-800 shadow-xl">
                <form onSubmit={onSubmit} className="space-y-5">
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full bg-gray-800/50 text-white rounded-lg p-3 border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-gray-800/50 text-white rounded-lg p-3 border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="4"
                      placeholder="How can I help you?"
                      className="w-full bg-gray-800/50 text-white rounded-lg p-3 border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/20 transition-all resize-none"
                    />
                  </div>
                  <input
                    type="hidden"
                    name="subject"
                    value="New Message from Deepak.dev Portfolio"
                  />
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                  />
                  <button
                    type="submit"
                    disabled={result === "Sending...."}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all shadow-lg hover:-translate-y-0.5 ${
                      result === "Sending...."
                        ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                        : "bg-cyan-500 hover:bg-cyan-400 text-gray-900 shadow-cyan-500/20 hover:shadow-cyan-400/30"
                    }`}
                  >
                    <Send size={18} />{" "}
                    {result === "Sending...." ? "Sending..." : "Send Message"}
                  </button>
                  {result && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-cyan-400 font-medium mt-4"
                    >
                      {result}
                    </motion.p>
                  )}
                </form>
              </div>
              <div className="flex flex-col justify-center space-y-8">
                <p className="text-gray-400 text-lg leading-relaxed">
                  Whether you have a question, a project idea, or just want to
                  say hi, I'll try my best to get back to you!
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:deepakrauniyar.official963@gmail.com"
                    className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors p-4 rounded-xl bg-gray-800/20 border border-gray-800 hover:border-cyan-500/30 group"
                  >
                    <div className="p-3 bg-gray-800 rounded-lg text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">
                        Email Me At
                      </p>
                      <p className="font-semibold break-all text-sm">
                        deepakrauniyar.official963@gmail.com
                      </p>
                    </div>
                  </a>
                  <a
                    href="tel:+919794322637"
                    className="flex items-center gap-4 text-gray-300 hover:text-emerald-400 transition-colors p-4 rounded-xl bg-gray-800/20 border border-gray-800 hover:border-emerald-500/30 group"
                  >
                    <div className="p-3 bg-gray-800 rounded-lg text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">
                        Call Me At
                      </p>
                      <p className="font-semibold">+91 9794322637</p>
                    </div>
                  </a>
                </div>
                <div className="flex gap-4 pt-4">
                  {[
                    {
                      href: "https://github.com/deepakrauniyar963",
                      svg: <GithubSVG />,
                      hover: "hover:text-white",
                    },
                    {
                      href: "https://www.linkedin.com/in/deepakrauniyar963",
                      svg: <LinkedinSVG />,
                      hover: "hover:text-blue-400",
                    },
                    {
                      href: "https://www.instagram.com/rauniyar.js/",
                      svg: <InstagramSVG />,
                      hover: "hover:text-pink-500",
                    },
                  ].map(({ href, svg, hover }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-400 ${hover} hover:bg-gray-700 transition-all hover:-translate-y-1`}
                    >
                      {svg}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── FOOTER ── */}
          <footer className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="text-gray-400 font-medium">Deepak Rauniyar</span>
              . Built with React & Tailwind CSS.
            </p>
            <p className="mt-1 text-gray-600 text-xs">
              Made with ❤️ in Lucknow
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
