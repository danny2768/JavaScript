package Condicionales;

import javax.swing.*;

public class OperadorTernario {
    public static void main(String[] args){
        int number;
        String message;

        number = Integer.parseInt(JOptionPane.showInputDialog("Ingrese un numero"));

        // Operador ternario:
        message = ( number % 2 == 0) ? "El numero es par" : "El numero es impar";
    }
}
