
$(document).ready(function(){
    $("#disp").click(function(){
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/users",
            success:function(data){
               var output ="";
             
               for(var i in data){
                 
                     output+="<div class='border-primary mb-3'style='max-width: 18rem'><h5 class='header bg-primary'style='max-width: 18rem'>"+data[i].id+"</h5>"
                     output+="<div class='card-body bg-secondary mb-3'><h5 class='card-title'>"+data[i].name+"</h5></div>"
                    output+="<p class='card-text'>"+data[i].username+"</p>"
                    output+="<p class='card-text'>"+data[i].email+"</p>"
                  
               
                  output+= "</div>";
               }
               $("#result").html(output);
            }
        });
    });
});