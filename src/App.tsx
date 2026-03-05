import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Phone, Calendar, Clock, Award, CheckCircle2, X, 
  ChevronRight, MessageCircle, Heart, Shield, Sparkles, 
  ArrowRight, HelpCircle, Star, Quote, Globe
} from 'lucide-react';
import { translations } from './translations';

type Language = 'ru' | 'lv' | 'en';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [lang, setLang] = useState<Language>('ru');

  const t = translations[lang];

  const stepsIcons = [
    <MessageCircle size={32} />,
    <Sparkles size={32} />,
    <Heart size={32} />,
    <CheckCircle2 size={32} />
  ];

  return (
    <div className="min-h-screen selection:bg-brand-olive/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-brand-warm/80 backdrop-blur-md border-b border-brand-ink/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-serif text-2xl font-semibold tracking-tight"
          >
            {t.name}
          </motion.span>
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
            {Object.entries(t.nav).filter(([key]) => key !== 'book').map(([key, label]) => (
              <a key={key} href={`#${key === 'how' ? 'how-it-works' : key}`} className="hover:text-brand-olive transition-colors">
                {label}
              </a>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 border-l border-brand-ink/10 pl-8">
              {(['ru', 'lv', 'en'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${lang === l ? 'bg-brand-olive text-white scale-110' : 'hover:bg-brand-ink/5'}`}
                  title={l.toUpperCase()}
                >
                  <span className="text-lg leading-none">{translations[l].flag}</span>
                </button>
              ))}
            </div>

            <button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-brand-olive text-white px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-all shadow-sm"
            >
              {t.nav.book}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1 rounded-full border border-brand-olive/30 text-brand-olive text-sm font-medium mb-6 uppercase tracking-wider"
            >
              {t.hero.badge}
            </motion.span>
            <h1 className="text-6xl md:text-8xl leading-[0.9] mb-8">
              {t.hero.title} <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="italic"
              >
                {t.hero.subtitle}
              </motion.span>
            </h1>
            <p className="text-xl text-brand-ink/70 max-w-md mb-10 leading-relaxed">
              {t.hero.desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsBookingOpen(true)}
                className="bg-brand-olive text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg shadow-brand-olive/20 flex items-center gap-2"
              >
                {t.hero.start} <ChevronRight size={20} />
              </motion.button>
              <a 
                href="#contact"
                className="px-8 py-4 rounded-full border border-brand-ink/20 text-lg font-medium hover:bg-brand-ink hover:text-white transition-all"
              >
                {t.hero.where}
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl group"
          >
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              alt="Виктория Штеинхардт"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-olive flex items-center justify-center text-white">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">Сертифицированный специалист</p>
                  <p className="text-white/60 text-sm italic">Европейский стандарт качества</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {t.stats.map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center p-8 rounded-[32px] bg-brand-warm/30 border border-brand-ink/5">
                <p className="text-5xl font-serif mb-2 text-brand-olive">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest font-bold text-brand-ink/40">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education & Expertise */}
      <section className="py-24 px-6 bg-brand-warm/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-5xl mb-8">{t.edu.title} <br /><span className="italic">{t.edu.subtitle}</span></h2>
              <div className="space-y-6">
                {t.edu.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-lg text-brand-ink/80">
                    <div className="w-2 h-2 rounded-full bg-brand-olive shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-square bg-white rounded-3xl shadow-sm border border-brand-ink/5 flex flex-col items-center justify-center p-6 text-center">
                <Shield className="text-brand-olive mb-4" size={40} />
                <p className="font-serif text-xl">{t.edu.principles[0]}</p>
              </div>
              <div className="aspect-square bg-brand-olive text-white rounded-3xl shadow-lg flex flex-col items-center justify-center p-6 text-center">
                <Heart className="mb-4" size={40} />
                <p className="font-serif text-xl">{t.edu.principles[1]}</p>
              </div>
              <div className="aspect-square bg-brand-olive text-white rounded-3xl shadow-lg flex flex-col items-center justify-center p-6 text-center">
                <Sparkles className="mb-4" size={40} />
                <p className="font-serif text-xl">{t.edu.principles[2]}</p>
              </div>
              <div className="aspect-square bg-white rounded-3xl shadow-sm border border-brand-ink/5 flex flex-col items-center justify-center p-6 text-center">
                <Award className="text-brand-olive mb-4" size={40} />
                <p className="font-serif text-xl">{t.edu.principles[3]}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section id="how-it-works" className="py-24 bg-brand-warm/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4">{t.how.title}</h2>
            <p className="text-brand-ink/60 max-w-xl mx-auto italic">{t.how.desc}</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {t.how.steps.map((step, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="relative p-8 bg-white rounded-[32px] border border-brand-ink/5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-warm flex items-center justify-center text-brand-olive mb-6">
                  {stepsIcons[idx]}
                </div>
                <h3 className="text-2xl mb-4 font-serif">{step.title}</h3>
                <p className="text-brand-ink/70 text-sm leading-relaxed">{step.desc}</p>
                {idx < t.how.steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 text-brand-ink/10">
                    <ArrowRight size={32} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="mt-16 p-10 bg-brand-olive/5 rounded-[40px] border border-brand-olive/10 flex flex-col md:flex-row items-center gap-10"
          >
            <div className="w-20 h-20 rounded-full bg-brand-olive flex items-center justify-center text-white shrink-0">
              <Shield size={40} />
            </div>
            <div>
              <h4 className="text-2xl mb-2 font-serif">{t.how.principlesTitle}</h4>
              <p className="text-brand-ink/70">{t.how.principlesDesc}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4">{t.services.title}</h2>
            <p className="text-brand-ink/60 max-w-xl mx-auto italic">{t.services.desc}</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {t.services.items.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[32px] shadow-sm border border-brand-ink/5 flex flex-col h-full"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-warm flex items-center justify-center text-brand-olive mb-6">
                    {idx === 0 ? <Calendar size={24} /> : idx === 1 ? <MessageCircle size={24} /> : <Clock size={24} />}
                  </div>
                  <h3 className="text-2xl mb-4">{service.title}</h3>
                  <p className="text-brand-ink/70 mb-8">{service.desc}</p>
                </div>
                <div className="mt-auto pt-8 border-t border-brand-ink/5 flex items-end justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-ink/40 mb-1">{t.services.title === 'Услуги и стоимость' ? 'Стоимость' : t.services.title === 'Pakalpojumi un izmaksas' ? 'Izmaksas' : 'Price'}</p>
                    <p className="text-3xl font-serif">{service.price}</p>
                  </div>
                  <p className="text-sm text-brand-ink/50 italic">{service.duration}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4">{t.testimonials.title}</h2>
            <p className="text-brand-ink/60 max-w-xl mx-auto italic">{t.testimonials.desc}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.testimonials.items.map((review, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                className="p-10 bg-brand-warm/30 rounded-[40px] relative"
              >
                <Quote className="absolute top-8 right-8 text-brand-olive/10" size={60} />
                <div className="flex gap-1 text-brand-olive mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-xl italic mb-8 text-brand-ink/80 leading-relaxed">"{review.text}"</p>
                <p className="font-bold uppercase tracking-widest text-xs text-brand-ink/40">— {review.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-brand-warm/30">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4">{t.faq.title}</h2>
          </motion.div>

          <div className="space-y-4">
            {t.faq.items.map((faq, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                className="bg-white rounded-3xl overflow-hidden border border-brand-ink/5"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-brand-ink/5 transition-colors"
                >
                  <span className="text-lg font-medium flex items-center gap-4">
                    <HelpCircle className="text-brand-olive" size={20} />
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: activeFaq === idx ? 180 : 0 }}
                  >
                    <ChevronRight size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-6 text-brand-ink/70 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div 
          {...fadeInUp}
          className="max-w-5xl mx-auto bg-brand-olive rounded-[60px] p-16 text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-5xl mb-6 font-serif">{t.cta.title}</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">{t.cta.desc}</p>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-white text-brand-olive px-12 py-5 rounded-full text-xl font-medium hover:scale-105 transition-transform"
            >
              {t.cta.btn}
            </button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <Sparkles className="absolute top-10 left-10" size={100} />
            <Heart className="absolute bottom-10 right-10" size={100} />
          </div>
        </motion.div>
      </section>

      {/* Inline Contact Form Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <motion.div {...fadeInUp}>
              <h2 className="text-5xl mb-8">{t.form.title}</h2>
              <p className="text-brand-ink/60 mb-10 text-lg">{t.form.desc}</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <input type="text" placeholder={t.form.name} className="w-full px-6 py-4 rounded-2xl bg-brand-warm/50 border border-brand-ink/5 focus:ring-2 focus:ring-brand-olive/20 outline-none" />
                  <input type="tel" placeholder={t.form.phone} className="w-full px-6 py-4 rounded-2xl bg-brand-warm/50 border border-brand-ink/5 focus:ring-2 focus:ring-brand-olive/20 outline-none" />
                </div>
                <input type="email" placeholder={t.form.email} className="w-full px-6 py-4 rounded-2xl bg-brand-warm/50 border border-brand-ink/5 focus:ring-2 focus:ring-brand-olive/20 outline-none" />
                <textarea placeholder={t.form.msg} rows={4} className="w-full px-6 py-4 rounded-2xl bg-brand-warm/50 border border-brand-ink/5 focus:ring-2 focus:ring-brand-olive/20 outline-none resize-none"></textarea>
                <button className="bg-brand-olive text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all">
                  {t.form.submit}
                </button>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-2xl mb-4 font-serif">{t.form.whyTitle}</h3>
                <div className="space-y-4">
                  {t.form.whyItems.map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-olive" size={20} />
                      <span className="text-brand-ink/70">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-brand-warm rounded-3xl border border-brand-ink/5">
                <p className="italic text-brand-ink/60">{t.form.quote}</p>
                <p className="mt-4 font-serif text-lg">— {t.fullName}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Map */}
      <section id="contact" className="py-24 bg-brand-olive text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl mb-10">{t.contact.title} <br /><span className="italic">{t.contact.subtitle}</span></h2>
              
              <div className="space-y-8">
                {[
                  { icon: <MapPin size={20} />, label: t.contact.addrLabel, val: t.contact.addrVal },
                  { icon: <Phone size={20} />, label: t.contact.phoneLabel, val: t.contact.phoneVal },
                  { icon: <Clock size={20} />, label: t.contact.hoursLabel, val: t.contact.hoursVal }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/60 uppercase tracking-widest text-xs font-bold mb-2">{item.label}</p>
                      <p className="text-xl">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsBookingOpen(true)}
                className="mt-12 bg-white text-brand-olive px-10 py-4 rounded-full text-lg font-medium shadow-xl"
              >
                {t.contact.btn}
              </motion.button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[40px] overflow-hidden border-8 border-white/10 shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.054366531544!2d24.06282131590747!3d56.96491398089531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecf6056666667%3A0x6666666666666666!2zQmFsdMSBIGllbGEgMiwgS3VyemVtZXMgcmFqb25zLCBSxKtnYSwgTFYtMTA1NQ!5e0!3m2!1sru!2slv!4v1625000000000!5m2!1sru!2slv" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-brand-ink/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-brand-ink/40 text-sm">© {new Date().getFullYear()} {t.fullName}. {t.footer.rights}</p>
          <div className="flex gap-8 text-sm text-brand-ink/60">
            <a href="#" className="hover:text-brand-olive">{t.footer.privacy}</a>
            <a href="#" className="hover:text-brand-olive">Instagram</a>
            <a href="#" className="hover:text-brand-olive">Facebook</a>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="absolute inset-0 bg-brand-ink/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-brand-warm w-full max-w-lg rounded-[40px] p-10 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-brand-ink/5 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              
              <h2 className="text-4xl mb-2">{t.modal.title}</h2>
              <p className="text-brand-ink/60 mb-8 italic">{t.modal.desc}</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold mb-2 ml-1">{t.form.name}</label>
                  <input 
                    type="text" 
                    placeholder="Александр"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-ink/5 focus:outline-none focus:ring-2 focus:ring-brand-olive/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold mb-2 ml-1">{t.form.phone}</label>
                  <input 
                    type="tel" 
                    placeholder="+371 ..."
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-ink/5 focus:outline-none focus:ring-2 focus:ring-brand-olive/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold mb-2 ml-1">{t.form.msg}</label>
                  <textarea 
                    placeholder="..."
                    rows={3}
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-ink/5 focus:outline-none focus:ring-2 focus:ring-brand-olive/20 transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-brand-olive text-white py-5 rounded-2xl text-lg font-medium hover:bg-opacity-90 transition-all mt-4">
                  {t.nav.book}
                </button>
              </form>
              
              <div className="mt-8 flex items-center gap-3 text-brand-ink/40 text-sm justify-center">
                <CheckCircle2 size={16} />
                <span>{t.modal.safety}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
