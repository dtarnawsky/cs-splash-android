import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cs.splash.android',
  appName: 'cs-splash-android',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {      
      splashFullScreen: true,
      splashImmersive: true,
      launchAutoHide: false,
    }
  }
};

export default config;
