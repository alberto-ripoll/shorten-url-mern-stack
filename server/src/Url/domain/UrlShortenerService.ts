import Url from "./Url";
import crypto from 'crypto';
import { UrlRepository } from "./UrlRepository";

export default class UrlShortenerService {
    private maxUrlLength: number = 6;
    private urlRepository: UrlRepository;
    constructor(
        urlRepository  : UrlRepository
    ) { 
        this.urlRepository = urlRepository;
    }

    public shortenUrl(longUrl: string): Url {
        const maxAttempts = 10;
        let attempt = 0;
        let shortUrl: string = "";

        while (attempt < maxAttempts ) {
        const hash = crypto.createHash('sha256').update(longUrl + new Date().getTime().toString()).digest('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
        shortUrl = hash.substring(0, this.maxUrlLength);

        if (!this.checkUrlUniqueness(shortUrl)) {
            attempt++;
            continue;
        }

        const url = new Url(longUrl, shortUrl);
        return url;
        }
    }

    private async checkUrlUniqueness(shortUrl: string): Promise<boolean> {
        try {
            await this.urlRepository.findShortenedUrl(shortUrl);
            return false;
        } catch (error) {
            return true;
        }
    }

}