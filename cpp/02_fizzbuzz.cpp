#include <iostream>
#include <filesystem>
#include <string>

using namespace std;

int main() {
	int numVal = 100;
	int fizzer = 3;
	int buzzer = 5;
	for (int i = 1; i < numVal + 1; i++) {
		string output = "";
		if (i % fizzer == 0) { output += "Fizz";}
		if (i % buzzer == 0) { output += "Buzz";}
		if (output == "") { output = to_string(i); }

		cout << i <<" : "<< output << endl;
	}
	return 0;
}
