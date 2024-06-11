import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-layout-mini-sidebar',
  templateUrl: './layout-mini-sidebar.component.html',
  styleUrls: ['./layout-mini-sidebar.component.scss']
})
export class LayoutMiniSidebarComponent implements OnInit {

  @Output() itemClick: EventEmitter<any> = new EventEmitter();

  public notifications = [
    {
      level: 'default',
      text: 'Водій Олена Сидоренко розпочала доставку №34567.',
      date: '15 хв',
    },
    {
      level: 'bug',
      text: 'Водій Максим Петровський перевищив допустиму швидкість під час доставки №89012.',
      date: '2 год',
    },
    {
      level: 'default',
      text: 'Доставка №78901 завершена та підписана клієнтом.',
      date: '3 год',
    },
    {
      level: 'bug',
      text: '**Увага:** Не вдалося звʼязатися з водієм для доставки №12345. Перегляньте призначення доставки.',
      date: '10 хв',
    },
    {
      level: 'default',
      text: '**Інформація:** Водій Іван Петренко успішно завершив доставку №56789.',
      date: '1 год',
    },
    {
      level: 'feature',
      text: '**Увага:** Затримка доставки №90123 на 30 хвилин через дорожній затор.',
      date: '2 год',
    },

  ];
  public messages = [
    {
      avatar: 'assets/img/avatar/avatar2.jpg',
      name: 'John Belinda',
      text: 'Cannot start service web: error while creating mount source path ',
      date: '5 mins ago',
      read: false,
    },
    // {
    //   avatar: 'assets/img/avatar/avatar3.jpg',
    //   name: 'Reta Collen',
    //   text: 'Automate the update of compose spec from docker-compose ',
    //   date: '1 hour ago',
    //   read: false,
    // },
    // {
    //   avatar: 'assets/img/avatar/avatar6.jpg',
    //   name: 'Elizabeth Mozelle',
    //   text: 'Add an option to config: entries to name the config by content hash',
    //   date: '5 hours ago',
    //   read: true,
    // },
    // {
    //   avatar: 'assets/img/avatar/avatar7.jpg',
    //   name: 'Marys Rob',
    //   text: 'Breaking Changes: Internal/External Secrets and Name/Label Problems with External Secrets',
    //   date: '1 day ago',
    //   read: true,
    // },
    // {
    //   avatar: 'assets/img/avatar/avatar8.jpg',
    //   name: 'Adoree Morgan',
    //   text: 'cpus value type in output of config command is not consistent in version 1.27.3 ',
    //   date: '3 days ago',
    //   read: true,
    // }
  ];

  public loading = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onItemClick(event: any): void {
    this.itemClick.next(event);
  }

  onFakeLoading(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

}
