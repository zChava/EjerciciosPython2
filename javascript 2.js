function sumaNumerosPares() {
    let suma = 0;
    for (let i = 2; i <= 100; i += 2) {
      suma += i;
    }
    alert(`La suma de los numeros pares entre 1 y 100 es: ${suma}`);
  }
  
  function tablaMultiplicar() {
    const num = parseInt(prompt("Introduce un numero para ver su tabla de multiplicar:"));
    if (isNaN(num)) {
      alert("Introduce un numero válido.");
      return;
    }
    let resultado = `Tabla de multiplicar del ${num}:\n`;
    for (let i = 1; i <= 10; i++) {
      resultado += `${num} x ${i} = ${num * i}\n`;
    }
    alert(resultado);
  }
  
  function contarVocales() {
    const frase = prompt("Introduce una frase:");
    if (!frase) {
      alert("No introdujiste ninguna frase.");
      return;
    }
    const vocales = "aeiouAEIOU";
    let contador = 0;
    for (let letra of frase) {
      if (vocales.includes(letra)) contador++;
    }
    alert(`La frase tiene ${contador} vocales.`);
  }
  
  function fibonacci() {
    const fib = [0, 1];
    for (let i = 2; i < 20; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    alert(`Los primeros 20 numeros de Fibonacci son:\n${fib.join(", ")}`);
  }

  sumaNumerosPares();
  tablaMultiplicar();
  contarVocales();
  fibonacci();
  