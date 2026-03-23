import React from 'react';
import {
  ArrowLeft,
  Brain,
  Clock,
  GraduationCap,
  Link2,
  ShieldCheck,
  Users,
  BookOpen,
  Briefcase,
} from 'lucide-react';

export const AcademyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy text-silver font-sans">
      <div className="container mx-auto px-6 pt-8">
        <a href="/#sectors" className="flex items-center gap-2 text-gold hover:text-silver transition-colors w-fit">
          <ArrowLeft size={20} />
          Back to Our Ecosystem
        </a>
      </div>

      <section className="py-20 bg-gradient-to-b from-navy to-navy-light">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <GraduationCap size={64} className="text-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-silver">
            ELLIOT ACADEMY
          </h1>
          <h2 className="text-gold tracking-[0.24em] text-base md:text-xl font-bold mb-8 uppercase">
            Blockchain Skills for the Future Digital World
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-navy/70 border border-navy-lighter rounded-lg p-5">
              <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">Duration</p>
              <p className="text-silver font-bold">8-12 Weeks</p>
            </div>
            <div className="bg-navy/70 border border-navy-lighter rounded-lg p-5">
              <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">Weekly Time</p>
              <p className="text-silver font-bold">6 Hours</p>
            </div>
            <div className="bg-navy/70 border border-navy-lighter rounded-lg p-5">
              <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">Mode</p>
              <p className="text-silver font-bold">Online</p>
            </div>
            <div className="bg-navy/70 border border-navy-lighter rounded-lg p-5">
              <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">Batch</p>
              <p className="text-silver font-bold">Morning & Evening</p>
            </div>
            <div className="bg-navy/70 border border-navy-lighter rounded-lg p-5 col-span-2 md:col-span-1">
              <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">First Batch</p>
              <p className="text-silver font-bold">Min 100 Students</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
            <div className="bg-navy-light rounded-2xl border border-navy-lighter p-8">
              <h2 className="text-gold font-bold tracking-widest uppercase mb-5 text-sm">About ELLIOT Academy</h2>
              <p className="text-silver-dim text-lg leading-relaxed mb-5">
                ELLIOT Academy is the training and education division of ELLIOT Group, focused on developing practical skills in Blockchain technology for the future digital economy.
              </p>
              <p className="text-silver-dim text-lg leading-relaxed mb-5">
                The academy prepares individuals to move from beginner level to industry-ready professionals through structured training, real-world case studies, and hands-on learning.
              </p>
              <p className="text-silver-dim text-lg leading-relaxed">
                Artificial Intelligence is introduced only as a supporting tool within Blockchain applications, such as automation, analytics, and smart contract optimization.
              </p>
            </div>

            <div className="bg-gold/10 rounded-2xl border border-gold/30 p-8">
              <p className="text-gold font-bold tracking-widest uppercase text-xs mb-4">Short Version</p>
              <h3 className="font-serif text-2xl text-silver mb-4">ELLIOT Academy</h3>
              <p className="text-silver-dim leading-relaxed">
                An 8-12 week Blockchain Certification Programme designed to build practical skills and prepare learners for real-world blockchain careers, with AI used as a supporting technology within blockchain systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h3 className="font-serif text-4xl text-silver mb-4">Blockchain Certification Programme</h3>
            <p className="text-silver-dim text-lg max-w-3xl mx-auto">
              A focused certification program designed to build strong Blockchain knowledge and practical skills for modern technology careers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
            <div className="bg-navy rounded-xl border border-navy-lighter p-6 text-center">
              <Clock className="w-10 h-10 text-gold mx-auto mb-4" />
              <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">Duration</p>
              <p className="text-silver font-semibold">8-12 Weeks</p>
            </div>
            <div className="bg-navy rounded-xl border border-navy-lighter p-6 text-center">
              <BookOpen className="w-10 h-10 text-gold mx-auto mb-4" />
              <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">Weekly Time</p>
              <p className="text-silver font-semibold">6 Hours</p>
            </div>
            <div className="bg-navy rounded-xl border border-navy-lighter p-6 text-center">
              <Users className="w-10 h-10 text-gold mx-auto mb-4" />
              <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">Batch</p>
              <p className="text-silver font-semibold">Morning & Evening</p>
            </div>
            <div className="bg-navy rounded-xl border border-navy-lighter p-6 text-center">
              <GraduationCap className="w-10 h-10 text-gold mx-auto mb-4" />
              <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">Level</p>
              <p className="text-silver font-semibold">Beginner to Industry-Ready</p>
            </div>
            <div className="bg-navy rounded-xl border border-navy-lighter p-6 text-center">
              <Briefcase className="w-10 h-10 text-gold mx-auto mb-4" />
              <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">First Batch</p>
              <p className="text-silver font-semibold">Minimum 100 Students</p>
            </div>
          </div>

          <div className="bg-navy rounded-2xl border border-gold/20 p-8">
            <h4 className="font-bold text-gold text-xl mb-4">Certification</h4>
            <p className="text-silver-dim mb-4">
              Participants who successfully complete the program will receive a professional certification in Blockchain Technology.
            </p>
            <p className="text-silver-dim">
              Certification Reference Framework: Aligned with international academic and industry standards, including methodologies commonly taught in leading institutions such as Columbia University.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h3 className="font-serif text-4xl text-silver mb-4">What You Will Learn</h3>
            <p className="text-silver-dim max-w-2xl mx-auto">
              Focused curriculum blocks designed for clear learning outcomes and practical industry relevance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-navy-light rounded-2xl border border-navy-lighter p-8">
              <div className="flex items-center gap-4 mb-6">
                <Link2 className="w-12 h-12 text-gold" />
                <div>
                  <h4 className="font-bold text-gold text-2xl">Core Blockchain Topics</h4>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-navy rounded-lg border border-navy-lighter p-4 text-silver-dim">Blockchain fundamentals</div>
                <div className="bg-navy rounded-lg border border-navy-lighter p-4 text-silver-dim">Cryptocurrency and digital assets</div>
                <div className="bg-navy rounded-lg border border-navy-lighter p-4 text-silver-dim">Smart contracts</div>
                <div className="bg-navy rounded-lg border border-navy-lighter p-4 text-silver-dim">Web3 and decentralized applications</div>
                <div className="bg-navy rounded-lg border border-navy-lighter p-4 text-silver-dim">Blockchain security and transparency</div>
                <div className="bg-navy rounded-lg border border-navy-lighter p-4 text-silver-dim">Real-world blockchain use cases</div>
              </div>
            </div>

            <div className="bg-navy-light rounded-2xl border border-navy-lighter p-8">
              <div className="flex items-center gap-4 mb-6">
                <Brain className="w-12 h-12 text-gold" />
                <div>
                  <h4 className="font-bold text-gold text-2xl">AI Applications Within Blockchain</h4>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-navy rounded-lg border border-navy-lighter p-4 text-silver-dim">AI for blockchain data analysis</div>
                <div className="bg-navy rounded-lg border border-navy-lighter p-4 text-silver-dim">Automation in smart contracts</div>
                <div className="bg-navy rounded-lg border border-navy-lighter p-4 text-silver-dim">Fraud detection and security monitoring</div>
                <div className="bg-navy rounded-lg border border-navy-lighter p-4 text-silver-dim">Predictive analytics in blockchain networks</div>
              </div>
              <div className="rounded-lg border border-gold/30 bg-gold/10 p-4">
                <p className="text-silver-dim text-sm">
                  AI is used as a supporting technology within blockchain systems.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-navy-light rounded-xl border border-navy-lighter p-5 text-center">
              <p className="text-gold font-bold mb-2">01</p>
              <p className="text-silver-dim">Blockchain fundamentals</p>
            </div>
            <div className="bg-navy-light rounded-xl border border-navy-lighter p-5 text-center">
              <p className="text-gold font-bold mb-2">02</p>
              <p className="text-silver-dim">Cryptocurrency understanding</p>
            </div>
            <div className="bg-navy-light rounded-xl border border-navy-lighter p-5 text-center">
              <p className="text-gold font-bold mb-2">03</p>
              <p className="text-silver-dim">Smart contract knowledge</p>
            </div>
            <div className="bg-navy-light rounded-xl border border-navy-lighter p-5 text-center">
              <p className="text-gold font-bold mb-2">04</p>
              <p className="text-silver-dim">Web3 concepts</p>
            </div>
            <div className="bg-navy-light rounded-xl border border-navy-lighter p-5 text-center">
              <p className="text-gold font-bold mb-2">05</p>
              <p className="text-silver-dim">Blockchain security awareness</p>
            </div>
            <div className="bg-navy-light rounded-xl border border-navy-lighter p-5 text-center">
              <p className="text-gold font-bold mb-2">06</p>
              <p className="text-silver-dim">Real-world application skills</p>
            </div>
            <div className="bg-navy-light rounded-xl border border-navy-lighter p-5 text-center">
              <p className="text-gold font-bold mb-2">07</p>
              <p className="text-silver-dim">Industry readiness</p>
            </div>
            <div className="bg-navy-light rounded-xl border border-navy-lighter p-5 text-center">
              <p className="text-gold font-bold mb-2">08</p>
              <p className="text-silver-dim">Supporting AI awareness</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-navy rounded-2xl border border-navy-lighter p-8 text-center">
            <ShieldCheck className="w-12 h-12 text-gold mx-auto mb-5" />
            <h3 className="font-serif text-4xl text-silver mb-5">Our Aim</h3>
            <p className="text-silver-dim text-lg leading-relaxed">
              To create skilled professionals ready for the future of blockchain technology, where transparency, security, and decentralized systems are transforming industries worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gold">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-5">Start Your Blockchain Journey Today</h2>
          <p className="text-navy/80 max-w-3xl mx-auto mb-10">
            Become part of the first batch of ELLIOT Academy and build skills for the future technology industry.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:contact@elliotgroup.com" className="inline-block px-8 py-4 bg-navy text-gold font-bold uppercase tracking-[0.16em] hover:bg-navy-light transition-colors text-sm">
              Apply Now
            </a>
            <a href="mailto:contact@elliotgroup.com" className="inline-block px-8 py-4 border border-navy text-navy font-bold uppercase tracking-[0.16em] hover:bg-navy/10 transition-colors text-sm">
              Register for First Batch
            </a>
            <a href="mailto:contact@elliotgroup.com" className="inline-block px-8 py-4 border border-navy text-navy font-bold uppercase tracking-[0.16em] hover:bg-navy/10 transition-colors text-sm">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
