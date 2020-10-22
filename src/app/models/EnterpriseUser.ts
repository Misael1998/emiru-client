export interface EnterpriseUser {
  name: string,
  enterpriseName: string,
  email: string,
  password?: string,
  token?: string,
  roles?: string[],
}
