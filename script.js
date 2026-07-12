(() => {
  const header = document.querySelector(".site-header");

  if (!header) {
    return;
  }

  let lastScrollY = window.scrollY;
  let ticking = false;

  const updateHeader = () => {
    const currentScrollY = window.scrollY;
    const isAtTop = currentScrollY <= 8;
    const scrollDelta = currentScrollY - lastScrollY;

    header.classList.toggle("is-at-top", isAtTop);

    if (isAtTop) {
      header.classList.remove("is-hidden");
    } else if (scrollDelta > 0 && currentScrollY > 96) {
      header.classList.add("is-hidden");
    } else if (scrollDelta < 0) {
      header.classList.remove("is-hidden");
    }

    lastScrollY = currentScrollY;
    ticking = false;
  };

  updateHeader();

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    },
    { passive: true },
  );
})();

window.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
