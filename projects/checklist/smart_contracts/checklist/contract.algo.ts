import { Contract } from '@algorandfoundation/algorand-typescript'

export class Checklist extends Contract {
  hello(name: string): string {
    return `Hello, ${name}`
  }
}
