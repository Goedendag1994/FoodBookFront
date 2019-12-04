export class Ingredient {

    private _ingredientId: number;
    private _nameIngredient: string;
    private _tags: string[];

    constructor(ingredientId: number, nameIngredient: string, tags: string[]){
        this._ingredientId = ingredientId;
        this._nameIngredient = nameIngredient;
        this._tags = tags;
    }

    /**
     * Getter ingredientId
     * @return {number}
     */
    public get ingredientId(): number {
        return this._ingredientId
    }

    /**
     * Setter ingredientId
     * @param {number}
     */
    public set ingredientId(value: number){
        this._ingredientId = value;
    }

    /**
     * Getter nameIngredient
     * @return {string}
     */
    public get nameIngredient(): string {
        return this._nameIngredient;
    }

    /**
     * Setter nameIngredient
     * @param {string}
     */
    public set nameIngredient(value: string){
        this._nameIngredient = value;
    }


        /**
     * Getter tags
     * @return {string[]}
     */
    public get tags(): string[] {
        return this._tags;
    }

    /**
     * Setter nameIngredient
     * @param {string[]}
     */
    public set tags(value: string[]){
        this._tags = value;
    }




    public toJSON(){
        return{
            ingredientId: this.ingredientId,
            nameIngredient: this.nameIngredient,
        };
    }

}
