export const scrollToElement = (id: string) => {
  const currentID = id === 'apartment' ? 'tips' : id;
  const element = document.getElementById(currentID);
  if (element) {
    const top = element.getBoundingClientRect().top + window.pageYOffset - 20;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};
