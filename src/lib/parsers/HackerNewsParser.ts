import { URL } from 'url';

import cheerio from 'cheerio';
import * as chrono from 'chrono-node';

import { NewsItem } from '../definitions/news';

export async function HackerNewsParser(
  html: string,
  url: string,
  ref?: Date
): Promise<readonly NewsItem[]> {
  const $ = cheerio.load(html);
  const urlObj = new URL(url);
  const newsItemsNodes = $('.athing').toArray();
  return newsItemsNodes.map((n, i) => {
    const age = $('span.age').eq(i).text().trim();
    const ageDate = chrono.parseDate(age, ref);
    const result: NewsItem = {
      title: $('.title a', n).first().text().trim().replace(/\s+/g, ' '),
      url: $('.title a', n).first().attr('href') as string,
      createdAt: ageDate.toISOString(),
      foundAt: urlObj.hostname,
    };
    return result;
  });
}
