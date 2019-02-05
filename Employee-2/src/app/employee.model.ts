export class Employee {
    constructor(
        public fname?: string,
        public lname?: string,
        public email?: string,
        public contact?: string,
        public address?: string,
        public uname?: string,
        public pass?: string,
        public gender?: string,
        public qualification?: string,
        public experience?: string,
        public cplus: boolean= false,
        public java: boolean= true,
        public csharp: boolean= true,
        public php: boolean= false,
        public python: boolean= false,
    ) {}
}
