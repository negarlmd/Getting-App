const h1 = document.getElementById("txt");
      const inp = document.getElementById("inp");
      function negar() {
        const temp = inp.value
        if (temp == "") {
          inp.style.border = "3px solid red";
        } else {
          inp.style.border = "3px solid green";
        }

      //  continue code

      // calc what time is it?
      const x=new Date().getHours()
      let flag = ''
      if(x<6){
        flag='midnigh 🌅'
      }else if(x<=9){
        flag='mornin ☀️'
      }else if(x<=13){
        flag='noon🌞'
      }else if(x<=16){
        flag='afternoon🌇'
      }else if(x<=20){
        flag='evening 🌅'
      }else{
        flag='night 🌙'
      }
h1.innerText = 'Welcome ' + temp + ' Good ' + flag;            // calc what time is it

      }