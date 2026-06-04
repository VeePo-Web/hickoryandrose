export const scheduleIdle = (callback: () => void, timeout = 2500) => {
  if ("requestIdleCallback" in window && "cancelIdleCallback" in window) {
    const id = window.requestIdleCallback(callback, { timeout });
    return () => window.cancelIdleCallback(id);
  }

  const id = window.setTimeout(callback, Math.min(timeout, 1200));
  return () => window.clearTimeout(id);
};
