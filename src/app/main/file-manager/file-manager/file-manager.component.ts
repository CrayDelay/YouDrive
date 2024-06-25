import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {

  public folders = [
    {
      name: 'Контракти',
      files: 10,
      size: '2.2GB'
    },
    {
      name: 'Страховки',
      files: 2,
      size: '0.2GB'
    },
    {
      name: 'Паспортні дані',
      files: 15,
      size: '0.1GB'
    },
    {
      name: 'Фінансові звіти',
      files: 1,
      size: '1MB'
    }
  ];

  public files = [
    {
      name: 'Договір_оренди.pdf',
      accessed: '5 хвилин тому',
      size: '2KB',
    },
    {
      name: 'Страховка_авто.pdf',
      accessed: '1 годину тому',
      size: '16KB',
    },
    {
      name: 'Паспорт_водія.pdf',
      accessed: '6 годин тому',
      size: '101KB',
    },
    {
      name: 'Фінзвіт_2023.xlsx',
      accessed: '10 днів тому',
      size: '1MB',
    },
    {
      name: 'Дозвіл_на_роботу.pdf',
      accessed: '1 місяць тому',
      size: '178MB',
    },
    {
      name: 'Реєстрація_авто.pdf',
      accessed: '4 місяці тому',
      size: '13KB',
    }
  ];

  public filesMore = [
    {
      name: 'Інструкція_для_водіїв.pdf',
      accessed: '5 хвилин тому',
      size: '2.2GB',
    },
    {
      name: 'Графік_змін.xlsx',
      accessed: '5 хвилин тому',
      size: '0.2GB',
    },
    {
      name: 'Звіт_зустрічей.xls',
      accessed: '5 хвилин тому',
      size: '0.1GB',
    },
    {
      name: 'Карта_схем.doc',
      accessed: '5 хвилин тому',
      size: '1MB',
    },
    {
      name: 'Фото_авто.jpg',
      accessed: '5 хвилин тому',
      size: '1MB',
    },
    {
      name: 'Дизайн_сайту.xlsx',
      accessed: '5 хвилин тому',
      size: '0.01MB',
    },
    {
      name: 'Останній_дизайн.psd',
      accessed: '5 хвилин тому',
      size: '0.01MB',
    },
    {
      name: 'Збірка.yaml',
      accessed: '5 хвилин тому',
      size: '0.01MB',
    },
    {
      name: 'Посилання_на_документи.docs',
      accessed: '5 хвилин тому',
      size: '0.01MB',
    },
    {
      name: 'Провайдери.go',
      accessed: '5 хвилин тому',
      size: '0.01MB',
    },
    {
      name: 'Магазин_даних.ts',
      accessed: '5 хвилин тому',
      size: '0.01MB',
    },
    {
      name: 'Більше_документів.xlsx',
      accessed: '5 хвилин тому',
      size: '0.01MB',
    },
    {
      name: 'Фото_авто.jpg',
      accessed: '5 хвилин тому',
      size: '1MB',
    },
    {
      name: 'Дизайн_сайту.xlsx',
      accessed: '5 хвилин тому',
      size: '0.01MB',
    }
  ];

  public selectedItem = {
    name: 'Паспорт_водія.pdf',
    accessed: '5 хвилин тому',
    size: '0.1GB',
  };

  public isDetailsOpened: boolean = false
  public leftSidebarVisibility: boolean = true

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectItem(item) {
    this.isDetailsOpened = true
    this.selectedItem = item
  }

  onClose(event) {
    this.isDetailsOpened = false
  }

  onToggleLeftSidebar() {
    this.leftSidebarVisibility = !this.leftSidebarVisibility
  }
}
