import { readFileSync } from 'fs';
import { join } from 'path';

import test from 'ava';

import { HackerNewsParser } from './HackerNewsParser';

test('HackerNewsParser', async (t) => {
  const html = readFileSync(
    join(__dirname, '../../../../test_data/hn.html'),
    'utf8'
  );
  t.deepEqual(
    await HackerNewsParser(
      html,
      'https://news.ycombinator.com/',
      new Date('1994-11-12')
    ),
    [
      {
        createdAt: '1994-11-11T19:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title: 'Experian’s credit freeze security is still a joke',
        url:
          'https://krebsonsecurity.com/2021/04/experians-credit-freeze-security-is-still-a-joke/',
      },
      {
        createdAt: '1994-11-11T22:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title: 'Nobody cares about your clean code',
        url:
          'https://felipecsl.com/2021/04/26/nobody-cares-about-your-beautiful-code.html',
      },
      {
        createdAt: '1994-11-11T22:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title:
          'Scripps researchers found 27,000 barrels of toxic waste near California coast',
        url:
          'https://www.latimes.com/environment/story/2021-04-26/ddt-waste-barrels-off-la-coast-shock-california-scientists',
      },
      {
        createdAt: '1994-11-11T17:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title:
          'Lambda School agrees to end deceptive educational financing practices',
        url:
          'https://dfpi.ca.gov/2021/04/26/lambda-school-reaches-settlement-with-dfpi-agreeing-to-end-deceptive-educational-financing-practices',
      },
      {
        createdAt: '1994-11-11T17:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title:
          'Subsidiary of Toyota to acquire Lyft’s self-driving car division',
        url:
          'https://investor.lyft.com/news-and-events/news/news-details/2021/Woven-Planet-a-subsidiary-of-Toyota-to-acquire-Lyfts-self-driving-car-division/default.aspx',
      },
      {
        createdAt: '1994-11-11T19:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title:
          'Pfizer is testing a pill that, if successful, could cure Covid-19',
        url:
          'https://montrealgazette.com/news/world/pfizer-is-testing-a-pill-that-if-successful-could-become-first-ever-home-cure-for-covid-19',
      },
      {
        createdAt: '1994-11-11T15:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title: 'macOS gatekeeper and file quarantine bypass',
        url: 'https://objective-see.com/blog/blog_0x64.html',
      },
      {
        createdAt: '1994-11-11T12:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title:
          'Roku says it may lose YouTube TV app after Google made anti-competitive demands',
        url:
          'https://www.axios.com/roku-google-youtube-tv-dispute-525316c1-4d66-44e3-a96a-40db7b10e05b.html',
      },
      {
        createdAt: '1994-11-11T14:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title: 'Best practices for remote software engineering',
        url:
          'https://cacm.acm.org/opinion/articles/252174-the-10-best-practices-for-remote-software-engineering/fulltext',
      },
      {
        createdAt: '1994-11-11T22:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title: 'A Pixel Is Not a Little Square [pdf]',
        url: 'http://alvyray.com/Memos/CG/Microsoft/6_pixel.pdf',
      },
      {
        createdAt: '1994-11-11T22:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title:
          'Relationship Hero (YC S17) Is Hiring Sales Associates – Full Time Remote',
        url: 'https://relationshiphero.com/careers?role=salesAssociate',
      },
      {
        createdAt: '1994-11-11T18:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title:
          'Pg_tmp – Run tests on an isolated, temporary PostgreSQL database',
        url: 'http://eradman.com/ephemeralpg/',
      },
      {
        createdAt: '1994-11-11T15:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title: 'Digital Needle: Ripping vinyl records with a scanner (2013)',
        url: 'https://www.cs.huji.ac.il/~springer/DigitalNeedle/index.html',
      },
      {
        createdAt: '1994-11-11T12:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title:
          'New proof reveals that graphs with no pentagons are fundamentally different',
        url:
          'https://www.quantamagazine.org/new-proof-reveals-that-graphs-with-no-pentagons-are-fundamentally-different-20210426/',
      },
      {
        createdAt: '1994-11-11T18:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title: 'Strand Programming Language',
        url: 'http://www.call-with-current-continuation.org/strand/strand.html',
      },
      {
        createdAt: '1994-11-11T16:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title: '99 bits of unsolicited advice',
        url:
          'https://kk.org/thetechnium/99-additional-bits-of-unsolicited-advice/',
      },
      {
        createdAt: '1994-11-11T17:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title: 'Tesla Q1 2021 Results',
        url:
          'https://tesla-cdn.thron.com/static/R3GJMT_TSLA_Q1_2021_Update_5KJWZA.pdf?xseo=&response-content-disposition=inline%3Bfilename%3D%22TSLA-Q1-2021-Update.pdf%22',
      },
      {
        createdAt: '1994-11-11T14:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title: 'Git repository of Plan 9 History, from 1992 to 2015',
        url: 'https://github.com/plan9foundation/plan9',
      },
      {
        createdAt: '1994-11-11T09:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title: 'QEMU Internals',
        url: 'https://airbus-seclab.github.io/qemu_blog/',
      },
      {
        createdAt: '1994-11-11T12:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title:
          'Cheerleader’s Snapchat rant leads to ‘momentous’ Supreme Court case on speech',
        url:
          'https://www.washingtonpost.com/politics/courts_law/supreme-court-cheerleader-first-amendment/2021/04/25/9d2ac1e2-9eb7-11eb-b7a8-014b14aeb9e4_story.html',
      },
      {
        createdAt: '1994-11-11T13:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title: 'Phoebus Cartel',
        url: 'https://en.wikipedia.org/wiki/Phoebus_cartel',
      },
      {
        createdAt: '1994-11-11T17:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title: 'Examples of RISC-V Assembly Programs',
        url:
          'https://marz.utk.edu/my-courses/cosc230/book/example-risc-v-assembly-programs/',
      },
      {
        createdAt: '1994-11-11T14:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title:
          'iOS 14.5 delivers Unlock iPhone with Apple Watch, new privacy controls, and more',
        url:
          'https://www.apple.com/newsroom/2021/04/ios-14-5-offers-unlock-iphone-with-apple-watch-diverse-siri-voices-and-more/',
      },
      {
        createdAt: '1994-11-11T10:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title:
          'Telegram: Payments 2.0, Scheduled Voice Chats, New Web Versions',
        url: 'https://telegram.org/blog/payments-2-0-scheduled-voice-chats',
      },
      {
        createdAt: '1994-11-11T13:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title: 'Changes at Basecamp',
        url: 'https://world.hey.com/jason/changes-at-basecamp-7f32afc5',
      },
      {
        createdAt: '1994-11-11T14:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title:
          'Hedy is a gradual programming language that helps kids to learn Python',
        url: 'https://www.hedycode.com/',
      },
      {
        createdAt: '1994-11-11T14:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title:
          '‘Contextualization Engines’ can fight misinformation without censorship',
        url:
          'https://aviv.medium.com/contextualization-engines-can-fight-misinformation-without-censorship-c5c47222a3b7',
      },
      {
        createdAt: '1994-11-11T15:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title: 'CSS Tips',
        url: 'https://markodenic.com/css-tips/',
      },
      {
        createdAt: '1994-11-11T10:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title: 'Farming robot kills 100k weeds per hour with lasers',
        url: 'https://www.freethink.com/articles/farming-robot',
      },
      {
        createdAt: '1994-11-11T14:00:00.000Z',
        foundAt: 'news.ycombinator.com',
        title: 'Climate change and the 1991-2020 U.S. Climate Normals',
        url:
          'https://climate.gov/news-features/understanding-climate/climate-change-and-1991-2020-us-climate-normals',
      },
    ]
  );
});
