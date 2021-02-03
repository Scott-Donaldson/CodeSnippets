#include <stdio.h>
int main(){
    int a;
    for(a = 0; a < 10; a++){
        int b = (a + 1) * 7;
        printf("%2i x 7 = %2i\n",(a+1),b);
    }
    return 0;
}