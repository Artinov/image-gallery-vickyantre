$('#uploadForm').submit(function(e) {
    e.preventDefault();

    $.ajax({
        url: "/upload",
        method: "POST",
        cache: false,
        contentType: false,
        processData: false,
        data: new FormData(jQuery('#uploadForm')[0])
    }).then(function(res) {  
        $("#placeForPictures").html("");
        renderPicture();
    });

    return false;
});

function renderPicture(){
    $.ajax({
        url: "/pictures",
        method: "POST",
    }).then(function(images){

        images.forEach(function(image) {
            var $picture = $("#template > div").clone();

            $picture.find("[data-picture]").attr("src", image);
            $picture.find("[data-href]").attr("href", image);

            $("#placeForPictures").append($picture);
        });
    });
}




renderPicture();