export const scrollToTop = () => {
  const container = document.querySelector(".overflow-y-scroll") as HTMLElement;
  if (container) {
    container.scrollTop = 0;
  }
};
