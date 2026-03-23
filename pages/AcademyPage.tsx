import React from 'react';
import { ArrowLeft, Brain, GraduationCap, Link2, Clock, Users, BookOpen } from 'lucide-react';

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
            ELLIOT Academy
          </h1>
          <h2 className="text-gold tracking-[0.3em] text-lg md:text-xl font-bold mb-6 uppercase">
            Building Future Skills in AI and Blockchain
          </h2>
          <p className="text-silver-dim text-lg max-w-3xl mx-auto mb-12">
            Practical training programmes designed to move learners from beginner level to industry-ready professionals through structured learning, real-world case studies, and future-focused certification.
          </p>
        </div>
      </section>

      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-gold font-bold tracking-widest uppercase mb-6 text-sm">About ELLIOT Academy</h2>
          <h3 className="font-serif text-4xl text-silver mb-8 leading-tight">
            Training for the <span className="text-gold italic">Next Generation</span>
          </h3>
          <p className="text-silver-dim text-lg mb-6 max-w-4xl">
            ELLIOT Academy is the training and education division of ELLIOT Group, focused on developing practical skills in Artificial Intelligence and Blockchain technologies.
          </p>
          <p className="text-silver-dim text-lg max-w-4xl">
            Our programmes are designed to help individuals move from beginner level to industry-ready professionals through structured learning, practical thinking, and real-world case studies.
          </p>
        </div>
      </section>

      <section className="py-24 bg-navy-light">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">Blockchain & AI Certification Programme</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-navy p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <Clock className="w-10 h-10 text-gold mb-4" />
              <h4 className="font-bold text-gold text-lg mb-2">Duration</h4>
              <p className="text-silver-dim">8 to 12 weeks</p>
            </div>
            <div className="bg-navy p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <BookOpen className="w-10 h-10 text-gold mb-4" />
              <h4 className="font-bold text-gold text-lg mb-2">Weekly Time</h4>
              <p className="text-silver-dim">6 hours per week</p>
            </div>
            <div className="bg-navy p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <GraduationCap className="w-10 h-10 text-gold mb-4" />
              <h4 className="font-bold text-gold text-lg mb-2">Batch Options</h4>
              <p className="text-silver-dim">Morning and evening batches</p>
            </div>
            <div className="bg-navy p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <Users className="w-10 h-10 text-gold mb-4" />
              <h4 className="font-bold text-gold text-lg mb-2">First Batch</h4>
              <p className="text-silver-dim">Minimum 100 students</p>
            </div>
          </div>
          <p className="text-silver-dim text-lg max-w-3xl mx-auto text-center">
            A focused certification programme designed to prepare learners for future technology careers in AI, Blockchain, and the next wave of industry transformation.
          </p>
        </div>
      </section>

      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">What You Will Learn</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-navy-light p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <Link2 className="w-12 h-12 text-gold mb-5" />
              <h4 className="font-bold text-gold text-2xl mb-5">Blockchain</h4>
              <ul className="text-silver-dim space-y-3">
                <li>Blockchain fundamentals</li>
                <li>Smart contracts and Web3</li>
                <li>Transparency and security</li>
                <li>Real-world applications</li>
              </ul>
            </div>
            <div className="bg-navy-light p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <Brain className="w-12 h-12 text-gold mb-5" />
              <h4 className="font-bold text-gold text-2xl mb-5">Artificial Intelligence</h4>
              <ul className="text-silver-dim space-y-3">
                <li>Logic and mathematical thinking</li>
                <li>AI fundamentals</li>
                <li>Case studies and practical usage</li>
                <li>Applications across industries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-light">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-10 text-center">Our Aim</h3>
          <p className="text-silver-dim text-lg max-w-4xl mx-auto text-center leading-relaxed">
            To create skilled professionals ready for the future of technology, where AI and Blockchain play a key role in every industry. The academy is built to support learners with career-oriented certification, practical learning, and the confidence to grow from beginner to expert.
          </p>
        </div>
      </section>

      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">Key Benefits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter text-center hover:border-gold transition-colors">
              <p className="text-gold font-bold mb-2">01</p>
              <p className="text-silver-dim">Beginner to Expert Training</p>
            </div>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter text-center hover:border-gold transition-colors">
              <p className="text-gold font-bold mb-2">02</p>
              <p className="text-silver-dim">Practical Learning Approach</p>
            </div>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter text-center hover:border-gold transition-colors">
              <p className="text-gold font-bold mb-2">03</p>
              <p className="text-silver-dim">Industry-Relevant Skills</p>
            </div>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter text-center hover:border-gold transition-colors">
              <p className="text-gold font-bold mb-2">04</p>
              <p className="text-silver-dim">Career-Oriented Certification</p>
            </div>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter text-center hover:border-gold transition-colors">
              <p className="text-gold font-bold mb-2">05</p>
              <p className="text-silver-dim">Future-Ready Knowledge</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gold">
        <div className="container mx-auto px-6 text-center">
          <p className="text-navy uppercase tracking-[0.25em] text-xs font-bold mb-4">Tagline</p>
          <h2 className="font-serif text-3xl text-navy mb-4">Learn Today. Lead Tomorrow.</h2>
          <p className="text-navy/80 max-w-2xl mx-auto">
            A simple, future-ready certification pathway for learners building careers in AI and Blockchain.
          </p>
        </div>
      </section>
    </div>
  );
};
