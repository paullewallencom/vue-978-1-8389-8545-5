<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" @click="sectionCompleted" v-model="checked"> Mark section as completed
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../../main.js'

export default {
  data: function() {
    return {
      checked: '' // boolean value:
    };
  },
  methods: {
    sectionCompleted: function() {
      EventBus.$emit('marked-as-complete', this.checked);
    }
  }
}
</script>

<style>

</style>
