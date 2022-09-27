/*
 * Public API Surface of pw-angular-component
 */

declare global {
    interface Window {
      ramp: any;
      _pwRampComponentLoaded: boolean;
    }
  }

export * from './lib/my-lib.service';
export * from './lib/my-lib.component';
export * from './lib/my-lib.module';

export * from './lib/ramp/ramp.component';
export * from './lib/ramp/ramp.module';

export * from './lib/core/core.module';