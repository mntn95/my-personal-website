import { NextRequest } from "next/server";
import { getClientIP } from "../request";

// Mock NextRequest
const createMockRequest = (headers: Headers) => {
  return {
    headers: {
      get: (name: string) => headers.get(name),
    },
  } as NextRequest;
};

describe("getClientIP", () => {
  it("should extract IP from x-forwarded-for header", () => {
    const headers = new Headers();
    headers.set("x-forwarded-for", "192.168.1.1");
    const request = createMockRequest(headers);

    expect(getClientIP(request)).toBe("192.168.1.1");
  });

  it("should handle comma-separated IPs in x-forwarded-for", () => {
    const headers = new Headers();
    headers.set("x-forwarded-for", "192.168.1.1, 10.0.0.1");
    const request = createMockRequest(headers);

    expect(getClientIP(request)).toBe("192.168.1.1");
  });

  it("should fallback to x-real-ip when x-forwarded-for is missing", () => {
    const headers = new Headers();
    headers.set("x-real-ip", "192.168.1.2");
    const request = createMockRequest(headers);

    expect(getClientIP(request)).toBe("192.168.1.2");
  });

  it("should fallback to cf-connecting-ip when other headers are missing", () => {
    const headers = new Headers();
    headers.set("cf-connecting-ip", "192.168.1.3");
    const request = createMockRequest(headers);

    expect(getClientIP(request)).toBe("192.168.1.3");
  });

  it('should return "unknown" when no IP headers are present', () => {
    const headers = new Headers();
    const request = createMockRequest(headers);

    expect(getClientIP(request)).toBe("unknown");
  });

  it("should prioritize x-forwarded-for over other headers", () => {
    const headers = new Headers();
    headers.set("x-forwarded-for", "192.168.1.1");
    headers.set("x-real-ip", "192.168.1.2");
    headers.set("cf-connecting-ip", "192.168.1.3");
    const request = createMockRequest(headers);

    expect(getClientIP(request)).toBe("192.168.1.1");
  });
});
