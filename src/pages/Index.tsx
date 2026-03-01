import { useState, useCallback } from 'react';
import Preloader from '@/components/Preloader';
import MetroTile from '@/components/MetroTile';
import gamingSetup from '@/assets/gaming-setup.webp';

const tiles = [
  {
    image: '/ivan/1 YouTube.jpg',
    label: 'YouTube',
    href: 'https://www.youtube.com/skeletonfx',
    alt: 'YouTube',
  },
  {
    image: '/ivan/2 Twitch.jpg',
    label: 'Twitch',
    href: 'https://www.twitch.tv/skeletonfx',
    alt: 'Twitch',
  },
  {
    image: '/ivan/3 VK Видео Live.jpg',
    label: 'VK Видео Live',
    href: 'https://live.vkvideo.ru//skeletonfx',
    alt: 'VK Видео Live',
  },
  {
    image: '/ivan/4 VK Видео.jpg',
    label: 'VK Видео',
    href: 'https://vkvideo.ru/@theskeletonfx',
    alt: 'VK Видео',
  },
  {
    image: '/ivan/5 Rutube.jpg',
    label: 'Rutube',
    href: 'https://rutube.ru/channel/24845350/',
    alt: 'Rutube',
  },
  {
    image: '/ivan/6 DonationAlerts.jpg',
    label: 'DonationAlerts',
    href: 'https://www.donationalerts.com/r/skeletonfx',
    alt: 'DonationAlerts',
  },
  {
    image: '/ivan/7 Boosty.jpg',
    label: 'Boosty',
    href: 'https://boosty.to/skeletonfx',
    alt: 'Boosty',
  },
  {
    image: '/ivan/8 Donatty.jpg',
    label: 'Donatty',
    href: 'https://donatty.com/skeletonfx',
    alt: 'Donatty',
  },
  //{
  //image: '/ivan/9 ЮMoney.jpg',
  //label: 'ЮMoney',
  //href: '#',
  //alt: 'ЮMoney',
  //copyValue: '410012345678901',
  //},
  {
    image: '/ivan/10 Мир.jpg',
    label: 'Мир (2200700153368476)',
    href: '#',
    alt: 'Мир',
    copyValue: '2200700153368476',
  },
  {
    image: '/ivan/11 VK Donut.jpg',
    label: 'VK Donut',
    href: 'https://vk.com/theskeletonfx?analytics_screen=group&levelId=289&source=donut_banner&w=donut_payment-178362818',
    alt: 'VK Donut',
  },
  {
    image: '/ivan/12 Telegram.jpg',
    label: 'Telegram',
    href: 'https://t.me/SkeletonFX',
    alt: 'Telegram',
  },
  {
    image: '/ivan/13 Telegram чат.jpg',
    label: 'Telegram чат',
    href: 'https://t.me/SkeletonFX_chat',
    alt: 'Telegram чат',
  },
  {
    image: '/ivan/14 VK.jpg',
    label: 'VK',
    href: 'https://vk.com/skeletonfx',
    alt: 'VK',
  },
  {
    image: '/ivan/15 VK паблик.jpg',
    label: 'VK паблик',
    href: 'https://vk.ru/theskeletonfx',
    alt: 'VK паблик',
  },
  {
    image: '/ivan/16 PC config.jpg',
    label: 'PC Config',
    href: 'https://vk.com/topic-178362818_39881489',
    alt: 'PC Config',
  },
  {
    image: '/ivan/17 Steam.jpg',
    label: 'Steam',
    href: 'https://steamcommunity.com/id/SkeletonFX',
    alt: 'Steam',
  },
  {
    image: '/ivan/18 Discord.jpg',
    label: 'Discord',
    href: 'https://discord.gg/RKPgDuw5mq',
    alt: 'Discord',
  },
  {
    image: '/ivan/19 MyGameList.jpg',
    label: 'MyGameList',
    href: 'https://mygamelist.club/SkeletonFX',
    alt: 'MyGameList',
  },
  {
    image: '/ivan/20 Instragramm.jpg',
    label: 'Instagram',
    href: 'https://www.instagram.com/skeletonfx/',
    alt: 'Instagram',
  },
];

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && <Preloader onComplete={handlePreloaderComplete} />}

      <main className="relative h-screen w-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={gamingSetup}
            alt="Gaming setup with RGB lighting"
            className="h-full w-full object-cover"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
          <div className="absolute inset-0 bg-background/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
          {/* Header */}
          <header
            className={`mb-8 md:mb-12 text-center ${
              loaded ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            <p className="font-body text-sm md:text-base tracking-[0.4em] uppercase text-muted-foreground mb-2">
              Gamer • Streamer • Content Creator
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black tracking-wider text-foreground text-glow-purple">
              SKELETONFX
            </h1>
          </header>

          {/* Metro Tiles Grid — Windows Phone style */}
          <section className="flex flex-col items-center gap-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-3 md:gap-3 w-full max-w-6xl overflow-y-auto max-h-[60vh] md:max-h-none py-4 px-1 sm:px-0">
              {tiles.map((tile, i) => (
                <MetroTile
                  key={tile.label}
                  image={tile.image}
                  label={tile.label}
                  href={tile.href}
                  copyValue={'copyValue' in tile ? tile.copyValue : undefined}
                  delay={200 + i * 80}
                  visible={loaded}
                />
              ))}
            </div>
            <p className="text-[10px] text-xs text-muted-foreground text-center max-w-2xl leading-relaxed">
              * Meta Platforms Inc. (Facebook и Instagram) — организация
              признана экстремистской. Её деятельность запрещена на территории
              России.
              <br />
              ** Доступ к серверу Discord может быть ограничен на территории РФ.
            </p>
            <p className="text-[10px] sm:text-xs text-muted-foreground/80 text-center mb-2 mt-auto">
              Девелопмент бай дружбан Ивана —{' '}
              <a
                href="https://t.me/grgdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 align-bottom"
              >
                Giorgio0007
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="shrink-0"
                  aria-hidden
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Index;
