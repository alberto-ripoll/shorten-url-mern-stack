import assert from "node:assert/strict";
import Url from "../src/Url/domain/Url";
import { expect, describe, test, beforeAll } from '@jest/globals';
import MongoDatabaseConnection from '../app/database/MongoDatabaseConnection';
import UrlMongoRepository from '../src/Url/infrastructure/repositories/UrlMongoRepository';

describe('Api Tests', () => {
    test("Should generate an encoded shortened url", async () => {
        const response = await fetch("http://localhost:3000/shorten-url", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: "https://i.pinimg.com/originals/8a/39/03/8a390326148f845c0e26c23d56b7fde9.fif" }),
        });
        expect(response).toHaveProperty('url');
    });

    test("Should retrieve a long URL from an encoded shortened url", async () => {
        const longUrl = "https://i.pinimg.com/originals/8a/39/03/8a390326148f845c0e26c23d56b7fde9.fif";
        let shortUrl = await createUrl(longUrl);

        const response = await fetch(shortUrl, {
            method: "GET",
        });

        assert.equal(response.redirected, true);
        assert.equal(response.url, longUrl);
    }
    );
}
);

async function createUrl(longUrl: string ): Promise<string> {
    const urlRepository = new UrlMongoRepository(
        MongoDatabaseConnection.getInstance()
    );
    const url = new Url(longUrl, "http://localhost:3000/12345");
    await urlRepository.saveUrl(url);

    return url.shortUrl;

}
