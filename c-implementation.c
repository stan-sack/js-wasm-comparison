void Sieve(int maxNum) {
    int i, j;
    char *Data;

    Data = (char *) malloc(maxNum + 1);
    memset(Data, 1, maxNum+1);

    for (i=2; i<=maxNum; i++) {
        if (Data[i]) {
            for (j=i+i; j<=maxNum; j+=i) {
                Data[j]=0;
            }
        }
    }

    free(Data);
}
