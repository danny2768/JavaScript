package Introduccion;

public class JOptionPane {
    String string;
    char caracter;
    int number;
    double decimal;

    public JOptionPane() {
        string = javax.swing.JOptionPane.showInputDialog("Please input a string: ");
        // ? JOptionPane solo nos da Strings, debemos covertirlo al dato que queremos
        // * Integer.parseInt()
        number = Integer.parseInt(javax.swing.JOptionPane.showInputDialog("Please input a number: "));
        // * Double.parseDouble()
        decimal = Double.parseDouble(javax.swing.JOptionPane.showInputDialog("Please input a double: "));
    }

    public void getData() {
        javax.swing.JOptionPane.showMessageDialog(null, "El dato almacenado es: " + string);
        javax.swing.JOptionPane.showMessageDialog(null, "El dato almacenado es: " + caracter);
        javax.swing.JOptionPane.showMessageDialog(null, "El dato almacenado es: " + number);
        javax.swing.JOptionPane.showMessageDialog(null, "El dato almacenado es: " + decimal);
    }

    public String getString() {
        return string;
    }

    public char getCaracter() {
        return caracter;
    }

    public int getNumber() {
        return number;
    }

    public double getDecimal() {
        return decimal;
    }

    public static void main(String[] args) {
        JOptionPane optionPane = new JOptionPane();
        optionPane.getData();
    }
}

