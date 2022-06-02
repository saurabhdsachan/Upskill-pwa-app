export const createSlotsStore = () => {
  return {
    slots: {
      demo: {},
      connect: {},
      course: {},
      workshop: {},
      plan: {},
    },

    setDemoSlots(data) {
      const { creatorId, startTime, endTime } = data;
      this.slots.demo = { creatorId, startTime, endTime };
    },
    setConnectSlots(data) {
      const { creatorId, expertiseId, startTime, endTime } = data;
      this.slots.connect = { creatorId, expertiseId, startTime, endTime };
    },
    setCourseSlots(data) {
      const { instanceId } = data;
      this.slots.course = { instanceId };
    },
    setWorkshopSlots(data) {
      const { instanceId } = data;
      this.slots.workshop = { instanceId };
    },
    setPlanSlots(data) {
      console.log('data', data);
      const { startTime } = data;
      this.slots.plan = { startTime };
    },
  };
};
