export class Post {
  constructor(
    public city: string,
    public street: string,
    public house: string,
    public photo: string,
    public comment: string,
    public status: string,
    public createdTimeStamp: string,
    public changedTimeStamp: string,
    public id?: number
  ) { }
}