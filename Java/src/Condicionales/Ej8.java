package Condicionales;


import javax.swing.*;

public class Ej8 {
    public static void main(String[] args) {
        int num;
        String digits ;
        num = Integer.parseInt(JOptionPane.showInputDialog("Ingrese un numero"));

        digits = String.valueOf(String.valueOf(num).length());
        JOptionPane.showMessageDialog(null, "El numero " + num + " tiene " + digits + " digitos." );
    }
}
