import { inject, injectable } from "inversify";
import { UrlRepository } from "../domain/UrlRepository";
import { TYPES } from "../../../app/di/types";

export default class DecodeShortenedUrlUseCase {
    private urlRepository: UrlRepository;

    constructor(
        @inject(TYPES.UrlRepository) urlRepository: UrlRepository,
        ) {
        this.urlRepository = urlRepository;
    }

    public async execute(shortUrl: string): Promise<string> {
        try {
            let url = await this.urlRepository.findShortenedUrl(shortUrl);
            return url.url;
        } catch (error) {
            console.log(error);
        }
    }
}