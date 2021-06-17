var form = document.getElementById("myform")

form.addEventListener('submit', function(e){
    e.preventDefault()
    var search=document.getElementById("search").value

    var originalname=search.split(' ').join('')
    
    document.getElementById("result").innerHTML = ""
    fetch("https://api.github.com/users/"+originalname+"/repos")
    .then((result) => result.json())
    .then((data) => {
        console.log(data)
       if(search1.length==0)
       {
        for (var i = 0; i < data.length; i++) {
           
            var div = document.createElement("div");
            div.innerHTML = 'Repository Name : ' +data[i].name
            
            document.body.append(div);
        
         }
        }
        })
    

        
       
         var search1=document.getElementById("search1").value
    
       document.getElementById("result1").innerHTML = ""
       console.log("https://api.github.com/repos/"+originalname+"/"+search1+"/contents/")
         fetch("https://api.github.com/repos/"+originalname+"/"+search1+"/contents/")
         .then((result1) => result1.json())
    .then((data1) => {
       

        for (var j = 0; j < data1.length; j++) {
         
             var div1 = document.createElement("div1");
             div1.innerHTML = 'File Name : ' +data1[j].name
             
             
             document.body.append(div1);
             
         
          }
    })
       
        
    })

    

  


  




