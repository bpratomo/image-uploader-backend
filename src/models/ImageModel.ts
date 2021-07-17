import { Default, Format, Ignore, Property, Required } from "@tsed/schema";
import { Model, ObjectID, Unique } from "@tsed/mongoose";

@Model()
export class ImageModel {
    constructor(userFileName: string, systemFileName: string) {
        userFileName = userFileName
        systemFileName = systemFileName
    }

    @ObjectID("id")
    _id: string

    @Required()
    userFileName: string;

    @Required()
    systemFileName: string;

    @Format("date-time")
    @Default(Date.now)
    dateCreation: Date = new Date();

}