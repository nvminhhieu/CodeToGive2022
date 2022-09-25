export default interface IJob {
  id: number
  label: string
  match_value: number
  details: {
    company_name: string
    about: string
    description: string
  }
  image?: string
}
