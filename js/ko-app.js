// create a model object called 'myViewModel'
/*
var myViewModel = {
personName: ko.observable('Bo'),
personAge: ko.observable(123)

};
ko.applyBindings(myViewModel); // declares which part of the view model you want it applied.
*/
// put in favorite locations below

var funPlaces = [
      {

          name : 'The Capital',
          imgSrc : 'img/texascapbld.jpg',
          imgAttribution : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjn3tXaq4_PAhUE4CYKHTTQCTQQjRwIBw&url=http%3A%2F%2Fphotohome.com%2Fphotos%2Ftexas-pictures%2Faustin%2Ftexas-state-capitol-3.html&psig=AFQjCNHdyS1c-RFdW_pEybrMTGaVwu7-eA&ust=1473958631380664'
      },
      {

          name : 'Stevie Ray Vaughn Statue',
          imgSrc : 'img/srvstatue.jpg',
          imgAttribution : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiBs5joq4_PAhWKdSYKHYmPA3EQjRwIBw&url=http%3A%2F%2Fwww.texasstandard.org%2Fstories%2Fdallas-citizens-raise-money-for-a-stevie-ray-vaughn-statue%2F&psig=AFQjCNHFESDyaYA3vrEELjNaR38-G5cjEQ&ust=1473958606313606'
      },
      {

          name : '6th Street',
          imgSrc : 'img/6thstreet.jpg',
          imgAttribution : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjutpGFrI_PAhXI6iYKHXaAAOIQjRwIBw&url=http%3A%2F%2Fwww.doudout.com%2F6th%2F6th-street-austin-tx-map&psig=AFQjCNHovCq2oTJSfEsWdfKJ_imPa3Tr-A&ust=1473958329889876'
      },
      {

          name : 'Darrell K. Royal Stadium',
          imgSrc : 'img/drmstadium.jpg',
          imgAttribution : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjZiqCOrI_PAhXDWSYKHQJ2AOAQjRwIBw&url=http%3A%2F%2Fphotos.overaustin.com%2FVideo%2FUTStadium%2Fi-CDcgrhR%2F&psig=AFQjCNEA4Hfay3iSWBEl2ylIeZbw-rT7Nw&ust=1473958358245950'
      },
      {

          name : 'Lake Travis',
          imgSrc : 'img/laketravis.jpg',
          imgAttribution : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiYl8uarI_PAhUD6SYKHcTcB-cQjRwIBw&url=http%3A%2F%2Flaketravisrental.net%2Fdefault.asp.pg-laketravisactivities&psig=AFQjCNEXLl91WaRO8aGErXpgMFWdf5cPsA&ust=1473958390535069'
      }
  ]

var funTime = function(data) {


this.name = ko.observable(data.name);
this.imgSrc = ko.observable(data.imgSrc);
this.imgAttribution = ko.observable('https//www.flickr.com/photos');

}

var ViewModel = function() {
  var self = this;

  this.funList = ko.observableArray([]);

  funPlaces.forEach(function(funItem){
    self.funList.push(new funTime(funItem));
  });

  this.currentFun = ko.observable( this.funList() [0]);

  /* this.incrementCounter = function() {
     this.clickCount(this.clickCount() + 1);

   }; */
   this.setFun = function(clickedFun) {
     self.currentFun(clickedFun);
   };
 };

ko.applyBindings(new ViewModel());
