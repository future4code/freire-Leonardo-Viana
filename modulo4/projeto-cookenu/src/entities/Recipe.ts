export class Recipe  {
    constructor(
    private id: string,
    private title: string,
    private description: string,
    private createdAt: string,
    private userId: string,
    private userName: string
    ) {}

    public getId() {
        return this.id
    }

    public getTitle() {
        return this.title
    }

    public getDescription() {
        return this.description
    }

    public getcreatedAt() {
        return this.createdAt
    }

    public getUserId() {
        return this.userId
    }

    public getUserName() {
        return this.userName
    }

    static toRecipeModel(data:any):Recipe {
        return new Recipe (data.id, data.title, data.description, data.createdAt, data.userId, data.userName)
    }
}