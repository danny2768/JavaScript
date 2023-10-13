package Condicionales;

import javax.swing.*;

public class Ej11 {
    private double num1;
    private double num2;

    public Ej11( double num1, double num2 ){
        this.num1 = num1;
        this.num2 = num2;
    }

    public double suma(double num1, double num2){
        return num1 + num2;
    }

    public double resta(double num1, double num2){
        return num1 - num2;
    }

    public double multiplicacion(double num1, double num2){
        return num1 * num2;
    }

    public double division(double num1, double num2){
        return num1 / num2;
    }

    public double getNum1() {
        return num1;
    }

    public double getNum2() {
        return num2;
    }

    public static void main(String[] args) {
        double num1, num2;
        num1 = Integer.parseInt(JOptionPane.showInputDialog("Ingrese el primer numero"));
        num2 = Integer.parseInt(JOptionPane.showInputDialog("Ingrese el segundo numero"));

        Ej11 ej11 = new Ej11(num1, num2);

        String operacion = JOptionPane.showInputDialog("Introduzca una operacion (SUMA - RESTA - MULTIPLICACION - DIVISION)");
        operacion = operacion.toLowerCase();
        operacion = operacion.trim();

        double resultado;
        switch (operacion){
            case "suma":
                resultado = ej11.suma(num1, num2);
                JOptionPane.showMessageDialog(null, "El resultado de la operacion " +
                        operacion + " entre el numero " + num1 + " y el numero " + num2 + " es: " + resultado);
                break;
            case "resta":
                resultado = ej11.resta(num1, num2);
                JOptionPane.showMessageDialog(null, "El resultado de la operacion " +
                        operacion + " entre el numero " + num1 + " y el numero " + num2 + " es: " + resultado);
                break;
            case "multiplicacion":
                resultado = ej11.multiplicacion(num1, num2);
                JOptionPane.showMessageDialog(null, "El resultado de la operacion " +
                        operacion + " entre el numero " + num1 + " y el numero " + num2 + " es: " + resultado);
                break;
            case "division":
                resultado = ej11.division(num1, num2);
                JOptionPane.showMessageDialog(null, "El resultado de la operacion " +
                        operacion + " entre el numero " + num1 + " y el numero " + num2 + " es: " + resultado);
                break;
            default:
                JOptionPane.showMessageDialog(null, "No ha ingresado una operacion valida. Intentelo nuevamente.");
        }
    }
}
