let h1 = document.querySelector("h1");

let hour = document.querySelector("#hours");

 let minute = document.querySelector("#minutes");

 let second = document.querySelector("#seconds");

 let meridian= document.querySelector("#md");

 let btn = document.querySelector("#cc");
 
 let colorARR = ['red','blue','green','pink','brown','yellow','black'];

 function clock()
 {
    let d = new Date();
    
    hour.textContent = d.getHours()+":";

    minute.textContent = d.getMinutes()+ ":";

    second.textContent = d.getSeconds();

    if(hour.textContent > "12" &&  hour.textContent <="24")
    {
        meridian.textContent ="PM";
    }
    else
    {
        meridian.textContent ="AM";
    }
    
 }

 clock();  // function call

 setInterval(clock,1000);

btn.addEventListener("click",function()
{
  
  document.body.style.backgroundColor = colorARR[ Math.floor(Math.random()*7)];
})

h1.addEventListener("mouseover",function()
{
    h1.style.color =colorARR[ Math.floor(Math.random()*7)];

})
