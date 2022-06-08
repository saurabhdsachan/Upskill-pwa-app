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
      const { date, startTime, endTime } = data;
      this.slots.demo = { date, startTime, endTime };
    },
    setConnectSlots(data) {
      const { date, startTime, endTime } = data;
      this.slots.connect = { date, startTime, endTime };
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
      const { startTime } = data;
      this.slots.plan = { startTime };
    },
  };
};
