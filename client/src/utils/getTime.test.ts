import getTime from "./getTime";

it('Should return time', () => {
  const date = getTime("2021-04-30T11:53:21.000Z");
  expect(date).toBe('11:53:21');
})