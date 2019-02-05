
export class employee {
    constructor(
        public FirstName?: string,
        public LastName?: string,
        public Email?:string,
        public ContactNumber?:string,
        public Address?:string,
        public UserName?:string,
        public Password?:string,
        public gender?:boolean,
        public qualifications?:boolean,
        public experiences?:boolean,
        public cplus: boolean= false,
        public java: boolean= true,
        public csharp: boolean= true,
        public php: boolean= false,
        public python: boolean= false,
    ) {

    }
}