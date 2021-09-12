function Animal() {
  var name;

  this.setName = function (thename) {
    name = thename;
  };

  this.showName = function () {
    console.log(name);
  };
}

module.exports=Animal;