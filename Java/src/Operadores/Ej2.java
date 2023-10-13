package Operadores;

public class Ej2 {
    String worker;
    int hoursWorked;
    double hourSalary;

    public Ej2 (String worker, int hoursWorked, double hourSalary) {
        this.worker = worker;
        this.hoursWorked = hoursWorked;
        this.hourSalary = hourSalary;
    }

    public void getWeekPay(){
        double pay = hourSalary * hoursWorked;
        System.out.println( worker + " got paid " + pay);
    }

}
