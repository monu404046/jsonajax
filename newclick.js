
$(document).ready(function(){
    $("#disp").click(function(){
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/users",
            success:function(data){
               var output ="";
             
               for(var i in data){
                 
                     output+="<div class='container'><div class='row'>'<div class='col-4'> <div class='card-deck'><div class='card text-center'><div class='card-block'><h4 class='card-title'>"+data[i].id+"</h4>"
                     output+="<div class='card-body bg-secondary mb-3'><h4 class='card-title'>"+data[i].name+"</h4></div>"
                    output+="<p class='card-text'>"+data[i].username+"</p>"
                    output+="<p class='card-text'>"+data[i].email+"</p>"
                    output+="<p class='card-text'> <div class='card-footer bg-primary'>"+data[i].website+"</p></div>"
               
                  output+= "</div></div><br><br></div>";
               }
               $("#result").html(output);
            }
        });
    });
});