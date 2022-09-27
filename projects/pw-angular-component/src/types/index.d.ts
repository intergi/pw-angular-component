// types/index.ts
export {};

declare global {
  interface Window {
    ramp: any;
    _pwRampComponentLoaded: boolean;
  }
}