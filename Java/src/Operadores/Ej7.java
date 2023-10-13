package Operadores;

import com.sun.jdi.ShortType;

import java.util.Scanner;

public class Ej7 {
    Scanner scanner;
    private int totalHours;
    private int hours;
    private int weeks;
    private int days;


    public Ej7(){
       scanner = new Scanner(System.in);
       System.out.print("Digite las horas totales: ");
        totalHours = scanner.nextInt();
    }

    public void getTime() {
        weeks = totalHours / 168;
        days = totalHours % 168;
        hours = totalHours % 24;

        System.out.println("Semanas:" + weeks);
        System.out.println("Dias:" + days);
        System.out.println("Horas:" + hours);
    }

    public static void main(String[] args) {
        Ej7 ej7 = new Ej7();
        ej7.getTime();
    }
}
