

export class Review {
  constructor(
    public user: String, 
    public book: String, 
    public rating: number,
    public comment: string,
    public date: Date
  ) {}
}
