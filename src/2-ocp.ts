interface Measurable {
  getTotalLength(): number;
  getSentLength(): number;
}

abstract class AbstractMeasurable {
  abstract getTotalLength(): number;
  abstract getSentLength(): number;

  // Unico punto de modificacion o extension para realizar el calculo 
  public getSentLengthPercentage(measurable: Measurable): number {
    return (measurable.getSentLength() * 100) / measurable.getTotalLength();
  }
}

// Unico punto de modificacion o extension para realizar el calculo 
class Progress {
  static getSentLengthPercentage(measurable: Measurable): number {
    return (measurable.getSentLength() * 100) / measurable.getTotalLength();
  }
}

class Song implements Measurable {
  private totalLength: number = 100;
  private sentLength: number = 50;

  public getTotalLength(): number {
    return this.totalLength;
  }

  public getSentLength(): number {
    return this.sentLength;
  }
}

class ClientFile extends AbstractMeasurable {
  private totalLength: number = 100;
  private sentLength: number = 50;

  public getTotalLength(): number {
    return this.totalLength;
  }

  public getSentLength(): number {
    return this.sentLength;
  }
}
