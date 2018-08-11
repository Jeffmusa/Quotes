export class Quote {
    public showDescription:boolean
    constructor(public id:number, public name:string, public quote:string,public description:string){
        this.showDescription=false

    }
}
