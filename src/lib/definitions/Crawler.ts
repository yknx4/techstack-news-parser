import { NewsItem } from './news';

export type Parser = (input: string, url: string) => readonly NewsItem[];
export type Crawler = (url: string) => string;
