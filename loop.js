$("#oblicz").on('click',function(){
  let arr = [];
  let parzydodawanie = 0;
  parzydodawanie = parseInt(parzydodawanie);
  let ilosc_parzy = 0;
  ilosc_parzy = parseInt(ilosc_parzy);

  let nieparzydodawanie = 0;
  nieparzydodawanie = parseInt(nieparzydodawanie);
  let ilosc_nieparzy = 0;
  ilosc_nieparzy = parseInt(ilosc_nieparzy);

  let amount =  $(".srednia").length;

  for(let i=1; i<=amount; i++){
      let cos = $(".srednia:nth-child("+i+")").text();
      cos = parseInt(cos);
      if(cos%2==0){
          parzydodawanie = parzydodawanie + cos;
          ilosc_parzy = ilosc_parzy+1;
      }
      else{
        nieparzydodawanie = nieparzydodawanie + cos;
        ilosc_nieparzy = ilosc_nieparzy + 1;
      }
      arr.push(cos);
  }
console.log("Nie posortowane: ");
console.log(arr);
arr.sort();
console.log("Posortowane: ");
console.log(arr);
  for(let x=0; x<arr.length; x++){
    let plus = x+1;
     $(".srednia:nth-child("+plus+")").html(arr[x]);
  }

  parzydodawanie = parzydodawanie/ilosc_parzy;

  nieparzydodawanie = nieparzydodawanie/ilosc_nieparzy;

  alert("Suma arytmetyczna z parzystych: "+ parzydodawanie);
  alert("Suma arytmetyczna z nieparzystych: "+ nieparzydodawanie);

});
