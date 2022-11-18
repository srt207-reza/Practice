$(document).ready(() => {
  // my local varible \\
  let albumList = document.querySelector(".album");
  let photoList = document.querySelector(".photos");
  let photoListData = [];
  let albumData;
  // --------------------------------------------------------------------------- \\

  // get the slider image \\

  let myCarousel = $(".owl-carousel");

  // --------------------------------------------------------------------------- \\

  // get albums and add them to DOM \\
  const albumObject = fetch(
    "https://jsonplaceholder.typicode.com/users/1/albums"
  )
    .then((response) => {
      if (response.ok) return response.json();
      else throw Error(response.status);
    })
    .then((obj) => {
      for (let i = 0; i < obj.length; i++) {
        let liElem = document.createElement("li");

        liElem.setAttribute(
          "class",
          "py-3 font-monospace btn btn-primary mb-2"
        );
        liElem.setAttribute("id", `${obj[i].id}`);
        liElem.innerHTML = obj[i].title;

        albumList.append(liElem);
        liElem.addEventListener("click", liClickEvent);
      }

      albumData = obj;
    })
    .catch((error) => {
      console.log(error);
    });
  // ---------------------------------------------------------------------------- \\
  // add photos to DOM and refresh OWL Carousel and also initialize modal \\
  function liClickEvent(e) {
    let albumIndex = $(e.target).attr("id");

    photoList.innerHTML = "";

    myCarousel.trigger("destroy.owl.carousel");

    fetch(`https://jsonplaceholder.typicode.com/albums/${albumIndex}/photos`)
      .then((response) => {
        if (response.ok) return response.json();
        else throw Error(response.status);
      })
      .then((obj) => {
        for (let i = 0; i < obj.length; i++) {
          let newImg = document.createElement("img");

          newImg.setAttribute("src", `${obj[i].thumbnailUrl}`);
          newImg.setAttribute("id", i + 1);
          newImg.setAttribute("title", `${obj[i].title}`);
          newImg.setAttribute("style", "width:150px;");

          newImg.addEventListener("dblclick", showModal);

          photoListData[i] = `${obj[i].url}`;

          // refresh the slider image and upgrade them \\
          myCarousel
            .owlCarousel("add", newImg)
            .owlCarousel("update")
            .trigger("refresh.owl.carousel");

          myCarousel.data("owl.carousel").options.margin = 20;
          myCarousel.data("owl.carousel").options.autoWidth = true;
          myCarousel.data("owl.carousel").options.loop = true;
          myCarousel.data("owl.carousel").options.autoplay = true;
          myCarousel.data("owl.carousel").options.autoplayTimeout = 2000;
          myCarousel.data("owl.carousel").options.dots = false;
          myCarousel.data("owl.carousel").options.nav = false;
          myCarousel.data("owl.carousel").options.responsiveClass = true;
          myCarousel.data("owl.carousel").options.responsiveBaseElement = "";
          myCarousel.data("owl.carousel").options.responsiveRefreshRate = 10;
          myCarousel.data("owl.carousel").options.responsive = {
            0: {
              items: 1,
            },
            600: {
              items: 2,
            },
            1000: {
              items: 3,
            },
          };
          myCarousel.trigger("refresh.owl.carousel");
          // --------------------------------------------------------------------------- \\
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // ---------------------------------------------------------------------------- \\

  // open and close modal . . . \\
  function showModal(e) {
    let indexElem = $(e.target).attr("id");
    $(".myImg").attr("src", photoListData[indexElem - 1]);
    $(".modal").css("display", "block");
  }

  $(".modal-close").click((e) => {
    $(".modal").css("display", "none");
  });
  // ---------------------------------------------------------------------------- \\
});
