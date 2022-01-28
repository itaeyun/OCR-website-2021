document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  dropZoneElement.addEventListener("click", (e) => {
    inputElement.click();
  });

  inputElement.addEventListener("change", (e) => {
    // if (inputElement.files.length) {
    //   updateThumbnail(dropZoneElement, inputElement.files[0]);
    // }
  });

  dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone--over");
  });

  ["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });

  dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files;
      updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove("drop-zone--over");
  });
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
  // let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

  // // First time - remove the prompt
  // if (dropZoneElement.querySelector(".drop-zone__prompt")) {
  //   dropZoneElement.querySelector(".drop-zone__prompt").remove();
  // }

  // // First time - there is no thumbnail element, so lets create it
  // if (!thumbnailElement) {
  //   thumbnailElement = document.createElement("div");
  //   thumbnailElement.classList.add("drop-zone__thumb");
  //   dropZoneElement.appendChild(thumbnailElement);
  // }

  // thumbnailElement.dataset.label = file.name;

  // // Show thumbnail for image files
  // if (file.type.startsWith("image/")) {
  //   const reader = new FileReader();

  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
  //   };
  // } else {
  //   thumbnailElement.style.backgroundImage = null;
  // }

  url = document.location.href.split('/');

  if (url[3] == 'ocr.html' || url[3] == 'ocr'){
    sessionStorage.removeItem("text_ocr");
    $('#showFiles').empty();
    $('#previewImg').attr('src', '');
    $("#result_text").val("");
  
    var files = $("input[name=profile_pt]")[0].files;
    previewImg.src = URL.createObjectURL(files[0]);
  
    console.log(files);
  
    var fileList = "";
    for (i = 0; i < files.length; i++) {
        fileList += "<a id='files" + i + "' href='javascript:showContent(" + i + ")'>" + (i + 1) + ". " + files[i].name + '&nbsp </a>';
    }
    $('#showFiles').append(fileList);
  }

  if (url[3] == 'templateEdit.html' || url[3] == 'templateEdit' || url[3] == 'templateAdd.html' || url[3] == 'templateAdd'){
    changeImage(0, 0);
  }
}
