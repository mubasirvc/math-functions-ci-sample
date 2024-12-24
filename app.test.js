const { add, subtract } = require('./app');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
});


// Testing add function with negative numbers
test('adds -1 + -2 to equal -3', () => {
    expect(add(-1, -2)).toBe(-3);
});

test('adds -1 + 5 to equal 4', () => {
    expect(add(-1, 5)).toBe(4);
});

// Testing add function with zero
test('adds 0 + 0 to equal 0', () => {
    expect(add(0, 0)).toBe(0);
});

test('adds 0 + 7 to equal 7', () => {
    expect(add(0, 7)).toBe(7);
});

// Testing subtract function with negative numbers
test('subtracts -5 - (-3) to equal -2', () => {
    expect(subtract(-5, -3)).toBe(-2);
});

test('subtracts -3 - 5 to equal -8', () => {
    expect(subtract(-3, 5)).toBe(-8);
});

// Testing subtract function with zero
test('subtracts 0 - 0 to equal 0', () => {
    expect(subtract(0, 0)).toBe(0);
});

test('subtracts 5 - 0 to equal 5', () => {
    expect(subtract(5, 0)).toBe(5);
});

test('subtracts 0 - 7 to equal -7', () => {
    expect(subtract(0, 7)).toBe(-7);
});
