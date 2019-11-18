"use strict"

$(".dropWrapper .dropUp").on("dragover", function (e) {
    e.preventDefault()
    $(this).addClass("active")
})
$('.dropWrapper .dropUp').on('dragleave', function () {
    $(this).removeClass('active')
})
document.querySelector('.dropWrapper .dropUp').addEventListener('drop', function (e) {
    e.preventDefault()
    $(this).addClass('active')
    console.log(e.dataTransfer.files);

})