export class Quote {
    public showDescription:boolean
    constructor(public id:number,
                public name:string,
                public author:string,
                public user:string,
                public upVotes:number,
                ){
        this.showDescription=false

    }
}
