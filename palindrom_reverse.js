//no.1 Palindrom
//sudah anti-caseSensitive
function cekPalindrom(str) {
    if(typeof str !== "string"){
      return "Input bukan teks!";
    } else {
      var str1= str.toLowerCase();
      var reverse = str1.split("").reverse().join("");
      
      if(str1 === reverse){
        return "Palindrom";
      } else {
        return "bukan palindrom!";
      }
  }
  }
  console.log(cekPalindrom("KaSuR iNi rUSaK"));
  
  //no.2 Reverse Word
  function reverseWord (kalimat) {
    return kalimat.split(' ').reverse().join(' ');
  }
  
  console.log(reverseWord("Saya Belajar Javascript"));