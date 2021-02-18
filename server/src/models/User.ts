import { prop, getModelForClass, DocumentType } from "@typegoose/typegoose";

class User {
  @prop()
  public name?: string;

  public async setSpeciesAndSave(this: DocumentType<User>, name: string) {
    this.name = name;
    return await this.save();
  }
}

const UserModel = getModelForClass(User);

export default UserModel;
