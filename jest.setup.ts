import "@testing-library/jest-dom";

// Mock next-intl
jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
  useLocale: () => "en",
}));

jest.mock("next-intl/server", () => ({
  getTranslations: async () => (key: string) => key,
  getLocale: async () => "en",
}));

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {
    return null;
  }
  disconnect() {
    return null;
  }
  unobserve() {
    return null;
  }
} as unknown as typeof IntersectionObserver;

// Mock Request/Headers for NextRequest
global.Request = class Request {
  url: string;
  headers: Headers;

  constructor(url: string | URL, options: RequestInit = {}) {
    this.url = typeof url === "string" ? url : url.toString();
    this.headers = (options.headers as Headers) || new Headers();
  }
} as unknown as typeof Request;

global.Headers = class Headers {
  private _headers: Record<string, string> = {};

  constructor() {
    this._headers = {};
  }

  get(name: string): string | null {
    return this._headers[name.toLowerCase()] || null;
  }

  set(name: string, value: string): void {
    this._headers[name.toLowerCase()] = value;
  }
} as unknown as typeof Headers;
