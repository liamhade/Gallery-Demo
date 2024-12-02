import { signIn } from "next-auth/react";

class LoginService {
  async login(username: string, password: string) {
    signIn("credentials", {
      username: username,
      password: password,
      redirect: true,
      callbackUrl: "/admin/home",
    }).then((res) => {});
    return false;
  }
}

export const loginService = new LoginService();
