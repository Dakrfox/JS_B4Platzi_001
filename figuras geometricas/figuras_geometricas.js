//cuadrados, triangulos y circulos 
// codigo del cuadrado
//nombre a un grupo de console
console.group("Cuadrados");
const lado_cuadrado= 5;

console.log("el lado del cuadrado es "+ lado_cuadrado);


const perimetro = lado_cuadrado * 4;

console.log("el perimetro es: " + perimetro);


const area_del_cuadrado = lado_cuadrado * lado_cuadrado;

console.log("el area del cuadrado es: " + area_del_cuadrado);

console.groupEnd();


//codigo del triangulo 
console.group("Triangulos");

const lado_tri_1 = 6;

const lado_tri_2 = 6;

const lado_tri_3 = 4;

const altura = 5.5;

console.log(`los lados del triangulo son ${lado_tri_1}cm, ${lado_tri_2}cm y ${lado_tri_3}cm`);

perimetro_triangulo = lado_tri_1 + lado_tri_2 + lado_tri_3;

console.log(`el perimetro del triangulo es ${perimetro_triangulo}`);

area_triangulo = (lado_tri_1 * altura )/2;

console.log(`el area de triangulo e: ${area_triangulo}`);

console.groupEnd();

//codigo del circulo 

console.group("Circulo");

const radio= 2.5;
const diametro = 2.5*2;
const pi= Math.PI;
 
console.log(`diametro del circulo es: ${diametro}`)

//formula diamentro*pi
circuferencia = diametro * pi;

console.log(`la circuferencia es: ${circuferencia}`)


//area del circulo: pi *r²
circulo_area = pi *(radio**2);

console.log(`el area del circulo es ${circulo_area}`);



console.groupEnd();
