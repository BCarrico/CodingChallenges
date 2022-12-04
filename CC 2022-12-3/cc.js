// 

function twiceAsOld(dadYearsOld, sonYearsOld) {
    for (let i = 0; i < 100; i++){
      if ((((dadYearsOld-i) / 2) === sonYearsOld)||(((dadYearsOld+i) / 2) === sonYearsOld)){
        return i
      } 
    }
  }