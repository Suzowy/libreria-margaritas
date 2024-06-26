import { provideServerRendering } from '@angular/platform-server';
import { APP_BASE_HREF } from '@angular/common';

export const config = [
  provideServerRendering(),
  { provide: APP_BASE_HREF, useValue: '/' }
];

