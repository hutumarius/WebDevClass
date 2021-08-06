const _editIcon = document.querySelector('._edit');
const cityName = document.querySelector('.city')
const searchBody = document.querySelector('.search')

class WeatherApplication {
    constructor(city) {
        this.city = city;
        this.baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=f6211bc24c258c57f7a7fba887afdd17`
        this.hourlyWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=f6211bc24c258c57f7a7fba887afdd17`
    }


    getCurrentWeather() {
        fetch(this.baseUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    getHourlyWeatherData() {

    }


}



_editIcon.addEventListener('click', (e) => {
    e.preventDefault();

    const inputElement = `<input type="text" class="searchcity" placeholder="Enter a city name" />`
    console.log('hello')
    _editIcon.style.display = 'none'
    cityName.style.display = 'none'
    searchBody.insertAdjacentHTML('afterbegin', inputElement);

    document.querySelector('.searchcity').addEventListener('focusout', (e) => {
        console.log('focus out testing....')
        cityName.innerHTML = document.querySelector('.searchcity').value
        let weather = new WeatherApplication(document.querySelector('.searchcity').value)
        _editIcon.style.display = "inline"; // visible
        cityName.style.display = 'inline'; // visible
        searchBody.removeChild(searchBody.children[0])
        weather.getCurrentWeather();

    })

})