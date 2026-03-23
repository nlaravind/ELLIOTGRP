import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Brain,
  Briefcase,
  ChevronDown,
  Clock,
  Cpu,
  FileBadge,
  GraduationCap,
  Link2,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { motion, useInView, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';

const highlightCards = [
  { label: 'Duration', value: '8-12 Weeks', icon: Clock },
  { label: 'Weekly Time', value: '6 Hours', icon: BookOpen },
  { label: 'Batch Options', value: 'Morning & Evening', icon: Users },
  { label: 'First Batch', value: '100 Students', icon: GraduationCap },
];

const coreTopics = [
  'Blockchain Fundamentals',
  'Cryptocurrency & Digital Assets',
  'Smart Contracts',
  'Web3 & dApps',
  'Blockchain Security',
  'Real-world Use Cases',
];

const aiTopics = [
  'AI for Data Analysis',
  'Automation in Smart Contracts',
  'Fraud Detection',
  'Predictive Analytics',
];

const curriculumWeeks = [
  'Week 1 - Blockchain Basics',
  'Week 2 - Cryptocurrency',
  'Week 3 - Blockchain Architecture',
  'Week 4 - Smart Contracts',
  'Week 5 - Web3 Applications',
  'Week 6 - Security',
  'Week 7 - Industry Use Cases',
  'Week 8 - AI in Blockchain',
  'Week 9-12 - Project & Certification',
];

const skillStats = [
  { label: 'Blockchain Knowledge', value: 100, suffix: '%' },
  { label: 'Smart Contract Skills', value: 8, suffix: '+' },
  { label: 'Security Awareness', value: 24, suffix: '/7' },
  { label: 'Industry Readiness', value: 12, suffix: ' Weeks' },
];

const faqs = [
  {
    question: 'What is the duration of the Blockchain Certification Programme?',
    answer:
      'The program duration is 8 to 12 weeks, with structured training designed to build practical blockchain skills within a short time frame.',
  },
  {
    question: 'How many hours per week is the training?',
    answer:
      'The program requires 6 hours per week, making it suitable for students and working professionals.',
  },
  {
    question: 'Are there different batch timings available?',
    answer: 'Yes. We offer morning batch and evening batch options for flexible scheduling.',
  },
  {
    question: 'Who can join this program?',
    answer:
      'This program is suitable for students, graduates, working professionals, entrepreneurs, and beginners interested in blockchain. No prior coding experience is required.',
  },
  {
    question: 'What topics will be covered in the training?',
    answer:
      'The program covers blockchain fundamentals, cryptocurrency and digital assets, smart contracts, Web3 and decentralized applications, blockchain security, real-world blockchain use cases, and AI as a supporting tool within blockchain applications.',
  },
  {
    question: 'Will I receive a certificate after completing the program?',
    answer:
      'Yes. Participants who successfully complete the program will receive a Professional Certificate in Blockchain Technology issued by ELLIOT Academy.',
  },
  {
    question: 'Is this program suitable for beginners?',
    answer:
      'Yes. The program is designed to start from the basics and gradually build advanced understanding through practical training and case studies.',
  },
  {
    question: 'What is the minimum batch size?',
    answer:
      'The first batch will have a minimum of 100 students. Seats are limited and allocated on a first-come, first-served basis.',
  },
  {
    question: 'Is the training conducted online or offline?',
    answer:
      'The program will be conducted in online mode through instructor-led sessions. Future batches may include classroom training options.',
  },
  {
    question: 'What skills will I gain after completing this program?',
    answer:
      'Participants will gain blockchain knowledge, smart contract understanding, Web3 fundamentals, security awareness, and practical industry skills.',
  },
  {
    question: 'Will this program help with career opportunities?',
    answer:
      'Yes. The program is designed to build practical skills that can support opportunities in blockchain technology, Web3 ecosystems, fintech and digital platforms, and technology startups.',
  },
  {
    question: 'How can I register for the program?',
    answer:
      'You can register by filling the online application form, contacting the academy directly, and paying the registration fee to confirm your seat.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const divider = (
  <div className="container mx-auto px-6">
    <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
  </div>
);

const CountUp: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = '' }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => setDisplay(latest));
    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  return (
    <div ref={ref} className="text-4xl font-serif text-gold">
      {display}
      {suffix}
    </div>
  );
};

export const AcademyPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const aimText = 'To create skilled professionals ready for the future of blockchain technology.';

  return (
    <div className="min-h-screen bg-navy text-silver font-sans overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-silver to-gold origin-left z-[60]"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-6 pt-8">
        <a href="/#sectors" className="flex items-center gap-2 text-gold hover:text-silver transition-colors w-fit">
          <ArrowLeft size={20} />
          Back to Our Ecosystem
        </a>
      </div>

      <section className="py-20 md:py-24 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.22),_transparent_32%),linear-gradient(180deg,#0a1428_0%,#0d1c37_55%,#09111f_100%)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full border border-gold/20" />
          <div className="absolute top-32 right-20 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-48 bg-gold/5 blur-3xl" />
        </div>

        <motion.div
          className="container mx-auto px-6 text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <div className="flex justify-center mb-6">
              <div className="p-5 rounded-full bg-navy/70 border border-gold/30 shadow-[0_0_35px_rgba(212,175,55,0.16)]">
                <GraduationCap size={58} className="text-gold" />
              </div>
            </div>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-5 text-silver"
          >
            ELLIOT ACADEMY
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gold tracking-[0.22em] text-sm md:text-lg font-bold uppercase mb-5"
          >
            Blockchain Certification Programme
          </motion.p>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-silver-dim text-xl md:text-2xl max-w-3xl mx-auto mb-10"
          >
            Become Industry-Ready in 8-12 Weeks
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="/#contact"
              className="inline-block px-8 py-4 bg-gold text-navy font-bold uppercase tracking-[0.16em] text-sm rounded-xl shadow-[0_0_25px_rgba(212,175,55,0.18)] hover:shadow-[0_0_35px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Apply Now
            </a>
            <a
              href="mailto:contact@elliotgroup.com"
              className="inline-block px-8 py-4 border border-gold/50 text-gold font-bold uppercase tracking-[0.16em] text-sm rounded-xl hover:bg-gold/10 hover:shadow-[0_0_30px_rgba(212,175,55,0.12)] transition-all duration-200"
            >
              Download Curriculum
            </a>
          </motion.div>
        </motion.div>
      </section>

      {divider}

      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {highlightCards.map((card) => (
              <motion.div
                key={card.label}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-7 shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
              >
                <card.icon className="w-10 h-10 text-gold mb-4" />
                <p className="text-gold text-xs uppercase tracking-[0.22em] mb-2">{card.label}</p>
                <p className="text-silver text-xl font-semibold">{card.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {divider}

      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
            >
              <p className="text-gold text-xs uppercase tracking-[0.24em] mb-4">About ELLIOT Academy</p>
              <h2 className="font-serif text-4xl text-silver mb-5">Blockchain Skills, Structured for Careers</h2>
              <p className="text-silver-dim text-lg leading-relaxed mb-5">
                ELLIOT Academy is the education and training division of ELLIOT Group, focused on building practical blockchain skills for the future digital economy.
              </p>
              <p className="text-silver-dim text-lg leading-relaxed mb-5">
                The academy prepares individuals to move from beginner level to industry-ready professionals through structured training, real-world case studies, and hands-on learning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-3 bg-gold/10 blur-2xl rounded-[2rem]" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
                <img src="/images/academy.jpg" alt="Elliot Academy" className="w-full h-[420px] object-cover opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-xl bg-navy/70 border border-gold/30">
                      <Network className="w-10 h-10 text-gold" />
                    </div>
                    <div>
                      <p className="text-gold uppercase tracking-[0.2em] text-xs mb-1">Visual Focus</p>
                      <p className="text-silver text-lg">Blockchain network, digital nodes, and future-ready training</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {divider}

      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h3 className="font-serif text-4xl text-silver mb-4">What You Will Learn</h3>
            <p className="text-silver-dim max-w-3xl mx-auto">
              Clean, practical modules focused on blockchain fundamentals first, with AI shown only where it supports blockchain systems.
            </p>
          </motion.div>

          <div className="mb-8">
            <p className="text-gold text-xs uppercase tracking-[0.22em] mb-5">Core Blockchain Topics</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {coreTopics.map((topic) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -4, borderColor: 'rgba(212,175,55,0.5)' }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.18)]"
                >
                  <Link2 className="w-10 h-10 text-gold mb-4" />
                  <p className="text-silver font-medium">{topic}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-gold text-xs uppercase tracking-[0.22em] mb-5">AI Within Blockchain</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
              {aiTopics.map((topic) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -4, borderColor: 'rgba(212,175,55,0.5)' }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.18)]"
                >
                  <Brain className="w-10 h-10 text-gold mb-4" />
                  <p className="text-silver font-medium">{topic}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {divider}

      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-xl border border-gold/20 rounded-[2rem] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 0 rgba(212,175,55,0.1)',
                  '0 0 35px rgba(212,175,55,0.32)',
                  '0 0 0 rgba(212,175,55,0.1)',
                ],
                scale: [1, 1.04, 1],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-24 h-24 rounded-full border border-gold/40 bg-navy/60 flex items-center justify-center mx-auto mb-6"
            >
              <FileBadge className="w-12 h-12 text-gold" />
            </motion.div>
            <h3 className="font-serif text-4xl text-silver mb-4">Professional Certificate in Blockchain Technology</h3>
            <p className="text-silver-dim text-lg max-w-3xl mx-auto">
              Aligned with global academic and industry standards, including methodologies taught in leading institutions such as Columbia University.
            </p>
          </motion.div>
        </div>
      </section>

      {divider}

      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h3 className="font-serif text-4xl text-silver mb-4">Curriculum Timeline</h3>
            <p className="text-silver-dim max-w-2xl mx-auto">
              A structured path from foundations to project-based certification.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/10 via-gold/60 to-gold/10" />
            <div className="space-y-6">
              {curriculumWeeks.map((week, index) => (
                <motion.div
                  key={week}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:mr-auto' : 'md:pl-8 md:ml-auto'} pl-12 md:pl-0`}
                >
                  <div className="absolute left-0 md:left-auto md:right-[-8px] top-7 w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.4)]" />
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.18)]">
                    <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">Module {index + 1}</p>
                    <p className="text-silver text-lg">{week}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {divider}

      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h3 className="font-serif text-4xl text-silver mb-4">Skills Students Will Gain</h3>
            <p className="text-silver-dim max-w-2xl mx-auto">
              Key outcomes presented as clean metrics and capability areas.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillStats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-7 text-center shadow-[0_15px_40px_rgba(0,0,0,0.18)]"
              >
                <CountUp value={item.value} suffix={item.suffix} />
                <p className="text-silver-dim mt-4">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {divider}

      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold text-xs uppercase tracking-[0.22em] mb-4">Our Aim</p>
            <h3 className="font-serif text-4xl md:text-5xl text-silver leading-tight">
              {aimText.split('').map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.03, delay: index * 0.018 }}
                >
                  {char}
                </motion.span>
              ))}
            </h3>
          </div>
        </div>
      </section>

      {divider}

      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <p className="text-gold text-xs uppercase tracking-[0.22em] mb-4">Frequently Asked Questions</p>
              <h3 className="font-serif text-4xl text-silver">ELLIOT Academy Blockchain Certification Programme</h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.18)]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                    >
                      <span className="text-silver font-medium">{faq.question}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-gold shrink-0"
                      >
                        <ChevronDown size={20} />
                      </motion.span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0 text-silver-dim leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {divider}

      <section className="py-20 bg-[linear-gradient(180deg,#b68b22_0%,#d4af37_52%,#c4951e_100%)]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-navy/70 text-xs uppercase tracking-[0.22em] mb-4">Call to Action</p>
            <h2 className="font-serif text-3xl md:text-5xl text-navy mb-4">Start Your Blockchain Journey Today</h2>
            <p className="text-navy/80 max-w-2xl mx-auto mb-10 text-lg">
              Join the first batch of ELLIOT Academy
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/#contact"
                className="inline-block px-8 py-4 bg-navy text-gold font-bold uppercase tracking-[0.16em] text-sm rounded-xl shadow-[0_0_25px_rgba(10,20,40,0.2)] hover:shadow-[0_0_35px_rgba(10,20,40,0.35)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Apply Now
              </a>
              <a
                href="/#contact"
                className="inline-block px-8 py-4 border border-navy text-navy font-bold uppercase tracking-[0.16em] text-sm rounded-xl hover:bg-navy/10 hover:shadow-[0_0_25px_rgba(10,20,40,0.18)] transition-all duration-200"
              >
                Register
              </a>
              <a
                href="/#contact"
                className="inline-block px-8 py-4 border border-navy text-navy font-bold uppercase tracking-[0.16em] text-sm rounded-xl hover:bg-navy/10 hover:shadow-[0_0_25px_rgba(10,20,40,0.18)] transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
