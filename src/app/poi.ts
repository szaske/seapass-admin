export class Poi {
    constructor (
        public autoId: string,
        public name: string, 
        public description:string,
        public latitude: number, 
        public longitude: number,
        public img_url: string,
        public tags: string[]
    ) { }

    
}
