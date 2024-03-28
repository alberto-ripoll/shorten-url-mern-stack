import { Router } from 'express';
import UrlWebController from '../../src/Url/infrastructure/web/UrlWebController';
import { myContainer } from '../di/inversify.config';
import { UrlRepository } from '../../src/Url/domain/UrlRepository';
import ShortenUrlUseCase from '../../src/Url/application/ShortenUrlUseCase';
import DecodeShortenedUrlUseCase from '../../src/Url/application/DecodeShortenedUrlUseCase';
import { TYPES } from '../di/types';

export const router = Router();


router.get('/:url', (req, res) => new UrlWebController(
    {
        shortenUrlUseCase: new ShortenUrlUseCase(
            myContainer.get<UrlRepository>(TYPES.UrlRepository)
        ),
        decodeShortenedUrlUseCase: new DecodeShortenedUrlUseCase(
            myContainer.get<UrlRepository>(TYPES.UrlRepository)
        )
    }
).decodeShortenedUrl(req, res));

router.post('/shorten-url/', (req, res) => new UrlWebController(
    {
        shortenUrlUseCase: new ShortenUrlUseCase(
            myContainer.get<UrlRepository>(TYPES.UrlRepository)
        ),
        decodeShortenedUrlUseCase: new DecodeShortenedUrlUseCase(
            myContainer.get<UrlRepository>(TYPES.UrlRepository)
        )
    }
).shortenUrl(req, res));

