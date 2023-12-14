// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function deletePost(i){
    $.ajax({
        url:'/Posts/Delete',
        Type:'POST',
        data:{
            id:i
        }
    }).then(function(data){
        window.location="/Posts";
    });
}