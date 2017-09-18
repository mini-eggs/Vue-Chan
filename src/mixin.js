function registerMixin(VueInstance) {
  const bus = new VueInstance();
  VueInstance.mixin({
    computed: {
      $bus() {
        return bus;
      }
    }
  });
}

export default registerMixin;
