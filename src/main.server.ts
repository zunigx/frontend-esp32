import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
// import type { BootstrapContext } from '@angular/platform-server';

export default async function bootstrap(context: any) {
  return await bootstrapApplication(
    AppComponent,
    {
      providers: [
        ...appConfig.providers,
        provideServerRendering()
      ]
    },
    context // Pass the context here!
  );
}
