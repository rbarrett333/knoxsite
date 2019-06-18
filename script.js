
// order of shops used in ShopArr; ShopObj is not used (just a reference)
//var ShopObj = {
//  HoneyS: 0,
//  HoneyW: 0,
//  EmptyCup: 0,
//  KBrewW: 0,
//  OCJava: 0,
//  Remedy: 0,
//  Awaken: 0,
//  PearlU: 0,
//  Third: 0,
//  WildLove: 0,
//  KBrewN: 0
//};

var ShopArr = [0,0,0,0,0,0,0,0,0,0,0]

document.getElementById("outcomediv").style = "display: none";

// code for choosing short or long calculation---------
var type1 = 0;

document.getElementById("typebox1").addEventListener("click",function(){
  type1 = "short";
  document.getElementById("weighted").style = "display: none;";
  document.getElementById("typebox1").style = "background-color: #5BD3C7;";
  document.getElementById("typebox1").style.borderColor = " #5BD3C7";
  document.getElementById("typebox2").style = "background-color: #E0E4EE;";
  });
document.getElementById("typebox2").addEventListener("click",function(){
  type1 = "long";
  document.getElementById("weighted").style = "display: block;";
  document.getElementById("typebox2").style = "background-color: #5BD3C7;";
  document.getElementById("typebox2").style.borderColor = " #5BD3C7";
  document.getElementById("typebox1").style = "background-color: #E0E4EE;";
  });

document.getElementById("typebox1").addEventListener("mouseover",function(){
  document.getElementById("typebox1").style.fontSize = "1.4em";
  document.getElementById("typebox1").style.borderColor = " #5BD3C7";
  });

document.getElementById("typebox2").addEventListener("mouseover",function(){
  document.getElementById("typebox2").style.fontSize = "1.4em";
  document.getElementById("typebox2").style.borderColor = " #5BD3C7";
  });

document.getElementById("typebox1").addEventListener("mouseout",function(){
  document.getElementById("typebox1").style.fontSize = "1.25em";
  if (type1 == "short") {
  document.getElementById("typebox1").style.borderColor = " #5BD3C7";
  } else {
  document.getElementById("typebox1").style.borderColor = " #E0E4EE";
  };
});

document.getElementById("typebox2").addEventListener("mouseout",function(){
 document.getElementById("typebox2").style.fontSize = "1.25em";
  if (type1 == "long") {
  document.getElementById("typebox2").style.borderColor = " #5BD3C7";
  } else {
  document.getElementById("typebox2").style.borderColor = "#E0E4EE";
  };
});

// code for selecting location-------------
var loc1 = 0

document.getElementById("northmap").addEventListener("click",function(){
  loc1 = 1;
  document.getElementById("loctag").innerHTML = "Location: " + loc1;
  document.getElementById("northmap").style.borderColor = "#5BD3C7";
  document.getElementById("westmap").style.borderColor = "#141521";
  document.getElementById("downmap").style.borderColor = "#141521";
  });

document.getElementById("downmap").addEventListener("click",function(){
  loc1 = 2;
  document.getElementById("loctag").innerHTML = "Location: " + loc1;
  document.getElementById("downmap").style.borderColor = "#5BD3C7";
  document.getElementById("westmap").style.borderColor = "#141521";
  document.getElementById("northmap").style.borderColor = "#141521";
});

document.getElementById("westmap").addEventListener("click",function(){
  loc1 = 3;
  document.getElementById("loctag").innerHTML = "Location: " + loc1;
  document.getElementById("westmap").style.borderColor = "#5BD3C7";
  document.getElementById("downmap").style.borderColor = "#141521";
  document.getElementById("northmap").style.borderColor = "#141521";
});

document.getElementById("westmap").addEventListener("mouseover",function(){
  document.getElementById("westmap").style.borderColor = "#E0E4EE";
  document.getElementById("westmap").style.borderRadius = "25px";
  });

document.getElementById("downmap").addEventListener("mouseover",function(){
 document.getElementById("downmap").style.borderColor = "#E0E4EE";
 document.getElementById("downmap").style.borderRadius = "25px";
  });

document.getElementById("northmap").addEventListener("mouseover",function(){
  document.getElementById("northmap").style.borderColor = "#E0E4EE";
  document.getElementById("northmap").style.borderRadius = "25px";
  });

document.getElementById("westmap").addEventListener("mouseout",function(){
  if (loc1 == 3) {
    document.getElementById("westmap").style.borderColor = " #5BD3C7";
  } else {
    document.getElementById("westmap").style.borderColor = " #141521";
   };
 });

document.getElementById("downmap").addEventListener("mouseout",function(){
 if (loc1 == 2) {
   document.getElementById("downmap").style.borderColor = "#5BD3C7";
 } else {
   document.getElementById("downmap").style.borderColor = " #141521";
  };
});

document.getElementById("northmap").addEventListener("mouseout",function(){
  if (loc1 == 1) {
    document.getElementById("northmap").style.borderColor = "#5BD3C7";
  } else {
    document.getElementById("northmap").style.borderColor = " #141521";
   };
 });


// selecting travel distance---------------
var dist1 = 0

document.getElementById("distbox1").addEventListener("click",function(){
  dist1 = 3;
  document.getElementById("distbox1").style = "background-color: #5BD3C7;";
  document.getElementById("distbox1").style.borderColor = "#5BD3C7";
  document.getElementById("distbox2").style = "background-color: #E0E4EE;";
  document.getElementById("distbox3").style = "background-color: #E0E4EE;";
  document.getElementById("disttag").innerHTML = "Distance: " + dist1;
  });

document.getElementById("distbox2").addEventListener("click",function(){
  dist1 = 2;
  document.getElementById("distbox2").style = "background-color: #5BD3C7;";
  document.getElementById("distbox2").style.borderColor = " #5BD3C7";
  document.getElementById("distbox1").style = "background-color: #E0E4EE;";
  document.getElementById("distbox3").style = "background-color: #E0E4EE;";
  document.getElementById("disttag").innerHTML = "Distance: " + dist1;
  });

document.getElementById("distbox3").addEventListener("click",function(){
  dist1 = 1;
  document.getElementById("distbox3").style = "background-color: #5BD3C7;";
  document.getElementById("distbox3").style.borderColor = " #5BD3C7";
  document.getElementById("distbox1").style = "background-color: #E0E4EE;";
  document.getElementById("distbox2").style = "background-color: #E0E4EE;";
  document.getElementById("disttag").innerHTML = "Distance: " + dist1;
  });

document.getElementById("distbox1").addEventListener("mouseover",function(){
  document.getElementById("distbox1").style.borderColor = "#5BD3C7";
  document.getElementById("distbox1").style.fontSize = "1.4em";
  });

document.getElementById("distbox2").addEventListener("mouseover",function(){
  document.getElementById("distbox2").style.borderColor = "#5BD3C7";
  document.getElementById("distbox2").style.fontSize = "1.4em";
  });

document.getElementById("distbox3").addEventListener("mouseover",function(){
  document.getElementById("distbox3").style.borderColor = "#5BD3C7";
  document.getElementById("distbox3").style.fontSize = "1.4em";
  });

document.getElementById("distbox1").addEventListener("mouseout",function(){
  document.getElementById("distbox1").style.fontSize = "1.25em";
  if (dist1 == 3) {
    document.getElementById("distbox1").style.borderColor = "#5BD3C7";
  } else {
    document.getElementById("distbox1").style.borderColor = " #E0E4EE";
   };
 });

document.getElementById("distbox2").addEventListener("mouseout",function(){
  document.getElementById("distbox2").style.fontSize = "1.25em";
 if (dist1 == 2) {
   document.getElementById("distbox2").style.borderColor = "#5BD3C7";
 } else {
   document.getElementById("distbox2").style.borderColor = " #E0E4EE";
  };
});

document.getElementById("distbox3").addEventListener("mouseout",function(){
  document.getElementById("distbox3").style.fontSize = "1.25em";
  if (dist1 == 1) {
    document.getElementById("distbox3").style.borderColor = "#5BD3C7";
  } else {
    document.getElementById("distbox3").style.borderColor = " #E0E4EE";
   };
 });

// selecting parking ------------------------
var park1 = 0;

document.getElementById("parkbox1").addEventListener("click",function(){
  park1 = 3;
  document.getElementById("parkbox1").style = "background-color: #5BD3C7;";
  document.getElementById("parkbox1").style.borderColor = "#5BD3C7";
  document.getElementById("parkbox2").style = "background-color: #E0E4EE;";
  document.getElementById("parkbox3").style = "background-color: #E0E4EE;";
  document.getElementById("parktag").innerHTML = "Parking: " + park1;
  });

document.getElementById("parkbox2").addEventListener("click",function(){
  park1 = 2;
  document.getElementById("parkbox2").style = "background-color: #5BD3C7;";
  document.getElementById("parkbox2").style.borderColor = "#5BD3C7";
  document.getElementById("parkbox1").style = "background-color: #E0E4EE;";
  document.getElementById("parkbox3").style = "background-color: #E0E4EE;";
  document.getElementById("parktag").innerHTML = "Parking: " + park1;
  });

document.getElementById("parkbox3").addEventListener("click",function(){
  park1 = 1;
  document.getElementById("parkbox3").style = "background-color: #5BD3C7;";
  document.getElementById("parkbox3").style.borderColor = "#5BD3C7";
  document.getElementById("parkbox1").style = "background-color: #E0E4EE;";
  document.getElementById("parkbox2").style = "background-color: #E0E4EE;";
  document.getElementById("parktag").innerHTML = "Parking: " + park1;
  });

  document.getElementById("parkbox1").addEventListener("mouseover",function(){
    document.getElementById("parkbox1").style.borderColor = "#5BD3C7";
    document.getElementById("parkbox1").style.fontSize = "1.4em";
    });

  document.getElementById("parkbox2").addEventListener("mouseover",function(){
    document.getElementById("parkbox2").style.borderColor = "#5BD3C7";
    document.getElementById("parkbox2").style.fontSize = "1.4em";
    });

  document.getElementById("parkbox3").addEventListener("mouseover",function(){
    document.getElementById("parkbox3").style.borderColor = "#5BD3C7";
    document.getElementById("parkbox3").style.fontSize = "1.4em";
    });

  document.getElementById("parkbox1").addEventListener("mouseout",function(){
    document.getElementById("parkbox1").style.fontSize = "1.25em";
    if (park1 == 3) {
      document.getElementById("parkbox1").style.borderColor = "#5BD3C7";
    } else {
      document.getElementById("parkbox1").style.borderColor = "#E0E4EE";
     };
   });

 document.getElementById("parkbox2").addEventListener("mouseout",function(){
    document.getElementById("parkbox2").style.fontSize = "1.25em";
   if (park1 == 2) {
     document.getElementById("parkbox2").style.borderColor = "#5BD3C7";
   } else {
     document.getElementById("parkbox2").style.borderColor = " #E0E4EE";
    };
  });

document.getElementById("parkbox3").addEventListener("mouseout",function(){
    document.getElementById("parkbox3").style.fontSize = "1.25em";
  if (park1 == 1) {
    document.getElementById("parkbox3").style.borderColor = "#5BD3C7";
  } else {
    document.getElementById("parkbox3").style.borderColor = "#E0E4EE";
   };
 });

// selecting coffee quality------------------
var cof1 = 0;

document.getElementById("cofbox1").addEventListener("click",function(){
  cof1 = 3;
  document.getElementById("cofbox1").style = "background-color: #5BD3C7;";
  document.getElementById("cofbox1").style.borderColor = "#5BD3C7";
  document.getElementById("cofbox2").style = "background-color: #E0E4EE;";
  document.getElementById("cofbox3").style = "background-color: #E0E4EE;";
  document.getElementById("coftag").innerHTML = "Coffee: " + cof1;
  });

document.getElementById("cofbox2").addEventListener("click",function(){
  cof1 = 2;
  document.getElementById("cofbox2").style = "background-color: #5BD3C7;";
  document.getElementById("cofbox2").style.borderColor = "#5BD3C7";
  document.getElementById("cofbox1").style = "background-color: #E0E4EE;";
  document.getElementById("cofbox3").style = "background-color: #E0E4EE;";
  document.getElementById("coftag").innerHTML = "Coffee: " + cof1;
  });

document.getElementById("cofbox3").addEventListener("click",function(){
  cof1 = 1;
  document.getElementById("cofbox3").style = "background-color: #5BD3C7;";
  document.getElementById("cofbox3").style.borderColor = "#5BD3C7";
  document.getElementById("cofbox1").style = "background-color: #E0E4EE;";
  document.getElementById("cofbox2").style = "background-color: #E0E4EE;";
  document.getElementById("coftag").innerHTML = "Coffee: " + cof1;
  });

 document.getElementById("cofbox1").addEventListener("mouseover",function(){
   document.getElementById("cofbox1").style.fontSize = "1.4em";
   document.getElementById("cofbox1").style.borderColor = "#5BD3C7";
   });

document.getElementById("cofbox2").addEventListener("mouseover",function(){
   document.getElementById("cofbox2").style.fontSize = "1.4em";
   document.getElementById("cofbox2").style.borderColor = "#5BD3C7";
   });

document.getElementById("cofbox3").addEventListener("mouseover",function(){
   document.getElementById("cofbox3").style.fontSize = "1.4em";
   document.getElementById("cofbox3").style.borderColor = " #5BD3C7";
   });

document.getElementById("cofbox1").addEventListener("mouseout",function(){
   document.getElementById("cofbox1").style.fontSize = "1.25em";
   if (cof1 == 3) {
     document.getElementById("cofbox1").style.borderColor = "#5BD3C7";
   } else {
     document.getElementById("cofbox1").style.borderColor = "#E0E4EE";
    };
  });

document.getElementById("cofbox2").addEventListener("mouseout",function(){
   document.getElementById("cofbox2").style.fontSize = "1.25em";
  if (cof1 == 2) {
    document.getElementById("cofbox2").style.borderColor = "#5BD3C7";
  } else {
    document.getElementById("cofbox2").style.borderColor = "#E0E4EE";
   };
 });

document.getElementById("cofbox3").addEventListener("mouseout",function(){
   document.getElementById("cofbox3").style.fontSize = "1.25em";
  if (cof1 == 1) {
    document.getElementById("cofbox3").style.borderColor = "#5BD3C7";
  } else {
    document.getElementById("cofbox3").style.borderColor = "#E0E4EE";
   };
 });

// selecting food quality-----------------
var food1= 0;

document.getElementById("foodbox1").addEventListener("click",function(){
  food1 = 3;
  document.getElementById("foodbox1").style = "background-color: #5BD3C7;";
  document.getElementById("foodbox1").style.borderColor = "#5BD3C7";
  document.getElementById("foodbox2").style = "background-color: #E0E4EE;";
  document.getElementById("foodbox3").style = "background-color: #E0E4EE;";
  document.getElementById("foodtag").innerHTML = "Food: " + food1;
  });

document.getElementById("foodbox2").addEventListener("click",function(){
  food1 = 2;
  document.getElementById("foodbox2").style = "background-color: #5BD3C7;";
  document.getElementById("foodbox2").style.borderColor = "#5BD3C7";
  document.getElementById("foodbox1").style = "background-color: #E0E4EE;";
  document.getElementById("foodbox3").style = "background-color: #E0E4EE;";
  document.getElementById("foodtag").innerHTML = "Food: " + food1;
  });

document.getElementById("foodbox3").addEventListener("click",function(){
  food1 = 1;
  document.getElementById("foodbox3").style = "background-color: #5BD3C7;";
  document.getElementById("foodbox3").style.borderColor = "#5BD3C7";
  document.getElementById("foodbox1").style = "background-color: #E0E4EE;";
  document.getElementById("foodbox2").style = "background-color:#E0E4EE;";
  document.getElementById("foodtag").innerHTML = "Food: " + food1;
  });

document.getElementById("foodbox1").addEventListener("mouseover",function(){
   document.getElementById("foodbox1").style.fontSize = "1.4em";
   document.getElementById("foodbox1").style.borderColor = "#5BD3C7";
   });

document.getElementById("foodbox2").addEventListener("mouseover",function(){
   document.getElementById("foodbox2").style.fontSize = "1.4em";
   document.getElementById("foodbox2").style.borderColor = "#5BD3C7";
   });

document.getElementById("foodbox3").addEventListener("mouseover",function(){
   document.getElementById("foodbox3").style.fontSize = "1.4em";
   document.getElementById("foodbox3").style.borderColor = "#5BD3C7";
   });

document.getElementById("foodbox1").addEventListener("mouseout",function(){
   document.getElementById("foodbox1").style.fontSize = "1.25em";
   if (food1 == 3) {
     document.getElementById("foodbox1").style.borderColor = "#5BD3C7";
   } else {
     document.getElementById("foodbox1").style.borderColor = " #E0E4EE";
    };
  });

document.getElementById("foodbox2").addEventListener("mouseout",function(){
  document.getElementById("foodbox2").style.fontSize = "1.25em";
  if (food1 == 2) {
    document.getElementById("foodbox2").style.borderColor = "#5BD3C7";
  } else {
    document.getElementById("foodbox2").style.borderColor = " #E0E4EE";
   };
 });

document.getElementById("foodbox3").addEventListener("mouseout",function(){
  document.getElementById("foodbox3").style.fontSize = "1.25em";
  if (food1 == 1) {
    document.getElementById("foodbox3").style.borderColor = "#5BD3C7";
  } else {
    document.getElementById("foodbox3").style.borderColor = " #E0E4EE";
   };
 });

//selecting level of random-----------------
var rand1 = 0;

document.getElementById("randbox1").addEventListener("click",function(){
  rand1 = 1;
  document.getElementById("randbox1").style = "background-color: #5BD3C7;";
  document.getElementById("randbox1").style.borderColor = "#5BD3C7";
  document.getElementById("randbox2").style = "background-color: #E0E4EE;";
  document.getElementById("randtag").innerHTML = "Random: " + rand1;
  });

document.getElementById("randbox2").addEventListener("click",function(){
  rand1 = 5;
  document.getElementById("randbox2").style = "background-color: #5BD3C7;";
  document.getElementById("randbox2").style.borderColor = "#5BD3C7";
  document.getElementById("randbox1").style = "background-color: #E0E4EE;";
  document.getElementById("randtag").innerHTML = "Random: " + rand1;
  });

document.getElementById("randbox1").addEventListener("mouseover",function(){
 document.getElementById("randbox1").style.fontSize = "1.4em";
 document.getElementById("randbox1").style.borderColor = "#5BD3C7";
 });

document.getElementById("randbox2").addEventListener("mouseover",function(){
 document.getElementById("randbox2").style.fontSize = "1.4em";
 document.getElementById("randbox2").style.borderColor = "#5BD3C7";
 });

document.getElementById("randbox1").addEventListener("mouseout",function(){
 document.getElementById("randbox1").style.fontSize = "1.25em";
 if (rand1 == 1) {
 document.getElementById("randbox1").style.borderColor = "#5BD3C7";
 } else {
 document.getElementById("randbox1").style.borderColor = "#E0E4EE";
  };
});

document.getElementById("randbox2").addEventListener("mouseout",function(){
 document.getElementById("randbox2").style.fontSize = "1.25em";
 if (rand1 == 5) {
  document.getElementById("randbox2").style.borderColor = "#5BD3C7";
  } else {
  document.getElementById("randbox2").style.borderColor = "#E0E4EE";
 };
});

//  set up calculations for selectors; the array is defined [north, down, west]
var locarr1 = [1,1,1];

function locCalc1 () {
//calculates location array for north
  if (loc1 == 1 && dist1 == 1) {
  locarr1 = [1,0,0];
} else if (loc1 == 1 && dist1 ==2) {
  locarr1 = [1,1,0];
} else {locarr1 = [1,1,1];}
};

function locCalc2 () {
  //calculates location array for down
  if (loc1 == 2 && dist1 ==1) {
  locarr1 = [0,1,0];
} else if (loc1 == 2 && dist1 == 2) {
  locarr1 = [1,1,0];
} else {locarr1 = [1,1,1];}
};

function locCalc3 () {
  //calculates location array for west
  if (loc1 == 3 && dist1 ==1) {
  locarr1 = [0,0,1];
} else if (loc1 == 3 && dist1 == 2) {
  locarr1 = [0,1,1];
} else {locarr1 = [1,1,1];}
};

// run calculations

document.getElementById("getResult").addEventListener("click",function(){
  if (loc1 == 1) {locCalc1();};
  if (loc1 == 2) {locCalc2();};
  if (loc1 == 3) {locCalc3();};
  if (rand1 == 0) {rand1 = 1};
  coffeeCalc(locarr1,park1,cof1,food1,rand1);
});

function coffeeCalc (locarray,parkvar,cofvar,foodvar,randvar) {
// calculate score for each shop, assigning it to the ShopObj
  if (locarray[1] == 1) {ShopArr[0] = (randvar * (Math.floor((Math.random() *10)+1))) + 2*parkvar + 6*cofvar + 2*foodvar;
  } else {ShopArr[0] = 0;};
  if (locarray[2] == 1) {ShopArr[1] = (randvar * (Math.floor((Math.random() *10)+1))) + 2*parkvar + 6*cofvar + 2*foodvar;
  } else {ShopArr[1] = 0;};
  if (locarray[2] == 1) {ShopArr[2] = (randvar * (Math.floor((Math.random() *10)+1))) + 4*parkvar + 4*cofvar + 2*foodvar;
  } else {ShopArr[2] = 0;};
  if (locarray[2] == 1) {ShopArr[3] = (randvar * (Math.floor((Math.random() *10)+1))) + 1*parkvar + 6*cofvar + 4*foodvar;
  } else {ShopArr[3] = 0;};
  if (locarray[1] == 1) {ShopArr[4] = (randvar * (Math.floor((Math.random() *10)+1))) + 2*parkvar + 6*cofvar + 4*foodvar;
  } else {ShopArr[4] = 0;};
  if (locarray[0] == 1) {ShopArr[5] = (randvar * (Math.floor((Math.random() *10)+1))) + 1*parkvar + 4*cofvar + 2*foodvar;
  } else {ShopArr[5] = 0;};
  if (locarray[1] == 1) {ShopArr[6] = (randvar * (Math.floor((Math.random() *10)+1))) + 2*parkvar + 4*cofvar + 2*foodvar;
  } else {ShopArr[6] = 0;};
  if (locarray[1] == 1) {ShopArr[7] = (randvar * (Math.floor((Math.random() *10)+1))) + 1*parkvar + 6*cofvar + 4*foodvar;
  } else {ShopArr[7] = 0;};
  if (locarray[0] == 1) {ShopArr[8] = (randvar * (Math.floor((Math.random() *10)+1))) + 2*parkvar + 6*cofvar + 2*foodvar;
  } else {ShopArr[8] = 0;};
  if (locarray[0] == 1) {ShopArr[9] = (randvar * (Math.floor((Math.random() *10)+1))) + 1*parkvar + 6*cofvar + 4*foodvar;
  } else {ShopArr[9] = 0;};
  if (locarray[0] == 1) {ShopArr[10] = (randvar * (Math.floor((Math.random() *10)+1))) + 2*parkvar + 6*cofvar + 4*foodvar;
  } else {ShopArr[10] = 0;};
// find the largest score
  let maxshop = Math.max(...ShopArr);


// display the shop with the largest score, ties go to the later shop in ShopObj
  if (ShopArr[0] == maxshop) {document.getElementById("shopname").innerHTML = "Honeybee South";
    document.getElementById("shopaddress").innerHTML = "700 Sevier Ave Knoxville, TN 37920";
    document.getElementById("shophours").innerHTML = "Mon-Fri: 7am-7pm, Sat-Sun: 8am-7pm";
    document.getElementById("shoplink").href= "https://www.honeybeecoffeeco.com/";
    document.getElementById("shoplogo").src = "img_files/honeybee.jpg";
    };
  if (ShopArr[1] == maxshop) {document.getElementById("shopname").innerHTML = "Honeybee Farragut";
    document.getElementById("shopaddress").innerHTML = "10716 Kingston Pike Knoxville, TN 37920";
    document.getElementById("shophours").innerHTML = "Mon-Thu: 7am-9pm, Fri: 7am-10pm, Sat: 8am-10pm, Sun: 8am-7pm";
    document.getElementById("shoplink").href= "https://www.honeybeecoffeeco.com/";
    document.getElementById("shoplogo").src = "img_files/honeybee.jpg";
    };
  if (ShopArr[2] == maxshop) {document.getElementById("shopname").innerHTML = "The Empty Cup";
    document.getElementById("shopaddress").innerHTML = "9111 Executive Park Dr Knoxville, TN 37923";
    document.getElementById("shophours").innerHTML = "Mon-Fri: 7am-6pm, Sat: 7am-3pm, Sun: Closed";
    document.getElementById("shoplink").href= "https://www.theemptycup.org";
    document.getElementById("shoplogo").src = "img_files/emptycup.jpg";
    };
  if (ShopArr[3] == maxshop) {document.getElementById("shopname").innerHTML = "K Brew West Hills";
    document.getElementById("shopaddress").innerHTML = "7822 Kingston Pike Knoxville, TN 37919";
    document.getElementById("shophours").innerHTML = "Mon-Wed: 7am-8pm, Thu: 7am-6pm, Fri-Sat: 7am-8pm, Sun: 8am-8pm";
    document.getElementById("shoplink").href= "https://www.knoxvillebrew.com/";
    document.getElementById("shoplogo").src = "img_files/kbrew.jpg";
};
  if (ShopArr[4] == maxshop) {document.getElementById("shopname").innerHTML = "Old City Java";
    document.getElementById("shopaddress").innerHTML = "109 S Central St Knoxville, TN 37901";
    document.getElementById("shophours").innerHTML = "Mon-Fri:7am-7pm, Sat-Sun: 8am-7pm";
    document.getElementById("shoplink").href= "http://www.oldcityjava.com/";
    // or https://www.facebook.com/oldcityjava/
    document.getElementById("shoplogo").src = "img_files/ocj.jpg";
};
  if (ShopArr[5] === maxshop) {document.getElementById("shopname").innerHTML = "Remedy Coffee";
    document.getElementById("shopaddress").innerHTML = "800 Tyson St Knoxville, TN 37917";
    document.getElementById("shophours").innerHTML = "Mon-Fri: 7am-7pm, Sat-Sun: 8am-7pm";
    document.getElementById("shoplink").href= "https://www.facebook.com/remedycoffee/";
    document.getElementById("shoplogo").src = "img_files/remedy.jpg";
};
  if (ShopArr[6] == maxshop) {document.getElementById("shopname").innerHTML = "Awaken Coffee";
    document.getElementById("shopaddress").innerHTML = "7822 Kingston Pike Knoxville, TN 37919";
    document.getElementById("shophours").innerHTML = "Mon-Thu: 7am-9pm, Fri: 7am-10pm, Sat: 8am-10pm, Sun: 2pm-8pm";
    document.getElementById("shoplink").href= "https://www.facebook.com/awakencoffeeoldcity/";
    document.getElementById("shoplogo").src = "img_files/awaken.jpg";
};
  if (ShopArr[7] == maxshop) {document.getElementById("shopname").innerHTML = "Pearl on Union";
    document.getElementById("shopaddress").innerHTML = "513 Union Ave SW Knoxville, TN 37902";
    document.getElementById("shophours").innerHTML = "Mon-Fri: 7am-7pm, Sat-Sun: 8am-7pm";
    document.getElementById("shoplink").href= "https://www.facebook.com/pearlonunion/";
    document.getElementById("shoplogo").src = "img_files/pearl.jpg";
};
  if (ShopArr[8] === maxshop) {document.getElementById("shopname").innerHTML = "Third Creek Coffee";
    document.getElementById("shopaddress").innerHTML = "2920 Sutherland Ave Knoxville, TN 37919";
    document.getElementById("shophours").innerHTML = "Mon-Fri: 7am-6pm, Sat:9am-6pm, Sun: 12pm-6pm";
    document.getElementById("shoplink").href= "https://www.facebook.com/thirdcreekcoffee/";
    document.getElementById("shoplogo").src = "img_files/third.jpg";
};
  if (ShopArr[9] === maxshop) {document.getElementById("shopname").innerHTML = "Wild Love Bakehouse";
    document.getElementById("shopaddress").innerHTML = "1625 N Central St Knoxville, TN 37917";
    document.getElementById("shophours").innerHTML = "Mon-Fri: 7am-6pm, Sat-Sun: 8am-6pm";
    document.getElementById("shoplink").href= "http://www.wildlovebakehouse.com/";
    document.getElementById("shoplogo").src = "img_files/wildlove.jpg";
};
  if (ShopArr[10] === maxshop) {document.getElementById("shopname").innerHTML = "K Brew North";
    document.getElementById("shopaddress").innerHTML = "1138 N Broadway Knoxville, TN 37917";
    document.getElementById("shophours").innerHTML = "Mon-Wed: 7am-8pm, Thu: 7am-6pm, Fri-Sat: 7am-8pm, Sun: 8am-8pm";
    document.getElementById("shoplink").href= "https://www.knoxvillebrew.com/";
    document.getElementById("shoplogo").src = "img_files/kbrew.jpg";
};
    document.getElementById("outcomediv").style = "display: initial";
    document.getElementById("getResult").innerHTML = "Recalculate";
};
