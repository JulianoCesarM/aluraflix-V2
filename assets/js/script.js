let movieList = [
  "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  "https://wallpapers.com/images/hd/makoto-shinkai-your-name-poster-yd4rjkxb6z58fxgs.jpg",
  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx161964-JpkEbHI8ivaP.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/0/09/Marley_Me_2008.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/6/62/How_to_Train_Your_Dragon_%28filme%29_Poster.jpg",
  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx161645-7I8Cip7XRDhV.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/93/73/27/20273941.jpg",
]
let titleList = [
  "Interstellar",
  "Your Name",
  "kage no jitsuryokusha ni naritakute",
  "Marley & I",
  "How to Train your Sragon",
  "Kusuriya no Hitorigoto",
  "Rocky 2 - A Revanche",
]
let youtubeList = [
  "https://www.youtube.com/watch?v=zSWdZVtXT7E&pp=ygUUaW50ZXJzdGVsbGFyIHRyYWlsZXI%3D",
  "https://www.youtube.com/watch?v=soQXM3XVvIU&pp=ygUReW91ciBuYW1lIHRyYWlsZXI%3D",
  "https://www.youtube.com/watch?v=14vrFaVJUXM&pp=ygUda2FnZSBubyBqaXRzdXJ5b2t1c2hhIHRyYWlsZXI%3D",
  "https://www.youtube.com/watch?v=Ws-9ra38AlI&pp=ygUTbWFybGV5IGUgZXUgdHJhaWxlcg%3D%3D",
  "https://www.youtube.com/watch?v=uv1V9BOb2M8&pp=ygUgY29tbyB0cmVpbmFyIHNldSBkcmFnw6NvIHRyYWlsZXI%3D",
  "https://www.youtube.com/watch?v=XYNGkSvFT8c&pp=ygUea3VzdXJpeWEgbm8gaGl0b3JpZ290byB0cmFpbGVy",
  "https://www.youtube.com/watch?v=A2P9ATb9Qx8&pp=ygUPcm9ja3kgMiB0cmFpbGVy",
]
function addMovie() {
  const movieInput = document.querySelector("#movie").value
  const movieTitle = document.querySelector("#movieTitle").value
  const youtubeLink = document.querySelector("#youtubeLink").value

  // Check if the ending is a .jpg image
  let firstCheck = movieInput.slice(-4)
  if (firstCheck !== ".jpg")
    return addMensagesToScreen("Link is not compatible")

  // Check if the movie has already been added to the favorites list
  if (linkIsValid(movieInput)) {
    addMensagesToScreen("Link is already in the list of favorite movies")
    return
  }
  // Check if the title is valid
  const regex = /^[a-zA-Z0-9\-áéíóúÁÉÍÓÚãõÃÕâêîôûÂÊÎÔÛäëïöüÄËÏÖÜ\s]+$/

  if (!regex.test(movieTitle)) {
    addMensagesToScreen("Invalid movie title!")
    return
  }
  // Check if the link is from YouTube
  if (!youtubeLink.startsWith("https://www.youtube.com/")) {
    addMensagesToScreen("The link is not from YouTube")
    return
  }
  movieList.push(movieInput)
  titleList.push(movieTitle)
  youtubeList.push(youtubeLink)

  addMoviesToScreen()
}

function linkIsValid(link) {
  return movieList.includes(link)
}

// Remover elementos da tela
function removeItem(element) {
  const elementValue = element.getAttribute("value")

  const index = titleList.indexOf(elementValue)
  movieList.splice(index, 1)
  youtubeList.splice(index, 1)
  titleList.splice(index, 1)
  addMoviesToScreen()
}
function addMoviesToScreen() {
  const movieListContainer = document.querySelector("#movieList")
  movieListContainer.innerHTML = ""
  for (let index = 0; index < movieList.length; index++) {
    const elementImg = movieList[index]
    const elementTitle = titleList[index]
    const elementLink = youtubeList[index]
    // Limpando oque tiver na tela
    movieListContainer.innerHTML += `
        <div class="item">
            <a href="${elementLink}" target="_blank"><img src="${elementImg}"></a>
            <p  title="${elementTitle}">${elementTitle}</p>
            <button value="${elementTitle}" class="removeItem" onclick="removeItem(this)">Remover</button>
        </div>
        `
  }
}
addMoviesToScreen()
function addMensagesToScreen(msg) {
  let msgError = document.querySelector("#msgError")
  msgError.hidden = false
  msgError.classList.add("msgError")
  msgError.innerHTML = msg
}
