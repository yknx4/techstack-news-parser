import { NewsItem } from './news';

export type Parser = (html: string, url: string) => readonly NewsItem[];
export type Crawler = (url: string) => string;
