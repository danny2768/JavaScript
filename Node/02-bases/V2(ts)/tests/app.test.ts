//# AAA -> Arrange, act & assert

describe("Test in the App file", () => {

  test("should be 3", () => {

    //# Arrange
    const num1 = 1;
    const num2 = 2;

    //# Act
    const result = num1 + num2;

    //# Assert
    expect(result).toBe(3);

  });

});
