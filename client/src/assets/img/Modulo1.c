#include <stdio.h>
#include <string.h>

// Función para pedir al usuario una palabra de hasta 10 letras
void pedirPalabra(char *palabra) {
   printf("Ingrese una palabra de 10 letras maximo: ");
   fgets(palabra, 11, stdin);
   palabra[strcspn(palabra, "\n")] = '\0'; // Remover el salto de linea final
}

// Función para pedir al usuario un número entre 0 y 99
void pedirNumero(int *numero) {
   printf("Ingrese un numero entre 0 y 99: ");
   scanf("%2d", numero);
}

// Función para pedir al usuario su fecha de nacimiento
void pedirFecha(int *dia, int *mes, int *ano) {
   printf("Ingrese su fecha de nacimiento\n");
   printf("Dia: ");
   scanf("%2d", dia);
   printf("Mes: ");
   scanf("%2d", mes);
   printf("A%co: ", 164);
   scanf("%4d", ano);
}

// Función para mostrar los datos ingresados por el usuario
void mostrarDatos(char *palabra, int numero, int dia, int mes, int ano) {
   printf("Los datos ingresados son:\n");
   printf("Palabra: %s\n", palabra);
   printf("Numero: %d\n", numero);
   printf("Fecha de nacimiento: %02d/%02d/%d\n", dia, mes, ano);
}

// Función principal del programa
int main() {
   char palabra[10];
   int numero, dia, mes, ano;

   // Pedir al usuario la palabra, el número y la fecha de nacimiento
   pedirPalabra(palabra);
   pedirNumero(&numero);
   pedirFecha(&dia, &mes, &ano);

   printf("\n================================\n\n");

   // Mostrar los datos ingresados por el usuario
   mostrarDatos(palabra, numero, dia, mes, ano);

   return 0;
}

