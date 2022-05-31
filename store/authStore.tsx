export const createAuthStore = () => {
  return {
    authedUserData: {
      userId: '',
      username: '',
      name: '',
      number: '',
      phoneNumber: '',
    },
    setAuthedUserData(data) {
      this.authedUserData = data;
    },
  };
};
