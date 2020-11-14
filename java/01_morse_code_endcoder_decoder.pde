HashMap<String, String> list = new HashMap<String,String>();
list.put("A",".-");
list.put("B","-...");
list.put("C","-.-.");
list.put("D","-..");
list.put("E",".");
list.put("F","..-.");
list.put("G","--.");
list.put("H","....");
list.put("I","..");
list.put("J",".---");
list.put("K","-.-");
list.put("L",".-..");
list.put("M","--");
list.put("N","-.");
list.put("O","---");
list.put("P",".--.");
list.put("Q",".--.");
list.put("R",".-.");
list.put("S","...");
list.put("T","-");
list.put("U","..-");
list.put("V","...-");
list.put("W",".--");
list.put("X","-..-");
list.put("Y","-.--");
list.put("Z","--..");
list.put(" ","/");

String input = "Kaitlyn";
char[] inputChar = new char[input.length()];
for(int i = 0; i < input.length(); i++){
  inputChar[i] = input.toUpperCase().charAt(i);
}
String morse = "";
for(char letter : inputChar){
  if(letter != ' ') morse += list.get(String.valueOf(letter)) + " ";
  else morse += " / ";
}
println(morse);

String morseCode = "-.- .- .. - .-.. -.-- -.";
String decoded = "";
String[] morseChar = morseCode.split(" ");
for(int i = 0; i < morseChar.length; i++){
  for(String letter : list.keySet()){
    if(list.get(letter).equals(morseChar[i])){
      decoded += letter;
    }
  }
}
println(decoded);
