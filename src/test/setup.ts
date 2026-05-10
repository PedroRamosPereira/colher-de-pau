import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverMock,
});

Object.defineProperty(globalThis, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverMock,
});

Object.defineProperty(window.HTMLElement.prototype, "scrollIntoView", {
  writable: true,
  value: vi.fn(),
});
