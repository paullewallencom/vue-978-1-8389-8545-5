<template>
  <div class="row">
    <div class="col-sm-12">
      <p>Completed: <span id="counter">0</span>/4:</p>
      <progress value="0" max="100" id="cardProgress">0%</progress>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../../main.js'

export default {
  created: function() {

    EventBus.$on('marked-as-complete', function(data) {
      // if data === true (checked)
      if(data){
        document.getElementById('counter').innerText++;
        document.getElementById('cardProgress').value+=25;

      } else{
        document.getElementById('counter').innerText--;
        document.getElementById('cardProgress').value-=25;
      }
   });
  }
}
</script>

<style scoped>

  progress {
    width: 100%;
  }

</style>
