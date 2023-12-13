export interface VueDataComponentIs {
  name: string,
  render?: string
  componentType: ComponentType.custom|ComponentType.self
}
export enum ComponentType {
  // 已在项目引入的组件
  self=1,
  // 自定义存在数据库的组件
  custom=2
}