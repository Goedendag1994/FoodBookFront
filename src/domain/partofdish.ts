import {Ingredient} from './ingredient'
import { Recipe } from './recipe';

export class Partofdish {

    private _partOfDishId: number;
    private _ingredient: Ingredient;
    private _unit: string;
    private _quantity: number;
    private _recipe: Recipe;

    constructor(partOfDishId: number, ingredient: Ingredient, unit: string, quantity: number, recipe: Recipe){
        this._partOfDishId = partOfDishId;
        this._ingredient = ingredient;
        this._unit = unit;
        this._quantity = quantity;
        this._recipe = recipe;
    }

    /**Getter partOfDishId
     * @return {number}
     */
    public get partOfDishId(): number{
        return this._partOfDishId;
    }

    /**
     * Setter partOfDishId
     * @param {number}
     */
    public set partOfDishId(value: number){
        this._partOfDishId = value;
    }

    /**
     * Getter ingredient
     * @return {Ingredient}
     */
    public get ingredient(): Ingredient{
        return this._ingredient;
    }

    /**
     * Setter ingredient
     * @param {Ingredient}
     */
    public set ingredient (value: Ingredient){
        this._ingredient = value;
    }

    /**
     * Getter unit
     * @return {string}
     */
    public get unit(): string{
        return this._unit;
    }

    /**
     * Setter unit
     * @param {string}
     */
    public set unit(value: string){
        this._unit = value;
    }

    /**
     * Getter quantity
     * @return {number}
     */
    public get quantity(): number{
        return this._quantity;
    }

    /**
     * Setter quantity
     * @param {number}
     */
    public set quantity(value: number){
        this._quantity = this.quantity;
    }

    /**
     * Getter recipe
     * @return {Recipe}
     */
    public get recipe(): Recipe{
        return this._recipe;
    }

    /**
     * Setter recipe
     * @param {Recipe}
     */
    public set recipe(value: Recipe){
        this._recipe = value;
    }


    public toJSON(){
        return{
            partOfDishId: this.partOfDishId,
            Ingredient: this.ingredient,
            unit: this.unit,
            quantity: this.quantity,
            recipe: this.recipe
        };
    }

}
