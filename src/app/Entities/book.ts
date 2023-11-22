export class Book {
    constructor(
        public _id: string,
        public name: string,
        public type: string,
        public author: string,
        public releaseDate: Date,
        public image: string
      ) {}
}
