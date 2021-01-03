// 题解一：
function getDrinkByProfession(param){
  var value = param.toLowerCase()
  switch(value){
      case 'jabroni':
        return 'Patron Tequila';
        break;
      case 'school counselor':
        return 'Anything with Alcohol';
        break;
      case 'programmer':
        return 'Hipster Craft Beer';
        break;
      case 'bike gang member':
        return 'Moonshine';
        break;
      case 'politician':
        return 'Your tax dollars';
        break;
      case 'rapper':
        return 'Cristal';
        break;
      default:
        return 'Beer';
  }
}

// 题解二：Clever Solution
const drinks = {
  "jabroni": "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  "programmer": "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  "politician": "Your tax dollars",
  "rapper": "Cristal"
}

const getDrinkByProfession = profession => drinks[profession.toLowerCase()] || "Beer"