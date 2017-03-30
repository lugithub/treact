import bar from '../src/bar';
import add from '../src/foo';
jest.mock('../src/bar');

describe('add', () => {
  beforeEach(() => {
  });

  it('should return 5', () => {
    expect(add(2, 3)).toBe(5)
  });

  it('should call bar', () => {
    expect(bar).toBeCalledWith(2, 3);
  });

  it('should mock bar', () => {
    bar.mockReturnValueOnce(1)
    .mockReturnValueOnce(2);

    expect(bar()).toBe(1);
    expect(bar()).toBe(2);
  })
});

const myMockFn = jest.fn().mockReturnThis()
  .mockImplementationOnce(value => value * 100)
  .mockImplementationOnce(value => value * 1000);

const my = {
    myMethod: myMockFn
};

console.log(myMockFn(1));
console.log(myMockFn(2));
console.log(my.myMethod(3));
