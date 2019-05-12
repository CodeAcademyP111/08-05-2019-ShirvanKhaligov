// ev tapsirigi 2

function dublikatiTapma(araw) {
    var eded = {};
    var netice = [];

    araw.forEach(function (item) {
      if(!eded[item])
          eded[item] = 0;
        eded[item] += 1;
    })

    for (var prop in eded) {
       if(eded[prop] >= 2) {
           netice.push(prop);
       }
    }

    return netice;

}
alert(dublikatiTapma([123,99,99,09,123,08,77,66,77,66]));