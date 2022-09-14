const URL = 'https://api.minigg.cn/characters'

interface fetchCharacterParamsType {
  name: string
  status?: number
}
/**
 * 角色相关信息查询
 */
export const fetchCharacter = async (value: string) => {
  const res = await fetch(`${URL}?query=${value}`)
  return res.json()
}
