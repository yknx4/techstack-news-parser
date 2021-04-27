import { URL } from 'url';

import cheerio from 'cheerio';
import { DateTime } from 'luxon';
import Parser from 'rss-parser';

import { NewsItem } from '../definitions/news';

const parser = new Parser();

function parseRedditLink(content: string): string {
  const $ = cheerio.load(`<html><body>${content}</body></html>`);
  return $('a').eq(1).attr('href') ?? '';
}

export async function RssParser(
  xml: string,
  url: string
): Promise<readonly NewsItem[]> {
  const urlObj = new URL(url);
  const feed = await parser.parseString(xml);
  return feed.items.map((n) => {
    const pubDate = n.pubDate ?? new Date().toISOString();
    const looksLikeISO = pubDate.includes('T') && pubDate.endsWith('Z');
    const createdAt = looksLikeISO
      ? DateTime.fromISO(pubDate)
      : DateTime.fromRFC2822(pubDate);
    const content = n.content ?? '';
    const url = content.includes('reddit') ? parseRedditLink(content) : n.link;
    const result: NewsItem = {
      title: n.title ?? '',
      url: url ?? n.link ?? '',
      createdAt: createdAt.toUTC().toISO(),
      foundAt: urlObj.hostname,
    };
    return result;
  });
}
