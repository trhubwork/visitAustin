// create a model object called 'myViewModel'
/*
var myViewModel = {
personName: ko.observable('Bo'),
personAge: ko.observable(123)

};
ko.applyBindings(myViewModel); // declares which part of the view model you want it applied.
*/
// put in favorite locations below
/*
var locations = [
      {
          title: 'Texas State Capital Building',
          name : 'The Capital',
          imgSrc : 'img/texascapbld.jpg',
          imgAttribution : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjn3tXaq4_PAhUE4CYKHTTQCTQQjRwIBw&url=http%3A%2F%2Fphotohome.com%2Fphotos%2Ftexas-pictures%2Faustin%2Ftexas-state-capitol-3.html&psig=AFQjCNHdyS1c-RFdW_pEybrMTGaVwu7-eA&ust=1473958631380664',
          location: {lat: 30.2746652, lng: -97.7425392}
      },
      {
          title: 'Stevie Ray Vaughan Statue',
          name : 'Stevie Ray Vaughan Statue',
          imgSrc : 'img/srvstatue.jpg',
          imgAttribution : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiBs5joq4_PAhWKdSYKHYmPA3EQjRwIBw&url=http%3A%2F%2Fwww.texasstandard.org%2Fstories%2Fdallas-citizens-raise-money-for-a-stevie-ray-vaughn-statue%2F&psig=AFQjCNHFESDyaYA3vrEELjNaR38-G5cjEQ&ust=1473958606313606',
          location: {lat: 30.2628386, lng: -97.7506877}
      },
      {
          title: '6th Street District - Best bars in Texas',
          name : '6th Street Music District',
          imgSrc : 'img/6thstreet.jpg',
          imgAttribution : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjutpGFrI_PAhXI6iYKHXaAAOIQjRwIBw&url=http%3A%2F%2Fwww.doudout.com%2F6th%2F6th-street-austin-tx-map&psig=AFQjCNHovCq2oTJSfEsWdfKJ_imPa3Tr-A&ust=1473958329889876',
          location: {lat: 30.274663, lng: -97.7611626}
      },
      {
          title: 'Darrell K. Royal Stadium',
          name : 'Darrell K. Royal Stadium',
          imgSrc : 'img/drmstadium.jpg',
          imgAttribution : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjZiqCOrI_PAhXDWSYKHQJ2AOAQjRwIBw&url=http%3A%2F%2Fphotos.overaustin.com%2FVideo%2FUTStadium%2Fi-CDcgrhR%2F&psig=AFQjCNEA4Hfay3iSWBEl2ylIeZbw-rT7Nw&ust=1473958358245950',
          location: {lat: 30.2836243, lng: -97.7347289}
      },
      {
          title: 'Amy\'s Ice Creams',
          name : 'Amy\'s Ice Creams',
          imgSrc : 'img/amysicecream.jpg',
          imgAttribution : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwi_-fLphJDPAhWG4CYKHdmpBl0QjRwIBw&url=http%3A%2F%2Fcityseeker.com%2Faustin-tx%2F717629-amy-s-ice-creams-westgate&bvm=bv.132479545,d.cWw&psig=AFQjCNF71SCcDwNWVMHhWYFui2fUmMb7Rw&ust=1473983010474572',
          location: {lat: 30.272028, lng: -97.754441}
      },
      {
          title: 'Shine Studios',
          name : 'Shine Studios',
          imgSrc : 'img/shinestudios.jpg',
          imgAttribution : 'http://www.shinestudiosaustin.com/images/control-room-new.jpg',
          location: {lat: 30.261618, lng: -97.730083}
      },
      {
          title: 'Franklin Barbecue',
          name : 'Franklin Barbecue',
          imgSrc : 'img/franklin-barbecue.jpg',
          imgAttribution : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwikgaW7hJDPAhXC5SYKHVXfCO0QjRwIBw&url=https%3A%2F%2Fwww.tripadvisor.com%2FRestaurant_Review-g30196-d1899234-Reviews-Franklin_Barbecue-Austin_Texas.html&psig=AFQjCNGeLOsViPhnsMBs-LGgwFkqoNfZZA&ust=1473982932457685',
          location: {lat: 30.270119, lng: -97.731273}
      }
  ];

var funTime = function(data) {


this.name = ko.observable(data.name);
this.imgSrc = ko.observable(data.imgSrc);
this.imgAttribution = ko.observable('https//www.flickr.com/photos');

}

var ViewModel = function() {
  var self = this;

  this.funList = ko.observableArray([]);

  locations.forEach(function(funItem){
    self.funList.push(new funTime(funItem));
  });

  this.currentFun = ko.observable( this.funList() [0]);


   this.setFun = function(clickedFun) {
     self.currentFun(clickedFun);

   };

 };

ko.applyBindings(new ViewModel());
*/
