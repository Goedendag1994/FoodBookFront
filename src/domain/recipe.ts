export class Recipe {

    private _recipeId: number;
    private _recipeTitle: string;

    constructor (recipeId: number, recipeTitle: string){
        this._recipeId = recipeId;
        this._recipeTitle = recipeTitle;

    }

    /**
     * Getter recipeId
     * @return {number}
     */
    public get recipeId(): number {
        return this._recipeId;
    }
    /**
     * Setter recipeId
     * @param {number} value
     */
    public set recipeId(value: number){
        this._recipeId = value;
    }

    /**
     * Getter recipeTitle
     * @return {number}
     */
    public get recipeTitle(): string {
        return this._recipeTitle;
    }

    /**
     * Setter recipeTitle
     * @param {string}
     */
    public set recipeTitle(value: string){
        this._recipeTitle = value;
    }

    public toJSON(){
        return{
            recipeId: this.recipeId,
            recipeTitle: this.recipeTitle
        };
    }

}
