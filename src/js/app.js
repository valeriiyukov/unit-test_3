const characters = [
  { name: 'Маг', health: 90 },
];

export default function getHealthStatus(character) {
  let healthStatus = '';
  for (const char of character) {
    const { health } = char;
    if (health > 50) {
      healthStatus = 'healthy';
    } else if (health <= 50 && health >= 15) {
      healthStatus = 'wounded';
    } else {
      healthStatus = 'critical';
    }
  }
  return healthStatus;
}

console.log(getHealthStatus(characters));
