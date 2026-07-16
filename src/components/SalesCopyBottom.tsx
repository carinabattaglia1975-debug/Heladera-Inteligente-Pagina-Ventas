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
    text: "Estaba hinchada y cansada de tirar comida podrida. El recetario del bono es oro puro y la app me solucionó la hora de la cena en 2 minutos usando lo que ya tengo.",
    author: "Clara R.",
    city: "Buenos Aires"
  },
  {
    text: "Con el quiz entendí los miles de pesos que perdía. Compré la app y en una semana ya amorticé lo que pagué. Cocino con lo que hay sin gastar de más.",
    author: "Martín O.",
    city: "Santa Fe"
  },
  {
    text: "Tengo tres chicos y era un caos organizar la comida con platos sanos. Con las listas de WhatsApp mi marido compra exacto lo que falta y no repetimos platos.",
    author: "Sofía G.",
    city: "Córdoba"
  },
  {
    text: "Me detectaron celiaquía hace poco y estaba perdidísima. Los filtros de perfil alimentario me salvaron la vida, como rico y seguro todos los días.",
    author: "Laura M.",
    city: "Mendoza"
  },
  {
    text: "La función de alertas de vencimiento es adictiva. No volví a tirar ni un yogur ni un pedazo de queso. Compra súper recomendada.",
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
            Asistente de Cocina Inteligente Premium
          </h3>
        </div>
        <span className="text-[9px] font-bold tracking-wider text-[#d1fae5] uppercase bg-[#1e442f] px-2 py-0.5 rounded-sm border border-emerald-800">
          PROMO VITALICIA
        </span>
      </div>

      <p className="text-xs text-stone-300 leading-relaxed">
        Nuestra plataforma actúa como tu copiloto culinario y administrador del hogar, diseñado para ayudarte a <strong className="text-emerald-400 font-bold">optimizar tus comidas, ahorrar tiempo y dinero</strong>, y llevar una alimentación mucho más saludable sin desperdiciar ingredientes.
      </p>

      <div className="space-y-4">
        {/* Desperdicio Cero */}
        <div className="flex items-start gap-2.5">
          <div className="w-5 h-5 rounded bg-emerald-950/60 flex items-center justify-center border border-emerald-800 shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-emerald-400" />
          </div>
          <div>
            <p className="text-xs font-bold text-white font-serif">Desperdicio Cero de Alimentos</p>
            <p className="text-[11px] text-stone-300 leading-relaxed">
              La app prioriza el uso de ingredientes que están cerca de su fecha de vencimiento, ayudándote a consumir todo antes de que se eche a perder. Marcá ingredientes como "Urgente" ⚠️ para que la IA los priorice de inmediato.
            </p>
          </div>
        </div>

        {/* Ahorro Económico */}
        <div className="flex items-start gap-2.5">
          <div className="w-5 h-5 rounded bg-emerald-950/60 flex items-center justify-center border border-emerald-800 shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-emerald-400" />
          </div>
          <div>
            <p className="text-xs font-bold text-white font-serif">Ahorro Económico Inteligente</p>
            <p className="text-[11px] text-stone-300 leading-relaxed">
              Al sugerir recetas basadas en lo que ya tenés en casa, reducís las compras innecesarias de último momento y optimizás tu presupuesto mensual de supermercado.
            </p>
          </div>
        </div>

        {/* Nutrición y Salud */}
        <div className="flex items-start gap-2.5">
          <div className="w-5 h-5 rounded bg-emerald-950/60 flex items-center justify-center border border-emerald-800 shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-emerald-400" />
          </div>
          <div>
            <p className="text-xs font-bold text-white font-serif">Nutrición y Salud 100% Personalizada</p>
            <p className="text-[11px] text-stone-300 leading-relaxed">
              Motor de filtros avanzados de salud que excluye ingredientes no permitidos según alergias (huevo, soja, leche, etc.), dietas específicas (Keto, Vegana, Paleo, etc.) o condiciones médicas (como hipertensión o celiaquía / Sin TACC).
            </p>
          </div>
        </div>

        {/* Planificación */}
        <div className="flex items-start gap-2.5">
          <div className="w-5 h-5 rounded bg-emerald-950/60 flex items-center justify-center border border-emerald-800 shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-emerald-400" />
          </div>
          <div>
            <p className="text-xs font-bold text-white font-serif">Planificación y Cocina sin Estrés</p>
            <p className="text-[11px] text-stone-300 leading-relaxed">
              Genera recetas paso a paso con sugerencias de presentación, tips interactivos, acceso directo a opiniones de otros cocineros ("Tip Cookpad") y un cronograma semanal automático.
            </p>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex items-start gap-2.5">
          <div className="w-5 h-5 rounded bg-emerald-950/60 flex items-center justify-center border border-emerald-800 shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-emerald-400" />
          </div>
          <div>
            <p className="text-xs font-bold text-white font-serif">Conexión Express con WhatsApp 🇦🇷</p>
            <p className="text-[11px] text-stone-300 leading-relaxed">
              Enviá resúmenes impecables de recetas a un chat y generá listas de compras unificadas con un click, listas para que el encargado del súper las vaya tachando casillero por casillero (¡Que no falte nada para los mates!).
            </p>
          </div>
        </div>

        {/* Multiplataforma */}
        <div className="flex items-start gap-2.5">
          <div className="w-5 h-5 rounded bg-emerald-950/60 flex items-center justify-center border border-emerald-800 shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-emerald-400" />
          </div>
          <div>
            <p className="text-xs font-bold text-white font-serif">Seguridad y Flexibilidad Multiplataforma</p>
            <p className="text-[11px] text-stone-300 leading-relaxed">
              Gestioná tu inventario sincronizado de forma segura y cambiá el modo de visualización entre Celular y Computadora según te resulte más cómodo.
            </p>
          </div>
        </div>
      </div>

      {/* BONO PDF Manual highlight */}
      <div className="bg-emerald-950/40 border border-emerald-500/20 p-4 rounded-2xl space-y-2">
        <div className="flex items-center gap-2">
          <Gift className="w-4 h-4 text-emerald-400 shrink-0" />
          <p className="text-emerald-400 font-extrabold uppercase tracking-wider text-[11px]">
             ¡REGALO DE HOY! MANUAL PASO A PASO (PDF)
          </p>
        </div>
        <p className="text-stone-200 text-xs leading-relaxed">
          Recibirás de inmediato un <span className="text-white font-bold">Manual instructivo PDF con todas las instrucciones de cómo usar la aplicación paso a paso</span>, ilustrado con imágenes reales de la app para que comiences a optimizar hoy mismo.
        </p>
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
        ¿Querés buscar una receta específica o ver variantes locales? Desde nuestra plataforma, el Asistente te conecta con un solo clic con las principales fuentes culinarias de la Argentina. Buscá tus preparaciones favoritas y accedé directamente a:
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
      
      <p className="text-[11px] text-stone-900 italic text-center leading-normal font-semibold">
        *Integración optimizada para encontrar ideas rápidas adaptadas a los ingredientes reales de tu heladera.
      </p>
    </div>
  ), []);

  const bonusCard = useMemo(() => (
    <div className="bg-gradient-to-br from-emerald-50 to-stone-50 border-2 border-emerald-500/30 p-6 sm:p-8 rounded-3xl max-w-xl mx-auto space-y-5 shadow-lg relative overflow-hidden text-left">
      <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-black tracking-widest uppercase px-3.5 py-1.5 rounded-bl-2xl shadow-sm">
        PACK DE BONOS EXCLUSIVOS
      </div>

      <div className="space-y-4 pt-2">
        <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
          <Gift className="w-3.5 h-3.5 text-emerald-700" />
          <span>¡2 Bonos de regalo 100% gratis hoy!</span>
        </span>

        <h4 className="font-serif font-black text-emerald-950 text-base sm:text-lg tracking-tight leading-snug">
          Te llevás GRATIS estos recursos prácticos con tu acceso de hoy:
        </h4>

        {/* Bonus 1 */}
        <div className="border border-stone-200 bg-white p-4 rounded-2xl space-y-2 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="text-emerald-600 font-extrabold text-sm">📕</span>
            <p className="text-stone-900 font-bold font-serif text-sm">
              Bono 1: Manual de Instrucciones Paso a Paso (PDF)
            </p>
          </div>
          <p className="text-stone-850 text-xs leading-relaxed">
            Un instructivo completo para el <strong className="font-bold text-stone-900">Asistente de Cocina Inteligente</strong> con capturas de la aplicación real, diseñado para optimizar tus platos, ahorrar tiempo and dinero, y llevar una alimentación sumamente saludable sin desperdiciar nada.
          </p>
          <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/60 px-2 py-0.5 rounded inline-block">
            🎁 GRATIS al comprar hoy
          </div>
        </div>

        {/* Bonus 2 */}
        <div className="border border-stone-200 bg-white p-4 rounded-2xl space-y-2 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="text-emerald-600 font-extrabold text-sm">🥗</span>
            <p className="text-stone-900 font-bold font-serif text-sm">
              Bono 2: Recetario Desinflamatorio Express (PDF)
            </p>
          </div>
          <p className="text-stone-850 text-xs leading-relaxed">
            Platos ultra rápidos y deliciosos sin gluten ni lácteos para depurar tu cuerpo, deshincharte y optimizar tu digestión en menos de 15 minutos. Te lo llevás gratis únicamente comprando hoy.
          </p>
          <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest bg-[#d1fae5] text-[#065f46] px-2 py-0.5 rounded inline-block">
            🎁 GRATIS al comprar hoy
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
            <span>CUPOS DE BONIFICACIÓN DISPONIBLES:</span>
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
          {/* Ambient scanning/glowing light effect on the progress bar */}
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
          FÁCIL Y SEGURO
        </span>
        <h4 className="font-serif font-black text-stone-950 text-lg sm:text-xl tracking-tight leading-snug">
          Guía Paso a Paso para una Experiencia Exitosa
        </h4>
        <p className="text-xs text-stone-850 leading-relaxed font-semibold">
          Para sacarle el 100% de provecho a la aplicación y disfrutar de todos sus beneficios, este es el camino ideal:
        </p>
      </div>

      <div className="space-y-5">
        {/* Step 1 */}
        <div className="flex items-start gap-3.5">
          <span className="w-7 h-7 rounded-full bg-[#1b3d2b] text-[#d1fae5] flex items-center justify-center font-bold font-serif text-sm shrink-0">
            1
          </span>
          <div className="space-y-1">
            <p className="font-serif font-black text-stone-900 text-xs sm:text-sm">Configurá el Perfil de tu Hogar</p>
            <p className="text-stone-850 text-xs leading-relaxed">
              Cada vez que generes tu plan, indicá tus preferencias del momento — salud, alergias, antojos del día, cantidad de comensales. Nada queda guardado como fijo: elegís de nuevo según lo que necesites hoy. Si hay un celíaco en casa, todas las harinas sugeridas serán <span className="text-emerald-800 font-bold">Sin TACC</span>; si hay alguien con hipertensión, el asistente adaptará las instrucciones para cocinar sin sal común.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-3.5">
          <span className="w-7 h-7 rounded-full bg-[#1b3d2b] text-[#d1fae5] flex items-center justify-center font-bold font-serif text-sm shrink-0">
            2
          </span>
          <div className="space-y-1">
            <p className="font-serif font-black text-stone-900 text-xs sm:text-sm">Pasá Limpio tu Inventario (Tu Heladera)</p>
            <p className="text-stone-850 text-xs leading-relaxed">
              Ingresá al gestor de inventario y anotá qué ingredientes tenés disponibles (ej: pollo, cebolla, arroz, huevos) con sus cantidades y estimación de vencimiento. Si tenés un producto que vence pronto, activá la casilla <strong className="text-amber-900 font-bold">Urgente ⚠️</strong>. La IA le dará prioridad absoluta en la planificación para evitar que se eche a perder.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-3.5">
          <span className="w-7 h-7 rounded-full bg-[#1b3d2b] text-[#d1fae5] flex items-center justify-center font-bold font-serif text-sm shrink-0">
            3
          </span>
          <div className="space-y-1">
            <p className="font-serif font-black text-stone-900 text-xs sm:text-sm">Generá tu Plan de Cocina Inteligente</p>
            <p className="text-stone-850 text-xs leading-relaxed">
              Con tu heladera cargada y tus filtros de salud listos, presioná el botón para generar el Plan de Cocina. La IA analizará tus ingredientes con precisión quirúrgica y te sugerirá un menú completo detallándote qué platos podés cocinar de inmediato y para cuáles te faltan detalles mínimos.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-start gap-3.5">
          <span className="w-7 h-7 rounded-full bg-[#1b3d2b] text-[#d1fae5] flex items-center justify-center font-bold font-serif text-sm shrink-0">
            4
          </span>
          <div className="space-y-1">
            <p className="font-serif font-black text-stone-900 text-xs sm:text-sm">Cocinar de Forma Interactiva</p>
            <p className="text-stone-850 text-xs leading-relaxed">
              Al abrir una receta sugerida, disponés del <strong className="font-bold">Paso a Paso Interactivo</strong> para ir tachando tareas a medida que avanzás. Y si querés ver variantes o secretos de otros cocineros, disponés del botón <strong className="text-emerald-800 font-bold">"Tip Cookpad"</strong> para buscar al instante opiniones en la comunidad.
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex items-start gap-3.5">
          <span className="w-7 h-7 rounded-full bg-[#1b3d2b] text-[#d1fae5] flex items-center justify-center font-bold font-serif text-sm shrink-0">
            5
          </span>
          <div className="space-y-1">
            <p className="font-serif font-black text-stone-900 text-xs sm:text-sm">Armá la Lista de Compras y Compartí</p>
            <p className="text-stone-850 text-xs leading-relaxed">
              Agregá productos cotidianos con un click (como yerba o aceite) usando los atajos rápidos. Copiá la lista completa y mandala por WhatsApp al encargado de hacer las compras, con casilleros listos para ir tachando. ¡Y listos para disfrutar de una comida casera y organizada!
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
            <p className="text-[#1b3d2b] font-bold text-xs">Consejo Pro para el Éxito Continuo</p>
            <p className="text-stone-850 text-[11.5px] leading-relaxed font-semibold">
              Mantené tu inventario actualizado. Cada vez que cocines un plato o hagas una compra grande, dedica un minuto a ajustar las cantidades en el panel de inventario. Esto hará que las futuras sugerencias de la IA sean increíblemente precisas y eficientes.
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
            {currentPurchase.name} ({currentPurchase.location}) adquirió el acceso de por vida + Bono de regalo <strong>{currentPurchase.time}</strong>.
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
            UN SOLO PAGO • ACCESO DE POR VIDA
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white tracking-tight">
            Llevate la App Premium hoy y frená el desperdicio
          </h2>
        </div>

        {/* Tarjeta de checkout premium */}
        <div className="bg-stone-900/90 border border-emerald-500/20 p-6 md:p-8 rounded-3xl max-w-sm mx-auto space-y-6 shadow-2xl relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[9px] font-extrabold px-3 py-1 rounded-full tracking-wider uppercase whitespace-nowrap">
            ¡INCLUYE ACCESO VITALICIO Y BONOS PDF!
          </div>

          <div className="space-y-4">
            <div className="py-2 text-center">
              <span className="text-[11px] text-emerald-300 uppercase tracking-widest font-black block mb-1">UN SOLO PAGO DE LANZAMIENTO:</span>
              <h3 className="text-5xl md:text-6xl font-serif font-black text-emerald-400 tracking-tight leading-none drop-shadow-[0_4px_12px_rgba(52,211,153,0.18)]">
                $17.900 ARS
              </h3>
              <span className="text-[11px] text-emerald-400 font-extrabold tracking-wider block mt-1">SIN CUOTAS NI MENSUALIDADES HOY</span>
            </div>
            
            <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-2xl p-3.5 text-left space-y-2">
              <p className="text-stone-200 text-xs leading-relaxed font-semibold">
                ⭐ <span className="text-emerald-400">Acceso de por vida</span> por un único pago de $17.900 ARS.
              </p>
              <p className="text-stone-300 text-[11px] leading-relaxed">
                Esta oferta especial es <span className="text-emerald-300 font-bold">solo para los primeros 200 accesos</span>. Una vez agotados los cupos, la aplicación pasará a tener un abono o suscripción mensual obligatoria.
              </p>
            </div>
          </div>

          {/* Gran botón de compra Shopify */}
          <button
            onClick={handlePurchase}
            className="cursor-pointer w-full bg-emerald-600 hover:bg-emerald-700 text-stone-50 border-none px-6 py-4 rounded-xl font-serif font-black text-md md:text-lg tracking-wide shadow-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-5 h-5 text-white" />
            <span>QUIERO MI ACCESO + LOS BONOS</span>
          </button>

          {/* Sellos de Seguridad */}
          <div className="flex items-center justify-center gap-4 text-[9px] text-stone-300 font-mono">
            <span className="flex items-center gap-1">
              <Lock className="w-3 text-emerald-500" />
              <span>Pago Seguro SSL</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CreditCard className="w-3 text-emerald-500" />
              <span>Garantía Oficial</span>
            </span>
          </div>

        </div>

        {/* GARANTÍA DE 7 DÍAS EN 2 LÍNEAS */}
        <div className="max-w-md mx-auto text-center pt-2 space-y-1">
          <p className="text-stone-100 text-xs font-bold flex items-center justify-center gap-1.5 leading-tight">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Garantía incondicional de satisfacción por 7 días.</span>
          </p>
          <p className="text-stone-200 text-[11px] leading-relaxed">
            Si no sentís que la app te simplifica las cenas o te evita tirar comida, nos escribís y te reembolsamos el 100% de tu dinero al instante, sin vueltas. <span className="font-semibold text-stone-200">(El acceso a la plataforma se bloquea automáticamente al realizarse la devolución).</span>
          </p>
        </div>

      </div>
    </section>
  ), [handlePurchase]);

  const faqSection = useMemo(() => {
    const faqItems = [
      {
        id: "faq-1",
        question: "¿Qué pasa si compro y siento que no es para mí?",
        answer: "Tenés 7 días de garantía incondicional. Si no estás conforme, nos escribís y te devolvemos el 100% de tu dinero al instante, sin explicaciones ni trámites complicados. Apenas se procesa la devolución, tu acceso a la plataforma se cancela automáticamente — no tenés que hacer nada más de tu lado."
      },
      {
        id: "faq-2",
        question: "¿Cómo funciona la cancelación si pido el reembolso?",
        answer: "Es automática. Una vez que solicitás la devolución dentro de los 7 días y la aprobamos, el sistema da de baja tu acceso en el momento. Vos solo pedís el reembolso; nosotros nos encargamos del resto, sin pasos extra ni checkboxes que llenar."
      },
      {
        id: "faq-3",
        question: "¿Es un pago único o me van a cobrar todos los meses?",
        answer: "Es un pago único de $17.900 ARS. No es una suscripción — pagás una sola vez y tu acceso queda activo de por vida, sin cargos recurrentes ni sorpresas en la tarjeta."
      },
      {
        id: "faq-4",
        question: "¿Necesito saber cocinar o tener experiencia con apps para usarla?",
        answer: "No, está pensada para cualquier persona. Cargás lo que tenés en tu heladera y la app te dice qué cocinar, te arma la lista del súper automáticamente y te avisa qué está por vencer. Todo con pasos simples, sin curva de aprendizaje."
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
