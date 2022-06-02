export const createSlotsStore = () => {
  return {
    slots: {},

    setSlotsData(data) {
      this.slots = data;
    },
  };
};
