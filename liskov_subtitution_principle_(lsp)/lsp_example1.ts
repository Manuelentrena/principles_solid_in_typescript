//#region GOOD EXAMPLE

class Rectangle {
  private _high: number;
  private _wide: number;
  constructor(high: number, wide: number) {
    this._high = high;
    this._wide = wide;
  }

  public get area(): number {
    return this._high * this._wide;
  }

  public get diagonal(): number {
    return Math.sqrt(Math.pow(this._high, 2) + Math.pow(this._wide, 2));
  }

  public get high(): number {
    return this._high;
  }

  public get wide(): number {
    return this._wide;
  }
}

class Square extends Rectangle {
  private _length: number;
  constructor(length: number) {
    super(length,length)
    this._length = length;
  }
}

const square = new Square(5);
console.log(square.area);
console.log(square.diagonal);

const rectangle = new Rectangle(3,4);
console.log(rectangle.area);
console.log(rectangle.diagonal);

//#endregion