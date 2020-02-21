function chess(queen){
  // debugger
   var x = 0
   var s = 1
  for(i = 0; i < queen; i++){
    var str = "";
    if(i < queen/2){
      for(z = 0; z < queen; z++){
        if((z === 0 && i == 0) || (z=== i + x)){
         str += " G ";
        }else{
         str += " . ";
        } 
      }
    }else{
      for(d = 0; d < queen; d++ ){
        if(s !== queen - 1){
          if(d === s){
            str += " G ";
          }else{
            str += " . ";
          }
        }else{
          str += " . ";
        }
      }
     s+= 2
    }
    
    x +=1
    console.log(str)
  }
 

} 
chess(8);