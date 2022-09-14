/**
 * 角色相关信息查询
 * @param value 角色名
 * @returns
 */
export const fetchCharacter = async (value: string) => {
  const res = await fetch(`https://api.minigg.cn/characters?query=${value}`)
  return res.json()
}

/**
 * 角色命座
 * @param value 角色名
 * @returns
 */
export const fetchConstellations = async (value: string) => {
  const res = await fetch(`https://api.minigg.cn/constellations?query=${value}`)
  return res.json()
}

/**
 * 角色天赋
 * @param value 角色名
 * @returns
 */
export const fetchTalents = async (value: string) => {
  const res = await fetch(`https://api.minigg.cn/talents?query=${value}`)
  return res.json()
}
