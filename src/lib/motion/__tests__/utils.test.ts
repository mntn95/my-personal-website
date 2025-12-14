import {
  getMotionDelay,
  getMotionFixedDelay,
  getMotionStagger,
} from "../utils";

describe("getMotionDelay", () => {
  it("should return object with delay property", () => {
    const result = getMotionDelay(0);
    expect(result).toEqual({ delay: 0 });
  });

  it("should calculate delay based on index and delay step", () => {
    const result = getMotionDelay(2, 0.1);
    expect(result).toEqual({ delay: 0.2 });
  });

  it("should include base delay in calculation", () => {
    const result = getMotionDelay(1, 0.1, 0.5);
    expect(result).toEqual({ delay: 0.6 });
  });

  it("should use default delay step of 0.1", () => {
    const result = getMotionDelay(3);
    expect(result.delay).toBeCloseTo(0.3, 5);
  });
});

describe("getMotionFixedDelay", () => {
  it("should return object with fixed delay", () => {
    const result = getMotionFixedDelay(0.5);
    expect(result).toEqual({ delay: 0.5 });
  });

  it("should handle zero delay", () => {
    const result = getMotionFixedDelay(0);
    expect(result).toEqual({ delay: 0 });
  });

  it("should handle large delay values", () => {
    const result = getMotionFixedDelay(2.5);
    expect(result).toEqual({ delay: 2.5 });
  });
});

describe("getMotionStagger", () => {
  it("should return stagger configuration object", () => {
    const result = getMotionStagger();
    expect(result).toEqual({ delayChildren: 0, staggerChildren: 0.1 });
  });

  it("should use custom delay step", () => {
    const result = getMotionStagger(0.2);
    expect(result).toEqual({ delayChildren: 0, staggerChildren: 0.2 });
  });

  it("should include base delay in configuration", () => {
    const result = getMotionStagger(0.1, 0.5);
    expect(result).toEqual({ delayChildren: 0.5, staggerChildren: 0.1 });
  });
});
