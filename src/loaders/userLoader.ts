import { api } from "../lib/api";

export interface User {
  name: string;
  bio: string;
  avatar_url: string;
  followers: number;
  login: string;
  company: string | null;
  html_url: string;
}

export async function userLoader(): Promise<Response> {
  return api.get(`/users/fabio-beutler`);
}
