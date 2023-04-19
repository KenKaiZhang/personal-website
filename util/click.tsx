export const smoothClickNav = (id: string) => {
  const targetElement = document.getElementById(id);
  targetElement?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

export const toggleActive = (query: string) => {
  document.querySelector(".active")?.classList.toggle("active");
  document.querySelector(query)?.classList.toggle("active");
};

export const toggleSection = (sectionId: string) => {
  const targetSection = document.querySelector(`section #${sectionId}`);
  if (targetSection.style.display === "none") {
    targetSection.style.display = "block";
  } else {
    targetSection.style.display = "none";
  }
};
