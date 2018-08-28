//animate smooth scroll
$('#parallax-effect').on('click', function () 
{
    const images = $('#image').position().top - 80;

    $('html, body').animate(
    {
        scrollTop: images
    }, 900);
});