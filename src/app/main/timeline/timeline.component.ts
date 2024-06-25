import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  public events = [
    {
      time: '',
      type: '',
      title: 'СТАН',
      content: ``,
      children: []
    },
    {
      time: '11:30am',
      type: 'success',
      title: 'Посилка відправлена',
      content: `Замовлення успішно відправлене до служби доставки`,
      children: [
        {
          time: '10:31pm',
          content: 'Посилка зареєстрована в системі',
          type: 'success',
        },
        {
          time: '10:31pm',
          content: 'Посилка прибула на сортувальний центр',
          type: 'success',
        },
        {
          time: '10:31pm',
          content: 'Посилка перевіряється на відповідність',
          type: 'warning',
        }
      ]
    },
    {
      time: '12:00am',
      type: 'success',
      title: 'Посилка готова до відправлення зі сортувального центру',
      content: ``,
      children: []
    },
    {
      time: '12:30pm',
      type: 'danger',
      title: 'Затримка у сортувальному центрі',
      content: `Посилка затримується через високе навантаження`,
      children: [
        {
          time: '10:31pm',
          content: 'Затримка через невідповідність адреси',
          type: 'danger',
        },
        {
          time: '10:31pm',
          content: 'Затримка через високе навантаження на сортувальному центрі',
          type: 'warning',
        },
        {
          time: '10:31pm',
          content: 'Посилка очікує на додаткову перевірку',
          type: 'warning',
        }
      ]
    },
    {
      time: '13:00pm',
      type: 'success',
      title: 'Посилка виїхала з сортувального центру',
      pulse: true,
      content: `Посилка успішно виїхала з сортувального центру та направляється до пункту видачі`,
      children: [
        {
          time: '10:31pm',
          content: 'Посилка прибула на відділення служби доставки',
          type: 'success',
        },
        {
          time: '10:31pm',
          content: 'Посилка зареєстрована на відділенні для видачі',
          type: 'success',
        }
      ]
    },
    {
      time: '13:30pm',
      type: 'success',
      title: 'Посилка готова до видачі',
      content: `Посилка очікує на отримання одержувачем`,
      children: []
    },
    {
      time: '14:00pm',
      type: 'success',
      title: 'Посилка успішно вручена',
      content: `Посилка успішно вручена одержувачу`,
      children: []
    },
  ];


  constructor() {
  }

  ngOnInit(): void {
  }


  getClassForEvent(event) {
    let classes = []
    if (event.pulse) {
      classes.push('app-timeline__item--pulse')
    }
    switch (event.type) {
      case 'success':
        classes.push('app-timeline__item--success')
        break
      case 'danger':
        classes.push('app-timeline__item--danger')
        break
      case 'warning':
        classes.push('app-timeline__item--warning')
        break
      case 'info':
        classes.push('app-timeline__item--info')
        break
      default:
    }
    return classes.join(' ')
  }

}
