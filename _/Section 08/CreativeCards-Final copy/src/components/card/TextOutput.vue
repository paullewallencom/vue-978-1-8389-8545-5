<template>
    <div @mouseover="showOptions = true"
         @mouseleave="showOptions = false">

    <transition name="fade">
    <form class="small" v-show="showOptions">
        <label for="selectBox">Font size: </label>
        <select class="custom-select" id="selectBox" v-model="setFontSize">
          <option value="42">42px</option>
          <option value="48">48px</option>
          <option value="56">56px</option>
          <option value="64">64px</option>
        </select>
        <div class="form-check form-check-inline">
          <label class="form-check-label">
            <input class="form-check-input" type="radio" v-model="setTextAlign" value="left"> Left
          </label>
        </div>
        <div class="form-check form-check-inline">
          <label class="form-check-label">
            <input class="form-check-input" type="radio" v-model="setTextAlign" value="center"> Center
          </label>
        </div>
        <div class="form-check form-check-inline">
          <label class="form-check-label">
            <input class="form-check-input" type="radio" v-model="setTextAlign" value="right"> Right
          </label>
        </div>
        <div class="form-check form-check-inline">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" v-model="setBold"> Bold
          </label>
        </div>
        <div class="form-check form-check-inline">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" v-model="setItalic"> Italic
          </label>
        </div>
      </form>  
    </transition>
      

      <!-- :class - bold and em classes trigger when setBold & setItalic are true
      (binded to checkbox which returns true/false) -->
        <p :style="styleObject"
           :class="{ bold: setBold, italic: setItalic }">
            {{ displayText }}
        </p>

    </div>
</template>

<script>
export default {
   props: {
     displayText: [String, Number],
     containerHeight: {
       type: Number,
       default: 200
     }
   },
   data: function() {
     return {
       showOptions: false,
       setTextAlign: '',
       setFontSize: '',
       setBold: false,
       setItalic: false
     };
   },
   computed: {
     styleObject: function() {
       return {
         textAlign: this.setTextAlign,
         fontSize: this.setFontSize + 'px',
         height: this.containerHeight + 'px'
       };
     }
   }
}
</script>

<style scoped>
  p {
    font-family: 'Tangerine', cursive;
    font-size: 42px;
    line-height: 42px;
    text-shadow: 2px 2px 2px #aaa;
    color: #4d4d4d;
    margin: 5px 0;
    border: 1px dotted grey;
    white-space: pre-line;
    overflow: hidden;
  }

  form {
    position: absolute;
    border-bottom: 1px dotted grey;
    margin-top: 10px;
    margin-left: 5px;
    padding-bottom: 5px;
  }

  select {
    height: 40%;
  }

  .bold {
    font-weight: bold;
  }

  .italic {
    font-style: italic;
  }


</style>
