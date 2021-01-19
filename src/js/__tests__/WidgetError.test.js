import checkValidity from '../functions/checkValidity';

test('Валидный номер', () => {
  const received = checkValidity('51.50851, -0.12572');
  expect(received).toEqual(['51.50851, -0.12572']);
});

test('Не валидный номер', () => {
  const received = checkValidity('asdsddf, lkjdhsd');
  expect(received).toBe(null);
});
