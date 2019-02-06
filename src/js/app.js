

const characters = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const sorting = (a, b) => b.health - a.health;

export default function sortArray() {
  return characters.sort(sorting);
}

console.log(sortArray(characters));
