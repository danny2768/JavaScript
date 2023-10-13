import java.util.ArrayList;
import java.util.Scanner;

public class Ej4 {
    int      salary,
             commission;
    ArrayList <Double> priceCarsSold;

    public Ej4(){
        salary = 1000;
        commission = 150;
        priceCarsSold = new ArrayList<>();
    }

    public void addCarSold() {
        // * Using dynamic lists.
        Scanner sc = new Scanner(System.in);
        System.out.print("Por favor ingresa el precio del carro vendido: ");
        priceCarsSold.add(sc.nextDouble());
    }

}
