package Condicionales;


import javax.swing.*;

public class Switch {
    public static void main(String[] args) {
        int data;
        data = Integer.parseInt(JOptionPane.showInputDialog("Digite un nuemro entre 1 - 5"));

        switch (data) {
            case 1:
                JOptionPane.showMessageDialog(null, "Es el numero 1.");
                break;
            case 2:
                JOptionPane.showMessageDialog(null, "Es el numero 2.");
                break;
            case 3:
                JOptionPane.showMessageDialog(null, "Es el numero 3.");
                break;
            case 4:
                JOptionPane.showMessageDialog(null, "Es el numero 4.");
                break;
            case 5:
                JOptionPane.showMessageDialog(null, "Es el numero 5.");
                break;
            default:
                JOptionPane.showMessageDialog(null, "No ha ingresado un numero entre 1 - 5.");
                break;
        }


    }
}
