export const createSlotsStore = () => {
  return {
    slots: [],
    addSlot(creatorId, SessionId, startTime) {
      const slot = {
        creatorId,
        SessionId,
        startTime,
      };
      this.slots.push(slot);
    },
  };
};
