import { MongooseModel } from "@tsed/mongoose";
import { ImageModel } from "../models/ImageModel";
import { MongooseService } from "@tsed/mongoose";
import { Inject, Injectable, ProviderScope, ProviderType, Service } from "@tsed/common";


@Service()
@Injectable({
    type: ProviderType.SERVICE,
    scope: ProviderScope.SINGLETON
})
export class ImageService {
    @Inject(ImageModel) private model: MongooseModel<ImageModel>;



    async save(filename: string, imagebase64: string) {
        let obj = new this.model({
            userFileName: `${filename}`,
            systemFileName: `${filename}_uniquekey.png`
        })

        require("fs").writeFile(obj.systemFileName, imagebase64, 'base64', function (err: any) {
            console.log(err);
        });
        console.log(obj.userFileName)
        await obj.save();

        // console.log(obj.id)

        return obj._id;
    }





}

