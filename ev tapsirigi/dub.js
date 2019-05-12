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