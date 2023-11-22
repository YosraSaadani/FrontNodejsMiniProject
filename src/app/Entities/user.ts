export class User {
    constructor(
        public _id: string,
        public firstname: string,
        public lastname: string,
        public email: string,
        public password: string,
        public role: string,
        public birthDate: Date,
        public adresse: string,
        public phoneNumber: string,
        public sex: string,
        public university: string,
        public cin: string
      ) {}
}
