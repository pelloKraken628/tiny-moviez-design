const handleSlide = ({ direction }, currentIdx, setState, slideLength) => {
  if (direction === "left" && currentIdx > 0) setState(currentIdx - 1);
  else if (direction === "right" && currentIdx < slideLength - 1)
    setState(currentIdx + 1);
};

export { handleSlide };
