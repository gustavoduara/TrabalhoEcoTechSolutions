document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header-custom");

  accordionHeaders.forEach(header => {
    const item = header.parentElement;
    const content = item.querySelector(".accordion-content-custom");

    if (item.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    }

    header.addEventListener("click", () => {
      const isCurrentlyActive = item.classList.contains("active");

      document.querySelectorAll(".accordion-item-custom").forEach(otherItem => {
        otherItem.classList.remove("active");
        otherItem.querySelector(".accordion-content-custom").style.maxHeight = null;
      });

      if (!isCurrentlyActive) {
        item.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});