function convertToRoman(num) {
    var str ='';
      str += num;
      var result = [];
      var num1 = '';
      var num2 = '';
      var num3 = '';
      var num4 = '';
      if (str.length == 0){
      result = [];
      }else if (str.length > 0){
        switch (str[str.length-1]){
        case "1" :
        num1 = "I";
        break;
        case "2" :
        num1 = "II";
        break;
          case "3" :
        num1 = "III";
        break;
          case "4" :
        num1 = "IV";
        break;
          case "5" :
        num1 = "V";
        break;
          case "6" :
        num1 = "VI";
        break;
          case "7" :
        num1 = "VII";
        break;
          case "8" :
        num1 = "VIII";
        break;
          case "9" :
        num1 = "IX";
        break;
          
      }
        switch (str[str.length-2]){
            
          case "1" :
        num2 = "X";
        break;
          case "2" :
        num2 = "XX";
        break;
          case "3" :
        num2 = "XXX";
        break;
          case "4" :
        num2 = "XL";
        break;
          case "5" :
        num2 = "L";
        break;
          case "6" :
        num2 = "LX";
        break;
          case "7" :
        num2 = "LXX";
        break;
          case "8" :
        num2 = "LXXX";
        break;
          case "9" :
        num2 = "XC";
        break;
        }
        switch (str[str.length-3]){
            
          case "1" :
       num3 = "C";
        break;
          case "2" :
       num3 = "CC";
        break;
          case "3" :
       num3 = "CCC";
        break;
          case "4" :
       num3 = "CD";
        break;
          case "5" :
       num3 = "D";
        break;
          case "6" :
       num3 = "DC";
        break;
          case "7" :
       num3 = "DCC";
        break;
          case "8" :
       num3 = "DCCC";
        break;
          case "9" :
       num3 = "CM";
        break;
        }
        switch (str[str.length-4]){
            
          case "1" :
        num4 = "M";
        break;
          case "2" :
        num4 = "MM";
        break;
          case "3" :
        num4 = "MMM";
        break;
        }
      }
    result.push(num4,num3,num2,num1);
      return result.join("");
    }
    
    convertToRoman(39999);
    
    
    convertToRoman(36);