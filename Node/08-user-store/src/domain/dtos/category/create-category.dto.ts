import e from "express";

export class CreateCategoryDto {
  
    private constructor(
        public readonly name: string,
        public readonly available: boolean,
        // public readonly user: string,
    ) {}

    static create( object: { [key: string]: any }): [ string?, CreateCategoryDto? ] {
        
        const { name, available } = object;

        if (!name) return ['Property name is required'];
        if (!available) return ['Property available is required'];
        
        let availableboolean: boolean = available;
        if (typeof available !== 'boolean') {
            if (available === 'true') availableboolean = true;
            if (available === 'false') availableboolean = false;            
        }
        if ( typeof availableboolean !== 'boolean' ) return ['Property available not valid'];

        return [undefined, new CreateCategoryDto(name, availableboolean)];
    }
}