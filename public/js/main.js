const sbmbtn = document.getElementById('sbmbtn');
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp_value');
const temp_status = document.getElementById('temp_status');
const data_hide = document.querySelector('.data_hide ');

const getinfo = async(event)=>{

    event.preventDefault();
    let cityVal = cityname.value;
    
   
    

    if(cityVal === ""){
        city_name.innerText= `write city name before you search`;
        data_hide.classList.add('data_hide');

    }else{
        try{

            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9898af4b12d04f5bef8dc2b92c8f8507`
             const response = await fetch(url);
             const data = await response.json();
             const arrdata = [data];
           
             temp.innerText = arrdata[0].main.temp;
             city_name.innerText = `${arrdata[0].name} , ${arrdata[0].sys.country}`;

             tempMood = arrdata[0].weather[0].main;

             if(tempMood == "Clear"){
                 temp_status.innerHTML =
                " <i class='fas fa-sun ' style ='color :#eccc68;   '></i>"
             }else if(tempMood=="Clouds"){
                temp_status.innerHTML =
                " <i class='fas fa-cloud ' style ='color :#fff;   '></i>"
             }else if(tempMood=="Rain"){
                temp_status.innerHTML =
                " <i class='fas fa-cloud-rain ' style ='color :#a4b0be;   '></i>"
             }else{
                temp_status.innerHTML =
                " <i class='fas fa-sun ' style ='color :#eccc68;   '></i>"
             }

             data_hide.classList.remove('data_hide')
        }catch{
            city_name.innerText= `Plz enter the city name properly `;
            data_hide.classList.add('data_hide');
        }
        
    }
}

sbmbtn.addEventListener('click', getinfo);