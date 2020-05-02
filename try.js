for(int i=0 "initialize"; i<10 "condition"; i++ "update") {
	"this is a comment"
}
"there should be some encapsulation operator"
<"encapsulated comment">


"variable declaration"
a & b := 2, c = 3 @int;
int a & b := 2, c = 3;

"structure"
string := {
	address @void*;
	length @int;
};

"constants and functions"
pi := 3.14 @double;
size := length * 4;

"functions"
sum := (a, b) {
	return a+b;
};


"problems to be solved"
"representiong functions as JSON objects"
"event handling 'end', 'error', ..."
"execution flow may not be sequential"
"low level access"


var character = 'c';
var str = 'this is a string';
import 'fs', 'net', 'http', 'crypto';


// defining structures
list = {
	abc = int; "this is the abc data"
	(
		reserved = int:0;
		{
			res0 = byte;
			res1 = byte;
			res2 = byte;
			res3 = byte;
		}
	)
};


// datatype declaration
int a & b & c = 0, d;
int a<0-9> = 0;

// array declaration
int[] a = int[50];

list := (T, sz) {
	count = 0, size = sz @uword;
	item @T[sz];
	
	init := () {
		count = 0;
		size = sz;
	};
	
	avail := count;
	free := size - count;
	
	add := (itm) {
		item[count++] = itm;
	};
	
	indexOf := (itm) {
		for(i=0, n=count; n>0; i++, n--) {
			if(item[i] == itm) return i;
		}
		return -1;
	};
};