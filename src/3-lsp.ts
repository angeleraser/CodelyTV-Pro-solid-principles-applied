class Rectancle {
  private length: number;
  private width: number;

  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }

  public setLength(length: number): void {
    this.length = length;
  }

  public setWidth(width: number): void {
    this.width = width;
  }

  getArea() {
    return this.width * this.length;
  }
}

class Square extends Rectancle {
  constructor(lengthAndWidth: number) {
    super(lengthAndWidth, lengthAndWidth);
  }

  public setLength(length: number): void {
    super.setLength(length);
    super.setWidth(length);
  }

  public setWidth(length: number): void {
    super.setWidth(length);
    super.setLength(length);
  }
}

// La clase Square modifica el comportamiento esperado al realizar los sets de los valores por conjunto
// Se comporta de manera diferente al rectanculo quien si se modifica correctamente al setear los valores

const rectangle = new Rectancle(2, 2);
rectangle.setLength(4);
rectangle.getArea(); // 8

const square = new Square(2);
square.setLength(4); //cambia el width y length a la vez y por eso resulta en 16
square.getArea(); //16

class Bird {
  fly() {
    console.log("Flying the sky!");
  }
}

class Chicken extends Bird {
  fly() {
    throw new Error("I cannot fly :(");
  }
}

class Eagle extends Bird {
  fly(): void {
    super.fly();
    console.log("Im looking for my prey");
  }
}
