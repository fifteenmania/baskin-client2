export default class Queue<T> {
  private queue: T[] = [];
  private maxSize: number = 0;
  private currentSize: number = 0;
  private currentIndex: number = 0;

  constructor(maxSize: number) {
    this.maxSize = maxSize;
  }

  public push(value: T) {
    if (this.currentSize >= this.maxSize) {
      this.queue.shift();
      this.currentSize--;
    }
    this.queue.push(value);
    this.currentSize++;
    this.currentIndex++;
  }

  public pop(): T | undefined {
    if (this.currentSize === 0) {
      return undefined;
    }
    this.currentSize--;
    this.currentIndex--;
    return this.queue.shift();
  }

  public copy(): Queue<T> {
    const queue = new Queue<T>(this.maxSize);
    queue.queue = this.queue.slice();
    queue.currentSize = this.currentSize;
    queue.currentIndex = this.currentIndex;
    return queue;
  }

  public peek(): T | undefined {
    if (this.currentSize === 0) {
      return undefined;
    }
    return this.queue[0];
  }

  public getCurrentIndex(): number {
    return this.currentIndex;
  }

  public getCurrentSize(): number {
    return this.currentSize;
  }
}