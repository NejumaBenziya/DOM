function showImage()
{
    
  const images = [
    {url: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160"},
    {url: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195"},
    {url: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343"}
  ];

  
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    const imgElement = document.getElementById('randomImage');

    imgElement.src = randomImage.url;
    imgElement.width = randomImage.width;
    imgElement.height = randomImage.height;

    

}

  