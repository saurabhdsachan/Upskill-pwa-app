export const createDataBusStore = () => {
  return {
    dataBus: {
      shareData: {},
      userLanguageList: [],
      sessionRecordingList: null,
      isDownloadAppBottomSheetOpen: false,
      isShowRecordingBottomSheetOpen: false,
      isShowLanguageBottomSheetOpen: false,
    },

    updateShareData(data) {
      this.dataBus.shareData = data;
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
