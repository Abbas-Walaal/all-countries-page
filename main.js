document.getElementById('discover').addEventListener('click', loadCountries);

//load countries
function loadCountries(){
    var xhr=new XMLHttpRequest();
    xhr.open('GET','https://restcountries.eu/rest/v2/all',true);
    xhr.onload=function(){
        if(this.status==200){
            var countries=JSON.parse(this.responseText);
          
            var output='';
            for(var i in countries){
                output+=
                '<div class="country">'+
                '<img src="'+countries[i].flag+'"class="img-country">'+
                '<p>Name: '+countries[i].name+'</p>'+
                '<p>Region: '+countries[i].region+'</p>'+
                '<p>Population: '+countries[i].population+'</p>'+
                '</div>';
            }
            document.querySelector('.countries').innerHTML=output;
        }
    }
    xhr.send();
}