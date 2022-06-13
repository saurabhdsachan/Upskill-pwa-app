export const createDataBusStore = () => {
  return {
    dataBus: {
      sessionRecordingList: {},
      isDownloadAppBottomSheetOpen: false,
      isShowRecordingBottomSheetOpen: false,
    },

    updateDownloadAppBottomSheetState(data) {
      this.dataBus.isDownloadAppBottomSheetOpen = data;
    },
    updateShowRecordingBottomSheetState(data) {
      this.dataBus.isShowRecordingBottomSheetOpen = data;
    },
    updateSessionRecordingList(data) {
      this.dataBus.sessionRecordingList = data;
    },
  };
};
