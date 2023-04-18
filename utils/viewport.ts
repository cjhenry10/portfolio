const vh = (percent: number) => {
  const h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (percent * h) / 100;
};

const vw = (percent: number) => {
  const w = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  return (percent * w) / 100;
};

export { vh, vw };
