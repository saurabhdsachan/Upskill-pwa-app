export const createAuthStore = () => {
  return {
    authData: [
      {
        userId: '',
        username: '',
        name: '',
        number: '',
        phoneNumber: '',
      },
    ],
    setAuthData(data) {
      this.authData[0] = data;
    },
  };
};
