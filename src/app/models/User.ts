export interface User {
  email: string;
  password?: string;
  token?: string;
  name?: string;
  roles?: string[];
  type?: string;
}
