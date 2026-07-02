// Chipsa Lander — bilingual copy. One content tree per locale; the Landing
// component renders identical markup from whichever locale is active.

export type Lang = 'ru' | 'en';

const tg = 'https://t.me/maxkysh';

export const content = {
  ru: {
    htmlLang: 'ru',
    meta: {
      title: 'Лендинг-завод — система производства лендингов под ваш бренд · Chipsa',
      description:
        'Настроим под ваш бренд систему производства лендингов на связке Claude Design + Claude Code. Дальше ваша команда делает лендинги в едином стиле сама. Дизайн-студия Chipsa.',
      keywords:
        'лендинг-завод, производство лендингов, дизайн-система под бренд, лендинг под ключ, Claude Design, Claude Code, дизайн-студия, Chipsa, лендинг для конференции, iGaming лендинг, B2B лендинг, дизайн лендинга, вёрстка лендинга',
      ogImage: '/images/og-ru.jpg',
    },
    nav: {
      brandMark: 'DEV',
      links: [
        { href: '#problem', label: 'Проблема' },
        { href: '#solution', label: 'Решение' },
        { href: '#cases', label: 'Кейсы' },
        { href: '#process', label: 'Процесс' },
        { href: '#pricing', label: 'Условия' },
        { href: '#faq', label: 'FAQ' },
      ],
      cta: { label: 'telegram @maxkysh', href: tg },
      contact: { label: 'telegram', value: '@maxkysh', href: tg },
    },
    hero: {
      scrollHint: 'Листайте',
      eyebrow: 'Chipsa · Тестовый продукт · Набор первых клиентов',
      titlePre: 'Лендинг-',
      titleMark: 'завод',
      lead: 'Настроим под ваш бренд систему производства лендингов. Дальше ваша команда делает их сама.',
      ctaPrimary: 'Узнать условия',
      ctaSecondary: 'Смотреть кейсы',
    },
    problem: {
      label: 'Контекст',
      title: 'Когда лендинги делаются потоком, каждый путь имеет свою цену.',
      cards: [
        {
          index: 'Путь 1 / Руками',
          title: 'Человеческий фактор и время',
          body: 'Каждый лендинг — отдельный проект. Бриф, дизайн, вёрстка, правки. На каждом шаге зависит от того, кто свободен и в каком состоянии.',
        },
        {
          index: 'Путь 2 / AI-генератор',
          title: 'Не хватает деталей и эмоции',
          body: 'Базовые AI-инструменты выдают результат, который технически работает, но без слоя индивидуальности — деталей, акцентов, эмоциональной точности.',
        },
        {
          index: 'Путь 3 / Inhouse',
          title: 'Команда всегда занята',
          body: 'Дизайнеры в потоке других задач. Если есть выделенный специалист — снова упираемся в человеческий фактор и его загрузку.',
        },
      ],
      calloutKicker: 'Итог',
      calloutText: 'В любом случае — это стоит денег и времени inhouse-команды или подрядчика.',
    },
    solution: {
      label: 'Что это',
      title: 'Не сайт. Не конструктор. завод.',
      lead: 'Один раз настроим под ваш бренд связку Claude Design + Claude Code + шаблоны, промпты и инструкции. Дальше ваша команда производит лендинги в едином стиле — без обращения к нам и без агентства.',
      steps: [
        { kicker: 'Вход', title: 'Ваш бренд', body: 'Айдентика, тон, аудитория, продукт.' },
        {
          kicker: 'Процесс',
          title: 'Настроенная система',
          body: 'Claude Design + Claude Code, токены, компоненты, шаблоны, промпты, инструкции.',
        },
        {
          kicker: 'Выход',
          title: 'Лендинги команды',
          body: 'Новые страницы в едином стиле — силами вашей команды.',
        },
      ],
    },
    cases: {
      label: 'Уже сделано',
      title: 'Два кейса',
      thisPage: 'Эта страница',
      items: [
        {
          title: 'BWiGA — конференция iGaming',
          body: 'Пример настроенной дизайн-системы. Сайт конференции — пока одна страница в системе.',
          link: 'Открыть',
          href: 'https://adriaticawards.com/',
          img: '/images/cases/bwiga.jpg',
          alt: 'BWiGA — сайт конференции iGaming',
        },
        {
          title: 'Chipsa — 3D-карта и эта посадочная',
          body: 'Пример работающего дизайн-завода. Две разные страницы в едином стиле, собранные через одну систему.',
          link: 'Открыть 3D-карту',
          href: 'https://3dmap.chipsa.dev/ru/',
          img: '/images/cases/chipsa-3dmap.jpg',
          alt: 'Chipsa — интерактивная 3D-карта зала конференции',
        },
      ],
    },
    process: {
      label: 'Процесс настройки',
      title: '4 шага. Около недели.',
      steps: [
        {
          title: 'Анализ бренда, конкурентов, контекста',
          body: 'Смотрим, что есть, оцениваем сильные стороны, учитываем специфику аудитории и продукта. Понимаем, как выделиться среди конкурентов и что нужно улучшить.',
        },
        {
          title: 'Дизайн-система',
          body: 'Собираем токены, типографику, компоненты в Claude Design под ваш бренд. Дополняем шаблонами документов, промптами и инструкциями для Claude Code.',
        },
        {
          title: 'Первый лендинг',
          body: 'Собираем один полноценный лендинг в системе. Он становится proof-точкой и базой для дальнейшей работы.',
        },
        {
          title: 'Передача и обучение',
          body: 'Видео-обучение для команды на русском и английском. Документация и рабочие промпты. Подстраиваем стек под ваш набор инструментов.',
        },
      ],
      mediaLabel: 'Claude Design',
      mediaCaption: 'Настроенная дизайн-система под бренд',
    },
    about: {
      label: 'Почему именно мы',
      title: '16 лет работы с дизайном.',
      stats: [
        { value: '16', suffix: '+', label: 'Лет в дизайне', grad: true },
        { value: '500', suffix: '+', label: 'Проектов' },
        { value: '120', suffix: '+', label: 'Награды: awwwards, CSSDA, Behance' },
        { value: '15', suffix: '+', label: 'Человек в команде' },
      ],
      features: [
        {
          icon: 'wand',
          title: 'Имиджевый и промо-дизайн',
          body: 'Понимание, как страница выстраивает доверие, эмоцию и статус — не только закрывает целевое действие.',
        },
        {
          icon: 'eye',
          title: 'Психология внимания и удержания',
          body: 'Интерактив, микро-анимация, порционная подача информации, mobile-first подход.',
        },
        {
          icon: 'cap',
          title: 'Опыт работы с дизайн-системами',
          body: 'Не настроим один раз и забудем — выстраиваем систему, которую можно развивать годами.',
        },
        {
          icon: 'brush',
          title: 'Графический контент и эмоция',
          body: 'Цветовая работа, композиция, чувство меры — детали, которые отличают работающий лендинг от шаблона.',
        },
      ],
      clientsLabel: 'Среди клиентов',
      clients: [
        { name: 'Самокат', src: '/images/clients/samokat.svg' },
        { name: 'Альфа-Банк', src: '/images/clients/alfabank.svg', small: true },
        { name: "McDonald's", src: '/images/clients/mcdonalds.svg' },
        { name: 'РУСАЛ', src: '/images/clients/rusal.svg', big: true },
        { name: 'ТехноНИКОЛЬ', src: '/images/clients/technonikol.svg' },
        { name: 'LG', src: '/images/clients/lg.svg' },
        { name: 'Vileda', src: '/images/clients/vileda.png' },
      ],
    },
    included: {
      label: 'В пакет настройки',
      title: 'Что вы получаете',
      steps: [
        {
          title: 'Дизайн-система под ваш бренд',
          body: 'Настроенная связка Claude Design + Claude Code с токенами, типографикой и компонентами.',
        },
        {
          title: 'Шаблоны, промпты, инструкции',
          body: 'Рабочие документы, которые ваша команда использует ежедневно при создании новых лендингов.',
        },
        {
          title: 'Один готовый лендинг',
          body: 'Полноценный, не demo. Сразу используется в продакшне.',
        },
        {
          title: 'Обучение команды',
          body: 'Видео на русском и английском, документация, индивидуальные созвоны при необходимости.',
        },
      ],
      calloutKicker: 'Для российских клиентов',
      calloutText: 'Подписку Claude Design можем взять на себя — включаем в абонентскую плату.',
    },
    podcast: {
      label: 'В подкасте AffPal',
      title: 'Зачем дизайн в эпоху AI-генерации',
      body: 'Разговор со Стефаном Мюльбауэром о том, как меняется работа дизайн-студии, когда AI делает механическую часть. Что остаётся ценного: насмотренность, понимание брендов, психология деталей.',
      img: '/images/podcast.jpg',
      alt: 'Подкаст AffPal × Chipsa — о ценности дизайна в эпоху AI',
      comingSoon: 'Coming soon',
    },
    stack: {
      label: 'Технологии',
      title: 'Стек',
      calloutKicker: 'Гибко',
      calloutText: 'Подстраиваемся под ваш стек, если он другой.',
    },
    pricing: {
      label: 'Условия',
      title: 'Ищем первых трёх клиентов',
      lead: 'Это тестовый продукт. Для первых трёх клиентов — специальные условия и работа со мной как с основателем студии напрямую.',
      baseKicker: 'Базовая ставка',
      baseValue: '3,5–4,5 тыс.',
      baseValueSmall: ' руб. / час',
      baseNote: 'В зависимости от типа задачи.',
      finalKicker: 'Финальная стоимость',
      finalValue: 'Индивидуально',
      finalNote: 'Зависит от объёма работы под ваш бренд и состава пакета.',
      cta: 'Узнать условия',
    },
    faq: {
      label: 'Часто спрашивают',
      title: 'FAQ',
      items: [
        {
          q: 'Сколько времени занимает настройка?',
          a: 'Около одной недели. Включает анализ, дизайн-систему, первый лендинг и передачу команде.',
        },
        {
          q: 'Что, если мы захотим уйти?',
          a: 'Дизайн-система остаётся у вас — в вашем аккаунте Claude и GitHub. Вы полностью независимы.',
        },
        {
          q: 'Можем ли мы сами развивать систему?',
          a: 'Да. Обучаем команду через видео и инструкции. Можете дорабатывать сами или подключать нас на конкретные задачи.',
        },
        {
          q: 'Чем это отличается от конструктора (Tilda, Webflow)?',
          a: 'Это не конструктор с готовым набором шаблонов, а система, настроенная под ваш бренд, на современном стеке (Astro), с полной кастомизацией.',
        },
        {
          q: 'Работаете под NDA?',
          a: 'Да, готовы подписать.',
        },
      ],
    },
    cta: {
      title: 'Готовы попробовать?',
      body: 'Напишите в telegram. Я как основатель свяжусь, договоримся о созвоне, покажу, как работает вживую, обсудим условия под вашу задачу.',
      button: 'telegram @maxkysh',
      book: 'Забронировать встречу',
      founderAlt: 'Макс — основатель Chipsa',
    },
    footer: {
      brand: 'Chipsa — LP Factory',
      tagline: 'Дизайн-студия · Нови-Сад, Сербия / Красноярск (продакшн)',
      legal: '© 2026 Chipsa · Лендинг-завод',
      cols: [
        {
          title: 'Chipsa',
          links: [
            { href: 'https://chipsa.design', label: 'chipsa.design' },
            { href: 'https://igaming.chipsa.design', label: 'iGaming portfolio' },
          ],
        },
        {
          title: 'Продукты',
          links: [{ href: 'https://3dmap.chipsa.dev/ru/', label: '3D Event Map' }],
        },
        {
          title: 'Контакт',
          links: [
            { href: tg, label: 'telegram @maxkysh' },
            { href: '/legal/privacy-policy-ru.pdf', label: 'Политика конфиденциальности' },
          ],
        },
      ],
    },
  },

  en: {
    htmlLang: 'en',
    meta: {
      title: 'LP Factory — a landing-page production system for your brand · Chipsa',
      description:
        'We set up a landing-page production system tuned to your brand on Claude Design + Claude Code. After that, your team builds landings in one consistent style on its own. Design studio Chipsa.',
      keywords:
        'landing page factory, landing page production, brand design system, Claude Design, Claude Code, design studio, Chipsa, B2B landing pages, iGaming landing page, conference landing page, custom landing page',
      ogImage: '/images/og-en.jpg',
    },
    nav: {
      brandMark: 'DEV',
      links: [
        { href: '#problem', label: 'Problem' },
        { href: '#solution', label: 'Solution' },
        { href: '#cases', label: 'Cases' },
        { href: '#process', label: 'Process' },
        { href: '#pricing', label: 'Pricing' },
        { href: '#faq', label: 'FAQ' },
      ],
      cta: { label: 'telegram @maxkysh', href: tg },
      contact: { label: 'telegram', value: '@maxkysh', href: tg },
    },
    hero: {
      scrollHint: 'Scroll',
      eyebrow: 'Chipsa · Pilot product · Onboarding first clients',
      titlePre: 'Landing ',
      titleMark: 'Factory',
      lead: "We set up a landing-page production system tuned to your brand. After that, your team builds them on its own.",
      ctaPrimary: 'See pricing',
      ctaSecondary: 'View cases',
    },
    problem: {
      label: 'Context',
      title: 'When landing pages ship in a stream, every path has its price.',
      cards: [
        {
          index: 'Path 1 / By hand',
          title: 'Human factor and time',
          body: "Every landing is a separate project. Brief, design, build, revisions. Each step depends on who's free and in what shape.",
        },
        {
          index: 'Path 2 / AI generator',
          title: 'Missing detail and emotion',
          body: 'Off-the-shelf AI tools produce something that technically works, but without a layer of individuality — the detail, the accents, the emotional precision.',
        },
        {
          index: 'Path 3 / In-house',
          title: 'The team is always busy',
          body: 'Designers are buried in other tasks. And a dedicated specialist just brings the human factor and their workload right back.',
        },
      ],
      calloutKicker: 'Bottom line',
      calloutText: 'Either way, it costs money and the time of an in-house team or a contractor.',
    },
    solution: {
      label: 'What it is',
      title: 'Not a site. Not a builder. A factory.',
      lead: 'We set up the Claude Design + Claude Code stack — plus templates, prompts and instructions — once, tuned to your brand. After that your team produces landing pages in one consistent style, with no agency and no calls to us.',
      steps: [
        { kicker: 'Input', title: 'Your brand', body: 'Identity, tone, audience, product.' },
        {
          kicker: 'Process',
          title: 'A tuned system',
          body: 'Claude Design + Claude Code, tokens, components, templates, prompts, instructions.',
        },
        {
          kicker: 'Output',
          title: 'Landings by your team',
          body: 'New pages in one consistent style — built by your team.',
        },
      ],
    },
    cases: {
      label: 'Already shipped',
      title: 'Two cases',
      thisPage: 'This page',
      items: [
        {
          title: 'BWiGA — an iGaming conference',
          body: 'An example of a tuned design system. The conference site — one page in the system so far.',
          link: 'Open',
          href: 'https://adriaticawards.com/',
          img: '/images/cases/bwiga.jpg',
          alt: 'BWiGA — an iGaming conference site',
        },
        {
          title: 'Chipsa — a 3D map and this page',
          body: 'The design factory at work. Two different pages in one style, built through one system.',
          link: 'Open the 3D map',
          href: 'https://3dmap.chipsa.dev/en/',
          img: '/images/cases/chipsa-3dmap.jpg',
          alt: 'Chipsa — an interactive 3D map of a conference hall',
        },
      ],
    },
    process: {
      label: 'Setup process',
      title: '4 steps. About a week.',
      steps: [
        {
          title: 'Analyzing the brand, competitors, context',
          body: "We look at what's there, assess the strengths, factor in the audience and the product. We work out how to stand out from competitors and what to improve.",
        },
        {
          title: 'Design system',
          body: 'We assemble tokens, typography and components in Claude Design for your brand. We add document templates, prompts and instructions for Claude Code.',
        },
        {
          title: 'The first landing',
          body: 'We build one full landing page in the system. It becomes the proof point and the base for everything after.',
        },
        {
          title: 'Handover and training',
          body: 'Video training for the team in Russian and English. Documentation and working prompts. We adapt the stack to your toolset.',
        },
      ],
      mediaLabel: 'Claude Design',
      mediaCaption: 'A design system tuned to the brand',
    },
    about: {
      label: 'Why us',
      title: '16 years of design work.',
      stats: [
        { value: '16', suffix: '+', label: 'Years in design', grad: true },
        { value: '500', suffix: '+', label: 'Projects' },
        { value: '120', suffix: '+', label: 'Awards: awwwards, CSSDA, Behance' },
        { value: '15', suffix: '+', label: 'People on the team' },
      ],
      features: [
        {
          icon: 'wand',
          title: 'Brand and promo design',
          body: 'An understanding of how a page builds trust, emotion and status — not just closes the target action.',
        },
        {
          icon: 'eye',
          title: 'Psychology of attention and retention',
          body: 'Interaction, micro-animation, information served in portions, a mobile-first approach.',
        },
        {
          icon: 'cap',
          title: 'Experience with design systems',
          body: "We don't set it up once and walk away — we build a system you can grow for years.",
        },
        {
          icon: 'brush',
          title: 'Graphic content and emotion',
          body: 'Color work, composition, a sense of proportion — the details that separate a landing that works from a template.',
        },
      ],
      clientsLabel: 'Among our clients',
      clients: [
        { name: 'ChillBase', src: '/images/clients/chillbase.svg' },
        { name: "McDonald's", src: '/images/clients/mcdonalds.svg' },
        { name: 'LG', src: '/images/clients/lg.svg' },
        { name: 'Vileda', src: '/images/clients/vileda.png' },
      ],
    },
    included: {
      label: 'In the setup package',
      title: 'What you get',
      steps: [
        {
          title: 'A design system for your brand',
          body: 'A tuned Claude Design + Claude Code setup with tokens, typography and components.',
        },
        {
          title: 'Templates, prompts, instructions',
          body: 'Working documents your team uses every day when building new landings.',
        },
        {
          title: 'One finished landing',
          body: 'Full-fledged, not a demo. Goes straight to production.',
        },
        {
          title: 'Team training',
          body: 'Videos in Russian and English, documentation, one-on-one calls when needed.',
        },
      ],
      calloutKicker: 'Billing',
      calloutText: 'We can cover the Claude Design subscription and roll it into the retainer.',
    },
    podcast: {
      label: 'On the AffPal podcast',
      title: 'Why design still matters in the age of AI',
      body: "A conversation with Stefan Mühlbauer about how a design studio's work changes when AI handles the mechanical part. What stays valuable: a trained eye, an understanding of brands, the psychology of detail.",
      img: '/images/podcast.jpg',
      alt: 'AffPal × Chipsa podcast — on the value of design in the AI era',
      comingSoon: 'Coming soon',
    },
    stack: {
      label: 'Technologies',
      title: 'Stack',
      calloutKicker: 'Flexible',
      calloutText: "We adapt to your stack if it's different.",
    },
    pricing: {
      label: 'Pricing',
      title: 'Looking for our first three clients',
      lead: "This is a pilot product. The first three clients get special terms and work directly with me as the studio's founder.",
      baseKicker: 'Base rate',
      baseValue: '€60–80',
      baseValueSmall: ' / hour',
      baseNote: 'Depending on the type of task.',
      finalKicker: 'Final price',
      finalValue: 'Custom',
      finalNote: 'Depends on the scope of work for your brand and the package.',
      cta: 'See pricing',
    },
    faq: {
      label: 'Frequently asked',
      title: 'FAQ',
      items: [
        {
          q: 'How long does setup take?',
          a: 'About a week. That covers analysis, the design system, the first landing and handover to the team.',
        },
        {
          q: 'What if we want to leave?',
          a: "The design system stays with you — in your own Claude and GitHub accounts. You're fully independent.",
        },
        {
          q: 'Can we develop the system ourselves?',
          a: 'Yes. We train the team with videos and instructions. You can extend it yourselves or bring us in for specific tasks.',
        },
        {
          q: 'How is this different from a builder (Tilda, Webflow)?',
          a: "It's not a builder with a fixed set of templates — it's a system tuned to your brand, on a modern stack (Astro), fully customizable.",
        },
        {
          q: 'Do you work under NDA?',
          a: 'Yes, happy to sign one.',
        },
      ],
    },
    cta: {
      title: 'Ready to try it?',
      body: "Message us on telegram. As the founder I'll get back to you, we'll set up a call, I'll show you how it works live and we'll discuss terms for your case.",
      button: 'telegram @maxkysh',
      book: 'Book a meeting',
      founderAlt: 'Max — founder of Chipsa',
    },
    footer: {
      brand: 'Chipsa — LP Factory',
      tagline: 'Design studio · Novi Sad, Serbia / Krasnoyarsk (production)',
      legal: '© 2026 Chipsa · LP Factory',
      cols: [
        {
          title: 'Chipsa',
          links: [
            { href: 'https://chipsa.design', label: 'chipsa.design' },
            { href: 'https://igaming.chipsa.design', label: 'iGaming portfolio' },
          ],
        },
        {
          title: 'Products',
          links: [{ href: 'https://3dmap.chipsa.dev/en/', label: '3D Event Map' }],
        },
        {
          title: 'Contact',
          links: [
            { href: tg, label: 'telegram @maxkysh' },
            { href: '/legal/privacy-policy-en.pdf', label: 'Privacy Policy' },
          ],
        },
      ],
    },
  },
} as const;
