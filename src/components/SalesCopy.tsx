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
  // Purchased seats count starting at 48 (24% of 200) and dynamically ticking UP over time
  const [purchasedCount, setPurchasedCount] = useState(() => {
    const stored = localStorage.getItem("purchased_seats_count");
    if (stored) {
      const parsed = parseInt(stored, 10);
      return parsed >= 48 && parsed <= 65 ? parsed : 48;
    }
    return 48;
  });

  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    // Delay loading the heavy 6.4MB video for 1.2s to prioritize script execution and first render paint
    const timer = setTimeout(() => {
      setLoadVideo(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const bonusSeats = useMemo(() => {
    return 200 - purchasedCount;
  }, [purchasedCount]);

  const [justUpdatedSeats, setJustUpdatedSeats] = useState(false);
  const [activeViewers, setActiveViewers] = useState(() => {
    return Math.floor(Math.random() * (10 - 4 + 1)) + 4; // random between 4 and 10
  });
  const [currentPurchaseIndex, setCurrentPurchaseIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    localStorage.setItem("purchased_seats_count", purchasedCount.toString());
  }, [purchasedCount]);

  // Tick up the purchased seats count so remaining (bonusSeats) goes down
  useEffect(() => {
    // 1. Initial live updates sequence on page load to immediately make it feel extremely active!
    const t1 = setTimeout(() => {
      setPurchasedCount((prev) => {
        if (prev < 51) {
          setJustUpdatedSeats(true);
          setTimeout(() => setJustUpdatedSeats(false), 1000);
          return 51;
        }
        return prev;
      });
    }, 3000);

    const t2 = setTimeout(() => {
      setPurchasedCount((prev) => {
        if (prev < 54) {
          setJustUpdatedSeats(true);
          setTimeout(() => setJustUpdatedSeats(false), 1000);
          return 54;
        }
        return prev;
      });
    }, 8000);

    const t3 = setTimeout(() => {
      setPurchasedCount((prev) => {
        if (prev < 56) {
          setJustUpdatedSeats(true);
          setTimeout(() => setJustUpdatedSeats(false), 1000);
          return 56;
        }
        return prev;
      });
    }, 14000);

    // 2. Ongoing live fluctuation interval so it keeps moving and is never static!
    const interval = setInterval(() => {
      setPurchasedCount((prev) => {
        let next = prev;
        const rand = Math.random();
        
        // If it reaches 65 or more, stop auto-incrementing to keep it believable
        if (prev >= 65) {
          next = prev;
        } else {
          // Fluctuate: 45% chance to increase purchased seats count by 1 (someone buys)
          if (rand < 0.45) {
            next = prev + 1;
          }
        }
        
        if (next !== prev) {
          setJustUpdatedSeats(true);
          setTimeout(() => setJustUpdatedSeats(false), 1000);
        }
        return next;
      });
    }, 11000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(interval);
    };
  }, []);

  // Active viewers fluctuation (range 6 to 10 personas, updates every 4 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveViewers((prev) => {
        const rand = Math.random();
        let delta = 0;
        if (rand < 0.4) {
          delta = -1;
        } else if (rand > 0.6) {
          delta = 1;
        }
        
        let next = prev + delta;
        if (next < 6) {
          next = 6;
        } else if (next > 10) {
          next = 10;
        }
        return next;
      });
    }, 4000);

    return () => {
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
        ¡Excelente! Ya sabés cuánto dinero podrías ahorrar cada mes.
      </h2>
      <p className="text-stone-850 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
        Ahora descubrí cómo Heladera Inteligente hace posible ese ahorro y todo lo que recibís hoy con tu acceso de por vida.
      </p>
    </div>
  ), []);

  const heroSection = useMemo(() => (
    <div className="w-full max-w-[290px] sm:max-w-[330px] mx-auto overflow-hidden rounded-[2.5rem] border-[9px] border-stone-900 shadow-2xl bg-stone-950 relative aspect-[9/16] ring-8 ring-stone-950/5 hover:scale-[1.02] hover:shadow-emerald-900/5 transition-all duration-300">
      {/* Smartphone Notch / Dynamic Island Detail */}
      <div className="absolute top-0 inset-x-0 h-7 flex justify-center items-start pt-1.5 z-10 select-none pointer-events-none">
        <div className="w-20 h-3.5 bg-stone-900 rounded-full flex items-center justify-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-stone-800" />
          <div className="w-6 h-0.75 bg-stone-850 rounded-full" />
        </div>
      </div>

      {/* Screen Glare Reflection Sheen */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none z-10" />

      {/* Conditional Video / Image preloader */}
      {loadVideo ? (
        <video
          src="/video.mp4?v=2"
          className="w-full h-full object-cover block"
          controls
          autoPlay
          muted
          loop
          playsInline
          poster="https://i.postimg.cc/qqpTHHwG/Chat-GPT-Image-3-jun-2026-19-49-16.webp"
        />
      ) : (
        <img
          src="https://i.postimg.cc/qqpTHHwG/Chat-GPT-Image-3-jun-2026-19-49-16.webp"
          alt="Heladera Inteligente App Preview"
          width="312"
          height="554"
          className="w-full h-full object-cover block bg-stone-900"
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  ), [loadVideo]);

  const upperCtaButton = useMemo(() => (
    <div className="max-w-md mx-auto text-center pt-2 pb-1 px-2">
      <button
        onClick={handleScrollToOffer}
        className="cursor-pointer w-full bg-emerald-600 hover:bg-emerald-700 text-stone-50 border-none px-6 py-4 rounded-xl font-serif font-black text-md md:text-lg tracking-wide shadow-md active:scale-[0.99] transition-all flex items-center justify-center gap-2"
      >
        <ShoppingBag className="w-5 h-5 text-white shrink-0" />
        <span>QUIERO MI ACCESO + LOS BONOS</span>
      </button>
      <p className="text-xs text-stone-900 font-mono font-semibold mt-2.5 leading-normal">
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
