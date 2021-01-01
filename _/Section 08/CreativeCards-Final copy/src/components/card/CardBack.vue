<template>
  <div class="row">
    <div class="col-sm-6 card edit-area">
      <cc-image-upload @displayImageChanged="imageName = $event"></cc-image-upload><hr>
      <cc-section-completed></cc-section-completed>
    </div>
    <div class="col-sm-6 card card-display">
      <cc-image-output :displayImage="imageName" :containerHeight="400" :clearImageProp="clearImage"></cc-image-output>
      <p class="text-center">&copy; Creative Cards</p>
    </div>
  </div>
</template>

<script>
import ImageUpload from './ImageUpload.vue'
import ImageOutput from './ImageOutput.vue'
import SectionCompleted from './SectionCompleted.vue'
import { clearImageMixin } from '../../clearImageMixin'

export default {
  mixins: [clearImageMixin],
  data: function() {
    return {
      imageName: ''
    };
  },
    components: {
      ccImageUpload: ImageUpload,
      ccImageOutput: ImageOutput,
      ccSectionCompleted: SectionCompleted
  }
}
</script>

<style>

</style>
