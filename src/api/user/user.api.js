import { instance } from "../base.api";

const model = "users";

const userApi = {
  registerWithGoogle: (data) => {
    return instance.post(`/${model}/register/with-google`, { data });
  },

  loginWithGoogle: (email, sub) => {
    return instance.post(`/${model}/auth/login/with-google`, { email, sub });
  },
};

export default userApi;
