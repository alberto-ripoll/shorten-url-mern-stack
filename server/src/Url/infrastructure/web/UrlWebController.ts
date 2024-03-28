import DecodeShortenedUrlUseCase from "../../application/DecodeShortenedUrlUseCase";
import ShortenUrlUseCase from "../../application/ShortenUrlUseCase";
import { Request, Response } from 'express';

export default class UrlWebController {
    private shortenUrlUseCase: ShortenUrlUseCase;
    private decodeShortenedUrlUseCase: DecodeShortenedUrlUseCase;

    constructor({ shortenUrlUseCase, decodeShortenedUrlUseCase }) {
      this.shortenUrlUseCase = shortenUrlUseCase;
      this.decodeShortenedUrlUseCase = decodeShortenedUrlUseCase;
    }
  
   async shortenUrl(req: Request, res: Response) {

      if (req.body.url) {
        const longUrl = req.body.url;
        const url = await this.shortenUrlUseCase.execute(longUrl);
        res.status(201).json({ url: url });
      } else {
        console.log('Invalid URL');
        res.status(400).json({ error: "Invalid URL" });
      }
    }
  
    async decodeShortenedUrl(req: Request, res: Response) {
      const url = await this.decodeShortenedUrlUseCase.execute(req.url.slice(1));
      
      if (url) {
        res.writeHead(301, {
          Location: url
        }).end();
    }
  }
}
