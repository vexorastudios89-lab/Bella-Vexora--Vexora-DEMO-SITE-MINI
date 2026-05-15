import { useState, useEffect } from 'react';
import { 
  Coffee, 
  Utensils, 
  Clock, 
  MapPin, 
  Instagram, 
  Facebook, 
  Phone as WhatsApp, 
  ChevronRight, 
  Star,
  Quote,
  Menu as MenuIcon,
  X,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const AestheticPlaceholder = ({ text, className = "" }: { text: string; className?: string }) => (
  <div className={`relative overflow-hidden group ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-espresso via-matte-black to-espresso opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-gold)_0%,_transparent_70%)]" />
    <div className="absolute inset-0 backdrop-blur-[2px]" />
    <div className="relative h-full w-full flex items-center justify-center p-6 border border-white/10 group-hover:border-gold/30 transition-colors duration-500">
      <div className="text-center">
        <span className="block font-serif text-lg tracking-[0.2em] text-beige/50 group-hover:text-gold transition-colors duration-500 uppercase">{text}</span>
        <div className="mt-2 h-[1px] w-0 group-hover:w-full bg-gold/50 transition-all duration-700 mx-auto" />
      </div>
    </div>
    {/* Decorative corners */}
    <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold/20" />
    <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold/20" />
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-matte-black/90 backdrop-blur-lg py-4 shadow-xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 border border-gold flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
            <span className="font-serif text-gold text-xl -rotate-45 group-hover:rotate-0 transition-transform duration-500">BV</span>
          </div>
          <span className="text-xl font-serif tracking-[0.3em] text-beige uppercase group-hover:text-gold transition-colors">Bella Vexora</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs uppercase tracking-[0.2em] text-beige/70 hover:text-gold transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border border-gold text-gold text-[10px] uppercase tracking-[0.3em] hover:bg-gold hover:text-matte-black transition-all duration-300"
          >
            Reserve
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-beige" onClick={() => setIsMobileMenuOpen(true)}>
          <MenuIcon size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed inset-0 bg-matte-black z-[60] flex flex-col items-center justify-center p-6"
          >
            <button className="absolute top-8 right-6 text-gold" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif tracking-[0.2em] text-beige hover:text-gold"
                >
                  {link.name}
                </a>
              ))}
              <button className="mt-4 px-10 py-4 border border-gold text-gold uppercase tracking-[0.3em]">
                Reserve Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden luxury-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-espresso/30 rounded-full blur-[120px]" />
        {/* Particle Overlay (Simple simulated particles) */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: Math.random() 
              }}
              animate={{ 
                y: [null, "-=100px"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: Math.random() * 5 + 5, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-gold text-xs uppercase tracking-[0.5em] mb-4">A Luxury Cafe Experience</span>
          <h1 className="text-6xl md:text-9xl font-serif text-beige tracking-tighter mb-2">
            Bella <span className="italic text-gold">Vexora</span>
          </h1>
          <p className="text-beige/60 text-sm md:text-base tracking-[0.2em] uppercase mb-12">
            Crafted By Vexora Creations
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <button className="group relative px-10 py-4 bg-gold text-matte-black text-xs font-bold uppercase tracking-[0.3em] overflow-hidden">
              <span className="relative z-10">Explore Menu</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="px-10 py-4 border border-beige/30 text-beige text-xs font-bold uppercase tracking-[0.3em] hover:border-gold hover:text-gold transition-colors">
              Reserve Table
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
        >
          <p className="text-[10px] text-beige/30 uppercase tracking-[0.4em] mb-4 italic">"Where Coffee Meets Elegance."</p>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="h-10 w-[1px] bg-gold/50 mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-columns-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] md:aspect-square">
            <AestheticPlaceholder text="Interior View" className="h-full rounded-tr-[80px]" />
          </div>
          <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square hidden md:block">
            <AestheticPlaceholder text="Ambiance" className="h-full rounded-bl-[80px] border-[12px] border-cream" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-gold text-xs uppercase tracking-[0.3em]">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif text-espresso leading-tight">
              A Symphony of <br /> <span className="italic">Flavors & Aesthetics</span>
            </h2>
          </div>
          <p className="text-matte-black/70 leading-relaxed font-light text-lg">
            Bella Vexora is more than just a cafe; it is a sanctuary for those who seek the extraordinary. 
            Nestled in the heart of the city, we offer a curated luxury experience where handcrafted coffee 
            meets architectural elegance.
          </p>
          <p className="text-matte-black/60 leading-relaxed font-light">
            From our artisan coffee beans sourced from the finest estates to our meticulously designed 
            interiors, every detail of Vexora Creations' flagship cafe is crafted to inspire. Indulge in 
            our world-class desserts and find peace in an atmosphere that balances futuristic vision 
            with timeless comfort.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <h4 className="font-serif text-2xl text-espresso mb-1">Premium</h4>
              <p className="text-xs uppercase tracking-widest text-gold">Ingredients</p>
            </div>
            <div>
              <h4 className="font-serif text-2xl text-espresso mb-1">Bespoke</h4>
              <p className="text-xs uppercase tracking-widest text-gold">Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeading = ({ title, subtitle, centered = true }: { title: string; subtitle: string; centered?: boolean }) => (
  <div className={`mb-16 space-y-4 ${centered ? 'text-center' : ''}`}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-gold text-xs uppercase tracking-[0.4em] block"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-4xl md:text-5xl font-serif text-espresso italic"
    >
      {title}
    </motion.h2>
  </div>
);

const MenuSection = () => {
  const menuItems = [
    { name: 'Classic Cappuccino', price: '₹149', desc: 'Double espresso shot with velvety micro-foam art.' },
    { name: 'Iced Caramel Latte', price: '₹179', desc: 'Handcrafted caramel drizzle with premium cold brew.' },
    { name: 'Belgian Chocolate Shake', price: '₹199', desc: 'Pure Callebaut chocolate blended to perfection.' },
    { name: 'Creamy Alfredo Pasta', price: '₹249', desc: 'Classic white sauce with aged parmesan and herbs.' },
    { name: 'Veg Cheese Sandwich', price: '₹169', desc: 'Artisan sourdough with melted mozzarella and pesto.' },
    { name: 'Choco Lava Dessert', price: '₹129', desc: 'Warm gooey center served with vanilla bean gelato.' },
  ];

  return (
    <section id="menu" className="py-24 px-6 bg-beige relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Signature Menu" subtitle="Taste The Excellence" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-white/50 border border-espresso/5 group hover:bg-espresso hover:border-gold/30 transition-all duration-500 rounded-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-serif text-xl text-espresso group-hover:text-gold transition-colors">{item.name}</h3>
                <span className="text-gold font-bold">{item.price}</span>
              </div>
              <p className="text-sm text-matte-black/60 group-hover:text-beige/60 transition-colors mb-6">{item.desc}</p>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-espresso/40 group-hover:text-gold transition-colors">
                <span>View Details</span>
                <ChevronRight size={12} />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <button className="px-12 py-5 border border-espresso text-espresso text-xs uppercase tracking-[0.4em] hover:bg-espresso hover:text-beige transition-all group">
                Download Full Menu
            </button>
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
    const images = ["Coffee Art", "Cafe Interior", "Dessert Counter", "Outdoor Seating", "Luxury Table Setup", "Night Ambience"];
    
    return (
        <section id="gallery" className="py-24 px-6 bg-matte-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <SectionHeading title="Vexora Gallery" subtitle="Aesthetic Perspectives" />
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {images.map((text, i) => (
                        <motion.div
                            key={text}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`aspect-square md:aspect-[4/5] ${i % 3 === 1 ? 'md:mt-12' : ''}`}
                        >
                            <AestheticPlaceholder text={text} className="h-full rounded-sm" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="p-10 bg-cream text-center space-y-6 border border-espresso/5 hover:gold-glow transition-all duration-500"
    >
        <div className="w-16 h-16 bg-espresso text-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon size={32} strokeWidth={1} />
        </div>
        <h3 className="text-2xl font-serif text-espresso italic">{title}</h3>
        <p className="text-sm text-matte-black/60 leading-relaxed uppercase tracking-wider">{desc}</p>
    </motion.div>
);

const WhyChooseUs = () => {
    return (
        <section className="py-24 px-6 bg-beige">
            <div className="max-w-7xl mx-auto">
                <SectionHeading title="Why Bella Vexora" subtitle="The Vexora Standard" />
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard delay={0.1} icon={Coffee} title="Premium Beans" desc="Sourced from heritage estates." />
                    <FeatureCard delay={0.2} icon={MapPin} title="Elegant Interiors" desc="Designed for modern luxury." />
                    <FeatureCard delay={0.3} icon={Utensils} title="Fresh Desserts" desc="Handcrafted by master chefs." />
                    <FeatureCard delay={0.4} icon={Clock} title="Peaceful Vibe" desc="A sanctuary in the urban rush." />
                </div>
            </div>
        </section>
    );
};

const ReviewsSection = () => {
    const reviews = [
        { name: "Seraphina J.", role: "Lifestyle Blogger", content: "The most coffee-focused luxury experience I've had. The attention to detail in the interior is simply unmatched." },
        { name: "Julian Thorne", role: "Design Architect", content: "Vexora Creations has redefined the cafe experience. It's not just about the beans; it's about the soul of the space." },
        { name: "Elena Rossi", role: "Food Critic", content: "The choco lava is an architectural marvel. Beautifully balanced flavors and an atmosphere that whispers elegance." },
    ];

    return (
        <section className="py-24 px-6 bg-espresso relative overflow-hidden">
             {/* Background glow */}
             <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,_rgba(212,175,55,0.05)_0%,_transparent_50%)]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeading title="Guest Experiences" subtitle="Voices of Elegance" />
                
                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((rev, i) => (
                        <motion.div
                            key={rev.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-matte-black p-10 space-y-8 relative border border-white/5"
                        >
                            <Quote size={40} className="text-gold opacity-20 absolute top-8 right-8" />
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-gold fill-gold" />)}
                            </div>
                            <p className="text-beige/70 font-light italic leading-loose">"{rev.content}"</p>
                            <div>
                                <h4 className="text-beige font-serif text-xl">{rev.name}</h4>
                                <p className="text-[10px] uppercase tracking-widest text-gold/60">{rev.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-6 bg-beige">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                         initial={{ opacity: 0, x: -30 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         className="space-y-12"
                    >
                        <div className="space-y-4">
                            <span className="text-gold text-xs uppercase tracking-[0.4em]">Reservations</span>
                            <h2 className="text-5xl font-serif text-espresso leading-tight">Begin Your <br /> <span className="italic">Luxury Journey</span></h2>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 flex items-center justify-center border border-espresso/10 rounded-full group-hover:border-gold transition-colors">
                                    <MapPin size={20} className="text-espresso group-hover:text-gold" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg text-espresso">Vexora Plaza, First Floor</h4>
                                    <p className="text-xs uppercase tracking-widest text-matte-black/50">Luxury District, City Center</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 flex items-center justify-center border border-espresso/10 rounded-full group-hover:border-gold transition-colors">
                                    <Clock size={20} className="text-espresso group-hover:text-gold" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg text-espresso">08:00 AM — 11:00 PM</h4>
                                    <p className="text-xs uppercase tracking-widest text-matte-black/50">Open Everyday</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-10 border-t border-espresso/10">
                            {[
                                { icon: Instagram, label: "Instagram" },
                                { icon: WhatsApp, label: "WhatsApp" },
                                { icon: Facebook, label: "Facebook" }
                            ].map((social, i) => (
                                <motion.button 
                                    key={social.label}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-12 h-12 flex items-center justify-center bg-espresso text-gold rounded-full hover:shadow-lg hover:shadow-gold/20 transition-all"
                                >
                                    <social.icon size={18} />
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                         initial={{ opacity: 0, x: 30 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         className="p-10 bg-white shadow-2xl space-y-8 rounded-sm"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-matte-black/40">Full Name</label>
                                <input type="text" className="w-full bg-beige/30 border-b border-espresso/10 py-3 px-1 outline-none focus:border-gold transition-colors font-light text-sm" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-matte-black/40">Email Address</label>
                                <input type="email" className="w-full bg-beige/30 border-b border-espresso/10 py-3 px-1 outline-none focus:border-gold transition-colors font-light text-sm" placeholder="Email" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-matte-black/40">Your Message / Reservation Details</label>
                            <textarea rows={4} className="w-full bg-beige/30 border-b border-espresso/10 py-3 px-1 outline-none focus:border-gold transition-colors font-light text-sm resize-none" placeholder="Message" />
                        </div>
                        <button className="w-full py-5 bg-espresso text-gold font-bold uppercase tracking-[0.4em] flex items-center justify-center gap-3 group hover:bg-matte-black transition-colors">
                            Send Request
                            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="py-20 bg-matte-black text-beige border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
                <div className="space-y-4">
                    <h2 className="text-4xl font-serif tracking-[0.2em] text-beige uppercase">Bella Vexora</h2>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-gold/60">Designed By Vexora Creations</p>
                </div>
                
                <div className="max-w-2xl mx-auto text-beige/40 italic font-serif text-xl">
                    “Designing Luxury In The Digital Era.”
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] uppercase tracking-[0.3em] opacity-50">Bella Vexora © 2026. All Rights Reserved.</p>
                    <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] opacity-50">
                        <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const LoadingScreen = () => (
    <motion.div 
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed inset-0 z-[100] bg-matte-black flex flex-col items-center justify-center p-6"
    >
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-16 h-16 border border-gold rotate-45 flex items-center justify-center mb-8"
        >
            <span className="font-serif text-gold text-2xl -rotate-45">BV</span>
        </motion.div>
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-[1px] bg-gold/30 relative"
        >
            <motion.div 
                animate={{ width: ["0%", "100%", "0%"], left: ["0%", "0%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-0 h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,1)]"
            />
        </motion.div>
        <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-6 text-[10px] uppercase tracking-[0.5em] text-gold/70"
        >
            Crafting Elegance
        </motion.span>
    </motion.div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-gold/30 selection:text-white">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <MenuSection />
        <GallerySection />
        <WhyChooseUs />
        <ReviewsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
