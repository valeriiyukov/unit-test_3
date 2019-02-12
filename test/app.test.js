import fetchData from '../src/js/http';
import getLevel from '../src/js/app';


jest.mock('../src/js/http');


beforeEach(() => {
  jest.resetAllMocks();
});

test('should call getLevel once', () => {
  fetchData.mockReturnValue(JSON.stringify({}));
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('should return level', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 1 });
  getLevel(1);
  expect(getLevel(1)).toBe('Ваш текущий уровень: 1');
});

test('should return level status error', () => {
  fetchData.mockReturnValue({ status: 'error', level: 1 });
  getLevel(1);
  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});
