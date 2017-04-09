$('#uploadForm').submit(function(e) {
    e.preventDefault();

    $(this).ajaxSubmit({
        success: function(response) {
            console.log('image uploaded and form submitted');
        }
    });
    return false;
});