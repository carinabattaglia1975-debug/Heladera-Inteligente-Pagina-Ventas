import React, { useMemo, useState } from "react";
import { 
  ShieldCheck, 
  Check, 
  ShoppingBag, 
  Lock,
  CreditCard,
  MessageSquare,
  Gift,
  Bell,
  HelpCircle,
  ChevronDown
} from "lucide-react";

interface SalesCopyBottomProps {
  bonusSeats: number;
  justUpdatedSeats: boolean;
  activeViewers: number;
  showNotification: boolean;
  currentPurchase: { name: string; location: string; time: string };
  handlePurchase: (e: React.MouseEvent) => void;
  handleScrollToOffer: (e: React.MouseEvent) => void;
}

const TESTIMONIALS = [
  {
    text: "Llegaba de trabajar muerta de cansancio a las 8 de la noche y abría la heladera sin saber qué hacer. Ahora pongo los 3 ingredientes que tengo y en 2 minutos ya sé qué cocinar. Me cambió las noches.",
    author: "Clara R.",
    city: "Buenos Aires"
  },
  {
    text: "Tengo tres chicos y todas las noches era la misma pregunta: '¿qué hay de comer?'. Con la lista de compras por WhatsApp mi marido compra solo lo que falta y variamos el menú re fácil.",
    author: "Sofía G.",
    city: "Córdoba"
  },
  {
    text: "Tiraba un montón de verduras y queso todas las semanas porque me olvidaba que estaban ahí. La app me avisa qué usar primero y la cena se resuelve volando sin tirar comida.",
    author: "Martín O.",
    city: "Santa Fe"
  },
  {
    text: "Me diagnosticaron celiaquía y no sabía cómo combinar lo que tenía en casa. La app se adapta perfecto a mi perfil y cocino rico todos los días sin estresarme.",
    author: "Laura M.",
    city: "Mendoza"
  },
  {
    text: "Pensé que era otra app complicada de usar, pero es re simple. Cargo los víveres que compré y me arma menús que le gustan a toda la familia.",
    author: "Diego A.",
    city: "Rosario"
  }
];

export const SalesCopyBottom: React.FC<SalesCopyBottomProps> = ({
  bonusSeats,
  justUpdatedSeats,
  activeViewers,
  showNotification,
  currentPurchase,
  handlePurchase,
  handleScrollToOffer
}) => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  const includedSection = useMemo(() => (
    <div className="max-w-xl mx-auto bg-stone-900 text-stone-100 p-6 sm:p-7 rounded-3xl shadow-xl border border-stone-850 text-left space-y-6">
      <div className="flex items-center justify-between gap-3 border-b border-stone-850 pb-3.5">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 text-sm">🍳</span>
          <h3 className="font-serif font-black text-white text-base sm:text-md tracking-tight">
            Lo que vas a lograr todos los días en tu cocina
          </h3>
        </div>
        <span className="text-[9px] font-bold tracking-wider text-[#d1fae5] uppercase bg-[#1e442f] px-2 py-0.5 rounded-sm border border-emerald-800">
          ACCESO VITALICIO
        </span>
      </div>

      <p className="text-xs text-stone-300 leading-relaxed">
        Heladera Inteligente está pensada para terminar con la angustia diaria de no saber qué comer. Mirá todo lo que cambia a partir de hoy:
      </p>

      <div className="space-y-4">
        {/* Beneficio 1 */}
        <div className="flex items-start gap-2.5">
          <div className="w-5 h-5 rounded bg-emerald-950/60 flex items-center justify-center border border-emerald-800 shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-emerald-400" />
          </div>
          <div>
            <p className="text-xs font-bold text-white font-serif">Chau a abrir la heladera sin saber qué cocinar</p>
            <p className="text-[11px] text-stone-300 leading-relaxed">
              Llegás a tu casa cansado a la noche y no tenés ganas de pensar. Cargás lo que tenés en la app y en 30 segundos tenés la cena resuelta sin estresarte.
            </p>
          </div>
        </div>

        {/* Beneficio 2 */}
        <div className="flex items-start gap-2.5">
          <div className="w-5 h-5 rounded bg-emerald-950/60 flex items-center justify-center border border-emerald-800 shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-emerald-400" />
          </div>
          <div>
            <p className="text-xs font-bold text-white font-serif">Nunca más tirás comida ni regalás plata</p>
            <p className="text-[11px] text-stone-300 leading-relaxed">
              Ese pedazo de queso, la media bandeja de carne o las verduras que se echaban a perder en el cajón. La app te avisa qué conviene usar primero.
            </p>
          </div>
        </div>

        {/* Beneficio 3 */}
        <div className="flex items-start gap-2.5">
          <div className="w-5 h-5 rounded bg-emerald-950/60 flex items-center justify-center border border-emerald-800 shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-emerald-400" />
          </div>
          <div>
            <p className="text-xs font-bold text-white font-serif">Adaptado exactamente a los tuyos y a tu test</p>
            <p className="text-[11px] text-stone-300 leading-relaxed">
              Si en casa hay celíacos, hipertensos o alguien no come carne, la app arma recetas respetando tu perfil alimentario para que todos coman bien.
            </p>
          </div>
        </div>

        {/* Beneficio 4 */}
        <div className="flex items-start gap-2.5">
          <div className="w-5 h-5 rounded bg-emerald-950/60 flex items-center justify-center border border-emerald-800 shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-emerald-400" />
          </div>
          <div>
            <p className="text-xs font-bold text-white font-serif">Ahorro real en tus compras semanales</p>
            <p className="text-[11px] text-stone-300 leading-relaxed">
              Aprovechás lo que ya compraste antes de volver a gastar. Evitás pedir delivery o hacer compras de último momento en el supermercado.
            </p>
          </div>
        </div>

        {/* Beneficio 5 */}
        <div className="flex items-start gap-2.5">
          <div className="w-5 h-5 rounded bg-emerald-950/60 flex items-center justify-center border border-emerald-800 shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-emerald-400" />
          </div>
          <div>
            <p className="text-xs font-bold text-white font-serif">Lista del súper directa a WhatsApp 🇦🇷</p>
            <p className="text-[11px] text-stone-300 leading-relaxed">
              Armás la lista de lo que realmente te falta y se la mandás por WhatsApp a quien vaya a comprar, lista para ir tachando ítem por ítem.
            </p>
          </div>
        </div>
      </div>
    </div>
  ), []);

  const recipesSearchBenefit = useMemo(() => (
    <div className="max-w-xl mx-auto bg-stone-100 border border-stone-200/80 p-6 sm:p-7 rounded-3xl shadow-md text-left space-y-4">
      <div className="flex items-center gap-2.5">
        <span className="text-xl">🇦🇷</span>
        <h4 className="font-serif font-black text-stone-950 text-base sm:text-lg tracking-tight leading-snug">
          Buscá recetas y accedé directo a tus sitios favoritos sin salir de la app
        </h4>
      </div>
      <p className="text-stone-850 text-xs sm:text-sm leading-relaxed">
        ¿Querés buscar una receta específica o ver variantes locales? Desde nuestra app, te conectamos con un solo clic con las principales fuentes culinarias de Argentina. Buscá tus preparaciones favoritas y accedé directamente a:
      </p>
      
      <div className="grid grid-cols-3 gap-3 pt-1">
        <div className="bg-white p-3 rounded-2xl border border-stone-200 text-center space-y-1 shadow-2xs">
          <p className="text-xs font-bold font-serif text-[#f27a1a]">Cookpad</p>
          <p className="text-[11px] text-stone-850 font-bold">Comunidad y tips</p>
        </div>
        <div className="bg-white p-3 rounded-2xl border border-stone-200 text-center space-y-1 shadow-2xs">
          <p className="text-xs font-bold font-serif text-[#d92a1c]">Cocineros Arg</p>
          <p className="text-[11px] text-stone-850 font-bold">Clásicos locales</p>
        </div>
        <div className="bg-white p-3 rounded-2xl border border-stone-200 text-center space-y-1 shadow-2xs">
          <p className="text-xs font-bold font-serif text-[#f12c66]">Paulina Cocina</p>
          <p className="text-[11px] text-stone-850 font-bold">Fácil y rápido</p>
        </div>
      </div>
    </div>
  ), []);

  const bonusCard = useMemo(() => (
    <div className="bg-gradient-to-br from-emerald-50 to-stone-50 border-2 border-emerald-500/30 p-6 sm:p-8 rounded-3xl max-w-xl mx-auto space-y-5 shadow-lg relative overflow-hidden text-left">
      <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-black tracking-widest uppercase px-3.5 py-1.5 rounded-bl-2xl shadow-sm">
        BONOS INCLUIDOS HOY
      </div>

      <div className="space-y-4 pt-2">
        <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
          <Gift className="w-3.5 h-3.5 text-emerald-700" />
          <span>¡3 Bonos de regalo 100% gratis con tu compra!</span>
        </span>

        <h4 className="font-serif font-black text-emerald-950 text-base sm:text-lg tracking-tight leading-snug">
          Todo lo que recibís hoy para dejar de pensar qué cocinar
        </h4>

        {/* Bono 1 */}
        <div className="border border-stone-200 bg-white p-4 rounded-2xl space-y-2 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="text-emerald-600 font-extrabold text-sm">🎁</span>
            <p className="text-stone-900 font-bold font-serif text-sm">
              BONO 1: Más de 200 recetas para resolver tus comidas todos los días
            </p>
          </div>
          <p className="text-stone-850 text-xs leading-relaxed">
            No vuelvas a quedarte sin ideas frente a la heladera.<br />
            Recibís un recetario con más de 200 recetas prácticas y variadas, para que siempre tengas opciones cuando no sepas qué cocinar.
          </p>
          <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest bg-[#d1fae5] px-2 py-0.5 rounded inline-block">
            🎁 Incluido GRATIS con tu acceso de hoy.
          </div>
        </div>

        {/* Bono 2 */}
        <div className="border border-stone-200 bg-white p-4 rounded-2xl space-y-2 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="text-emerald-600 font-extrabold text-sm">⚡</span>
            <p className="text-stone-900 font-bold font-serif text-sm">
              BONO 2: Método 2H – Organizá toda tu semana en solo 2 horas
            </p>
          </div>
          <p className="text-stone-850 text-xs leading-relaxed">
            Aprendé el método que te permite dejar preparadas las bases de tus comidas para toda la semana.<br />
            Vas a cocinar menos veces, ahorrar tiempo y tomar muchas menos decisiones durante la semana.<br />
            Es el complemento perfecto para aprovechar al máximo Heladera Inteligente.
          </p>
          <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest bg-[#d1fae5] px-2 py-0.5 rounded inline-block">
            🎁 Incluido GRATIS con tu acceso de hoy.
          </div>
        </div>

        {/* Bono 3 */}
        <div className="border border-stone-200 bg-white p-4 rounded-2xl space-y-2 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="text-emerald-600 font-extrabold text-sm">🥗</span>
            <p className="text-stone-900 font-bold font-serif text-sm">
              BONO 3: Recetario Desinflamatorio
            </p>
          </div>
          <p className="text-stone-850 text-xs leading-relaxed">
            Cuando no sabés qué cocinar, también es fácil terminar eligiendo opciones poco saludables.<br />
            Con este recetario vas a tener recetas simples, equilibradas y fáciles de preparar para incorporar comidas más livianas a tu semana, sin complicarte ni pasar horas en la cocina.
          </p>
          <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest bg-[#d1fae5] px-2 py-0.5 rounded inline-block">
            🎁 Incluido GRATIS con tu acceso de hoy.
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-emerald-600/10 space-y-2">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1.5 text-xs">
          <span className="font-bold text-stone-950 uppercase tracking-wider text-[9px] flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>CUPOS CON BONOS DISPONIBLES:</span>
          </span>
          <span className={`text-emerald-700 font-extrabold text-[11px] bg-emerald-100 px-2.5 py-0.5 rounded-sm self-start sm:self-auto uppercase transition-transform duration-300 ${justUpdatedSeats ? 'scale-110 bg-emerald-200 text-emerald-900 ring-2 ring-emerald-400 font-black' : ''}`}>
            ¡SOLO QUEDAN {bonusSeats} DE 200 LUGARES!
          </span>
        </div>
        
        <div className="w-full bg-stone-200 h-3 rounded-full overflow-hidden relative shadow-inner border border-stone-200/50">
          <div 
            className={`bg-gradient-to-r from-emerald-500 to-emerald-600 h-full rounded-full transition-transform duration-1000 ease-in-out shadow-[0_0_12px_rgba(16,185,129,0.5)] ${justUpdatedSeats ? 'brightness-110 animate-pulse' : ''}`}
            style={{ 
              width: '100%',
              transform: `scaleX(${((200 - bonusSeats) / 200)})`,
              transformOrigin: 'left'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent w-1/3 h-full animate-shimmer pointer-events-none" />
        </div>

        <div className="flex justify-between items-center text-[11px] text-stone-900 font-mono pt-0.5 font-bold">
          <span className="font-bold text-emerald-700">{Math.round(((200 - bonusSeats) / 200) * 100)}% Reservado</span>
          <span className="animate-pulse text-emerald-600 font-bold flex items-center gap-1">
            ● {activeViewers} personas mirando esta oferta ahora
          </span>
        </div>
      </div>
    </div>
  ), [bonusSeats, justUpdatedSeats, activeViewers]);

  const guideSection = useMemo(() => (
    <div className="max-w-xl mx-auto bg-stone-100 border border-stone-200/80 p-6 sm:p-8 rounded-3xl shadow-md text-left space-y-6">
      <div className="text-center space-y-1.5">
        <span className="text-[10px] font-black tracking-widest text-[#1b3d2b] uppercase bg-emerald-100 px-3 py-0.5 rounded-full inline-block">
          SIN COMPLICACIONES
        </span>
        <h4 className="font-serif font-black text-stone-950 text-lg sm:text-xl tracking-tight leading-snug">
          Así funciona. En serio, así de simple.
        </h4>
        <p className="text-xs text-stone-850 leading-relaxed font-semibold">
          Tres pasos sencillos para resolver tus comidas de todos los días:
        </p>
      </div>

      <div className="space-y-5">
        {/* Paso 1 */}
        <div className="flex items-start gap-3.5">
          <span className="w-7 h-7 rounded-full bg-[#1b3d2b] text-[#d1fae5] flex items-center justify-center font-bold font-serif text-sm shrink-0">
            1
          </span>
          <div className="space-y-1">
            <p className="font-serif font-black text-stone-900 text-xs sm:text-sm">Abrís la app y ponés lo que tenés</p>
            <p className="text-stone-850 text-xs leading-relaxed">
              Cargás los ingredientes que guardaste en tu heladera o alacena. Te lleva menos de un minuto.
            </p>
          </div>
        </div>

        {/* Paso 2 */}
        <div className="flex items-start gap-3.5">
          <span className="w-7 h-7 rounded-full bg-[#1b3d2b] text-[#d1fae5] flex items-center justify-center font-bold font-serif text-sm shrink-0">
            2
          </span>
          <div className="space-y-1">
            <p className="font-serif font-black text-stone-900 text-xs sm:text-sm">Tocás un botón y elegís tu menú</p>
            <p className="text-stone-850 text-xs leading-relaxed">
              La app lee lo que tenés y te arma opciones ricas al instante, respetando las respuestas de tu test.
            </p>
          </div>
        </div>

        {/* Paso 3 */}
        <div className="flex items-start gap-3.5">
          <span className="w-7 h-7 rounded-full bg-[#1b3d2b] text-[#d1fae5] flex items-center justify-center font-bold font-serif text-sm shrink-0">
            3
          </span>
          <div className="space-y-1">
            <p className="font-serif font-black text-stone-900 text-xs sm:text-sm">Cocinás sin renegar</p>
            <p className="text-stone-850 text-xs leading-relaxed">
              Seguís el paso a paso fácil, usás lo que tenías guardado y resolvés la cena sin gastar un peso de más.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl">
        <div className="flex items-start gap-2.5">
          <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5 text-[#1b3d2b] font-bold text-xs">
            💡
          </div>
          <div>
            <p className="text-[#1b3d2b] font-bold text-xs">Aviso importante</p>
            <p className="text-stone-850 text-[11.5px] leading-relaxed font-semibold">
              Funciona desde cualquier celular, tablet o computadora. No necesitás descargar nada raro ni ocupar espacio de memoria.
            </p>
          </div>
        </div>
      </div>
    </div>
  ), []);

  const notificationSection = useMemo(() => (
    <div className="max-w-xl mx-auto">
      <div className={`bg-stone-900 text-stone-100 p-3 rounded-2xl border border-stone-850 flex items-center gap-3 shadow-md text-left transition-[opacity,transform] duration-500 ease-out ${
        showNotification ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"
      }`}>
        <div className="w-7 h-7 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
          <Bell className="w-3.5 h-3.5 animate-bounce" />
        </div>
        <div className="text-xs leading-none">
          <p className="text-stone-100 font-bold mb-0.5">
            🎉 Compra reciente en tiempo real
          </p>
          <p className="text-[10px] text-stone-300 leading-normal">
            {currentPurchase.name} ({currentPurchase.location}) adquirió el acceso de por vida + Bonos de regalo <strong>{currentPurchase.time}</strong>.
          </p>
        </div>
      </div>
    </div>
  ), [showNotification, currentPurchase]);

  const testimonialsMarquee = useMemo(() => (
    <div className="space-y-4 w-full overflow-hidden py-4 max-w-xl mx-auto">
      <div className="flex items-center gap-2 text-stone-850 justify-center">
        <MessageSquare className="w-4 h-4 text-emerald-600" />
        <h4 className="text-[10.5px] uppercase font-mono font-bold tracking-widest text-stone-900">Testimonios reales (Mantené presionado para pausar)</h4>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-stone-50 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-stone-50 to-transparent pointer-events-none z-10" />

        <div className="flex w-max gap-4 animate-marquee py-2 hover:[animation-play-state:paused] active:[animation-play-state:paused]">
          {TESTIMONIALS.map((t, idx) => (
            <div key={`t1-${idx}`} className="w-[280px] sm:w-[300px] shrink-0 bg-white p-4 rounded-xl border border-stone-200/80 shadow-2xs">
              <p className="text-xs text-stone-850 italic leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-[11px] font-bold text-stone-950 mt-2 font-mono uppercase tracking-wide">— {t.author}, {t.city}</p>
            </div>
          ))}
          {TESTIMONIALS.map((t, idx) => (
            <div key={`t2-${idx}`} className="w-[280px] sm:w-[300px] shrink-0 bg-white p-4 rounded-xl border border-stone-200/80 shadow-2xs">
              <p className="text-xs text-stone-850 italic leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-[11px] font-bold text-stone-950 mt-2 font-mono uppercase tracking-wide">— {t.author}, {t.city}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ), []);

  const pricingSection = useMemo(() => (
    <section className="bg-stone-950 text-stone-100 py-16 px-4 border-t border-stone-900 relative overflow-hidden" id="oferta-cierre">
      <div className="absolute -top-40 -left-40 w-[380px] h-[385px] bg-[#2c5e43]/15 rounded-full blur-3xl select-none pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[380px] h-[385px] bg-emerald-900/15 rounded-full blur-3xl select-none pointer-events-none" />
      
      <div className="max-w-2xl mx-auto text-center relative z-10 space-y-6">
        
        <div className="space-y-2">
          <span className="text-[10px] font-black tracking-widest text-[#d1fae5] uppercase bg-[#1e442f] px-3.5 py-1 rounded-full border border-emerald-800">
            UN SOLO PAGO • ACCESO VITALICIO
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white tracking-tight">
            Accedé hoy a Heladera Inteligente y dejá de preguntarte qué cocinar cada día.
          </h2>
        </div>

        {/* Tarjeta de checkout */}
        <div className="bg-stone-900/90 border border-emerald-500/20 p-6 md:p-8 rounded-3xl max-w-sm mx-auto space-y-6 shadow-2xl relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[9px] font-extrabold px-3 py-1 rounded-full tracking-wider uppercase whitespace-nowrap">
            ¡OFERTA VITALICIA + 2 BONOS GRATIS!
          </div>

          <div className="space-y-4">
            <div className="py-2 text-center">
              <span className="text-[11px] text-emerald-300 uppercase tracking-widest font-black block mb-1">ÚNICO PAGO PROMOCIONAL:</span>
              <h3 className="text-5xl md:text-6xl font-serif font-black text-emerald-400 tracking-tight leading-none drop-shadow-[0_4px_12px_rgba(52,211,153,0.18)]">
                $17.900 ARS
              </h3>
              <span className="text-[11px] text-emerald-400 font-extrabold tracking-wider block mt-1">PAGO ÚNICO • SIN MENSUALIDADES NI RECURRENCIAS</span>
            </div>
            
            <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-2xl p-3.5 text-left space-y-2">
              <p className="text-stone-200 text-xs leading-relaxed font-semibold">
                💡 Cuando dejás de improvisar las comidas, también dejás de improvisar las compras. Organizarte con lo que ya tenés en casa puede ayudarte a ahorrar tiempo, reducir el desperdicio y recuperar rápidamente la inversión en la aplicación.
              </p>
            </div>
          </div>

          {/* Gran botón de compra */}
          <button
            onClick={handlePurchase}
            className="cursor-pointer w-full bg-emerald-600 hover:bg-emerald-700 text-stone-50 border-none px-6 py-4 rounded-xl font-serif font-black text-md md:text-lg tracking-wide shadow-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2 uppercase"
          >
            <ShoppingBag className="w-5 h-5 text-white shrink-0" />
            <span>QUIERO DEJAR DE PENSAR QUÉ COCINAR</span>
          </button>

          {/* GARANTÍA - Moverla INMEDIATAMENTE debajo del botón de compra */}
          <div className="bg-stone-950/80 border border-emerald-500/30 p-4 rounded-2xl text-left space-y-1.5 mt-3">
            <p className="text-emerald-400 font-bold text-xs flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Garantía de 7 días sin riesgo</span>
            </p>
            <p className="text-stone-200 text-xs leading-relaxed">
              Probala 7 días sin riesgo. Si abrís la app, la usás, y sigue siendo un problema saber qué cocinar, te devolvemos el dinero completo. Sin formularios. Sin preguntas.
            </p>
          </div>

          {/* Sellos de Seguridad */}
          <div className="flex items-center justify-center gap-4 text-[9px] text-stone-300 font-mono pt-1">
            <span className="flex items-center gap-1">
              <Lock className="w-3 text-emerald-500" />
              <span>Mercado Pago</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CreditCard className="w-3 text-emerald-500" />
              <span>Pago 100% Seguro</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  ), [handlePurchase]);

  const faqSection = useMemo(() => {
    const faqItems = [
      {
        id: "faq-1",
        question: "¿Qué pasa si compro y siento que no es para mí?",
        answer: "Tenés 7 días de garantía incondicional. Si no estás conforme, nos escribís y te devolvemos el 100% de tu dinero al instante, sin explicaciones ni trámites complicados. Apenas se procesa la devolución, tu acceso a la app se cancela automáticamente."
      },
      {
        id: "faq-2",
        question: "¿Cómo funciona si pido el reembolso?",
        answer: "Es automática. Una vez que solicitás la devolución dentro de los 7 días y la aprobamos, se da de baja tu acceso en el momento. Vos solo pedís el reembolso; nosotros nos encargamos del resto."
      },
      {
        id: "faq-3",
        question: "¿Es un pago único o me van a cobrar todos los meses?",
        answer: "Es un pago único de $17.900 ARS. No es una suscripción — pagás una sola vez y tu acceso queda activo de por vida, sin cargos recurrentes ni sorpresas en la tarjeta."
      },
      {
        id: "faq-4",
        question: "¿Necesito saber cocinar o tener experiencia con apps para usarla?",
        answer: "No, está pensada para cualquier persona. Cargás lo que tenés en tu heladera y la app te dice qué cocinar, te arma la lista del súper automáticamente y te avisa qué está por vencer. Todo con pasos simples, sin complicaciones."
      }
    ];

    return (
      <section className="bg-stone-50 text-stone-800 py-16 px-4 md:px-8 border-t border-stone-200/60" id="faq-seccion">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-100">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Preguntas Frecuentes</span>
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-black text-stone-900 tracking-tight leading-tight">
              Preguntas Frecuentes
            </h2>
            <p className="text-stone-850 text-xs md:text-sm max-w-lg mx-auto leading-relaxed font-semibold">
              Resolvé tus dudas al instante y descubrí por qué Heladera Inteligente es ideal para vos.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqItems.map((item) => {
              const isOpen = openFaq === item.id;
              return (
                <div 
                  key={item.id} 
                  id={item.id}
                  className="bg-white border border-stone-200/80 rounded-2xl overflow-hidden transition-all duration-300 hover:border-emerald-500/30 hover:shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full text-left p-5 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-serif font-bold text-stone-900 text-sm md:text-base leading-snug">
                      {item.question}
                    </span>
                    <span className={`w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-emerald-50 text-emerald-600" : "text-stone-750"}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <div 
                    className={`transition-all duration-350 ease-in-out overflow-hidden ${isOpen ? "max-h-72 opacity-100 border-t border-stone-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="p-5 text-stone-850 text-xs md:text-sm leading-relaxed bg-stone-50/40 font-semibold">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }, [openFaq]);

  const footerSection = useMemo(() => (
    <footer className="bg-stone-950 text-stone-300 py-10 px-4 border-t border-stone-900 text-xs text-center">
      <div className="max-w-4xl mx-auto space-y-3">
        <p className="font-serif text-stone-200">Heladera Inteligente™ - Todos los derechos reservados © {new Date().getFullYear()}</p>
        <p className="max-w-2xl mx-auto text-stone-300 text-[10.5px] leading-relaxed">
          Este sitio web no forma parte de Facebook, Instagram ni Meta Platforms, Inc. Todos los nombres de productos y marcas son propiedad de sus respectivos owners. Aureva Studio SAS. Soporte directo: aurevastudio2@gmail.com
        </p>
      </div>
    </footer>
  ), []);

  return (
    <>
      {includedSection}

      {recipesSearchBenefit}

      {bonusCard}

      {guideSection}

      {notificationSection}

      {testimonialsMarquee}

      {pricingSection}

      {faqSection}

      {footerSection}
    </>
  );
};
