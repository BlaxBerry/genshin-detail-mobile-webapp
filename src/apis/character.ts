const URL = 'https://api.minigg.cn/characters'

interface fetchCharacterParamsType {
  name: string
  status?: number
}
/**
 * 角色相关信息查询
 */
export const fetchCharacter = async ({
  name,
  status,
}: fetchCharacterParamsType) => {
  const res = await fetch(`${URL}?query=${name}&status=${status}`)
  return res.json()
}
