import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Sparkles, ShoppingBag } from "lucide-react";
import { LazySection } from "./LazySection";

const SalesCopyBottom = React.lazy(() =>
  import("./SalesCopyBottom").then((m) => ({ default: m.SalesCopyBottom }))
);

interface SalesCopyProps {
  onCtaclick: () => void;
  onOpenCheckout: (price: number, productName: string) => void;
}

// Recent Purchases Simulation Data
const SIMULATED_PURCHASES = [
  { name: "Carina B.", location: "CABA", time: "hace 2 minutos" },
  { name: "Estela M.", location: "Rosario", time: "hace 4 minutos" },
  { name: "Gisela S.", location: "Córdoba", time: "hace 7 minutos" },
  { name: "Milagros F.", location: "Mendoza", time: "hace 9 minutos" },
  { name: "Patricia D.", location: "La Plata", time: "hace 11 minutos" },
  { name: "Romina P.", location: "Mar del Plata", time: "hace 14 minutos" },
  { name: "Clara T.", location: "San Isidro", time: "hace 16 minutos" },
  { name: "Mariela G.", location: "Tucumán", time: "hace 19 minutos" }
];

const SalesCopyComponent: React.FC<SalesCopyProps> = ({ onCtaclick, onOpenCheckout }) => {
  // Bonus seats countdown starting around 14 and dynamically ticking down & fluctuating
  const [bonusSeats, setBonusSeats] = useState(() => {
    const stored = localStorage.getItem("bonus_seats_left_count");
    if (stored) {
      const parsed = parseInt(stored, 10);
      return parsed >= 5 && parsed <= 16 ? parsed : 12;
    }
    return 14;
  });

  const [justUpdatedSeats, setJustUpdatedSeats] = useState(false);
  const [activeViewers, setActiveViewers] = useState(8);
  const [currentPurchaseIndex, setCurrentPurchaseIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    localStorage.setItem("bonus_seats_left_count", bonusSeats.toString());
  }, [bonusSeats]);

  // Tick down and fluctuate bonus seats so it is never static
  useEffect(() => {
    // 1. Initial live updates sequence on page load to immediately make it feel extremely active!
    const t1 = setTimeout(() => {
      setBonusSeats((prev) => {
        if (prev > 11) {
          setJustUpdatedSeats(true);
          setTimeout(() => setJustUpdatedSeats(false), 1000);
          return 11;
        }
        return prev;
      });
    }, 3000);

    const t2 = setTimeout(() => {
      setBonusSeats((prev) => {
        if (prev > 9) {
          setJustUpdatedSeats(true);
          setTimeout(() => setJustUpdatedSeats(false), 1000);
          return 9;
        }
        return prev;
      });
    }, 8000);

    const t3 = setTimeout(() => {
      setBonusSeats((prev) => {
        if (prev > 7) {
          setJustUpdatedSeats(true);
          setTimeout(() => setJustUpdatedSeats(false), 1000);
          return 7;
        }
        return prev;
      });
    }, 14000);

    // 2. Ongoing live fluctuation interval (between 5 and 10) so it keeps moving and is never static!
    const interval = setInterval(() => {
      setBonusSeats((prev) => {
        let next = prev;
        const rand = Math.random();
        
        // If it's 10 or more, force decrement
        if (prev >= 10) {
          next = prev - 1;
        } else if (prev <= 5) {
          // If it hits 5, let it go back up to 6 or 7 simulating expired reservations
          next = prev + (rand > 0.4 ? 1 : 0);
        } else {
          // Fluctuate: 50% chance to decrement, 20% chance to increment (expired cart), 30% chance to stay
          if (rand < 0.45) {
            next = prev - 1;
          } else if (rand > 0.8) {
            next = prev + 1;
          }
        }
        
        if (next !== prev) {
          setJustUpdatedSeats(true);
          setTimeout(() => setJustUpdatedSeats(false), 1000);
        }
        return next;
      });
      
      // Also occasionally update active viewers count slightly
      setActiveViewers((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return next >= 5 && next <= 12 ? next : 8;
      });
    }, 11000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(interval);
    };
  }, []);

  // Cycle recent purchases
  useEffect(() => {
    const interval = setInterval(() => {
      setShowNotification(false);
      setTimeout(() => {
        setCurrentPurchaseIndex((prev) => (prev + 1) % SIMULATED_PURCHASES.length);
        setShowNotification(true);
      }, 500); // fade transition
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const handlePurchase = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    onOpenCheckout(17900, "Heladera Inteligente™ + Bono Recetario");
  }, [onOpenCheckout]);

  const handleScrollToOffer = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("oferta-cierre")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const currentPurchase = SIMULATED_PURCHASES[currentPurchaseIndex];

  // MEMOIZED STRUCTURAL SECTIONS TO ENSURE ULTRA-FAST CARGA AND PREVENT RE-RENDERS
  const titleSection = useMemo(() => (
    <div className="text-center space-y-4">
      <span className="text-xs font-bold tracking-widest text-[#1b3d2b] uppercase bg-emerald-100 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 shadow-xs">
        <Sparkles className="w-3.5 h-3.5 text-emerald-700 animate-pulse fill-emerald-700" />
        <span>Resultado del Test</span>
      </span>
      <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-950 tracking-tight leading-tight max-w-2xl mx-auto">
        El test no miente: Cada mes se te va más plata de la que imaginás en alimentos que no llegás a consumir. Frená el desperdicio hoy!
      </h2>
      <p className="text-stone-700 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
        Ya viste a dónde se va tu plata. Es momento de automatizar tus cenas, usar lo que ya tenés en casa y cocinar rico en segundos, sin descargar nada.
      </p>
    </div>
  ), []);

  const heroSection = useMemo(() => (
    <div className="max-w-xl mx-auto overflow-hidden rounded-2xl border border-stone-200/80 shadow-md bg-stone-100/50">
      <img 
        src="https://i.postimg.cc/qqpTHHwG/Chat-GPT-Image-3-jun-2026-19-49-16.webp" 
        alt="Heladera Inteligente App Preview" 
        width={576}
        height={432}
        className="w-full h-auto object-cover block"
        referrerPolicy="no-referrer"
        loading="eager"
        {...({ fetchPriority: "high" } as any)}
      />
    </div>
  ), []);

  const upperCtaButton = useMemo(() => (
    <div className="max-w-md mx-auto text-center pt-2 pb-1 px-2">
      <button
        onClick={handleScrollToOffer}
        className="cursor-pointer w-full bg-emerald-600 hover:bg-emerald-700 text-stone-50 border-none px-6 py-4 rounded-xl font-serif font-black text-md md:text-lg tracking-wide shadow-md active:scale-[0.99] transition-all flex items-center justify-center gap-2"
      >
        <ShoppingBag className="w-5 h-5 text-white shrink-0" />
        <span>QUIERO MI ACCESO + LOS BONOS</span>
      </button>
      <p className="text-[10px] text-stone-700 font-mono mt-1.5 leading-normal">
        Único pago de $17.900 ARS • Acceso de por vida
      </p>
    </div>
  ), [handleScrollToOffer]);

  return (
    <div className="w-full bg-stone-50 text-stone-800 font-sans" id="sales-page">
      {/* SECCIÓN PRINCIPAL: HOOK & BENEFICIOS */}
      <section className="py-12 px-4 md:px-8 max-w-3xl mx-auto space-y-12">
        {titleSection}

        {heroSection}

        {upperCtaButton}

        {/* Lazy loading and code splitting the rest of the page to drastically improve performance scores */}
        <LazySection placeholderHeight="400px">
          <React.Suspense
            fallback={
              <div className="flex flex-col items-center justify-center py-20 text-stone-500 gap-2">
                <div className="w-6 h-6 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-serif italic">Cargando beneficios y bonos...</span>
              </div>
            }
          >
            <SalesCopyBottom
              bonusSeats={bonusSeats}
              justUpdatedSeats={justUpdatedSeats}
              activeViewers={activeViewers}
              showNotification={showNotification}
              currentPurchase={currentPurchase}
              handlePurchase={handlePurchase}
              handleScrollToOffer={handleScrollToOffer}
            />
          </React.Suspense>
        </LazySection>
      </section>
    </div>
  );
};

export const SalesCopy = React.memo(SalesCopyComponent);
