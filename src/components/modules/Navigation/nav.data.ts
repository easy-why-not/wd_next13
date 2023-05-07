import {
  arenaData,
  arenaDataActive,
  checkList,
  checkListActive,
  contacts,
  contactsActive,
  day2,
  day2Active,
  eol,
  eolActive,
  feedBack,
  feedBackActive,
  heatMapActiveIcon,
  heatMapIcon,
  home,
  homeActive,
  ms,
  msActive,
  oracleActive,
  oracleIcon,
  pg,
  pgActive,
  redis,
  redisActive,
  report,
  reportActive
} from '@/public';

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
    icon: home,
    iconActive: homeActive,
    text: 'Главная',
    alt: 'Иконка перехода на домашнюю',
    href: '/'
  },
  {
    id: 2,
    icon: pg,
    iconActive: pgActive,
    text: 'PostgreSQL',
    alt: 'Иконка перехода на страницу экземпляры PG',
    href: '/pg'
  },
  {
    id: 3,
    icon: ms,
    iconActive: msActive,
    text: 'MSSQL',
    alt: 'Иконка перехода на страницу экземпляры MSSQL',
    href: '/mssql'
  },
  {
    id: 4,
    icon: oracleIcon,
    iconActive: oracleActive,
    text: 'Oracle',
    alt: 'Иконка перехода на страницу Oracle',
    href: '/oracle'
  },
  {
    id: 5,
    icon: redis,
    iconActive: redisActive,
    text: 'Redis',
    alt: 'Иконка перехода на страницу Redis',
    href: '/redis'
  },
  {
    id: 6,
    icon: arenaData,
    iconActive: arenaDataActive,
    text: 'ArenaData DB',
    alt: 'Иконка перехода на страницу ArenaData DB',
    href: '/arenadata'
  },
  {
    id: 7,
    icon: eol,
    iconActive: eolActive,
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
    icon: report,
    iconActive: reportActive,
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
    icon: checkList,
    iconActive: checkListActive,
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
    icon: heatMapIcon,
    iconActive: heatMapActiveIcon,
    text: 'Тепловая карта',
    alt: 'Иконка перехода на страницу Тепловая карта',
    href: '/heatmap'
  },
  {
    id: 11,
    icon: day2,
    iconActive: day2Active,
    text: 'Операции Day2',
    alt: 'Иконка перехода на страницу Операции Day2',
    href: '/daytwo'
  },
  {
    id: 12,
    icon: feedBack,
    iconActive: feedBackActive,
    text: 'Обратная связь',
    alt: 'Иконка перехода на страницу Обратная связь',
    href: '/feedback'
  },
  {
    id: 13,
    icon: contacts,
    iconActive: contactsActive,
    text: 'О сервисе',
    alt: 'Иконка перехода на страницу О сервисе',
    href: '/contacts'
  }
];
