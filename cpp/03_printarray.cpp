#include <iostream>
#include <string>

using namespace std;

string print_Array(int arr[], int size) {
	string output;
	string formattedOutput;
	for (int i = 0; i < size; i++) {
		output += to_string(arr[i]) + ",";
	}
	return formattedOutput = output.substr(0, output.size() - 1);
}

int main() {
	int a[]{ 1, 2, 3 };
	cout << print_Array(a, 3) << endl;

	string y;
	getline(cin, y);
	return 0;
}
