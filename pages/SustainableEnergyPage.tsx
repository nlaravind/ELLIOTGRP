import React from 'react';
import { ArrowLeft, Sun, Wind, BatteryCharging, Zap, Leaf, TrendingUp, Network } from 'lucide-react';

export const SustainableEnergyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy text-silver font-sans">
      {/* Back Button */}
      <div className="container mx-auto px-6 pt-8">
        <a href="/#sectors" className="flex items-center gap-2 text-gold hover:text-silver transition-colors w-fit">
          <ArrowLeft size={20} />
          Back to Our Ecosystem
        </a>
      </div>

      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-navy via-navy to-navy-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Sun size={80} className="text-green-400 animate-pulse" />
              <Wind size={80} className="text-blue-300 absolute top-0 left-0 opacity-50 animate-spin" style={{ animationDuration: '4s' }} />
            </div>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-silver">
            Powering the Future with <span className="text-green-400">Clean Energy</span>
          </h1>
          <p className="text-silver-dim text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
            Developing renewable energy infrastructure and sustainable power systems for industries, cities, and global markets.
          </p>
          <p className="text-gold tracking-[0.2em] text-lg font-semibold mb-12 uppercase">
            Accelerating the Global Transition to Clean Power
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-green-500 hover:bg-green-600 text-navy font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded">
              Explore Projects
            </button>
            <button className="px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-navy font-bold uppercase tracking-[0.2em] transition-all duration-300">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* About Elliot Sustainable Energy */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-gold font-bold tracking-widest uppercase mb-4 text-sm">About Division</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-silver mb-8 leading-tight">
            About <span className="text-green-400">Elliot Sustainable Energy</span>
          </h3>
          
          <div className="bg-navy-light p-8 rounded-lg border border-green-500/30 mb-12">
            <p className="text-silver-dim text-lg leading-relaxed mb-4">
              Elliot Sustainable Energy is the renewable energy division of Elliot Group, focused on the development, production, and deployment of sustainable power solutions including solar, wind, and advanced energy storage technologies.
            </p>
            <p className="text-silver text-lg leading-relaxed">
              We partner with governments, industries, and communities to build the clean energy infrastructure that powers a sustainable future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy-light p-6 rounded-lg border border-green-500/20 hover:border-green-500 transition-colors">
              <Leaf className="w-8 h-8 text-green-400 mb-4" />
              <h4 className="font-bold text-silver text-lg mb-3">Reduce Carbon Footprint</h4>
              <p className="text-silver-dim">Eliminating millions of tons of CO₂ through scalable renewable solutions.</p>
            </div>
            <div className="bg-navy-light p-6 rounded-lg border border-blue-500/20 hover:border-blue-500 transition-colors">
              <Zap className="w-8 h-8 text-blue-300 mb-4" />
              <h4 className="font-bold text-silver text-lg mb-3">Provide Reliable Clean Energy</h4>
              <p className="text-silver-dim">24/7 power availability through advanced storage and smart grid systems.</p>
            </div>
            <div className="bg-navy-light p-6 rounded-lg border border-gold/20 hover:border-gold transition-colors">
              <TrendingUp className="w-8 h-8 text-gold mb-4" />
              <h4 className="font-bold text-silver text-lg mb-3">Enable Sustainable Development</h4>
              <p className="text-silver-dim">Supporting infrastructure projects that drive economic growth responsibly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Energy Solutions */}
      <section className="py-24 bg-navy-light">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-gold font-bold tracking-widest uppercase mb-4 text-sm">Our Solutions</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-silver mb-16 text-center">
            Core Energy <span className="text-green-400">Solutions</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Solar Energy */}
            <div className="bg-navy p-8 rounded-lg border border-green-500/30 hover:border-green-500 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Sun className="w-12 h-12 text-green-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-silver text-xl mb-4">☀️ Solar Energy Systems</h4>
                  <ul className="text-silver-dim space-y-2">
                    <li className="flex gap-2"><span className="text-gold">•</span> <span>Solar farms - utility-scale installations</span></li>
                    <li className="flex gap-2"><span className="text-gold">•</span> <span>Rooftop solar solutions for commercial spaces</span></li>
                    <li className="flex gap-2"><span className="text-gold">•</span> <span>Industrial solar installations with high efficiency</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Wind Energy */}
            <div className="bg-navy p-8 rounded-lg border border-blue-500/30 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Wind className="w-12 h-12 text-blue-300 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-silver text-xl mb-4">🌬️ Wind Energy</h4>
                  <ul className="text-silver-dim space-y-2">
                    <li className="flex gap-2"><span className="text-gold">•</span> <span>Utility-scale wind farms</span></li>
                    <li className="flex gap-2"><span className="text-gold">•</span> <span>Hybrid wind-solar plants for optimized output</span></li>
                    <li className="flex gap-2"><span className="text-gold">•</span> <span>Advanced turbine technology and maintenance</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Energy Storage */}
            <div className="bg-navy p-8 rounded-lg border border-gold/30 hover:border-gold transition-all duration-300">
              <div className="flex items-start gap-4">
                <BatteryCharging className="w-12 h-12 text-gold flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-silver text-xl mb-4">🔋 Energy Storage</h4>
                  <ul className="text-silver-dim space-y-2">
                    <li className="flex gap-2"><span className="text-gold">•</span> <span>Battery storage systems for peak demand management</span></li>
                    <li className="flex gap-2"><span className="text-gold">•</span> <span>Grid stability and load balancing solutions</span></li>
                    <li className="flex gap-2"><span className="text-gold">•</span> <span>Thermal storage for industrial applications</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Smart Infrastructure */}
            <div className="bg-navy p-8 rounded-lg border border-green-500/30 hover:border-green-500 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Network className="w-12 h-12 text-green-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-silver text-xl mb-4">⚡ Smart Energy Infrastructure</h4>
                  <ul className="text-silver-dim space-y-2">
                    <li className="flex gap-2"><span className="text-gold">•</span> <span>Smart grids with real-time monitoring</span></li>
                    <li className="flex gap-2"><span className="text-gold">•</span> <span>EV charging networks and distribution</span></li>
                    <li className="flex gap-2"><span className="text-gold">•</span> <span>Energy monitoring and optimization systems</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Focus Areas */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-gold font-bold tracking-widest uppercase mb-4 text-sm">Markets</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-silver mb-16 text-center">
            Strategic <span className="text-blue-300">Focus Areas</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-navy-light p-8 rounded-lg border border-green-500/30">
              <h4 className="font-bold text-2xl text-silver mb-6">🇮🇳 India Renewable Growth</h4>
              <p className="text-silver-dim mb-4 leading-relaxed">
                India's renewable energy transition presents enormous opportunities for expansion and leadership. We focus on:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">▸</span>
                  <span className="text-silver-dim">Solar park development across high-potential regions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">▸</span>
                  <span className="text-silver-dim">Industrial energy partnerships with manufacturing companies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">▸</span>
                  <span className="text-silver-dim">Government contracts and infrastructure subsidies</span>
                </li>
              </ul>
            </div>

            <div className="bg-navy-light p-8 rounded-lg border border-blue-300/30">
              <h4 className="font-bold text-2xl text-silver mb-6">🌍 Global Expansion</h4>
              <p className="text-silver-dim mb-4 leading-relaxed">
                We're building a global footprint in key emerging markets and established economies:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-blue-300 font-bold">▸</span>
                  <span className="text-silver-dim">Emerging markets across Southeast Asia and Africa</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-300 font-bold">▸</span>
                  <span className="text-silver-dim">Strategic government energy partnerships</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-300 font-bold">▸</span>
                  <span className="text-silver-dim">Cross-border renewable grid development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Impact */}
      <section className="py-24 bg-navy-light">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-gold font-bold tracking-widest uppercase mb-4 text-sm">Impact</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-silver mb-16 text-center">
            Our <span className="text-green-400">Sustainability Impact</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-10 rounded-lg border border-green-500/50 text-center">
              <div className="font-serif text-5xl md:text-6xl font-bold text-green-400 mb-4">1 GW</div>
              <p className="text-silver text-lg font-semibold">Renewable Energy Capacity</p>
              <p className="text-silver-dim mt-2">Deployed across our global projects</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-10 rounded-lg border border-blue-500/50 text-center">
              <div className="font-serif text-5xl md:text-6xl font-bold text-blue-300 mb-4">500K</div>
              <p className="text-silver text-lg font-semibold">Homes Powered</p>
              <p className="text-silver-dim mt-2">With clean, renewable energy daily</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 p-10 rounded-lg border border-yellow-500/50 text-center">
              <div className="font-serif text-5xl md:text-6xl font-bold text-yellow-400 mb-4">1.2M</div>
              <p className="text-silver text-lg font-semibold">Tons of CO₂ Reduced</p>
              <p className="text-silver-dim mt-2">Annually from traditional energy sources</p>
            </div>
          </div>

          <div className="bg-navy p-8 rounded-lg border border-green-500/30 text-center">
            <p className="text-silver text-lg leading-relaxed">
              Every megawatt of renewable energy deployed prevents millions of tons of carbon emissions, creating a legacy of environmental responsibility and sustainable economic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Integration with Elliot Group */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-gold font-bold tracking-widest uppercase mb-4 text-sm">The Complete Ecosystem</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-silver mb-4 text-center">
            Integration with <span className="text-gold">Elliot Group</span>
          </h3>
          <p className="text-silver-dim text-center max-w-2xl mx-auto mb-16 text-lg">
            Our sustainable energy division connects seamlessly with other Elliot Group divisions, creating a powerful ecosystem of integrated solutions that drive transformative change.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-navy-light p-8 rounded-lg border border-green-500/30 hover:border-green-500 transition-all">
              <h4 className="font-bold text-xl text-silver mb-3">🚗 Elliot EV</h4>
              <p className="text-silver-dim leading-relaxed">
                Clean charging infrastructure powered by our renewable energy. We provide the electricity grid that fuels the EV revolution with zero emissions.
              </p>
            </div>

            <div className="bg-navy-light p-8 rounded-lg border border-blue-500/30 hover:border-blue-500 transition-all">
              <h4 className="font-bold text-xl text-silver mb-3">🏗️ Elliot Infra</h4>
              <p className="text-silver-dim leading-relaxed">
                Green buildings and sustainable infrastructure powered entirely by renewable energy, creating net-zero development projects.
              </p>
            </div>

            <div className="bg-navy-light p-8 rounded-lg border border-gold/30 hover:border-gold transition-all">
              <h4 className="font-bold text-xl text-silver mb-3">💰 Elliot Fintech</h4>
              <p className="text-silver-dim leading-relaxed">
                Green project financing and sustainable investment vehicles that fund renewable energy initiatives globally.
              </p>
            </div>

            <div className="bg-navy-light p-8 rounded-lg border border-green-500/30 hover:border-green-500 transition-all">
              <h4 className="font-bold text-xl text-silver mb-3">⛓️ elliott blockchain</h4>
              <p className="text-silver-dim leading-relaxed">
                Energy trading systems and transparent renewable energy credit management on blockchain technology.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-500/10 to-blue-500/10 p-10 rounded-lg border border-green-500/30">
            <h4 className="font-bold text-2xl text-silver mb-4 text-center">A Complete Ecosystem Narrative</h4>
            <p className="text-silver-dim text-center text-lg leading-relaxed">
              Elliot Sustainable Energy is the backbone of our entire ecosystem. It powers our EV charging networks, green buildings, financial innovations, and blockchain-enabled trading platforms. Together, these divisions create a comprehensive approach to sustainable development that touches every aspect of modern infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold mb-4">Ready to Power the Future?</h2>
          <p className="text-navy-light text-lg mb-8 max-w-2xl mx-auto">
            Join us in building a sustainable energy infrastructure that powers millions of lives and businesses worldwide.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-navy hover:bg-navy-light text-gold font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded">
              Get Started
            </button>
            <a 
              href="https://sustainable.elliotgroup.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-4 border-2 border-navy text-navy hover:bg-navy hover:text-gold font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainableEnergyPage;
