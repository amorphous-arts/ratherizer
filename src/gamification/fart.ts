
/**
 * Add fart sound on hover to card, and on Choose Meal click
 * Don't ask lol
 */
export function addFartSound() {
  const audio = new Audio('https://cdn.jsdelivr.net/gh/amorphous-arts/ratherizer/assets/audio/fart.mp3');
  document.body.appendChild(audio);

  document.addEventListener('mouseover', (e: MouseEvent) => {
    if((e.target as HTMLElement).classList.contains('ingredient-container')) {
      audio.volume = 0.8
      audio.play();
    }
  });

  document.addEventListener('click', (e: MouseEvent) => {
    if((e.target as HTMLElement).classList.contains('btn')) {
      audio.volume = 1;
      audio.play();
    }
  });
}
