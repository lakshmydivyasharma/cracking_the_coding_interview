array and strings:
page 90

Concatenating a list of strings when all the strings are the same length and that there are n strings

string joinWords(String[] words){
string sentence = "";
for (String w : words) {
sentence = sentence + w;
}
return sentence;
}

Runtime for this:
- first iteration = copy x characters
- second iteration = copy 2x characters
- third iteration = copy 3x characters

the more iterations, the longer it takes and its taking the square of it so its O(x + 2x + ... + nx) = O(xn^2)

StringBuilder can help me avoid this problem, by creating a resizable arrary of all of the strings, copying them back to a string only when necessary therefore it is more optimal:

String joinWords(String[] words){
  StringBuilder sentence = new StringBuilderr();
  for(String w : words){
    sentence.append(w);
  }
  return sentence.toString();
}
