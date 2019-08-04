export default class Tree {
    constructor(root){
        this._root = root?root:"India";
    }
    getDefaultRoot = () => {
        return this.root;
    }
}