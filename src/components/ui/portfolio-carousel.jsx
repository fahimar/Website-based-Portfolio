import React, { useRef, forwardRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "../../lib/utils";

// The individual card component with hover animation
const PortfolioCard = forwardRef(({ item, onCodeClick }, ref) => (
  <motion.div
    ref={ref}
    className="relative flex-shrink-0 w-[280px] h-[340px] rounded-2xl overflow-hidden group snap-start shadow-lg shadow-gray-600"
    whileHover={{ y: -12, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {/* Project Image */}
    <img
      src={item.src}
      alt={item.title || "Portfolio project"}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

    {/* Card Content */}
    <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end h-full">
      <div className="space-y-2">
        {item.title && (
          <h3 className="text-xl font-bold text-white leading-tight">
            {item.title}
          </h3>
        )}
        {item.description && (
          <p className="text-xs text-gray-300">{item.description}</p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 mt-3">
        <button className="flex-1 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white text-xs font-medium hover:bg-white/20 transition-all duration-300">
          Demo
        </button>
        {item.codeLink && (
          <button
            onClick={() => onCodeClick(item.codeLink)}
            className="flex-1 px-3 py-2 bg-cyan-500/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg text-white text-xs font-medium hover:bg-cyan-500 transition-all duration-300"
          >
            Code
          </button>
        )}
      </div>
    </div>
  </motion.div>
));
PortfolioCard.displayName = "PortfolioCard";

// The main carousel component with auto-scroll and infinite loop
const PortfolioCarousel = forwardRef(
  ({ items, onCodeClick, className, autoPlayInterval = 3000, ...props }, ref) => {
    const scrollContainerRef = useRef(null);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const autoPlayRef = useRef(null);

    // Create infinite loop by duplicating items
    const infiniteItems = [...items, ...items, ...items];

    const scroll = useCallback((direction) => {
      if (scrollContainerRef.current) {
        const { current } = scrollContainerRef;
        const cardWidth = 280 + 24; // card width + gap
        current.scrollBy({
          left: direction === "left" ? -cardWidth : cardWidth,
          behavior: "smooth",
        });
      }
    }, []);

    // Auto-play functionality
    useEffect(() => {
      if (isAutoPlaying && !isDragging) {
        autoPlayRef.current = setInterval(() => {
          scroll("right");
        }, autoPlayInterval);
      }

      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
        }
      };
    }, [isAutoPlaying, isDragging, scroll, autoPlayInterval]);

    // Infinite scroll logic - reset position when reaching end or start
    useEffect(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const handleScroll = () => {
        const { scrollLeft, clientWidth } = container;
        const cardWidth = 280 + 24;
        const totalCards = items.length;
        const singleSetWidth = cardWidth * totalCards;

        // If scrolled past second set, jump back to first set
        if (scrollLeft >= singleSetWidth * 2 - clientWidth) {
          container.scrollLeft = singleSetWidth;
        }
        // If scrolled before first set, jump to second set
        else if (scrollLeft <= 0) {
          container.scrollLeft = singleSetWidth;
        }
      };

      container.addEventListener("scroll", handleScroll);
      // Initialize scroll position to middle set
      container.scrollLeft = (280 + 24) * items.length;

      return () => container.removeEventListener("scroll", handleScroll);
    }, [items.length]);

    // Pause on hover
    const handleMouseEnter = () => {
      setIsDragging(true);
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
    };

    const toggleAutoPlay = () => {
      setIsAutoPlaying(!isAutoPlaying);
    };

    return (
      <div
        ref={ref}
        className={cn("relative w-full group", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Auto-play indicator */}
        <div className="absolute top-0 right-0 z-20 flex items-center gap-2">
          <button
            onClick={toggleAutoPlay}
            className="w-8 h-8 rounded-full bg-gray-900/70 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-300"
            aria-label={isAutoPlaying ? "Pause" : "Play"}
          >
            {isAutoPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 -translate-y-1/2 left-2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/80 to-blue-500/80 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {infiniteItems.map((item, index) => (
            <PortfolioCard
              key={`${item.id}-${index}`}
              item={item}
              onCodeClick={onCodeClick}
            />
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 -translate-y-1/2 right-2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/80 to-blue-500/80 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {items.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-600 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    );
  }
);
PortfolioCarousel.displayName = "PortfolioCarousel";

export { PortfolioCarousel, PortfolioCard };
