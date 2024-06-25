import {Component, OnInit, ViewChild} from '@angular/core'
import {AppTasksComponent} from "../../../../@youdrive"


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @ViewChild('appTasksList', {static: true}) appTasksList: AppTasksComponent

  public taskGroups = [
    {
        groupName: 'Графік доставки на понеділок',
        id: 'sadas',
        opened: true,
        tasks: [
            {
                description: 'Перевірка стану технічного обслуговування транспортних засобів',
                id: 'sadasdas',
                level: 1,
                checked: false,
                priority: 'high',
            },
            {
                description: 'Оновлення маршрутів доставки для нових адрес',
                level: 1,
                id: 'sadassdfsdfsdfdsdas',
                checked: true,
                priority: 'high',
            },
            {
                description: 'Поповнення запасів необхідних матеріалів у транспортному засобі',
                level: 1,
                id: 'sadassdfsddfsdfdsdas',
                checked: false,
            },
            {
                description: 'Перевірка повноти документації доставки',
                id: 'sadassdfsddfdasdsasdasdfdsdas',
                checked: false,
                priority: 'low',
            },
            {
                description: 'Переконатися, що всі посилки надійно завантажені',
                id: 'sadassdfsddfdasdssdsdfsasdasdfdsdas',
                checked: false,
            },
            {
                description: 'Підтвердження часу доставки з клієнтами',
                id: 'sadassdfsddfdasdssdsdfsas2dasdfdsdas',
                checked: false,
            },
            {
                description: 'Перегляд відгуків про доставку за минулий тиждень',
                id: 'sadassdfsddfdasdssds1dfsasdasdfdsdas',
                checked: true,
                priority: 'low',
            },
            {
                description: 'Підготовка транспортного засобу до дальніх маршрутів',
                id: 'sadassdfsddfdasds2sdsdfsasdasdfdsdas',
                checked: true,
                priority: 'high',
            }
        ]
    },
    {
        groupName: 'Огляд технічного обслуговування автопарку у вівторок',
        id: 'sadas2',
        opened: true,
        tasks: [
            {
                description: 'Проведення інспекції безпеки всіх вантажівок',
                level: 1,
                id: 'sadassdfsddfd2asdssdsdfsasdasdfdsdas',
                checked: false,
            },
            {
                description: 'Оновлення журналів технічного обслуговування останніми ремонтами',
                level: 1,
                id: 'sadfd2asdssdsdfsasdasdfdsdas',
                checked: true,
                priority: 'low',
            },
            {
                description: 'Вирішення проблем з двигуном у транспортному засобі 12',
                level: 1,
                id: 'sasdssdsdfsasdasdfdsdas',
                checked: true,
                priority: 'high',
            },
            {
                description: 'Перевірка тиску в шинах всіх транспортних засобів автопарку',
                level: 1,
                id: 'sasdssdsdf5sasdasdfdsdas',
                checked: false,
            },
            {
                description: 'Планування наступного планового технічного обслуговування',
                level: 1,
                id: 'sasdssdsd5454f5sasdasdfdsdas',
                checked: false,
            },
            {
                description: 'Оновлення програмного забезпечення управління автопарком',
                level: 1,
                id: 'dffddsffsd',
                checked: true,
                priority: 'high',
            }
        ]
    },
    {
        groupName: 'Підготовка до доставки у середу',
        id: 'sadas22',
        opened: true,
        tasks: [
            {
                description: 'Організація графіка доставки для нових клієнтів',
                level: 1,
                id: 'sadassdfsddfd2asdssdsdfsasdasdfdsd2as',
                checked: false,
            },
            {
                description: 'Координація з постачальниками для оновлення запасів',
                level: 1,
                id: 'sadfd2asdssdsdfsasdasdfdsda2s',
                checked: true,
                priority: 'high',
            },
            {
                description: 'Перевірка GPS систем у всіх вантажівках',
                level: 1,
                id: 'sasdssdsdfsasdasd3fdsdas',
                checked: true,
                priority: 'high',
            },
            {
                description: 'Підготовка рахунків-фактур для майбутніх доставок',
                level: 1,
                id: 'sasdssdsdf5sasdas4dfdsdas',
                checked: true,
                priority: 'high',
            },
            {
                description: 'Огляд продуктивності доставки за минулий місяць',
                level: 1,
                id: 'sasdssdsd5454f5sasda5sdfdsdas',
                checked: true,
                priority: 'high',
            }
        ]
    }
]

public tags = [
    {
        name: 'Доставка',
        active: true,
        bg: 'app-bg-success',
    },
    {
        name: 'Автопарк',
        bg: 'app-bg-success-lt-10',
    },
    {
        name: 'Технічне обслуговування',
        bg: 'app-bg-success-lt-20',
    },
    {
        name: 'Планування',
        bg: 'app-bg-success-lt-20',
    },
    {
        name: 'Логістика',
        bg: 'app-bg-success-lt-30',
    },
    {
        name: 'Проблеми',
        bg: 'app-bg-warning',
    },
    {
        name: 'Покращення',
        bg: 'app-bg-info',
    },
    {
        name: 'Інше',
        bg: 'app-bg-success-lt-40',
    },
]

public users = [
    {
        avatar: 'assets/img/avatar/avatar2.jpg',
        name: 'Джон Белінда',
        text: 'Затримка доставки через неочікуваний трафік',
        date: '5 хвилин тому',
    },
    {
        avatar: 'assets/img/avatar/avatar3.jpg',
        name: 'Рета Коллен',
        text: 'Запит на додатковий транспортний засіб для доставки',
        date: '1 годину тому',
    },
    {
        avatar: 'assets/img/avatar/avatar6.jpg',
        name: 'Елізабет Мозель',
        text: 'Оновлення процедур обробки посилок',
        date: '5 годин тому',
    },
    {
        avatar: 'assets/img/avatar/avatar7.jpg',
        name: 'Меріс Роб',
        text: 'Проблеми з GPS трекінгом у вантажівці 4',
        date: '1 день тому',
    },
    {
        avatar: 'assets/img/avatar/avatar8.jpg',
        name: 'Адоре Морган',
        text: 'Розбіжності у журналах доставки за минулий тиждень',
        date: '3 дні тому',
    }
]


  public archives = [
    {
      name: '2024-Q2',
    },
    {
      name: '2023-Q1',
    },
    {
      name: '2022-Q4',
    },
    {
      name: '2021-Q3',
    },
  ]

  public txtSearch: string = ''
  public leftSidebarVisibility: boolean = true

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddList() {
    this.appTasksList.addGroup()
  }

  onMinimize() {
    this.appTasksList.minimize()
  }

  onMaximize() {
    this.appTasksList.maximize()
  }

  onSearchChange(event) {
    this.txtSearch = event
  }

  onToggleLeftSidebar() {
    this.leftSidebarVisibility = !this.leftSidebarVisibility
  }
}
