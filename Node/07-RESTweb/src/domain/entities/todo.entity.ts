

export class TodoEntity {

    constructor(
        public id: number,
        public text: string,
        public completedAt?: Date | null,
    ) {}

    get isCompleted(): boolean {
        return !!this.completedAt;
    };

    public static fromObj( object: {[key: string]: any}): TodoEntity {
        const {id, text, completedAt} = object;
        if ( !id ) throw new Error('id property is required');
        if ( !text ) throw new Error('text property is required');        

        let newCompletedAt;
        if ( completedAt ) {
            newCompletedAt = new Date(completedAt);
            if ( isNaN(newCompletedAt.getTime()) ) {
                throw new Error('completedAt property is not a valid date');
            }
        }

        return new TodoEntity(id, text, newCompletedAt);
    }
    
}