export default function formatInput(value: string, symbolsAmount: number): string {
  return value+('0').repeat(symbolsAmount-value.length);
}