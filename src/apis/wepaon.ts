const URL = 'https://api.minigg.cn/weapons'

/**
 * 武器相关信息查询
 */
export const fetchWeapon = async (value: string) => {
  const res = await fetch(`${URL}?query=${value}`)
  return res.json()
}
