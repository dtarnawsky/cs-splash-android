import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent implements OnInit {
  constructor() {
    setTimeout(async () => {
      await SplashScreen.hide();
      await StatusBar.show();
      await StatusBar.setOverlaysWebView({ overlay: false });
    }, 5000);
  }

  async ngOnInit() {
    await StatusBar.setOverlaysWebView({ overlay: true });
    await StatusBar.hide();
  }
}
