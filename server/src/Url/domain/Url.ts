export default class Url {
    url: string;
    shortUrl: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(url: string, shortUrl: string) {
        this.url = url;
        this.shortUrl = shortUrl;
    }
} 