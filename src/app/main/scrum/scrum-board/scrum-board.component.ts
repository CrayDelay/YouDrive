import {Component, OnInit} from '@angular/core'
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'
import {ScrumFormService} from "../scrum-form.service"

@Component({
  selector: 'app-scrum-board',
  templateUrl: './scrum-board.component.html',
  styleUrls: ['./scrum-board.component.scss']
})
export class ScrumBoardComponent implements OnInit {

  public teamMembers = [
    {
      id: 1,
      name: 'Богдан Когутницький',
      avatar: 'assets/img/avatar/avatar2.jpg',
    },
    {
      id: 2,
      name: 'Test User 2',
      avatar: 'assets/img/avatar/avatar3.jpg',
    },
    {
      id: 3,
      name: 'Test User 3',
      avatar: 'assets/img/avatar/avatar6.jpg',
    },
    {
      id: 4,
      name: 'Test User 4',
      avatar: 'assets/img/avatar/avatar7.jpg',
    },
  ]
  public selectedId: number = null

  public boards = [
    {
        name: 'Список всіх замовлень',
        opened: true,
        tasks: [
            {
                userId: 1,
                description: 'Доставка продуктів з супермаркету',
            },
            {
                userId: 1,
                description: 'Забрати та доставити документи з офісу',
                important: true,
                urgent: true,
            },
            {
                userId: 2,
                description: 'Перевезення меблів до нового офісу',
            },
            {
                userId: 3,
                description: 'Доставка ліків з аптеки',
                important: true,
                urgent: true,
            },
            {
                userId: 1,
                description: 'Поїздка до аеропорту',
            },
            {
                userId: 2,
                description: 'Доставка будівельних матеріалів',
            },
            {
                userId: 3,
                description: 'Забрати посилку з пошти',
            },
            {
                userId: 1,
                description: 'Доставка замовлення з ресторану',
            },
            {
                userId: 4,
                description: 'Перевезення офісної техніки',
            },
            {
                userId: 3,
                description: 'Доставка квітів до клієнта',
            },
        ]
    },
    {
        name: 'Подати менеджеру',
        opened: true,
        tasks: [
            {
                userId: 3,
                description: 'Перевезення великих домашніх тварин',
                important: true,
                urgent: true,
            },
            {
                userId: 4,
                description: 'Доставка корпоративних подарунків',
            },
        ]
    },
    {
        name: 'В РОБОТІ',
        opened: true,
        tasks: [
            {
                userId: 4,
                description: 'Транспортування обладнання для заходу',
            },
            {
                userId: 3,
                description: 'Доставка техніки на сервісне обслуговування',
                important: true,
                urgent: true,
            },
            {
                userId: 4,
                description: 'Поїздка на корпоративний захід',
                important: true,
                urgent: true,
            },
        ]
    },
    {
        name: 'НА ПЕРЕВІРЦІ',
        opened: true,
        tasks: [
            {
                userId: 2,
                description: 'Забрати та доставити подарункові набори',
                important: true,
                urgent: true,
            },
            {
                userId: 1,
                description: 'Перевірка стану авто перед тривалими поїздками',
            },
        ]
    },
    {
        name: 'ТЕСТ',
        opened: true,
        tasks: [
            {
                userId: 1,
                description: 'Тестування нового маршруту для швидкої доставки',
            },
        ]
    },
    {
        name: 'ЗАВЕРШЕНО',
        opened: true,
        tasks: [
            {
                userId: 1,
                description: 'Доставка квитків на концерт',
            },
            {
                userId: 2,
                description: 'Перевезення спортінвентарю на змагання',
            },
            {
                userId: 3,
                description: 'Забрати та доставити замовлення з інтернет-магазину',
            },
            {
                userId: 4,
                description: 'Перевезення офісних меблів',
            },
            {
                userId: 3,
                description: 'Термінова доставка документів',
            },
            {
                userId: 3,
                description: 'Доставка нового обладнання',
            }
        ]
    }
]


  public modalTrigger
  public modalOpened: boolean = true

  constructor(private scrumFormService: ScrumFormService) {
  }

  ngOnInit(): void {
  }

  onSelectMember(id) {
    if (this.selectedId !== id) {
      this.selectedId = id
    }
    else {
      this.selectedId = null
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    }
    else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex)
    }
  }

  getUserAvatarById(id) {
    const member = this.teamMembers.find(member => member.id === id)
    return member.avatar
  }

  onToggleColumn(index) {
    this.boards[index].opened = !this.boards[index].opened
  }

  onToggleModal(bool) {
    this.modalOpened = bool
  }

  onCreate() {
    this.scrumFormService.open(null).afterClosed().subscribe(() => {

    })
  }

  onView() {
    this.scrumFormService.openEdit().afterClosed().subscribe(() => {

    })
  }
}
