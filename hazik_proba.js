<script>
//1.feladat
document.write(`Ferenczi Viktória<br>`);
document.write(`#Team12<br>`);
document.write(`HTML:90%; CSS:90%; JavaScript:20%<br>`);

document.write(`<hr>2. feladat <br>`);
let a=Number(prompt("Add meg a vizsgálandó számot"));
let b=Number(prompt("Add meg hányadik hatványra szeretnéd emelni"));
let eredmeny=a**b;
document.write(`A ${a}<sup>${b}</sup> az ${eredmeny}`);

document.write(`<hr>3. feladat <br>`);




document.write(`<hr>4. feladat <br>`);
let kor=prompt("Add meg az életkorodat:");
if(kor<0){
    document.write(`Nem értelmezhető a megadott érték`);
    }
else if(kor<=6){
	document.write(`A(z) ${kor} év az Kisgyermekkor <br>`);
}
else if(kor<=12){
	document.write(`A(z) ${kor} év az Gyermekkor<br>`);
}
else if(kor<=16){
	document.write(`A(z) ${kor} év az Serdülőkor<br>`);
}
else if(kor<=20){
	document.write(`A(z) ${kor} év az Ifjúkor <br>`);
}
else if(kor<=30){
	document.write(`A(z) ${kor} év az Fiatal felnőtt kor <br>`);
}
else if(kor<=60){
	document.write(`A(z) ${kor} év Felnőtt kor<br>`);
}
else if(kor<=120){
	document.write(`A(z) ${kor} év Aggkor<br>`);
}
else {
	document.write(`Nem értelmezhető a megadott érték`);
}

document.write(`<hr>5. feladat <br>`);
let szam=prompt("Adj meg egy számot");
let oszto=prompt("Add meg az osztó értékét");
let maradek=szam%oszto;

if(maradek==0){
document.write(`A ${szam} osztva ${oszto} osztja az egész számot, úgy, hogy a  maradéka 0`);
}

else {
document.write(`A ${szam} osztva ${oszto} NEM osztja az egész számot maradék nélkül`);
}


document.write(`<hr>6. feladat <br>`);

</script>
