const Hour = document.getElementById("Hour")

const Minutes = document.getElementById("Minutes")

const Secoonds = document.getElementById("Seconds")

const AMPM = document.getElementById("AMPM")


        
        let h = new Date()
        document.getElementById("Hour").innerHTML = h.getHours();
        
        let m = new Date()
        document.getElementById("Minutes").innerHTML = m.getMinutes();

        let s = new Date()
        document.getElementById("Seconds").innerHTML = s.getSeconds();
        
         let ampm ="AM";
         if(h > 12){
            h = h -12;
            ampm = "Pm"
         }
         document.getElementById("ampm").innerHTML = ampm;

         