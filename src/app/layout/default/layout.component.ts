import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {defaultRouterTransition, MenuType} from '../../../@youdrive';
import {SettingsService} from '../../../@youdrive';
import {AppMenuService} from '../../../@youdrive';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    defaultRouterTransition,
  ],
})
export class LayoutComponent implements OnInit, OnDestroy {
  private readonly onDestroy = new Subject<void>();

  public mainSidebarOpts = {
    breakpoint: 'md',
    opened: true,
    hoverAble: true,
    mode: 'side',
    toggleableBtn: false,
    size: 'sideBar1',
  };
  public miniSidebarOpts = {};
  public settingsVisible = false;
  public searchVisible = false;
  public lockScreenVisible = false;

  public menu: Array<MenuType> = [
    {
      groupName: 'АДМІНІСТРУВАННЯ',
      opened: false,
      children: [
        {
          name: 'Адмін панель',
          url: '/app/dashboard/default',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
        },
        {
          name: 'Аналітика ресурсу',
          url: '/app/dashboard/analytics',
          prefix: {
            type: 'ibm-icon',
            name: 'activity',
          },
        },
        /*{
          name: 'Stocks / crypto',
          url: '/app/dashboard/crypto',
          prefix: {
            type: 'ibm-icon',
            name: 'analytics',
          },
          suffix: {
            type: 'badge',
            level: 'default',
            text: '!',
          },
        },*/
      ],
    },
    {
      groupName: 'МОДЕРУВАННЯ',
      opened: false,
      children: [
        {
          name: 'Scrum дошка',
          prefix: {
            type: 'ibm-icon',
            name: 'dashboardReference',
          },
          url: '/app/scrum-board',
        },
        {
          name: 'Задачі',
          prefix: {
            type: 'ibm-icon',
            name: 'task',
          },
          suffix: {
            type: 'badge',
            level: 'danger',
            text: 3,
          },
          url: '/app/tasks',
        },
        {
          name: 'Договори',
          prefix: {
            type: 'ibm-icon',
            name: 'folder',
          },
          url: '/app/file-manager',
        },
        {
          name: 'Пошта',
          prefix: {
            type: 'ibm-icon',
            name: 'email',
          },
          suffix: {
            type: 'badge',
            level: 'success',
            text: 'NEW',
          },
          url: '/app/mail',
        },
        {
          name: 'Повідомлення',
          prefix: {
            type: 'ibm-icon',
            name: 'sendAlt',
          },
          url: '/app/messages',
        }
      ]
    },
    {
      groupName: 'Персональний кабінет',
      opened: false,
      children: [
        {
          name: 'Налаштування',
          prefix: {
            type: 'ibm-icon',
            name: 'edit',
          },
          url: '/app/user/settings',
        },
        {
          name: 'Billing',
          prefix: {
            type: 'ibm-icon',
            name: 'money',
          },
          url: '/app/user/billing',
        },
        {
          name: 'Картки',
          prefix: {
            type: 'ibm-icon',
            name: 'purchase',
          },
          url: '/app/user/creditcard',
        },
        {
          name: 'Транзакції',
          prefix: {
            type: 'ibm-icon',
            name: 'printer',
          },
          url: '/app/user/transactions',
        },
      ]
    },
    {
      groupName: 'ЗАМОВЛЕННЯ',
      opened: false,
      children: [
        {
          name: 'Історія замовлень',
          prefix: {
            type: 'ibm-icon',
            name: 'faceActivated',
          },
          url: '/app/profile',
        },
        {
          name: 'Деталі доставки',
          prefix: {
            type: 'ibm-icon',
            name: 'faceActivated',
          },
          url: '/app/profile',
        },
        {
          name: 'Профайл водія',
          prefix: {
            type: 'ibm-icon',
            name: 'faceActivated',
          },
          url: '/app/profile',
        },
        {
          name: 'Відслідковування',
          prefix: {
            type: 'ibm-icon',
            name: 'alarm',
          },
          url: '/app/timeline',
        },
        {
          name: 'Ордер замовлення',
          prefix: {
            type: 'ibm-icon',
            name: 'document',
          },
          url: '/app/invoice',
        },
      ]
    },
        /*{
          name: 'User',
          parentUrl: '/app/user',
          prefix: {
            type: 'ibm-icon',
            name: 'userAvatar',
          },
          children: [
            {
              name: 'Settings',
              url: '/app/user/settings',
            },
            {
              name: 'Billing',
              url: '/app/user/billing',
            },
            {
              name: 'Creditcard',
              url: '/app/user/creditcard',
            },
            {
              name: 'Transactions',
              url: '/app/user/transactions',
            },
          ]
        },*/

/*        {
          name: 'Web application',
          parentUrl: '/app/application',
          prefix: {
            type: 'ibm-icon',
            name: 'application',
          },
          children: [
            {
              name: 'Welcome',
              url: '/app/application/welcome',
            },
            {
              name: 'Getting started',
              url: '/app/application/getting-started',
            },
            {
              name: 'FAQ',
              url: '/app/application/faq',
            },
            {
              name: 'Documentation',
              url: '/app/application/manual',
            },
            {
              name: 'Support',
              url: '/app/application/support',
            },
            {
              name: 'Changelog',
              url: '/app/application/changelog',
            },
          ]
        },*/
        /*{
          name: 'Auth',
          prefix: {
            type: 'ibm-icon',
            name: 'userAdmin',
          },
          children: [
            {
              name: 'Sign In',
              children: [
                {
                  name: 'Style #1',
                  url: '/auth/modern/signin'
                },
                {
                  name: 'Style #2',
                  url: '/auth/full/signin'
                },
                {
                  name: 'Style #3',
                  url: '/auth/full-middle/signin'
                },
                {
                  name: 'Style #4',
                  url: '/auth/basic/signin'
                }
              ]
            },
            {
              name: 'Sign Up',
              children: [
                {
                  name: 'Style #1',
                  url: '/auth/modern/signup'
                },
                {
                  name: 'Style #2',
                  url: '/auth/full/signup'
                },
                {
                  name: 'Style #3',
                  url: '/auth/full-middle/signup'
                },
                {
                  name: 'Style #4',
                  url: '/auth/basic/signup'
                }
              ]
            },
            {
              name: 'Book a demo',
              url: '/auth/book-a-demo',
              suffix: {
                type: 'badge',
                level: 'danger',
                text: 'HOT',
              },
            },
            {
              name: 'Confirmation',
              url: '/auth/confirmation',
              children: [
                {
                  name: 'Style #1',
                  url: '/auth/modern/confirmation'
                },
                {
                  name: 'Style #2',
                  url: '/auth/full/confirmation'
                },
                {
                  name: 'Style #3',
                  url: '/auth/full-middle/confirmation'
                },
                {
                  name: 'Style #4',
                  url: '/auth/basic/confirmation'
                }
              ]
            },

            {
              name: 'Forgot password',
              children: [
                {
                  name: 'Style #1',
                  url: '/auth/modern/forgot-password'
                },
                {
                  name: 'Style #2',
                  url: '/auth/full/forgot-password'
                },
                {
                  name: 'Style #3',
                  url: '/auth/full-middle/forgot-password'
                },
                {
                  name: 'Style #4',
                  url: '/auth/basic/forgot-password'
                }
              ]
            },
            {
              name: 'Reset password',
              children: [
                {
                  name: 'Style #1',
                  url: '/auth/modern/reset-password'
                },
                {
                  name: 'Style #2',
                  url: '/auth/full/reset-password'
                },
                {
                  name: 'Style #3',
                  url: '/auth/full-middle/reset-password'
                },
                {
                  name: 'Style #4',
                  url: '/auth/basic/reset-password'
                }
              ]
            },
            {
              name: 'Lock screen',
              callback: 'lock',
            },
          ]
        },*/
        /*{
          name: 'Pricing',
          parentUrl: '/app/pricing',
          prefix: {
            type: 'ibm-icon',
            name: 'money',
          },
          children: [
            {
              name: 'Startup',
              url: '/app/pricing/modern',
            },
            {
              name: 'Corporate',
              url: '/app/pricing/table',
            },
            {
              name: 'Basic',
              url: '/app/pricing/simple',
            },
          ]
        },*/




    {
    groupName: 'ПІДТРИМКА',
    opened: false,
    children: [
        {
          name: 'Підписка',
          prefix: {
            type: 'ibm-icon',
            name: 'money',
          },
          url: '/app/pricing/simple',
        },
        {
          name: 'ПІДТРИМКА',
          prefix: {
            type: 'ibm-icon',
            name: 'money',
          },
          url: '/app/application/support',
        },




       /* {
          name: 'Search result',
          prefix: {
            type: 'ibm-icon',
            name: 'imageSearch',
          },
          url: '/app/search-result',
        },*/
       /* {
          name: 'Coming soon',
          prefix: {
            type: 'ibm-icon',
            name: 'inProgress',

          },
          children: [
            {
              name: 'Style #1',
              url: '/auth/coming-soon/modern'
            },
            {
              name: 'Style #2',
              url: '/auth/coming-soon/full'
            },
            {
              name: 'Style #3',
              url: '/auth/coming-soon/full-middle'
            },
            {
              name: 'Style #4',
              url: '/auth/coming-soon/basic'
            }
          ]
        },*/
       /* {
          name: 'Maintenance',
          prefix: {
            type: 'ibm-icon',
            name: 'hourglass',
          },
          url: '/app/maintenance',
        },*/
        /*{
          name: 'Errors',
          prefix: {
            type: 'ibm-icon',
            name: 'error',
          },
          suffix: {
            type: 'badge',
            level: 'danger',
            text: 2,
          },
          children: [
            {
              name: '404',
              url: '/app/errors/404',
            },
            {
              name: '500',
              url: '/app/errors/500',
            },
          ]
        },*/
        {
          name: 'Starters',
          parentUrl: '/app/starters',
          prefix: {
            type: 'ibm-icon',
            name: '3dCursorAlt',
          },
          children: [
            {
              name: 'Full width',
              parentUrl: '/app/starters/full-width',
              children: [
                {
                  name: 'Basic',
                  url: '/app/starters/full-width/basic'
                },
                {
                  name: 'Header',
                  url: '/app/starters/full-width/header'
                },
                {
                  name: 'Tabs',
                  url: '/app/starters/full-width/tabs'
                }
              ]
            },
            {
              name: 'Left sidebar',
              parentUrl: '/app/starters/left-sidebar',
              children: [
                {
                  name: 'Basic',
                  url: '/app/starters/left-sidebar/basic'
                },
                {
                  name: 'Header',
                  url: '/app/starters/left-sidebar/header'
                },
                {
                  name: 'Tabs',
                  url: '/app/starters/left-sidebar/tabs'
                }
              ]
            },
            {
              name: 'Right sidebar',
              parentUrl: '/app/starters/right-sidebar',
              children: [
                {
                  name: 'Basic',
                  url: '/app/starters/right-sidebar/basic'
                },
                {
                  name: 'Header',
                  url: '/app/starters/right-sidebar/header'
                },
                {
                  name: 'Tabs',
                  url: '/app/starters/right-sidebar/tabs'
                }
              ]
            },
            {
              name: 'Application',
              parentUrl: '/app/starters/application',
              children: [
                {
                  name: 'Basic',
                  url: '/app/starters/application/basic'
                },
                {
                  name: 'Advanced',
                  url: '/app/starters/application/advanced'
                },
                {
                  name: 'Complex',
                  url: '/app/starters/application/complex'
                }
              ]
            },
          ]
        }
      ]
    },
    {
      groupName: 'Компоненти',
      opened: false,
      children: [
        {
          name: 'UI components',
          url: '/app/ui-components',
          prefix: {
            type: 'ibm-icon',
            name: 'view',
          },
        },
        {
          name:'Карта',
          url:'/app/map',
          prefix:{
            type:'ibm-icon',
            name:'Chart choropleth-map'
          }
        },

        {
          name: 'Widgets',
          prefix: {
            type: 'ibm-icon',
            name: 'phraseSentiment',
          },
          parentUrl: '/app/widgets',
          children: [
            {
              name: 'General',
              url: '/app/widgets/general',
              suffix: {
                type: 'badge',
                level: 'default',
                text: '!',
              },
            },
            {
              name: 'Cards',
              url: '/app/widgets/cards',
            },
            {
              name: 'Lists',
              url: '/app/widgets/lists',
            },
          ]
        },
        {
          name: 'Tables',
          parentUrl: '/app/tables',
          prefix: {
            type: 'ibm-icon',
            name: 'tableSplit',
          },
          children: [
            {
              name: 'Basic',
              url: '/app/tables/basic',
            },
            {
              name: 'Advanced',
              url: '/app/tables/advanced',
            },
            {
              name: 'Full Datagrid',
              url: '/app/tables/full',
              suffix: {
                type: 'badge',
                level: 'danger',
                text: 'HOT',
              },
            },
          ]
        },
        {
          name: 'Forms',
          prefix: {
            type: 'ibm-icon',
            name: 'textCreation',
          },
          parentUrl: '/app/forms',
          children: [
            {
              name: 'General',
              url: '/app/forms/general',
            },
            {
              name: 'Advanced',
              url: '/app/forms/advanced',
            },
            {
              name: 'Validation & Layouts',
              url: '/app/forms/validation',
            },
            {
              name: 'Wizard',
              url: '/app/forms/wizard',
            },
          ]
        },
        {
          name: 'Charts',
          url: '/app/charts',
          prefix: {
            type: 'ibm-icon',
            name: 'chartColumn',
          },
        },
        /*{
          name: 'Icons',
          url: '/app/icons',
          prefix: {
            type: 'ibm-icon',
            name: 'magicWand',
          },
        },
        {
          name: 'Typography',
          url: '/app/typography',
          prefix: {
            type: 'ibm-icon',
            name: 'textTracking',
          },
        }*/
      ]
    },
/*    {
      groupName: 'Menu features',
      opened: true,
      children: [
        {
          name: 'Badge number',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
          suffix: {
            type: 'badge',
            level: 'danger',
            text: 2,
          },
        },
        {
          name: 'Badge text',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
          suffix: {
            type: 'badge',
            level: 'success',
            text: 'Updated',

          },
        },
        {
          name: 'Disabled Item',
          disabled: true,
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
        },
        {
          name: 'Disabled Group',
          disabled: true,
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
          children: []
        },
        {
          name: 'Disabled Subitem',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
          children: [
            {
              name: 'Disabled Item',
              disabled: true,
            }
          ]
        },
        {
          name: 'Looooong Menu item, with loooong menu item',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
        },
        {
          name: 'Menu item',
          subtitle: 'with subtitle',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
          children: [
            {
              name: 'Subitem',
            },
          ]
        },
        {
          name: 'Menu item',
          subtitle: 'with subtitle',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
        },
        {
          name: 'Menu item',
          subtitle: 'with long subtitle, with long subtitle, with log subtitle',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
        },
      ]
    },*/
  ];

  constructor(private settingsService: SettingsService,
              private appMenuService: AppMenuService) {
  }

  ngOnInit(): void {
    this.appMenuService
      .$callbackClick
      .pipe(takeUntil(this.onDestroy))
      .subscribe((params) => {
        if (params === 'lock') {
          this.lockScreenVisible = true;
        }
      });
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
  }

  onMiniSidebarItemClick(event: any): void {
    if (event.key === 'theme') {
      this.settingsVisible = !this.settingsVisible;
    }
    if (event.key === 'search') {
      this.searchVisible = true;
    }
  }

  onToggleThemeSettings(): void {
    this.settingsVisible = true;
  }

  onSideBarOpen(event: any): void {
    this.mainSidebarOpts.opened = true;
  }

  onSideBarToggle(event: any): void {
    this.mainSidebarOpts.opened = !this.mainSidebarOpts.opened;
  }

  onCloseSettings(event: any): void {
    this.settingsVisible = false;
  }

  onSearchClose(event: any): void {
    this.searchVisible = false;
  }

  onLockClose(event: any): void {
    this.lockScreenVisible = false;
  }

  onCloseSidebar(): void {
    this.mainSidebarOpts.opened = false;
  }

  onVisibilityChange(event: any): void{
    this.mainSidebarOpts.opened = event;
  }
}
