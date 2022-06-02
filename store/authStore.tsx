export const createAuthStore = () => {
  return {
    authData: {
      userId: '',
      username: '',
      name: '',
      number: '',
      phoneNumber: '',
      profileImgUrl: '',
    },

    setAuthData(data) {
      this.authData = data;
    },
  };
};
