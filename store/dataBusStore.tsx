export const createDataBusStore = () => {
  return {
    dataBus: {
      isBottomSheetOpen: false,
    },

    updateBottomSheetState(data) {
      this.dataBus.isBottomSheetOpen = data;
    },
  };
};
