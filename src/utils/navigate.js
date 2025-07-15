const goToSection = (id) => {
  const section = document.getElementById(id);
  section &&
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
};

export default goToSection;
