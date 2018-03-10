window.onload = function(){ 
pantalla=document.getElementById("display");
}
x="0";
xi=1;
coma=0;



function numero(xx) {
         if (x=="0" || xi==1  ) {
            pantalla.innerHTML=xx;
            x=xx;
            }
         else {
            pantalla.innerHTML+=xx;
            x+=xx;
            }
         xi=0
         }




function numero(xx) {
         if (x=="0" || xi==1  ) { 
            pantalla.innerHTML=xx;
            x=xx;
            if (xx==".") { 
               pantalla.innerHTML="0.";
               x=xx;
               coma=1;
               }
           }
           else { 
               if (xx=="." && coma==0) { 
                   pantalla.innerHTML+=xx;
                   x+=xx;
                   coma=1; 
               }
             
               else if (xx=="." && coma==1) {} 
               	 
               else {
                   pantalla.innerHTML+=xx;
                   x+=xx
               }
            }
            xi=0 
    
        }

window.onload = function(){ 
pantalla=document.getElementById("display");
document.onkeydown = teclado;
}
x="0";
xi=1;
coma=0;
op="no";


	
function igualar() {
         if (op=="no") {
            pantalla.innerHTML=x;
            }
         else { 
            sl=ni+op+x;
            sol=eval(sl)
            pantalla.innerHTML=sol
            x=sol; 
            op="no";
            xi=1;
            }
        }

function operar(s) {
         igualar(); 
         ni=x;
         op=s;
         xi=1;
         }


function borradoTotal() {
         pantalla.innerHTML=0; 
         x="0"; 
         coma=0;
         ni=0 
         op="no"
         }


function opuest() { 
            nx=Number(x);
            nx=-nx;
            x=String(nx);
            pantalla.innerHTML=x;
            }