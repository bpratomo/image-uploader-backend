import { Inject, Post } from "@tsed/common";
import { PathParams, BodyParams } from "@tsed/common";
import { Controller, Get } from "@tsed/common";
import { MongooseModel, MONGOOSE_MODEL } from "@tsed/mongoose";
import { ImageService } from "src/services/ImageServices";
import { ImageModel } from "../models/ImageModel";

@Controller("/images")

export class ImageCtrl {
  constructor(private readonly imageService: ImageService) {
  }

  @Get()
  findAll(): string {
    return "Image main endpoint";
  }
  @Get("/:id")
  get(@PathParams("id") id: number) {
    return `${id}`

  }

  @Post()
  async updatePayload(@BodyParams() payload: any): Promise<any> {
    const id = await this.imageService.save(payload.filename, payload.image)
    return id;
  }
}