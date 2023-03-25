function consolelog(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling method ${propertyKey} with arguments ${args}`);
    const result = originalMethod.apply(this, args);
    console.log(`Method ${propertyKey} returned ${result}`);
    return result;
  };

  return descriptor;
}

export class Counter {
  private _value: number = 0;

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  @consolelog
  increment(): void {
    this._value++;
  }

  decrement(): void {
    this._value--;
  }
}
