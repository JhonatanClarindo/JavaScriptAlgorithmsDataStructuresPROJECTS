function palindrome(str) {
    let regex=/[A-Za-z0-9]+/g
    
    let target = str.match(regex).join("").toLowerCase()
    
    return target==target.split("").reverse().join("")
    
    
    }
    
    
    
    palindrome("eye");
    