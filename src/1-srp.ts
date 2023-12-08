class Book {
  public getTitle(): string {
    return "A great book";
  }

  public getAuthor(): string {
    return "John Doe";
  }

  public getCurrentPage(): string {
    return "current page content";
  }

  // Mal acopla el cliente que imprimira la pagina
  public printPage(page: string): void {
    throw new Error(page);
  }
}

interface Printer {
  printPage(page: string): void;
}

// SRP se aplica aqui porque extrae el detalle de implementacion para printar el book
class ConsolePrinter implements Printer {
  printPage(page: string): void {
    console.log(page);
  }
}

class HtmlPrinter implements Printer {
  printPage(page: string): void {
    console.log(`<div>${page}</div>`);
  }
}

const book = new Book();
const consolePrinter = new ConsolePrinter();
const htmlPrinter = new HtmlPrinter();
consolePrinter.printPage(book.getCurrentPage());
htmlPrinter.printPage(book.getCurrentPage());
