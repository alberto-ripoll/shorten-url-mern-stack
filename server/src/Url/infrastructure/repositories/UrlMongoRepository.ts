import { UrlRepository } from "../../domain/UrlRepository";
import Url from "../../domain/Url";
import { injectable } from "inversify";
import { MongoClient } from 'mongodb';

injectable()
export default class UrlMongoRepository implements UrlRepository {
    private databaseClient: MongoClient;

    constructor(databaseClient: MongoClient) {
        this.databaseClient = databaseClient;
    }

    public async findShortenedUrl(shortUrl: string): Promise<Url> {
        const url = await this.databaseClient.db('UrlSchema').collection('UrlSchema').findOne({ shortUrl: shortUrl });

        if (!url) {
            throw new Error(`Shortened URL: ${shortUrl} not found`);
        }
        return new Url(url.url, url.shortUrl);
    }
    
    public async findUrl(longUrl: string): Promise<Url> {
        const url = await this.databaseClient.db('UrlSchema').collection('UrlSchema').findOne({ url: longUrl });

        if (!url) {
            throw new Error('Url not found');
        }
        return new Url(url.url, url.shortUrl);
    }

    public async saveUrl(url: Url): Promise<void> {
        await this.databaseClient.db('UrlSchema').collection('UrlSchema').insertOne
        ({
            url: url.url,
            shortUrl: url.shortUrl,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }

}

  