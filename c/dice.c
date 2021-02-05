#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char** argv){
    int diceRoll(void);
    void returnDiceRolls(int *array, int *x);

    int *rolls;

    if(argc > 1){
        *rolls = (int) strtol(argv[1],(char **) NULL,10);
    }else{
        printf("How many rolls of a dice?: ");
        scanf("%d", rolls);
    }
    if(*rolls > 20){
        printf("Exceeded total dice rolls (Max: 20)\n");
        exit(0);
    }

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

void returnDiceRolls(int *array, int *arrlen){
    char output[*arrlen + 20];
    strcat(output, "Results: ");

    int sum = 0;

    for(size_t i = 0; i < *arrlen; i++){
        int arrval = array[i];
        sum += arrval;
        char str[*arrlen + 4];
        sprintf(str,"%d ", arrval);
        strcat(output, str);
    }
    char* sumstr = "\nSum: ";
    char intchar[sizeof(sum)];

    strcat(output, sumstr);
    sprintf(intchar,"%d",sum);
    strcat(output, intchar);
    printf("%s\n",output);

    return;
}