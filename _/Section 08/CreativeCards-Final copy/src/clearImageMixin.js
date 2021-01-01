export const clearImageMixin = {
  methods: {
    // callback method to remove image and set default
    clearImage: function() {
      // add if statement to only add default image if user has already uploaded
      if(this.imageName != '') {
        this.imageName = 'IMG_1110.jpg'
      }
    }
  }
}