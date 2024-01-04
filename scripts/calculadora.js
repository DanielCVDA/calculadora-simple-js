let calculation=localStorage.getItem('calculation')||'';
      document.querySelector(".js-calculation").innerHTML=calculation;
      function updateCalculation(character){
        if(character==='C'){
          calculation='';
          document.querySelector(".js-calculation").innerHTML=calculation;
          localStorage.setItem('calculation',calculation);
        }else if(character==='%'){
          calculation+='/100';
          try{
              calculation=eval(calculation);
              const digitos = calculation.toString.length+6;
              calculation=calculation.toFixed(digitos);
              document.querySelector(".js-calculation").innerHTML=calculation;
              localStorage.setItem('calculation',String(calculation));
            }catch(error){
              updateCalculation('C');
              document.querySelector(".js-calculation").innerHTML='error';
            }
        }else{
          if(character==='='){
            try{
              prem=eval(calculation);
            }catch(error){
              updateCalculation('C');
              document.querySelector(".js-calculation").innerHTML='error';
            }
            if(prem){
              calculation=prem;
              const digitos = calculation.toString.length+6;
              calculation=calculation.toFixed(digitos);
              document.querySelector(".js-calculation").innerHTML=calculation;
              localStorage.setItem('calculation',String(calculation));
            }
          }else{
            calculation+=character;
            document.querySelector(".js-calculation").innerHTML=calculation;
            localStorage.setItem('calculation',calculation);
          }

          }
      }