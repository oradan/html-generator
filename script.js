
console.log(dataUs)

var main = document.getElementById('main');
var mainItem = document.createElement('div');
mainItem.classList = "row";
main.append(mainItem);

var locationCard = document.createElement('div');
locationCard.classList = "location-card col mb-3";
locationCard.innerHTML =  '<h2 class="h4  text-primary mb-2"><strong>'+dataUs.state+'</strong></h2>'
mainItem.append(locationCard);

var locationCardItem = document.createElement('div');
locationCardItem.classList = "row";
locationCard.append(locationCardItem);

for(var i =0;i<=dataUs.cities.length;i++){
var lastItem = locationCard.lastChild;
if(i%4===0&&i!=0){
    var locationCardItemd = document.createElement('div');
    locationCardItemd.classList = "row";
    locationCard.append(locationCardItemd);
}
var d = document.createElement('div');
d.classList="col-12 col-sm-6 col-lg-3";
d.innerHTML= '<h3 class="h5  text-primary mb-2">'+dataUs.cities[i]+'</h3>';
locationCard.lastChild.append(d)
}
//locationCard.lastChild.innerHTML="Olga"
// console.log(locationCard.lastChild)