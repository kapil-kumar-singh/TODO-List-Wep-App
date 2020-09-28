var discription_div = document.getElementById('discription_div');
var category_div = document.getElementById('category-div');
var due_date_div = document.getElementById('due-date-div')


window.addEventListener('click', function(){
    discription_div.style.backgroundColor = "white";
    category_div.style.backgroundColor = "white";
    due_date_div.style.backgroundColor = "white";

})


discription_div.addEventListener('click', function(e){
    e.stopPropagation() 
    discription_div.style.backgroundColor = "rgb(190,190,190)";
    category_div.style.backgroundColor = "white";
    due_date_div.style.backgroundColor = "white";
})

category_div.addEventListener('click', function(event){
    event.stopPropagation() 
    category_div.style.backgroundColor = "rgb(190,190,190)";
    discription_div.style.backgroundColor = "white";
    due_date_div.style.backgroundColor = "white";


})

due_date_div.addEventListener('click', function(event){
    event.stopPropagation() 
    due_date_div.style.backgroundColor = "rgb(190,190,190)";
    discription_div.style.backgroundColor = "white";
    category_div.style.backgroundColor = "white";
})

