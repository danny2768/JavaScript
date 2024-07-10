import { Validators } from "../../../config";

export class CreateProductDto {
    
    private constructor(
        public readonly name: string,
        public readonly available: boolean,
        public readonly price: number,
        public readonly description: string,
        public readonly user: string, // ID        
        public readonly category: number, // ID
    ) {}

    static create( object: { [key: string]: any } ): [string?, CreateProductDto?] {
        const { name, available, price, description, user, category } = object;

        if (!name) return ['name is required'];
        // if (!available) return ['available is required'];
        // if (!price) return ['price is required'];
        // if (!description) return ['description is required'];
        if (!user) return ['user is required'];
        if (!Validators.isMongoID(user)) return ['user is invalid'];

        if (!category) return ['category is required'];
        if (!Validators.isMongoID(category)) return ['category is invalid'];

        return [undefined, new CreateProductDto( name, !!available, price, description, user, category )];
    }
}