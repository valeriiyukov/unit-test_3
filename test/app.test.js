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
