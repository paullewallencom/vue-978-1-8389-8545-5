<template>
  <div class="row">
    <div class="col-sm-12">
    <h4>Upload image:</h4>
    <div class="form-group">
      <input type="file" class="form-control-file" id="fileUpload" @change="uploadFile">
    </div>
      <progress value="0" max="100" id="progressBar"></progress>
      <br>
      <img id="image">
      <button type="button" id="setImageButton" style="display:none" @click="setImage">Set Image</button>     
  </div>
</div>
</template>

<script>
  import Firebase from 'firebase'

  export default {
    data: function(){
      return {
        file: ''
      };
    },
    methods: {
      uploadFile: function(event) {
        // removes set image button each time the user click on image upload input so it can not be set before upoad
        document.getElementById('setImageButton').style.display = 'none';

        // select uploaded file
        this.file = event.target.files[0];
        var storageRef = Firebase.storage().ref('user_uploads/' + this.file.name);
        // storageRef.put(this.file)
        var upload = storageRef.put(this.file);

        // Create thumbnail
        var reader = new FileReader();

        reader.readAsDataURL(this.file);

        reader.onload = function(e) {
          document.getElementById('image').src = e.target.result;
        }

        // this section to be added for progress bar:

        upload.on('state_changed', function (snapshot) {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.getElementById('progressBar').value = progress;

          if(progress === 100) {
            document.getElementById('setImageButton').style.display = 'inline-block';
          }
        });

      },
      setImage: function() {
        this.$emit('displayImageChanged', this.file.name);
      }

    }
  }
</script>


<style scoped>
img {
  max-width: 200px;
}
</style>
