export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  },
});

export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};