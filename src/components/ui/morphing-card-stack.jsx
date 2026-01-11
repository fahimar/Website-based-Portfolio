import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { cn } from "../../lib/utils";
import { Grid3X3, Layers, LayoutList } from "lucide-react";

const layoutIcons = {
  stack: Layers,
  grid: Grid3X3,
  list: LayoutList,
};

const SWIPE_THRESHOLD = 50;

export function Component({
  cards = [],
  className,
  defaultLayout = "list",
  onCardClick,
}) {
  const [layout, setLayout] = useState(defaultLayout);
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  if (!cards || cards.length === 0) {
    return null;
  }

  const handleDragEnd = (event, info) => {
    const { offset, velocity } = info;
    const swipe = Math.abs(offset.x) * velocity.x;

    if (offset.x < -SWIPE_THRESHOLD || swipe < -1000) {
      // Swiped left - go to next card
      setActiveIndex((prev) => (prev + 1) % cards.length);
    } else if (offset.x > SWIPE_THRESHOLD || swipe > 1000) {
      // Swiped right - go to previous card
      setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }
    setIsDragging(false);
  };

  const getStackOrder = () => {
    const reordered = [];
    for (let i = 0; i < cards.length; i++) {
      const index = (activeIndex + i) % cards.length;
      reordered.push({ ...cards[index], stackPosition: i });
    }
    return reordered.reverse(); // Reverse so top card renders last (on top)
  };

  const getLayoutStyles = (stackPosition) => {
    switch (layout) {
      case "stack":
        return {
          top: stackPosition * 8,
          left: stackPosition * 8,
          zIndex: cards.length - stackPosition,
          rotate: (stackPosition - 1) * 2,
        };
      case "grid":
        return {
          top: 0,
          left: 0,
          zIndex: 1,
          rotate: 0,
        };
      case "list":
        return {
          top: 0,
          left: 0,
          zIndex: 1,
          rotate: 0,
        };
    }
  };

  const containerStyles = {
    stack: "relative h-64 w-64",
    grid: "grid grid-cols-2 gap-3",
    list: "flex flex-col gap-3",
  };

  const displayCards =
    layout === "stack"
      ? getStackOrder()
      : cards.map((c, i) => ({ ...c, stackPosition: i }));

  return (
    <div className={cn("space-y-4", className)}>
      {/* Layout Toggle */}
      <div className="flex items-center justify-center gap-2 rounded-full bg-gray-800/50 backdrop-blur-sm p-1.5 w-fit mx-auto border border-gray-700/50 shadow-lg">
        {Object.keys(layoutIcons).map((mode) => {
          const Icon = layoutIcons[mode];
          return (
            <button
              key={mode}
              onClick={() => setLayout(mode)}
              className={cn(
                "rounded-full p-2.5 transition-all duration-300",
                layout === mode
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50 scale-110"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/50"
              )}
              aria-label={`Switch to ${mode} layout`}
            >
              <Icon className="h-4 w-4" />
            </button>
          );
        })}
      </div>

      {/* Cards Container */}
      <LayoutGroup>
        <motion.div layout className={cn(containerStyles[layout], "mx-auto")}>
          <AnimatePresence mode="popLayout">
            {displayCards.map((card) => {
              const styles = getLayoutStyles(card.stackPosition);
              const isExpanded = expandedCard === card.id;
              const isTopCard = layout === "stack" && card.stackPosition === 0;

              return (
                <motion.div
                  key={card.id}
                  layoutId={card.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: isExpanded ? 1.05 : 1,
                    x: 0,
                    ...styles,
                  }}
                  exit={{ opacity: 0, scale: 0.8, x: -200 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  drag={isTopCard ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={handleDragEnd}
                  whileDrag={{ scale: 1.02, cursor: "grabbing" }}
                  onClick={() => {
                    if (isDragging) return;
                    setExpandedCard(isExpanded ? null : card.id);
                    onCardClick?.(card);
                  }}
                  className={cn(
                    "cursor-pointer rounded-2xl border border-white/10 p-5 backdrop-blur-sm",
                    "hover:border-white/30 transition-all duration-300 shadow-xl",
                    layout === "stack" && "absolute w-56 h-48",
                    layout === "stack" &&
                      isTopCard &&
                      "cursor-grab active:cursor-grabbing",
                    layout === "grid" && "w-full aspect-square",
                    layout === "list" && "w-full",
                    isExpanded &&
                      "ring-2 ring-cyan-400/50 shadow-2xl shadow-cyan-500/20"
                  )}
                  style={{
                    background: card.color || "rgba(30, 30, 30, 0.6)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    {card.icon && (
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm text-white">
                        {card.icon}
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-white truncate text-lg">
                        {card.title}
                      </h3>
                      <p
                        className={cn(
                          "text-sm text-white/80 mt-2 leading-relaxed",
                          layout === "stack" && "line-clamp-3",
                          layout === "grid" && "line-clamp-2",
                          layout === "list" && "line-clamp-1"
                        )}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {isTopCard && (
                    <div className="absolute bottom-3 left-0 right-0 text-center">
                      <span className="text-xs text-white/40 font-medium">
                        Swipe to navigate
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {layout === "stack" && cards.length > 1 && (
        <div className="flex justify-center gap-2 mt-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "w-8 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50"
                  : "w-2 bg-gray-600 hover:bg-gray-500"
              )}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
