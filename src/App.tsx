import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Plus, Minus, CheckCircle2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import heroVideoAsset from './assets/hero-loop.mp4';
import ibwLogo from './assets/IBW26-Logo.svg';
import rotLogo from './assets/logo-white.svg';
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ----------------------------------------------------------------------
// DATA & PLACEHOLDERS
// ----------------------------------------------------------------------

const IMAGES = {
  heroVideo: '[INSERT INDIA BIKE WEEK VIDEO URL HERE]',
  home: 'https://indiabikeweek.in/wp-content/uploads/revslider/video-media/2026_13.jpeg',
  exp1: 'https://indiabikeweek.in/wp-content/uploads/2025/11/rr.jpg',
  exp2: 'https://indiabikeweek.in/wp-content/uploads/2025/10/ride2.jpg',
  exp3: 'https://indiabikeweek.in/wp-content/uploads/2025/12/STN01504-1.webp',
  race1: 'https://indiabikeweek.in/wp-content/uploads/2025/12/STN08117.webp',
  race2: 'https://indiabikeweek.in/wp-content/uploads/2025/09/6-1.avif',
};

const EXPERIENCES = [
  { id: 1, title: 'IBW Hill Climb', desc: 'Flat-out up the ghat. Timed runs, open classes, a finish line at the top of the world.', img: 'https://indiabikeweek.in/wp-content/themes/ibw26/assets/img/exp-hillclimb.jpg' },
  { id: 2, title: 'Flat Track', desc: 'Sideways, elbows out, no front brake. The loudest ten minutes of your December.', img: 'https://indiabikeweek.in/wp-content/themes/ibw26/assets/img/exp-flattrack.jpg' },
  { id: 3, title: 'Mud Rush', desc: "Logs, rocks, ruts. Win here and you're riding the next KTM Adventure Rally.", img: 'https://indiabikeweek.in/wp-content/themes/ibw26/assets/img/exp-enduro.jpg' },
  { id: 4, title: 'Custom Bikes', desc: "India's best builders, one-off machines and a trophy worth fighting for.", img: 'https://indiabikeweek.in/wp-content/themes/ibw26/assets/img/exp-custom.jpg' },
  { id: 5, title: 'Stunt Shows', desc: 'Wheelies, stoppies and drift laps in the arena, all day, both days.', img: 'https://indiabikeweek.in/wp-content/themes/ibw26/assets/img/exp-stunt.jpg' },
  { id: 6, title: 'Test Rides', desc: 'New metal, ghat roads, keys in your hand. Brand launches and demo fleets on site.', img: 'https://indiabikeweek.in/wp-content/themes/ibw26/assets/img/exp-testride.jpg' },
  { id: 7, title: 'Camping & Bonfires', desc: 'Pitch up at the peak. Bonfire nights, late sets and a 20°C sunrise.', img: 'https://indiabikeweek.in/wp-content/themes/ibw26/assets/img/exp-camping.jpg' },
  { id: 8, title: 'Live Music', desc: 'Hip-hop, indie, rock and late-night electronic across three stages.', img: 'https://indiabikeweek.in/wp-content/themes/ibw26/assets/img/exp-music.jpg' },
  { id: 9, title: 'Biker Bazaar', desc: 'Riding gear, custom parts, art, and enough food stalls to fuel two days.', img: 'https://indiabikeweek.in/wp-content/themes/ibw26/assets/img/exp-bazaar.jpg' },
  { id: 10, title: 'Overlanding Sessions', desc: 'Legendary global overlanders share their stories of grit and glory.', img: 'https://indiabikeweek.in/wp-content/themes/ibw26/assets/img/exp-rides.jpg' },
];


const FAQS = [
  { q: 'Where is India Bike Week 2026 happening?', a: 'IBW 2026 will be held in Panchgani, Maharashtra at 4,550 ft altitude (~4 hrs from Mumbai, ~2.5 hrs from Pune).' },
  { q: 'What are the dates and timings for the festival?', a: 'December 4 & 5, 2026. Gates open at 9:00 AM; stages and activities run until 3:00 AM IST.' },
  { q: 'Are non-riders welcome?', a: 'Yes! Open to pillions, non-riders, families, and music enthusiasts. There is dedicated car parking and shuttles available.' },
  { q: 'What does the Club Booking include?', a: 'Club bookings include an INR 500 F&B voucher, the official IBW Jersey & Merch kit, and full weekend entry access.' },
  { q: 'What is the weather like?', a: 'Around 20°C during the day; drops to single digits at night. Bring warm gear for Afterhours.' },
];

// ----------------------------------------------------------------------
// NAVBAR
// ----------------------------------------------------------------------

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        isScrolled ? 'bg-brand-black/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24 w-full">
          
          {/* Left: IBW Logo */}
          <div className="flex-1 flex items-center justify-start z-10">
            <motion.img 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              src={ibwLogo} 
              alt="India Bike Week 2026" 
              className="h-8 md:h-10 w-auto" 
            />
          </div>

          {/* Center: RoT Highlight */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
            className="flex-1 flex items-center justify-center z-10"
          >
            <img 
              src={rotLogo} 
              alt="Riders of Technopark" 
              className="h-14 md:h-20 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.25)]" 
            />
          </motion.div>

          {/* Right: CTA */}
          <div className="flex-1 flex items-center justify-end z-10">
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              href="#register"
              className="inline-flex items-center px-4 py-2 md:px-6 md:py-2.5 bg-brand-red text-white text-xs md:text-sm tracking-wide uppercase rounded-full hover:bg-white hover:text-brand-dark transition-colors whitespace-nowrap"
            >
              Register Now
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// ----------------------------------------------------------------------
// HERO
// ----------------------------------------------------------------------

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-brand-black">
      {/* Video Layer */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none overflow-hidden bg-brand-black">
        <video
          src={heroVideoAsset}
          className="w-full h-full object-cover origin-center opacity-80"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-brand-black/20" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start justify-center max-w-7xl mx-auto pt-28 md:pt-36 px-6 lg:px-8 h-full pb-20">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          href="#news"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors mb-5 md:mb-6"
        >
          <span className="text-white text-sm md:text-base">India's biggest motorcycle festival is back.</span>
          <ArrowRight className="w-3.5 h-3.5 text-white" />
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-left text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-white leading-[0.9] tracking-tight max-w-5xl font-display uppercase"
        >
          Peak Panchgani.<br className="hidden sm:block" /> Cool Winds. Warm Engines.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-8 md:mt-10"
        >
          <a
            href="#tickets"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red text-white text-sm md:text-base font-montserrat font-bold tracking-wide uppercase rounded-full hover:bg-white hover:text-brand-dark transition-colors"
          >
            Get Your Tickets
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Trusted / Partner Strip Removed as requested */}
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// THE NEW HOME
// ----------------------------------------------------------------------

const TheNewHome = () => {
  return (
    <section id="home" className="py-16 md:py-24 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-brand-red text-sm tracking-[0.2em] uppercase font-bold mb-4">The New Home</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl text-white font-display uppercase tracking-tight leading-[1.1] mb-6">
            Panchgani<br />awaits you
          </h3>
          <p className="text-white/70 text-lg md:text-xl font-montserrat leading-relaxed mb-8 max-w-lg">
            India Bike Week is moving to the mountains. Join us at 4,550 ft altitude, just ~4 hrs from Mumbai and ~2.5 hrs from Pune, for two mad days of bikes, music, stories, and races.
          </p>
          <div className="flex flex-col gap-2 border-l-2 border-brand-red pl-4">
            <span className="text-white font-bold text-lg">04–05 Dec 2026</span>
            <span className="text-white/50 text-sm tracking-widest uppercase">Dates Locked</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden group shadow-2xl">
            <img src={IMAGES.home} alt="Panchgani landscape" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider mb-2">Location</span>
              <p className="text-white font-serif text-2xl">The stunning Western Ghats</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// EXPERIENCES
// ----------------------------------------------------------------------

const Experiences = () => {
  return (
    <section id="experiences" className="py-24 md:py-40 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-brand-red text-sm tracking-[0.2em] uppercase font-bold mb-4">Itinerary</h2>
          <h3 className="text-4xl md:text-5xl text-white font-display uppercase tracking-tight">Madness Guaranteed</h3>
        </motion.div>

        <div className="flex overflow-hidden group -mx-6 lg:-mx-8">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            
            {/* First Set */}
            <div className="flex gap-6 px-3">
              {EXPERIENCES.map((exp, i) => (
                <div
                  key={`set1-${exp.id}-${i}`}
                  className="shrink-0 w-[85vw] sm:w-[45vw] lg:w-[30vw] xl:w-[380px] cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-6 group/card">
                    <img src={exp.img} alt={exp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 pointer-events-none" />
                    <div className="absolute inset-0 bg-black/20 group-hover/card:bg-transparent transition-colors duration-500 pointer-events-none" />
                  </div>
                  <h4 className="text-2xl text-white font-display uppercase tracking-wide mb-3">{exp.title}</h4>
                  <p className="text-white/60 font-montserrat leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>

            {/* Second Set */}
            <div className="flex gap-6 px-3">
              {EXPERIENCES.map((exp, i) => (
                <div
                  key={`set2-${exp.id}-${i}`}
                  className="shrink-0 w-[85vw] sm:w-[45vw] lg:w-[30vw] xl:w-[380px] cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-6 group/card">
                    <img src={exp.img} alt={exp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 pointer-events-none" />
                    <div className="absolute inset-0 bg-black/20 group-hover/card:bg-transparent transition-colors duration-500 pointer-events-none" />
                  </div>
                  <h4 className="text-2xl text-white font-display uppercase tracking-wide mb-3">{exp.title}</h4>
                  <p className="text-white/60 font-montserrat leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// COUNTDOWN BANNER
// ----------------------------------------------------------------------

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-12-04T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-brand-red border-y border-white/20 py-4 md:py-6 overflow-hidden shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Location */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] mb-1">Back In The Hills</span>
          <div className="text-2xl md:text-3xl lg:text-4xl font-display uppercase tracking-tight">
            <span className="text-brand-black">Panchgani, </span>
            <span className="text-white">Maharashtra</span>
          </div>
        </div>

        {/* Right Side: Timer */}
        <div className="flex items-center gap-2 md:gap-4 text-white font-display drop-shadow-md">
          
          <div className="flex flex-col items-center min-w-[3rem] md:min-w-[4rem]">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="text-[10px] md:text-xs text-brand-black uppercase tracking-widest mt-1 font-bold">Days</span>
          </div>
          <span className="text-2xl md:text-4xl font-bold pb-4 text-brand-black/50">:</span>
          
          <div className="flex flex-col items-center min-w-[3rem] md:min-w-[4rem]">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-[10px] md:text-xs text-brand-black uppercase tracking-widest mt-1 font-bold">Hrs</span>
          </div>
          <span className="text-2xl md:text-4xl font-bold pb-4 text-brand-black/50">:</span>
          
          <div className="flex flex-col items-center min-w-[3rem] md:min-w-[4rem]">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-[10px] md:text-xs text-brand-black uppercase tracking-widest mt-1 font-bold">Min</span>
          </div>
          <span className="text-2xl md:text-4xl font-bold pb-4 text-brand-black/50">:</span>
          
          <div className="flex flex-col items-center min-w-[3rem] md:min-w-[4rem]">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="text-[10px] md:text-xs text-brand-black uppercase tracking-widest mt-1 font-bold">Sec</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};


// ----------------------------------------------------------------------
// CLUB ADVANTAGE
// ----------------------------------------------------------------------

const ClubAdvantage = () => {
  return (
    <section id="club-advantage" className="py-24 md:py-40 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-red">The Club Advantage</h2>
          <p className="text-4xl font-display uppercase tracking-tight text-white">RoT Delegation Package</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative p-8 rounded-2xl bg-brand-black/60 border border-white/5 hover:border-brand-red/40 transition duration-300"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-brand-red/10 text-brand-red border border-brand-red/20">
              INCLUDED
            </span>
            <div className="mt-6">
              <div className="text-3xl font-display uppercase text-white mb-2">Full Access</div>
              <div className="text-sm font-semibold text-white/70 mb-3">Weekend Entry Pass</div>
              <p className="text-xs text-white/50 leading-relaxed font-montserrat">2 days unrestricted access to all music stages, stunt rings, and race arenas.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative p-8 rounded-2xl bg-brand-black/60 border border-brand-red/30 hover:border-brand-red/60 transition duration-300 ring-1 ring-brand-red/20"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-brand-red/10 text-brand-red border border-brand-red/20">
              EXCLUSIVE
            </span>
            <div className="mt-6">
              <div className="text-3xl font-display uppercase text-white mb-2">RoT × IBW 2026</div>
              <div className="text-sm font-semibold text-white/70 mb-3">Official Delegation Kit</div>
              <p className="text-xs text-white/50 leading-relaxed font-montserrat">Limited-edition dry-fit jersey, embroidered arm patch, decal pack, and ride bib.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative p-8 rounded-2xl bg-brand-black/60 border border-white/5 hover:border-brand-red/40 transition duration-300"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-brand-red/10 text-brand-red border border-brand-red/20">
              COMPLIMENTARY
            </span>
            <div className="mt-6">
              <div className="text-3xl font-display uppercase text-white mb-2">₹500 Voucher</div>
              <div className="text-sm font-semibold text-white/70 mb-3">Festival F&B Credits</div>
              <p className="text-xs text-white/50 leading-relaxed font-montserrat">Redeemable across all food trucks and beverage bays inside the festival grounds.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// ROUTE SCHEDULE
// ----------------------------------------------------------------------

const RouteSchedule = () => {
  return (
    <section id="route" className="py-24 md:py-40 bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-red">Route Schedule</h2>
          <p className="text-4xl font-display uppercase tracking-tight text-white">Convoy Itinerary</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {[
            { tag: "DEC 02 • Leg 1", title: "Trivandrum to Hubballi", desc: "Highway cruising via NH 66 / 48" },
            { tag: "DEC 03 • Leg 2", title: "Hubballi to Panchgani", desc: "Ascent into Western Ghats basecamp" },
            { tag: "DEC 04 - 05 • Festival", title: "IBW 2026 Arena Days", desc: "Concerts, expo, track racing & builds" },
            { tag: "DEC 06 - 07 • Return", title: "Panchgani to Trivandrum", desc: "Regroup & return convoy" }
          ].map((leg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <span className="text-[11px] font-mono text-brand-red block mb-2">{leg.tag}</span>
              <h3 className="text-sm font-bold text-white mb-2 font-montserrat uppercase tracking-wide">{leg.title}</h3>
              <p className="text-xs text-white/50 font-montserrat">{leg.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// BOOKING FORM
// ----------------------------------------------------------------------

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="register" className="py-24 md:py-40 bg-brand-dark border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-black border border-white/10 relative overflow-hidden shadow-2xl">
          
          <div className="mb-10 text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">Official Pass Allocation</span>
            <h2 className="text-3xl font-display uppercase tracking-tight text-white">Lock Your Seat in the Pack</h2>
            <p className="text-xs text-white/50 font-montserrat max-w-md mx-auto mt-4">
              Fill out your profile. The RoT ride committee will verify your details for batch allotment.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-white/50 mb-2">Rider Full Name</label>
                  <input type="text" required placeholder="e.g. John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-colors" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-white/50 mb-2">WhatsApp Contact</label>
                  <input type="tel" required placeholder="+91 98765 43210" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-white/50 mb-2">Technopark Company / Base</label>
                  <input type="text" required placeholder="e.g. Infosys / Phase 3" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-colors" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-white/50 mb-2">Bike Make & Model</label>
                  <input type="text" required placeholder="e.g. Himalayan 450" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-white/50 mb-2">Official Jersey Size</label>
                <div className="grid grid-cols-6 gap-2">
                  {['S', 'M', 'L', 'XL', 'XXL', '3XL'].map((size) => (
                    <div key={size}>
                      <input type="radio" id={`size-${size}`} name="tshirtSize" value={size} className="hidden peer" defaultChecked={size === 'L'} />
                      <label htmlFor={`size-${size}`} className="block text-center py-2 rounded-xl border border-white/10 bg-white/5 text-xs font-bold cursor-pointer text-white/50 hover:border-white/30 peer-checked:border-brand-red peer-checked:bg-brand-red/10 peer-checked:text-brand-red transition-all">
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <button type="submit" className="w-full mt-8 py-4 rounded-xl bg-brand-red text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-brand-black transition duration-200">
                Submit Delegation Registration
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-brand-red/10 border border-brand-red text-brand-red flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display uppercase text-white tracking-wide">Delegation Spot Requested!</h3>
              <p className="text-xs text-white/50 font-montserrat max-w-md mx-auto">
                Your details have been routed to the RoT IBW Coordinator. We will reach out on WhatsApp with ticket confirmation and convoy batching.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// FAQ
// ----------------------------------------------------------------------

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-40 bg-brand-dark">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl text-white font-display uppercase tracking-tight">Got Questions?</h3>
        </motion.div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = openId === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-white/10 rounded-xl overflow-hidden bg-brand-black/30"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-white font-bold font-montserrat text-lg">{faq.q}</span>
                  <span className="text-brand-red ml-4 shrink-0">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-white/60 font-montserrat leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// FOOTER
// ----------------------------------------------------------------------

const Footer = () => {
  return (
    <footer className="bg-brand-black pt-24 border-t border-brand-red">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 pb-20 border-b border-white/10">
          <div className="max-w-md">
            <h2 className="text-5xl md:text-6xl font-display uppercase text-white leading-[0.9] mb-6">
              See You<br /><span className="text-brand-red">At The Peak</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="https://chat.whatsapp.com/ExQQpOF8Kun2HwdIHDVoN1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#25D366] text-black text-sm font-bold uppercase tracking-wide rounded-full hover:bg-white transition-colors"
              >
                Join Rev Room
              </a>
              <a
                href="https://chat.whatsapp.com/E4cnSTUTPWVCbJimCAEu0m"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#25D366] text-black text-sm font-bold uppercase tracking-wide rounded-full hover:bg-white transition-colors"
              >
                Join Ride Room
              </a>
            </div>
            <p className="text-white/40 text-sm font-montserrat">
              Ride updates, ticket drops and route plans — straight to your phone.
            </p>
          </div>

          <div className="flex gap-12 sm:gap-24">
            <div>
              <h4 className="text-white font-display uppercase tracking-widest mb-6">Festival</h4>
              <ul className="flex flex-col gap-3">
                <li><a href="#home" className="text-white/60 hover:text-white transition-colors">The New Home</a></li>
                <li><a href="#experiences" className="text-white/60 hover:text-white transition-colors">Experiences</a></li>
                <li><a href="#races" className="text-white/60 hover:text-white transition-colors">Races</a></li>
                <li><a href="#faq" className="text-white/60 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-8 gap-6">
          <div className="flex items-center gap-6">
            <img src={rotLogo} alt="RoT" className="h-6 w-auto opacity-70" />
            <img src={ibwLogo} alt="IBW" className="h-8 w-auto opacity-70" />
            <div className="flex items-center gap-4 text-white/40">
              <a href="https://www.instagram.com/ridersoftechnopark/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><InstagramIcon className="w-5 h-5" /></a>
              <a href="https://www.youtube.com/@ridersoftechnopark" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><YoutubeIcon className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div className="text-center sm:text-right">
            <p className="text-white/40 text-sm mb-1">© 2026 Riders of Technopark. All rights reserved.</p>
            <p className="text-white/40 text-sm">For techies who live to ride.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

// ----------------------------------------------------------------------
// CUSTOM ICONS
// ----------------------------------------------------------------------

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

// ----------------------------------------------------------------------
// MAIN APP
// ----------------------------------------------------------------------

function App() {
  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-red selection:text-white font-montserrat">
      <Navbar />
      <Hero />
      <CountdownBanner />
      <TheNewHome />
      <Experiences />
      <ClubAdvantage />
      <RouteSchedule />
      <BookingForm />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
