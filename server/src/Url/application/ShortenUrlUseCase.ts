import { inject } from "inversify";
import { UrlRepository } from "../domain/UrlRepository";
import UrlShortenerService from "../domain/UrlShortenerService";
import { TYPES } from "../../../app/di/types";

export default class ShortenUrlUseCase {
    private urlRepository: UrlRepository;

    constructor(
        @inject(TYPES.UrlRepository) urlRepository: UrlRepository,
    ) {
        this.urlRepository = urlRepository;
    }

    public async execute(longUrl: string) {
        try{
            let url = await this.urlRepository.findUrl(longUrl);
            return url.shortUrl;
        } catch (error) {
            let url = new UrlShortenerService(this.urlRepository).shortenUrl(longUrl);
            await this.urlRepository.saveUrl(url);
            return url.shortUrl;
        }
    }
}