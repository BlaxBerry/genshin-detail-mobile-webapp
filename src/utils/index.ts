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
    case 'weapon':
      return ''
    default:
      return '返回'
  }
}
