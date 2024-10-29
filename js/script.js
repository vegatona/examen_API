function DOGS() {
    $.get("https://dog.ceo/api/breeds/image/random", function (data) {
        $('#dog').attr('src', data.message)
    });
}