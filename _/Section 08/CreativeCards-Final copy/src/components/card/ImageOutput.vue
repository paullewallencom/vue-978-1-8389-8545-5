<template>
  <div class="img-container"
        :style="styleObject"
        @mouseover="showOptions = true"
        @mouseleave="showOptions = false">

    <transition
        enter-active-class="custom-enter-active"
        leave-active-class="custom-leave-active">
      <button type="button"
          class="btn btn-outline-danger btn-sm"
          @click="clearImageProp"
          v-show="showOptions">Remove Image</button>
    </transition>

    <img id="outputImage">
  </div>
</template>

<script>
import Firebase from 'firebase'

export default {
  props: {
    displayImage: {
      type: String, // image name contains numbers, but always treated as a string in quotes
  },
    containerHeight: {
      type: Number,
      default: 200
  },
    clearImageProp: Function
  },
  data: function() {
    return {
      showOptions: false,
    }
  },
   watch: {
     displayImage: function() {
       var storageRef = Firebase.storage().ref('user_uploads/' + this.displayImage);
       storageRef.getDownloadURL().then(function(url) {
         var img = document.getElementById('outputImage');
         img.src = url;
         setDraggable();
       });
     }
   },
   computed: {
     styleObject: function() {
       return {
         height: this.containerHeight + 'px'
       }
     }
   }
 }

 function setDraggable() {
   $('#outputImage').draggable();
 };
 // This is how jquery shows, does not trigger when image component is used on more than one card page
// To resolve move to a function, call the function in the displayImage watcher above once the image is created

 // $( function () {
 //   $('#outputImage').draggable();
 // });

</script>

<style scoped>
  .img-container{
    border: 1px dotted grey;
    overflow: hidden;
    margin: 5px 0;
  }

  img {
    /*make bigger than container so it can be dragged into position*/
    width: 130%;
  }

  button {
    position: absolute;
    /*keep button over image*/
    z-index: 1;
  }
  


</style>
