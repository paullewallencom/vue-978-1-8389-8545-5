var vm1 = new Vue({
  el: '#app',
  data: {
    event: {
      eventDate: 'August 14th - 16th',
      eventTitle: 'Summer Festival!',
      eventTitle2: 'v-text output',
      signUpText: 'Add your name to the guest list for <em>exclusive</em> offers:',
      eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!",
    },
    newNameText: '',
    guestName: [],
    eventCapacity: 5,
    eventCapacityPercentage: 0,
    effect1: "scale"
  },
  methods: {
    formSubmitted: function() {
      if(this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
        this.guestName.push(this.newNameText);
        // clear input field after enter
        this.newNameText = '';
        this.eventCapacityPercentage = this.guestName.length / (this.eventCapacity / 100);
      }
    },
    keyPressed: function() {
      console.log('keypressed');
    }
  },
  computed: {
    sortNames: function() {
      return this.guestName.sort();
    }
  },
  watch: {
    guestName: function(data) {
      console.log('Watch triggered');
    }
  },
  filters: {
    formatName: function(value) {
      // console.log(value);
      return value.slice(0,1).toUpperCase() + value.slice(1).toLowerCase();
    }
  },
  beforeCreate: function() {
    console.log('beforeCreate');
  },
  created: function() {
    console.log('created');
  },
  beforeMount: function() {
    console.log('beforeMount');
  },
  mounted: function() {
    console.log('mounted');
  },
  beforeUpdate: function() {
    console.log('beforeUpdate');
  },
  updated: function() {
    console.log('updated');
  },
  beforeDestroy: function() {
    console.log('beforeDestroy');
  },
  destroyed: function() {
    console.log('destroyed');
  }
});
//
var vm2 = new Vue({
  el: '#navigation',
  data: {
    appName: 'Guest List',
    navLinks: [
      {name: "Home", id: 1, url: "https://www.google.com"},
      {name: "Upcoming Events", id: 2, url: "https://www.amazon.com"},
      {name: "Guest Benefits", id: 3, url: "https://www.ebay.com"},
      {name: "Latest News", id: 4, url: "https://www.facebook.com"}
    ],
    object: {}
  },
  methods: {
    changeTitle: function() {
      this.$refs.name.innerText = "Title Changed!";
      console.log(this.$refs);
    }
  }
});
