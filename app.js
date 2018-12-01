var photoTh = $('.picture'),
    overlay2 = $('.overlay2');

photoTh.on('click', function() {
        var dataPhoto = $(this).attr('src'),
            dataTitle = $(this).data('title');

        overlay2.show();

        $('.picture-big').attr("src", dataPhoto);
        $('.photo-title').text(dataTitle);
    }
);

overlay2.on('click', function() {
    $(this).hide();
});