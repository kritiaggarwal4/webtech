const obj = {
  name: "Kriti",

  normalFunc: function () {
    console.log("Normal:", this.name);
  },

  arrowFunc: () => {
    console.log("Arrow:", this.name);
  }
};

obj.normalFunc();'  '
obj.arrowFunc();  
