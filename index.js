/* eslint-disable indent */
const apiKey = 'AIzaSyAeoVFkKSn70cnmeJrAcXZccwkrUk1WGC8';
const youtubeApi = 'https://www.googleapis.com/youtube/v3/search';

function main() {
  $('.search').click(function () {
    let searchText = $('#searchText').val();

    let params = {
      part: 'snippet',
      q: searchText,
      type: 'video',
      key: apiKey
    };
    //takes an object and turns it into query for us
    let queryString = $.param(params);
    console.log(queryString);

    let apiRequest = `${youtubeApi}?${queryString}`;
    console.log(apiRequest);

    fetch(apiRequest).then(function(response){
      return response.json();
    }).then(function(jsonData){
      render(jsonData);
    });

    function render(jsonData){
      let htmlTemplate = [];
    console.log(jsonData);
        for (let i =0; i <jsonData.items.length; i++){
            let video = jsonData.items[i].snippet;
            htmlTemplate.push(`
            <h3><a href="">${video.title}</a></h3>
            <p>${video.description}</p>
            <img src="${video.thumbnails.default.url}" alt="">
            `);
            
        }
        $('.results').html(htmlTemplate);
    }


  });
}

$(main);


