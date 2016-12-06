function SieveRegularArray(maxNum) {
    var i;
    var j;

    var Data = new Array();
    Data.length = maxNum + 1;
    for (i=2; i<=maxNum; i++) {
        Data[i] = true;
    }

    for (i=2; i<=maxNum; i++) {
        if (Data[i]) {
            for (j=i+i; j<=maxNum; j+=i) {
                Data[j] = false;
            }
        }
    }
}
