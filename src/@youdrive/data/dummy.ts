import {TableModel, TableItem, TableHeaderItem} from "carbon-components-angular"
import {AvatarGenerator} from 'random-avatar-generator'
import {uniqueNamesGenerator, names, Config, countries,} from 'unique-names-generator'
import {getUniqueId} from "../components/app-tasks/app-tasks.component"

const generator = new AvatarGenerator()
const config: Config = {
  dictionaries: [countries]
}
const configName: Config = {
  dictionaries: [names]
}
const getDaysArray = function (s, e) {
  let a = []
  for (let d = new Date(s); d <= e; d.setDate(d.getDate() + 1)) {
    a.push(new Date(d))
  }
  return a
}

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getDummyModel = () => {
  const model = new TableModel()
  model.header = [
    new TableHeaderItem({
      data: "Ім'я",
      className: "items-center font-bold"
    }),
    new TableHeaderItem({
      data: "Країна",
      className: "items-center"
    }),
    new TableHeaderItem({
      data: "Ефективність",
      className: "items-center",
    }),
    new TableHeaderItem({
      data: "Загальний заробіток",
      className: "items-center",
    }),
    new TableHeaderItem({
      data: "Статус",
      className: "items-center",
    })
  ]
  model.data = [
    [new TableItem({data: "Андрій Петренко"}), new TableItem({data: "Мексика"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "221"}), new TableItem({data: "1"}),],
    [new TableItem({data: "Олена Сидоренко"}), new TableItem({data: "Чеська Республіка"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "20"}), new TableItem({data: "1"}),],
    [new TableItem({data: "Тетяна Іванова"}), new TableItem({data: "Нідерланди"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "450"}), new TableItem({data: "0"}),],
    [new TableItem({data: "Ігор Петров"}), new TableItem({data: "Пакистан"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "1200"}), new TableItem({data: "0"}),],
    [new TableItem({data: "Анна Степаненко"}), new TableItem({data: "Мозамбік"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "560"}), new TableItem({data: "1"}),],
    [new TableItem({data: "Максим Дорошенко"}), new TableItem({data: "Тонга"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "100"}), new TableItem({data: "0"}),],
    [new TableItem({data: "Василь Кипенко"}), new TableItem({data: "Куба"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "345"}), new TableItem({data: "1"}),],
    [new TableItem({data: "Ігор Рівненко"}), new TableItem({data: "Україна"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "100"}), new TableItem({data: "1"}),],
    [new TableItem({data: "Денис Прокопенко"}), new TableItem({data: "Україна"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "10"}), new TableItem({data: "0"}),]
  ]
  return model
}

export const getDummyData = (rows = 100) => {
  return Array.from({length: rows}).map(() => {
    return {
      id: getUniqueId(2),
      avatar: generator.generateRandomAvatar(),
      total: getRandomArbitrary(500, 2500),
      registered: getRandomArbitrary(0, 1),
      name: uniqueNamesGenerator(configName),
      country: uniqueNamesGenerator(config),
      proficiency: getRandomArbitrary(0, 100),
    }
  })
}

export const countriesData = [
  {content: "Афганістан", id: "AF"},
  {content: "Аландські острови", id: "AX"},
  {content: "Албанія", id: "AL"},
  {content: "Алжир", id: "DZ"},
  {content: "Американське Самоа", id: "AS"},
  {content: "Андорра", id: "AD"},
  {content: "Ангола", id: "AO"},
  {content: "Ангілья", id: "AI"},
  {content: "Антарктида", id: "AQ"},
  {content: "Антигуа і Барбуда", id: "AG"},
  {content: "Аргентина", id: "AR"},
  {content: "Вірменія", id: "AM"},
  {content: "Аруба", id: "AW"},
  {content: "Австралія", id: "AU"},
  {content: "Австрія", id: "AT"},
  {content: "Азербайджан", id: "AZ"},
  {content: "Багами", id: "BS"},
  {content: "Бахрейн", id: "BH"},
  {content: "Бангладеш", id: "BD"},
  {content: "Барбадос", id: "BB"},
  {content: "Білорусь", id: "BY"},
  {content: "Бельгія", id: "BE"},
  {content: "Беліз", id: "BZ"},
  {content: "Бенін", id: "BJ"},
  {content: "Бермуди", id: "BM"},
  {content: "Бутан", id: "BT"},
  {content: "Болівія", id: "BO"},
  {content: "Боснія і Герцеговина", id: "BA"},
  {content: "Ботсвана", id: "BW"},
  {content: "Острів Буве", id: "BV"},
  {content: "Бразилія", id: "BR"},
  {content: "Британська територія в Індійському океані", id: "IO"},
  {content: "Бруней-Даруссалам", id: "BN"},
  {content: "Болгарія", id: "BG"},
  {content: "Буркіна-Фасо", id: "BF"},
  {content: "Бурунді", id: "BI"},
  {content: "Камбоджа", id: "KH"},
  {content: "Камерун", id: "CM"},
  {content: "Канада", id: "CA"},
  {content: "Кабо-Верде", id: "CV"},
  {content: "Кайманові острови", id: "KY"},
  {content: "Центральноафриканська Республіка", id: "CF"},
  {content: "Чад", id: "TD"},
  {content: "Чилі", id: "CL"},
  {content: "Китай", id: "CN"},
  {content: "Острів Різдва", id: "CX"},
  {content: "Кокосові (Кілінські) острови", id: "CC"},
  {content: "Колумбія", id: "CO"},
  {content: "Коморські острови", id: "KM"},
  {content: "Конго", id: "CG"},
  {content: "Демократична Республіка Конго", id: "CD"},
  {content: "Острови Кука", id: "CK"},
  {content: "Коста-Рика", id: "CR"},
  {content: "Кот-д'Івуар", id: "CI"},
  {content: "Хорватія", id: "HR"},
  {content: "Куба", id: "CU"},
  {content: "Кіпр", id: "CY"},
  {content: "Чеська Республіка", id: "CZ"},
  {content: "Данія", id: "DK"},
  {content: "Джибуті", id: "DJ"},
  {content: "Домініка", id: "DM"},
  {content: "Домініканська Республіка", id: "DO"},
  {content: "Еквадор", id: "EC"},
  {content: "Єгипет", id: "EG"},
  {content: "Сальвадор", id: "SV"},
  {content: "Екваторіальна Гвінея", id: "GQ"},
  {content: "Еритрея", id: "ER"},
  {content: "Естонія", id: "EE"},
  {content: "Ефіопія", id: "ET"},
  {content: "Фолклендські острови (Мальвіни)", id: "FK"},
  {content: "Фарерські острови", id: "FO"},
  {content: "Фіджі", id: "FJ"},
  {content: "Фінляндія", id: "FI"},
  {content: "Франція", id: "FR"},
  {content: "Французька Гвіана", id: "GF"},
  {content: "Французька Полінезія", id: "PF"},
  {content: "Французькі Південні Території", id: "TF"},
  {content: "Габон", id: "GA"},
  {content: "Гамбія", id: "GM"},
  {content: "Грузія", id: "GE"},
  {content: "Німеччина", id: "DE"},
  {content: "Гана", id: "GH"},
  {content: "Гібралтар", id: "GI"},
  {content: "Греція", id: "GR"},
  {content: "Гренландія", id: "GL"},
  {content: "Гренада", id: "GD"},
  {content: "Гваделупа", id: "GP"},
  {content: "Гуам", id: "GU"},
  {content: "Гватемала", id: "GT"},
  {content: "Гернсі", id: "GG"},
  {content: "Гвінея", id: "GN"},
  {content: "Гвінея-Бісау", id: "GW"},
  {content: "Гаяна", id: "GY"},
  {content: "Гаїті", id: "HT"},
  {content: "Острів Херд і острови Макдональда", id: "HM"},
  {content: "Святий Престол (Ватикан)", id: "VA"},
  {content: "Гондурас", id: "HN"},
  {content: "Гонконг", id: "HK"},
  {content: "Угорщина", id: "HU"},
  {content: "Ісландія", id: "IS"},
  {content: "Індія", id: "IN"},
  {content: "Індонезія", id: "ID"},
  {content: "Іран, Ісламська Республіка", id: "IR"},
  {content: "Ірак", id: "IQ"},
  {content: "Ірландія", id: "IE"},
  {content: "Острів Мен", id: "IM"},
  {content: "Ізраїль", id: "IL"},
  {content: "Італія", id: "IT"},
  {content: "Ямайка", id: "JM"},
  {content: "Японія", id: "JP"},
  {content: "Джерсі", id: "JE"},
  {content: "Йорданія", id: "JO"},
  {content: "Казахстан", id: "KZ"},
  {content: "Кенія", id: "KE"},
  {content: "Кірибаті", id: "KI"},
  {content: "КНДР", id: "KP"},
  {content: "Республіка Корея", id: "KR"},
  {content: "Кувейт", id: "KW"},
  {content: "Киргизстан", id: "KG"},
  {content: "Лаоська Народно-Демократична Республіка", id: "LA"},
  {content: "Латвія", id: "LV"},
  {content: "Ліван", id: "LB"},
  {content: "Лесото", id: "LS"},
  {content: "Ліберія", id: "LR"},
  {content: "Лівія", id: "LY"},
  {content: "Ліхтенштейн", id: "LI"},
  {content: "Литва", id: "LT"},
  {content: "Люксембург", id: "LU"},
  {content: "Макао", id: "MO"},
  {content: "Північна Македонія", id: "MK"},
  {content: "Мадагаскар", id: "MG"},
  {content: "Малаві", id: "MW"},
  {content: "Малайзія", id: "MY"},
  {content: "Мальдіви", id: "MV"},
  {content: "Мали", id: "ML"},
  {content: "Мальта", id: "MT"},
  {content: "Маршаллові острови", id: "MH"},
  {content: "Мартиніка", id: "MQ"},
  {content: "Мавританія", id: "MR"},
  {content: "Маврикій", id: "MU"},
  {content: "Майотта", id: "YT"},
  {content: "Мексика", id: "MX"},
  {content: "Мікронезія", id: "FM"},
  {content: "Молдова", id: "MD"},
  {content: "Монако", id: "MC"},
  {content: "Монголія", id: "MN"},
  {content: "Чорногорія", id: "ME"},
  {content: "Монтсеррат", id: "MS"},
  {content: "Марокко", id: "MA"},
  {content: "Мозамбік", id: "MZ"},
  {content: "М'янма", id: "MM"},
  {content: "Намібія", id: "NA"},
  {content: "Науру", id: "NR"},
  {content: "Непал", id: "NP"},
  {content: "Нідерланди", id: "NL"},
  {content: "Нідерландські Антили", id: "AN"},
  {content: "Нова Каледонія", id: "NC"},
  {content: "Нова Зеландія", id: "NZ"},
  {content: "Нікарагуа", id: "NI"},
  {content: "Нігер", id: "NE"},
  {content: "Нігерія", id: "NG"},
  {content: "Ніуе", id: "NU"},
  {content: "Острів Норфолк", id: "NF"},
  {content: "Північні Маріанські острови", id: "MP"},
  {content: "Норвегія", id: "NO"},
  {content: "Оман", id: "OM"},
  {content: "Пакистан", id: "PK"},
  {content: "Палау", id: "PW"},
  {content: "Палестинські території", id: "PS"},
  {content: "Панама", id: "PA"},
  {content: "Папуа Нова Гвінея", id: "PG"},
  {content: "Парагвай", id: "PY"},
  {content: "Перу", id: "PE"},
  {content: "Філіппіни", id: "PH"},
  {content: "Піткерн", id: "PN"},
  {content: "Польща", id: "PL"},
  {content: "Португалія", id: "PT"},
  {content: "Пуерто-Рико", id: "PR"},
  {content: "Катар", id: "QA"},
  {content: "Реюньйон", id: "RE"},
  {content: "Румунія", id: "RO"},
  {content: "Російська Федерація", id: "RU"},
  {content: "Руанда", id: "RW"},
  {content: "Сент-Елена", id: "SH"},
  {content: "Сент-Кіттс і Невіс", id: "KN"},
  {content: "Сент-Люсія", id: "LC"},
  {content: "Сент-П'єр і Мікелон", id: "PM"},
  {content: "Сент-Вінсент і Гренадини", id: "VC"},
  {content: "Самоа", id: "WS"},
  {content: "Сан-Марино", id: "SM"},
  {content: "Сан-Томе і Принсіпі", id: "ST"},
  {content: "Саудівська Аравія", id: "SA"},
  {content: "Сенегал", id: "SN"},
  {content: "Сербія", id: "RS"},
  {content: "Сейшели", id: "SC"},
  {content: "Сьєрра-Леоне", id: "SL"},
  {content: "Сінгапур", id: "SG"},
  {content: "Словаччина", id: "SK"},
  {content: "Словенія", id: "SI"},
  {content: "Соломонові острови", id: "SB"},
  {content: "Сомалі", id: "SO"},
  {content: "Південна Африка", id: "ZA"},
  {content: "Південна Джорджія і Південні Сандвічеві острови", id: "GS"},
  {content: "Іспанія", id: "ES"},
  {content: "Шрі-Ланка", id: "LK"},
  {content: "Судан", id: "SD"},
  {content: "Суринам", id: "SR"},
  {content: "Шпіцберген і Ян-Майен", id: "SJ"},
  {content: "Свазіленд", id: "SZ"},
  {content: "Швеція", id: "SE"},
  {content: "Швейцарія", id: "CH"},
  {content: "Сирійська Арабська Республіка", id: "SY"},
  {content: "Тайвань", id: "TW"},
  {content: "Таджикистан", id: "TJ"},
  {content: "Танзанія", id: "TZ"},
  {content: "Таїланд", id: "TH"},
  {content: "Східний Тимор", id: "TL"},
  {content: "Того", id: "TG"},
  {content: "Токелау", id: "TK"},
  {content: "Тонга", id: "TO"},
  {content: "Тринідад і Тобаго", id: "TT"},
  {content: "Туніс", id: "TN"},
  {content: "Туреччина", id: "TR"},
  {content: "Туркменістан", id: "TM"},
  {content: "Туркс і Кайкос", id: "TC"},
  {content: "Тувалу", id: "TV"},
  {content: "Уганда", id: "UG"},
  {content: "Україна", id: "UA"},
  {content: "Об'єднані Арабські Емірати", id: "AE"},
  {content: "Великобританія", id: "GB"},
  {content: "Сполучені Штати", id: "US"},
  {content: "Зовнішні малі острови США", id: "UM"},
  {content: "Уругвай", id: "UY"},
  {content: "Узбекистан", id: "UZ"},
  {content: "Вануату", id: "VU"},
  {content: "Венесуела", id: "VE"},
  {content: "В'єтнам", id: "VN"},
  {content: "Віргінські острови (Британські)", id: "VG"},
  {content: "Віргінські острови (США)", id: "VI"},
  {content: "Волліс і Футуна", id: "WF"},
  {content: "Західна Сахара", id: "EH"},
  {content: "Ємен", id: "YE"},
  {content: "Замбія", id: "ZM"},
  {content: "Зімбабве", id: "ZW"}
  ]

  export const usStatesData = [
  {
  content: "Алабама",
  id: "AL"
  },
  {
  content: "Аляска",
  id: "AK"
  },
  {
  content: "Американське Самоа",
  id: "AS"
  },
  {
  content: "Аризона",
  id: "AZ"
  },
  {
  content: "Арканзас",
  id: "AR"
  },
  {
  content: "Каліфорнія",
  id: "CA"
  },
  {
  content: "Колорадо",
  id: "CO"
  },
  {
  content: "Коннектикут",
  id: "CT"
  },
  {
  content: "Делавер",
  id: "DE"
  },
  {
  content: "Округ Колумбія",
  id: "DC"
  },
  {
  content: "Федеративні Штати Мікронезії",
  id: "FM"
  },
  {
  content: "Флорида",
  id: "FL"
  },
  {
  content: "Джорджія",
  id: "GA"
  },
  {
  content: "Гуам",
  id: "GU"
  },
  {
  content: "Гаваї",
  id: "HI"
  },
  {
  content: "Айдахо",
  id: "ID"
  },
  {
  content: "Іллінойс",
  id: "IL"
  },
  {
  content: "Індіана",
  id: "IN"
  },
  {
  content: "Айова",
  id: "IA"
  },
  {
  content: "Канзас",
  id: "KS"
  },
  {
  content: "Кентуккі",
  id: "KY"
  },
  {
  content: "Луїзіана",
  id: "LA"
  },
  {
  content: "Мен",
  id: "ME"
  },
  {
  content: "Маршаллові острови",
  id: "MH"
  },
  {
  content: "Меріленд",
  id: "MD"
  },
  {
  content: "Массачусетс",
  id: "MA"
  },
  {
  content: "Мічиган",
  id: "MI"
  },
  {
  content: "Міннесота",
  id: "MN"
  },
  {
  content: "Міссісіпі",
  id: "MS"
  },
  {
  content: "Міссурі",
  id: "MO"
  },
  {
  content: "Монтана",
  id: "MT"
  },
  {
  content: "Небраска",
  id: "NE"
  },
  {
  content: "Невада",
  id: "NV"
  },
  {
  content: "Нью-Гемпшир",
  id: "NH"
  },
  {
  content: "Нью-Джерсі",
  id: "NJ"
  },
  {
  content: "Нью-Мексико",
  id: "NM"
  },
  {
  content: "Нью-Йорк",
  id: "NY"
  },
  {
  content: "Північна Кароліна",
  id: "NC"
  },
  {
  content: "Північна Дакота",
  id: "ND"
  },
  {
  content: "Північні Маріанські острови",
  id: "MP"
  },
  {
  content: "Огайо",
  id: "OH"
  },
  {
  content: "Оклахома",
  id: "OK"
  },
  {
  content: "Орегон",
  id: "OR"
  },
  {
  content: "Палау",
  id: "PW"
  },
  {
  content: "Пенсільванія",
  id: "PA"
  },
  {
  content: "Пуерто-Рико",
  id: "PR"
  },
  {
  content: "Род-Айленд",
  id: "RI"
  },
  {
  content: "Південна Кароліна",
  id: "SC"
  },
  {
  content: "Південна Дакота",
  id: "SD"
  },
  {
  content: "Теннессі",
  id: "TN"
  },
  {
  content: "Техас",
  id: "TX"
  },
  {
  content: "Юта",
  id: "UT"
  },
  {
  content: "Вермонт",
  id: "VT"
  },
  {
  content: "Віргінські острови",
  id: "VI"
  },
  {
  content: "Віргінія",
  id: "VA"
  },
  {
  content: "Вашингтон",
  id: "WA"
  },
  {
  content: "Західна Віргінія",
  id: "WV"
  },
  {
  content: "Вісконсин",
  id: "WI"
  },
  {
  content: "Віомінг",
  id: "WY"
  }
  ]
