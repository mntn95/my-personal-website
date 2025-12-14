import {
  getAnimationDelay,
  getAnimationDelayString,
  getFixedAnimationDelay,
} from "../animation";

describe("getAnimationDelay", () => {
  it("should return CSS properties with animation delay", () => {
    const result = getAnimationDelay(0);
    expect(result).toEqual({ animationDelay: "0s" });
  });

  it("should calculate delay based on index and delay step", () => {
    const result = getAnimationDelay(2, 0.1);
    expect(result).toEqual({ animationDelay: "0.2s" });
  });

  it("should include base delay in calculation", () => {
    const result = getAnimationDelay(1, 0.1, 0.5);
    expect(result).toEqual({ animationDelay: "0.6s" });
  });

  it("should use default delay step of 0.1", () => {
    const result = getAnimationDelay(3);
    expect(result.animationDelay).toMatch(/0\.3.*s/);
  });
});

describe("getAnimationDelayString", () => {
  it("should return delay as string", () => {
    expect(getAnimationDelayString(0)).toBe("0s");
  });

  it("should calculate delay based on index and delay step", () => {
    expect(getAnimationDelayString(2, 0.1)).toBe("0.2s");
  });

  it("should include base delay in calculation", () => {
    expect(getAnimationDelayString(1, 0.1, 0.5)).toBe("0.6s");
  });

  it("should use default delay step of 0.1", () => {
    expect(getAnimationDelayString(3)).toMatch(/0\.3.*s/);
  });
});

describe("getFixedAnimationDelay", () => {
  it("should return CSS properties with fixed delay", () => {
    const result = getFixedAnimationDelay(0.5);
    expect(result).toEqual({ animationDelay: "0.5s" });
  });

  it("should handle zero delay", () => {
    const result = getFixedAnimationDelay(0);
    expect(result).toEqual({ animationDelay: "0s" });
  });

  it("should handle large delay values", () => {
    const result = getFixedAnimationDelay(2.5);
    expect(result).toEqual({ animationDelay: "2.5s" });
  });
});
