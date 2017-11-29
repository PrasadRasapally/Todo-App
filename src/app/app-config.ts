import { InjectionToken } from '@angular/core';
import { AppConfig } from './app-config-interface';
import { environment } from '../environments/environment';

export const TASK_DI_CONFIG: AppConfig = {
  apiEndpoint: environment.apiEndpoint
};

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');