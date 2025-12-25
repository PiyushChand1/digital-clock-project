// logic ==   function
    function clock()
    {
        let d = new Date();

        let hour = document.querySelector(".hour");

    let minute = document.querySelector(".minute");

        let second = document.querySelector(".second");

     hour.textContent =  d.getHours()+":";

   minute.textContent =   d.getMinutes()+":";

    second.textContent =   d.getSeconds() ;

    let meridian = document.querySelector(".Meridian");
     
        if(hour.textContent > "12" && hour.textContent <="24")
        {
    meridian.textContent = "PM";
        }
        
        else
       {
    meridian.textContent = "AM";

       }

    
         
       
}
    setInterval(clock,1000);
    clock();
    // logic lagaune ho

    
