export const createAuthStore = () => {
  return {
    authData: {
      creator: false,
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
