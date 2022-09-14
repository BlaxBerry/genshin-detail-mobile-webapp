/**
 *
 * @param value
 * @returns
 */
export const getPageTitle = (value: string): string => {
  switch (value) {
    case 'home':
      return '首页'
    case 'characters':
      return '角色列表'
    case 'weapons':
      return '武器列表'
    default:
      return '返回'
  }
}

export const getElementColor = (element: string): string => {
  switch (element) {
    case '火':
      return '#520202'
    case '水':
      return '#0b71b5'
    case '冰':
      return '#8ec7f5'
    case '风':
      return '#5ddecd'
    case '雷':
      return '#330252'
    case '岩':
      return '#87560c'
    case '草':
      return '#2f7539'
    default:
      return ''
  }
}
