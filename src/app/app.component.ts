import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationCancel} from '@angular/router';
import {SettingsService} from '@youdrive/services/settings.service';

const getSessionStorage = (key: any) => {
  return sessionStorage.getItem(key);
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private appLoaded = false;

  constructor(private settingsService: SettingsService,
              private router: Router,
              private route: ActivatedRoute, ) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe((queryParams) => {
        if (queryParams.theme) {
          this.settingsService.setTheme(queryParams.theme);
        }
        else {
          this.settingsService.setTheme(getSessionStorage('--app-theme'));
        }

        if (queryParams.sidebar) {
          this.settingsService.setSideBar(queryParams.sidebar);
        }
        else {
          this.settingsService.setSideBar(getSessionStorage('--app-theme-sidebar'));
        }

        if (queryParams.header) {
          this.settingsService.setHeader(queryParams.header);
        }
        else {
          this.settingsService.setHeader(getSessionStorage('--app-theme-header'));
        }
      });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {

      }
      if (event instanceof NavigationEnd) {
        if (!this.appLoaded) {
          (window as any).appBootstrap();
          this.appLoaded = true;
        }
      }
      if (event instanceof NavigationCancel) {
      }
    });
  }
}
