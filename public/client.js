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
        console.log(res);
    })

    return false;
});