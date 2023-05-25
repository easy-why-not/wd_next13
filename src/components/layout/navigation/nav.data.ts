export interface INavDataChildren {
  id: number;
  text: string;
  href: string;
}

export interface INavData {
  id: number;
  icon: string;
  iconActive: string;
  text: string;
  alt: string;
  href: string;
  children?: INavDataChildren[];
}

export const navData: INavData[] = [
  {
    id: 1,
    icon: '/images/navIcons/home.svg',
    iconActive: '/images/navIcons/fill/home.svg',
    text: 'Главная',
    alt: 'Иконка перехода на домашнюю',
    href: '/'
  },
  {
    id: 2,
    icon: '/images/navIcons/pg.svg',
    iconActive: '/images/navIcons/fill/pg.svg',
    text: 'PostgreSQL',
    alt: 'Иконка перехода на страницу экземпляры PG',
    href: '/pg'
  },
  {
    id: 3,
    icon: '/images/navIcons/ms.svg',
    iconActive: '/images/navIcons/fill/ms.svg',
    text: 'MSSQL',
    alt: 'Иконка перехода на страницу экземпляры MSSQL',
    href: '/mssql'
  },
  {
    id: 4,
    icon: '/images/navIcons/oracle.svg',
    iconActive: '/images/navIcons/fill/oracle.svg',
    text: 'Oracle',
    alt: 'Иконка перехода на страницу Oracle',
    href: '/oracle'
  },
  {
    id: 5,
    icon: '/images/navIcons/redis.svg',
    iconActive: '/images/navIcons/fill/redis.svg',
    text: 'Redis',
    alt: 'Иконка перехода на страницу Redis',
    href: '/redis'
  },
  {
    id: 6,
    icon: '/images/navIcons/arenaData.svg',
    iconActive: '/images/navIcons/fill/arenaData.svg',
    text: 'ArenaData DB',
    alt: 'Иконка перехода на страницу ArenaData DB',
    href: '/arenadata'
  },
  {
    id: 7,
    icon: '/images/navIcons/eol.svg',
    iconActive: '/images/navIcons/fill/eol.svg',
    text: 'EOL/EOS',
    alt: 'Иконка перехода на страницу EOL/EOS',
    href: '/eoleos',
    children: [
      {
        id: 7.1,
        text: 'PostgreSQL',
        href: '/eoleos/pg'
      },
      {
        id: 7.2,
        text: 'MSSQL',
        href: '/eoleos/mssql'
      },
      {
        id: 7.3,
        text: 'Oracle',
        href: '/eoleos/oracle'
      },
      {
        id: 7.4,
        text: 'Redis',
        href: '/eoleos/redis'
      },
      {
        id: 7.5,
        text: 'ArenaData',
        href: '/eoleos/arenadata'
      }
    ]
  },
  {
    id: 8,
    icon: '/images/navIcons/report.svg',
    iconActive: '/images/navIcons/fill/report.svg',
    text: 'Отчеты',
    alt: 'Иконка перехода на страницу Отчеты',
    href: '/report',
    children: [
      {
        id: 8.1,
        text: 'Dashboards',
        href: '/report/dashboards'
      },
      {
        id: 8.2,
        text: 'PostgreSQL',
        href: '/report/pg'
      },
      {
        id: 8.3,
        text: 'MS SQL',
        href: '/report/mssql'
      },
      {
        id: 8.4,
        text: 'Oracle',
        href: '/report/oracle'
      },
      {
        id: 8.5,
        text: 'Redis',
        href: '/report/redis'
      },
      {
        id: 8.6,
        text: 'ArenaData',
        href: '/report/arenadata'
      }
    ]
  },
  {
    id: 9,
    icon: '/images/navIcons/checkList.svg',
    iconActive: '/images/navIcons/fill/checkList.svg',
    text: 'Чек-листы',
    alt: 'Иконка перехода на страницу Чек-листы',
    href: '/checklists',
    children: [
      {
        id: 9.1,
        text: 'PostgreSQL',
        href: '/checklists/pg'
      },
      {
        id: 9.2,
        text: 'MSSQL',
        href: '/checklists/mssql'
      },
      {
        id: 9.3,
        text: 'Oracle',
        href: '/checklists/oracle'
      },
      {
        id: 9.4,
        text: 'Redis',
        href: '/checklists/redis'
      },
      {
        id: 9.5,
        text: 'ArenaData',
        href: '/checklists/arenadata'
      }
    ]
  },
  {
    id: 10,
    icon: '/images/navIcons/heatMap.svg',
    iconActive: '/images/navIcons/fill/heatMap.svg',
    text: 'Тепловая карта',
    alt: 'Иконка перехода на страницу Тепловая карта',
    href: '/heatmap'
  },
  {
    id: 11,
    icon: '/images/navIcons/day2.svg',
    iconActive: '/images/navIcons/fill/day2.svg',
    text: 'Операции Day2',
    alt: 'Иконка перехода на страницу Операции Day2',
    href: '/daytwo'
  },
  {
    id: 12,
    icon: '/images/navIcons/feedback.svg',
    iconActive: '/images/navIcons/fill/feedback.svg',
    text: 'Обратная связь',
    alt: 'Иконка перехода на страницу Обратная связь',
    href: '/feedback'
  },
  {
    id: 13,
    icon: '/images/navIcons/contacts.svg',
    iconActive: '/images/navIcons/fill/contacts.svg',
    text: 'О сервисе',
    alt: 'Иконка перехода на страницу О сервисе',
    href: '/contacts'
  }
];
