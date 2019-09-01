// $('button').click(function () {
//     $('h1').css('color', 'red')
// })

$('#tombol').on('click', function () {
    $('#wrapper').html('<button id="tombol2">TOMBOL 2</button>');
})

$('#wrapper').on('click', '#tombol2', function () {
    alert('HELLO!')
})