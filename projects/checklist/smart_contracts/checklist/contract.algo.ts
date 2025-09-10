import { Contract, GlobalState } from '@algorandfoundation/algorand-typescript'

export class Checklist extends Contract {
  task = GlobalState<string>({ key: "task", initialValue: "pending" })

  markDone(): string {
    this.task.value = "done"
    return this.task.value
  }

  reset(): string {
    this.task.value = "pending"
    return this.task.value
  }
}
