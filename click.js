
$(document).ready(function(){
    $("#disp").click(function(){
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/users",
            success:function(articles){
               var output ="<table><thead><tr><th>name</th><th>username</th><th>email</th><th>address</th></tr>";
             
               for(var i in data['articles']){
                 
                     output+="<tr><td>"+data['articles'][i].title+"</td>"
                     output+="<td>"+data['articles'][i].description+"</td>";
                     output+="<td>"+data['articles'][i].url+"</td>";
                     output+="<td>"+data['articles'][i].address.street+"</td></tr>";
                  
                  $("#result").html(output);
               }
               output+= "</table>";
            }
        });
    });
});