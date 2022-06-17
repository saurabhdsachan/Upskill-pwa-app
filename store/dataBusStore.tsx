export const createDataBusStore = () => {
  return {
    dataBus: {
      userLanguageList: [],
      sessionRecordingList: {},
      isDownloadAppBottomSheetOpen: false,
      isShowRecordingBottomSheetOpen: false,
      isShowLanguageBottomSheetOpen: false,
    },

    updateUserLanguageList(data) {
      this.dataBus.userLanguageList = data;
    },
    updateSessionRecordingList(data) {
      this.dataBus.sessionRecordingList = data;
    },
    updateDownloadAppBottomSheetState(data) {
      this.dataBus.isDownloadAppBottomSheetOpen = data;
    },
    updateShowRecordingBottomSheetState(data) {
      this.dataBus.isShowRecordingBottomSheetOpen = data;
    },
    updateShowLanguageBottomSheetState(data) {
      this.dataBus.isShowLanguageBottomSheetOpen = data;
    },
  };
};
