import GameSavingLoader from '../gameSavingLoader';

test('checking return promise', () => GameSavingLoader.load().then((data) => {
  expect(data).toEqual({
    created: 1546300800,
    id: 9,
    userInfo: {
      id: 1, level: 10, name: 'Hitman', points: 2000,
    },
  });
}));
