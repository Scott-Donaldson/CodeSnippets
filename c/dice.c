#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(){
    int diceRoll(void);
    int returnDiceRolls(int *array, int *x);

    int *rolls;
    printf("How many rolls of a dice?: ");
    scanf("%d", rolls);
    int diceRolls[*rolls];
    for(size_t i = 0; i < *rolls; i++){
        int roll = diceRoll();
        diceRolls[i] = roll;
    }
    returnDiceRolls(diceRolls, rolls);
    return 0;
}

int diceRoll (){
    return (random() % 6) + 1;
}

int returnDiceRolls(int *array, int *arrlen){
    char output[(*arrlen * 4) + 100];
    strcat(output, "Results: ");
    int sum = 0;
    for(size_t i = 0; i < *arrlen; i++){
        int arrval = array[i];
        sum += arrval;
        char str[(*arrlen + 1)*4];
        sprintf(str,"%d ", arrval);
        strcat(output, str);
    }
    char* sumstr = "\nSum: ";
    char intchar[sizeof(sum)];
    strcat(output, sumstr);
    sprintf(intchar,"%d",sum);
    strcat(output, intchar);
    printf("%s\n",output);
    return 0;
}