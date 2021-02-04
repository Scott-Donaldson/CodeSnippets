#include <stdio.h>
int main(){
    int in;
    printf("Enter a Number (1 >= N >= 10):");
    scanf("%d", &in);
    if(in > 10 || in < 1) return 0;
    for(int a = 0; a < 10; a++){
        int b = (a + 1) * in;
        printf("%2i x %i = %2i\n",(a+1),in,b);
    }
    return 0;
}