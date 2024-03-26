import Url from "./Url";

export interface UrlRepository {
    findUrl(longUrl: string): Promise<Url>;
    findShortenedUrl(shortUrl: string): Promise<Url>;
    
    saveUrl(Url: Url): Promise<void>;
}