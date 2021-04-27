import { readFileSync } from 'fs';
import { join } from 'path';

import test from 'ava';

import { RssParser } from './RssParser';

test('RssParser Android Police', async (t) => {
  const html = readFileSync(
    join(__dirname, '../../../../test_data/ap.rss'),
    'utf8'
  );
  t.deepEqual(await RssParser(html, 'https://www.androidpolice.com/feed/'), [
    {
      createdAt: '2021-04-26T17:53:10.000-05:00',
      foundAt: 'www.androidpolice.com',
      title:
        "Sony's Playstation app hits 100 million installs five months after the launch of the PS5",
      url:
        'https://www.androidpolice.com/2021/04/26/sonys-playstation-app-hits-100-million-installs-five-months-after-the-launch-of-the-ps5/',
    },
    {
      createdAt: '2021-04-26T17:34:04.000-05:00',
      foundAt: 'www.androidpolice.com',
      title:
        'Anker gets ready for Star Wars Day with R2-D2 limited edition Nebula Capsule II projector',
      url:
        'https://www.androidpolice.com/2021/04/26/anker-gets-ready-for-star-wars-day-with-r2-d2-limited-edition-nebula-capsule-ii-projector/',
    },
    {
      createdAt: '2021-04-26T17:04:25.000-05:00',
      foundAt: 'www.androidpolice.com',
      title:
        "Samsung's May 2021 security update is already hitting the Galaxy S21 Ultra",
      url:
        'https://www.androidpolice.com/2021/04/26/samsungs-may-2021-security-update-is-already-hitting-the-galaxy-s21-ultra/',
    },
    {
      createdAt: '2021-04-26T15:21:44.000-05:00',
      foundAt: 'www.androidpolice.com',
      title:
        'The latest Telegram overhauls payments, introduces a new web app, and lets you schedule Voice Chats',
      url:
        'https://www.androidpolice.com/2021/04/26/the-latest-telegram-overhauls-payments-introduces-a-new-web-app-and-lets-you-schedule-voice-chats/',
    },
    {
      createdAt: '2021-04-26T15:08:49.000-05:00',
      foundAt: 'www.androidpolice.com',
      title: 'Spotify is about to get all up in your Facebook app',
      url:
        'https://www.androidpolice.com/2021/04/26/spotify-is-about-to-get-all-up-in-your-facebook-app/',
    },
    {
      createdAt: '2021-04-26T14:07:58.000-05:00',
      foundAt: 'www.androidpolice.com',
      title:
        'Spend some of the money you saved on the gym last year to get a Fitbit Versa 3 — now at an all-time low',
      url:
        'https://www.androidpolice.com/2021/04/26/spend-some-of-the-money-you-saved-on-the-gym-last-year-to-get-a-fitbit-versa-3-now-at-an-all-time-low/',
    },
    {
      createdAt: '2021-04-26T13:47:00.000-05:00',
      foundAt: 'www.androidpolice.com',
      title:
        "Spotify's price hike is coming to the US, too, but only for family plans",
      url:
        'https://www.androidpolice.com/2021/04/26/the-dreaded-spotify-price-hike-has-arrived-in-the-uk-and-europe/',
    },
    {
      createdAt: '2021-04-26T12:49:01.000-05:00',
      foundAt: 'www.androidpolice.com',
      title: 'Google and Roku are having a squabble over YouTube TV',
      url:
        'https://www.androidpolice.com/2021/04/26/google-and-roku-are-having-a-squabble-over-youtube-tv/',
    },
    {
      createdAt: '2021-04-26T12:05:40.000-05:00',
      foundAt: 'www.androidpolice.com',
      title: 'How to get a pair of Surface Headphones for just $82',
      url:
        'https://www.androidpolice.com/2021/04/26/how-to-get-a-pair-of-surface-headphones-for-just-82/',
    },
    {
      createdAt: '2021-04-26T11:37:50.000-05:00',
      foundAt: 'www.androidpolice.com',
      title:
        'Chrome 91 Beta launches with prettier buttons, OTP autofill improvements, and battery-saving optimizations',
      url: 'https://www.androidpolice.com/2021/04/26/chrome-91/',
    },
    {
      createdAt: '2021-04-26T11:08:24.000-05:00',
      foundAt: 'www.androidpolice.com',
      title: '18 temporarily free and 41 on-sale apps and games for Monday',
      url:
        'https://www.androidpolice.com/2021/04/26/android-app-game-sales-april-26-2021/',
    },
    {
      createdAt: '2021-04-26T10:27:00.000-05:00',
      foundAt: 'www.androidpolice.com',
      title:
        "Samsung's Apple-looking Bluetooth keyboard for DeX is now official",
      url:
        'https://www.androidpolice.com/2021/04/26/samsungs-new-bluetooth-keyboard-looks-like-it-came-from-apple-but-its-made-for-dex/',
    },
    {
      createdAt: '2021-04-26T07:45:44.000-05:00',
      foundAt: 'www.androidpolice.com',
      title:
        "Samsung's Galaxy Buds Pro borrow a handy feature from their predecessor",
      url:
        'https://www.androidpolice.com/2021/04/26/samsungs-galaxy-buds-pro-borrow-a-handy-feature-from-their-predecessor/',
    },
    {
      createdAt: '2021-04-26T05:20:36.000-05:00',
      foundAt: 'www.androidpolice.com',
      title:
        "There's a new BMW-branded phone with a huge vapor cooling chamber that no one asked for",
      url:
        'https://www.androidpolice.com/2021/04/26/iqoos-bmw-branded-phone-is-predictably-all-about-power/',
    },
    {
      createdAt: '2021-04-26T04:21:17.000-05:00',
      foundAt: 'www.androidpolice.com',
      title: 'Get the Chrome 91 Beta here (APK Download)',
      url:
        'https://www.androidpolice.com/2021/04/26/you-can-download-chrome-91-beta-right-now/',
    },
    {
      createdAt: '2021-04-25T21:02:42.000-05:00',
      foundAt: 'www.androidpolice.com',
      title:
        "Google's ads for this year's Oscars had more emotion than half the nominees",
      url:
        'https://www.androidpolice.com/2021/04/25/im-not-crying-youre-crying-at-googles-latest-tear-jerker-search-videos/',
    },
    {
      createdAt: '2021-04-25T15:09:18.000-05:00',
      foundAt: 'www.androidpolice.com',
      title:
        'Weekend poll: Which do you prefer — face unlock or a fingerprint scanner?',
      url:
        'https://www.androidpolice.com/2021/04/25/weekend-poll-which-do-you-prefer-face-unlock-or-a-fingerprint-scanner/',
    },
    {
      createdAt: '2021-04-25T14:39:54.000-05:00',
      foundAt: 'www.androidpolice.com',
      title: 'WhatsApp may add a new option for disappearing messages soon',
      url:
        'https://www.androidpolice.com/2021/04/25/whatsapp-may-add-a-new-option-for-disappearing-messages-soon/',
    },
    {
      createdAt: '2021-04-25T13:24:36.000-05:00',
      foundAt: 'www.androidpolice.com',
      title: 'Registration is open for early access to The Witcher mobile game',
      url:
        'https://www.androidpolice.com/2021/04/25/registration-is-open-for-early-access-to-the-witcher-mobile-game/',
    },
    {
      createdAt: '2021-04-25T12:26:13.000-05:00',
      foundAt: 'www.androidpolice.com',
      title: 'BlueDriver for Android: The all-inclusive digital car mechanic',
      url: 'https://www.androidpolice.com/2021/04/25/bluedriver-review/',
    },
  ]);
});

test('RssParser Reddit Programming', async (t) => {
  const html = readFileSync(
    join(__dirname, '../../../../test_data/rp.rss'),
    'utf8'
  );
  t.deepEqual(await RssParser(html, 'https://www.reddit.com/r/programming.rss'),
    [
      {
        createdAt: '2021-04-26T09:26:41.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'University of Minnesota security researchers apologize for deliberately buggy Linux patches',
        url: 'https://www.zdnet.com/article/university-of-minnesota-security-researchers-apologize-for-deliberately-buggy-linux-patches/',
      },
      {
        createdAt: '2021-04-26T19:00:57.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'The Linux Foundation\'s demands to the University of Minnesota for its bad Linux patches security project',
        url: 'https://www.zdnet.com/article/the-linux-foundations-demands-to-the-university-of-minnesota-for-its-bad-linux-patches/',
      },
      {
        createdAt: '2021-04-26T17:16:18.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'Experian’s Credit Freeze Security is Still a Joke',
        url: 'https://krebsonsecurity.com/2021/04/experians-credit-freeze-security-is-still-a-joke/',
      },
      {
        createdAt: '2021-04-25T16:48:44.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'Crypto miners are killing free CI',
        url: 'https://layerci.com/blog/crypto-miners-are-killing-free-ci/',
      },
      {
        createdAt: '2021-04-26T05:09:52.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'Toggle methods and endpoints at runtime through the Java Instrumentation API',
        url: 'https://github.com/facet-tech/agent-java/',
      },
      {
        createdAt: '2021-04-26T16:38:38.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'Perl test coverage when you don’t have a Makefile',
        url: 'https://phoenixtrap.com/2021/04/26/perl-test-coverage-when-you-dont-have-a-makefile/?utm_source=rss&utm_medium=rss&utm_campaign=perl-test-coverage-when-you-dont-have-a-makefile',
      },
      {
        createdAt: '2021-04-26T16:45:43.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'Event Streaming Like it\'s 1978',
        url: 'https://github.com/jgraettinger/blog/blob/master/event-streaming-like-1978.md#event-streaming-like-its-1978',
      },
      {
        createdAt: '2021-04-26T10:31:18.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'Mongita is to MongoDB as SQLite is to SQL',
        url: 'https://github.com/scottrogowski/mongita',
      },
      {
        createdAt: '2021-04-26T06:47:01.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'Practical SQL for Data Analysis: What you can do without Pandas',
        url: 'https://hakibenita.com/sql-for-data-analysis',
      },
      {
        createdAt: '2021-04-26T08:02:09.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'Simplify Code with if constexpr and Concepts in C++17/C++20',
        url: 'https://www.cppstories.com/2018/03/ifconstexpr/',
      },
      {
        createdAt: '2021-04-26T17:04:20.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'I Wrote an Open Source Analytics Platform in full Javascript!',
        url: 'https://github.com/itsrennyman/aurora',
      },
      {
        createdAt: '2021-04-25T21:15:37.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'Parsing Protobuf at 2+GB/S: How I Learned to Love Tail Calls in C',
        url: 'https://blog.reverberate.org/2021/04/21/musttail-efficient-interpreters.html',
      },
      {
        createdAt: '2021-04-26T22:44:04.000-05:00',
        foundAt: 'www.reddit.com',
        title: '3 Technique to Count Occurrences of a Word in a String | Timearrows',
        url: 'https://www.timearrows.com/count-occurrences-of-a-words-in-string/',
      },
      {
        createdAt: '2021-04-26T22:37:30.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'What is an API gateway? API simplicity and stability',
        url: 'https://www.infoworld.com/article/3616188/what-is-an-api-gateway-api-simplicity-and-stability.html',
      },
      {
        createdAt: '2021-04-25T06:33:44.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'You might as well timestamp it',
        url: 'https://changelog.com/posts/you-might-as-well-timestamp-it',
      },
      {
        createdAt: '2021-04-26T10:14:32.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'How to learn Unix tools',
        url: 'https://blog.nindalf.com/posts/how-to-learn-unix-tools/',
      },
      {
        createdAt: '2021-04-26T11:26:13.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'QEMU Internals',
        url: 'https://airbus-seclab.github.io/qemu_blog/',
      },
      {
        createdAt: '2021-04-26T21:46:55.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'Uses of MATLAB',
        url: 'https://statanalytica.com/blog/uses-of-matlab/',
      },
      {
        createdAt: '2021-04-26T21:08:11.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'Project Jengo Redux: Cloudflare’s Prior Art Search Bounty Returns',
        url: 'https://blog.cloudflare.com/project-jengo-redux-cloudflares-prior-art-search-bounty-returns/',
      },
      {
        createdAt: '2021-04-26T10:15:57.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'Using asynchronous web APIs from WebAssembly',
        url: 'https://web.dev/asyncify/',
      },
      {
        createdAt: '2021-04-26T20:04:09.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'Bye bye feature flags…hello low code',
        url: 'https://github.com/facet-tech/agent-java/',
      },
      {
        createdAt: '2021-04-25T14:07:50.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'Has UML died without anyone noticing?',
        url: 'https://garba.org/posts/2021/uml/',
      },
      {
        createdAt: '2021-04-26T18:25:58.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'Simple and clutter free Gain\\Loss, Optimal Leverage and Liquidation calculator for short-term stock and crypto trading',
        url: 'https://nconnector.github.io/leverage-calculator/',
      },
      {
        createdAt: '2021-04-26T12:20:12.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'Helena: Web Automation for End Users',
        url: 'https://helena-lang.org/',
      },
      {
        createdAt: '2021-04-26T11:40:31.000-05:00',
        foundAt: 'www.reddit.com',
        title: 'Maximizing Deep Concentration While Coding',
        url: 'https://thewooleyway.substack.com/p/maximizing-deep-concentration-while',
      },
    ]
  );
});