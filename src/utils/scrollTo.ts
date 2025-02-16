export const scrollTo = (href: string) => {
  const section = document.getElementById(href);
  if (section) {
    const offset = 80; // Adjust this value as needed
    const elementPosition = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
  }
};