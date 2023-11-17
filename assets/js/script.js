let movieList = [
  "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  "https://wallpapers.com/images/hd/makoto-shinkai-your-name-poster-yd4rjkxb6z58fxgs.jpg",
]
let titleList = ["Interstellar", "Your Name"]
let youtubeList = [
  "https://www.youtube.com/watch?v=zSWdZVtXT7E&pp=ygUUaW50ZXJzdGVsbGFyIHRyYWlsZXI%3D",
  "https://www.youtube.com/watch?v=soQXM3XVvIU&pp=ygUReW91ciBuYW1lIHRyYWlsZXI%3D",
]
function addMovie() {
  const movieInput = document.querySelector("#movie").value
  const movieTitle = document.querySelector("#movieTitle").value
  const youtubeLink = document.querySelector("#youtubeLink").value

  // Check if the ending is a .jpg image
  let firstCheck = movieInput.slice(-4)
  if (firstCheck !== ".jpg") return console.log("Link is not compatible")

  // Check if the movie has already been added to the favorites list
  if (linkIsValid(movieInput)) {
    console.log("Link is already in the list of favorite movies")
    return
  }
  // Check if the title is valid
  const regex = /^[a-zA-Z0-9\-áéíóúÁÉÍÓÚãõÃÕâêîôûÂÊÎÔÛäëïöüÄËÏÖÜ\s]+$/

  if (!regex.test(movieTitle)) {
    console.log("Invalid movie title!")
    return
  }
  // Check if the link is from YouTube
  if (!youtubeLink.startsWith("https://www.youtube.com/")) {
    console.log("The link is not from YouTube")
    return
  }
  movieList.push(movieInput)
  titleList.push(movieTitle)
  youtubeList.push(youtubeLink)

  addMoviesToScreen(movieList, titleList, youtubeList)
}

function linkIsValid(link) {
  return movieList.includes(link)
}

function addMoviesToScreen(img, title, link) {
  const movieListContainer = document.querySelector("#movieList")
  movieListContainer.innerHTML = ""
  for (let index = 0; index < img.length; index++) {
    const elementImg = img[index]
    const elementTitle = title[index]
    const elementLink = link[index]
    // Limpando oque tiver na tela
    movieListContainer.innerHTML += `
        <div class="item">
            <a href="${elementLink}" target="_blank"><img src="${elementImg}"></a>
            <p >${elementTitle}</p>
            
        </div>
        `
  }
}
addMoviesToScreen(movieList, titleList, youtubeList)
