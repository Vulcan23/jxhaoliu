<template>
  <div>
    {{ o.a }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      o: null,
    };
  },
  beforeMount() {
    this.o = { a: 1 };
  },
};
</script>