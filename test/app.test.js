import getHealthStatus from '../src/js/app';

test('should return healthy', () => {
  const input = [
    { name: 'Маг', health: 90 },
  ];

  const expected = 'healthy';
  const received = getHealthStatus(input);
  expect(received).toBe(expected);
});

test('should return critical', () => {
  const input = [
    { name: 'Воин', health: 10 },
  ];

  const expected = 'critical';
  const received = getHealthStatus(input);
  expect(received).toBe(expected);
});

test('should return wounded', () => {
  const input = [
    { name: 'Лучник', health: 20 },
  ];

  const expected = 'wounded';
  const received = getHealthStatus(input);
  expect(received).toBe(expected);
});
