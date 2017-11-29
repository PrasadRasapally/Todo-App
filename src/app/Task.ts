export class Task {
  constructor(
    public taskId: number,
    public name: string,
    public status: string,
    public created_date?: string
  ) { }
}
