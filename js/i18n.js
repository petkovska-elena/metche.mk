/**
 * Metche — i18n (English + Macedonian)
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'metche-lang';

  const translations = {
    en: {
      'meta.title': 'Metche | Pure Raw Honey, Harvested with Care',
      'meta.description': 'Metche offers small-batch raw honey from wildflower meadows. Traceable, unfiltered, and crafted for everyday wellness rituals.',
      'meta.ogImageAlt': 'Metche — pure raw honey harvested with care',

      'brand.wordmark': 'metche',
      'brand.logo': 'Metche',

      'announcement.text': 'Our wildflower reserve blend is back — now in reusable glass jars.',
      'announcement.link': 'Save 25% on multi-jar sets',

      'nav.shopHoney': 'Shop Honey',
      'nav.learn': 'Learn',
      'nav.allJars': 'All Jars',
      'nav.singleOrigin': 'Single-Origin',
      'nav.rawHoney': 'What Is Raw Honey?',
      'nav.shopAll': 'Shop All',
      'nav.origins': 'Our Origins',
      'nav.apiaries': 'Our Apiaries',
      'nav.journal': 'The Honey Journal',
      'nav.selector': 'Product Selector',
      'nav.faq': 'FAQ',

      'mega.shop.desc': 'Drawn from alpine meadows and sun-warmed apiaries, Metche honey is unheated, unblended, and bottled at peak floral intensity.',
      'mega.learn.desc': 'Every Metche batch is traced to a single harvest season and the beekeeper who tended it.',
      'badge.bestseller': 'Best Seller',
      'badge.limited': 'Limited',

      'hero.title': 'Honey Worth Slowing Down For.',
      'hero.sub': 'Small-batch raw honey from wildflower meadows — unfiltered, traceable, and bottled at the peak of the bloom.',
      'hero.cta.shop': 'Shop Raw Honey',
      'hero.cta.selector': 'Product Selector',
      'hero.reviews': '41 verified 5-star reviews',

      'products.title': 'Raw Honey Jars',
      'products.shopAll': 'SHOP ALL',

      'meet.title': 'Meet Metche',
      'meet.text': 'Born in high-country apiaries and known for its <em>naturally complex floral character</em>, <em>slow-crystallized texture</em>, and <em>antioxidant-rich pollen</em>, this <em>ethically harvested</em> honey is more than a pantry staple. It\'s a quiet daily ritual.',

      'grades.heading': 'In raw honey, floral intensity reflects depth of flavor and natural compounds.',
      'grades.tab.reserve': 'Reserve Blend',
      'grades.tab.highland': 'Highland Gold',
      'grades.tab.wildflower': 'Wildflower Light',
      'grades.disclaimer': '*These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. Many customers notice subtle benefits within a few weeks of consistent use.',
      'grades.reserve.0': 'Buttery caramel finish with meadow florals',
      'grades.reserve.1': 'Rich in enzymes and natural prebiotics',
      'grades.reserve.2': 'Steady, clean energy without the crash',
      'grades.reserve.3': 'Supports everyday immune balance*',
      'grades.reserve.4': 'Gentle on digestion and gut comfort*',
      'grades.reserve.5': 'Helps soothe seasonal inflammation*',
      'grades.highland.0': 'Deep amber color with toasted oak notes',
      'grades.highland.1': 'Higher pollen density from alpine blooms',
      'grades.highland.2': 'Long-lasting sweetness, spoon-coating texture',
      'grades.highland.3': 'Ideal for active mornings and recovery*',
      'grades.highland.4': 'Supports digestive regularity*',
      'grades.highland.5': 'Helps maintain a calm inflammatory response*',
      'grades.wildflower.0': 'Light, luminous gold with citrus lift',
      'grades.wildflower.1': 'Delicate floral aroma from mixed meadows',
      'grades.wildflower.2': 'Easy everyday spoonful for the whole family',
      'grades.wildflower.3': 'Gentle immune support for daily use*',
      'grades.wildflower.4': 'Promotes comfortable digestion*',
      'grades.wildflower.5': 'Balances energy through the afternoon*',

      'featured.badge': '#1 best seller',
      'featured.reserve.title': 'Reserve Blend, 500g',
      'featured.reserve.sub': 'Raw · Unfiltered · Cold-bottled',
      'featured.reserve.desc': 'Multi-floral alpine blend. Amber glass, batch-coded, never heated above 40°C.',
      'featured.highland.title': 'Highland Gold, 380g',
      'featured.highland.sub': 'Raw · Highland single-origin',
      'featured.highland.desc': 'High-altitude wildflower honey. Higher pollen density, deep amber profile.',
      'featured.wildflower.title': 'Wildflower Light, 340g',
      'featured.wildflower.sub': 'Raw · Mild floral profile',
      'featured.wildflower.desc': 'Lower viscosity, light wildflower notes. Cold-bottled, single-harvest batch.',
      'featured.addCart': 'Add to Cart — €{price}',

      'compare.label': 'COMPARE US',
      'compare.title': 'How Metche Compares',
      'compare.intro': 'Plenty of jars say "raw" or "pure" — but the details vary. Here\'s an honest look at how our small batches stack up against other raw honeys and typical supermarket options.',
      'compare.col.metche': 'Metche',
      'compare.col.other': 'Other Raw',
      'compare.col.regular': 'Regular Honey',
      'compare.row.0': 'Protective Amber Glass Packaging',
      'compare.row.1': 'Third-Party Tested for Purity',
      'compare.row.2': 'Pesticide Residue-Free Certified',
      'compare.row.3': '100% Traceable to Hive',
      'compare.row.4': 'Ethical Beekeeping Standard',

      'taste.title': 'Metche\'s Taste',
      'taste.intro': 'Smooth and creamy, similar to a rich buttery caramel — enjoy straight from the jar.',
      'taste.caramel.title': 'Caramel',
      'taste.caramel.desc': 'Rich and toasted — the dominant note on the first spoon.',
      'taste.floral.title': 'Floral',
      'taste.floral.desc': 'Light and fresh — a subtle sweetness from seasonal wildflowers.',
      'taste.creamy.title': 'Creamy',
      'taste.creamy.desc': 'Dense, smooth, spoon-coating — never runny.',
      'taste.earthy.title': 'Earthy',
      'taste.earthy.desc': 'A deeper, grounded finish — the mark of unheated raw honey.',

      'reviews.title': 'Loved by 41 verified 5-star reviews',
      'reviews.0': '"Replace every sweetener in your kitchen. You\'ll taste the difference on day one."',
      'reviews.1': '"I take a spoonful every single morning. It\'s become non-negotiable."',
      'reviews.2': '"More steady energy, better focus — I didn\'t expect honey to feel this intentional."',
      'reviews.3': '"It really is different. Creamier, deeper, worth every penny."',
      'reviews.4': '"The best honey I\'ve ever had. Full stop."',

      'beekeeper.intro': 'Our beekeepers follow the <em>Art of Gentle Harvesting</em> — a tradition that puts hive health and meadow biodiversity ahead of volume.',
      'beekeeper.name': 'Meet Tomas',
      'beekeeper.text': 'Introducing Tomas, one of Metche\'s founding master beekeepers from the remote highland valleys where our Reserve Blend is born.',
      'beekeeper.quote': '"What sets beekeeping apart here is that it doesn\'t just produce honey — it sustains the entire landscape around us."',
      'beekeeper.sig': 'Master Beekeeper, Metche',
      'beekeeper.cta': 'Our Story',

      'blog.title': 'Discover What Makes Raw Honey Different',
      'blog.label': 'Honey Journal',
      'blog.0.meta': 'Journal | March 12, 2025',
      'blog.0.title': 'Raw Honey as a Natural Prebiotic: What the Research Says',
      'blog.1.meta': 'Journal | January 8, 2024',
      'blog.1.title': 'Your First Month with Metche: What to Expect',
      'blog.2.meta': 'Journal | November 3, 2025',
      'blog.2.title': 'Why Raw Honey Tastes Richer: The Science Behind the Texture',
      'blog.readMore': 'Read More',

      'quiz.section.title': 'Need help choosing?',
      'quiz.section.desc': 'Answer three questions — we\'ll recommend a SKU by profile and size.',
      'quiz.section.cta': 'Open Product Selector',
      'quiz.title': 'Product Selector',
      'quiz.q1': 'What matters most to you?',
      'quiz.q1.a': 'Everyday gentle wellness',
      'quiz.q1.b': 'Balanced, medium intensity',
      'quiz.q1.c': 'Deep, bold flavor',
      'quiz.q2': 'When do you reach for honey?',
      'quiz.q2.a': 'Morning tea or toast',
      'quiz.q2.b': 'Afternoon energy',
      'quiz.q2.c': 'Evening wind-down',
      'quiz.q3': 'How do you like your honey?',
      'quiz.q3.a': 'Light and floral',
      'quiz.q3.b': 'Creamy and caramel',
      'quiz.q3.c': 'Dark and complex',
      'quiz.result.label': 'We recommend',
      'quiz.progress': '{step} / 3',
      'quiz.complete': 'Complete',

      'footer.newsletter': 'Get the latest on all things honey and be the first for exclusive offers.',
      'footer.email': 'Email Address',
      'footer.fda': '*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.',
      'footer.thanks': 'Thanks — you\'re on the list.',
      'footer.shop': 'Shop Honey',
      'footer.learn': 'Learn',
      'footer.support': 'Support',
      'footer.social': 'Social',
      'footer.contact': 'Contact Us',
      'footer.returns': 'Returns & Exchanges',
      'footer.locator': 'Store Locator',
      'footer.tagline': 'The quiet sweetness behind your steadiest days.',
      'footer.copy': '© All Rights Reserved 2026',
      'footer.terms': 'Terms',
      'footer.privacy': 'Privacy',

      'cart.title': 'Cart',
      'cart.subtotal': 'Subtotal',
      'cart.checkout': 'Check Out',
      'cart.empty': 'Your cart is empty',
      'cart.shipping.remaining': 'Spend €{amount} more for free shipping',
      'cart.shipping.free': 'You qualify for free shipping!',
      'cart.remove': 'Remove',
      'cart.checkout.alert': 'Thank you for your order! Checkout is a demo — connect your payment provider to go live.',

      'product.reserve-ritual.name': 'Reserve Blend, 500g',
      'product.reserve-ritual.grade': 'Reserve Blend',
      'product.morning-glow.name': 'Wildflower Light, 340g',
      'product.morning-glow.grade': 'Wildflower Light',
      'product.highland-deep.name': 'Highland Gold, 2×250g',
      'product.highland-deep.grade': 'Highland Gold',
      'product.reserve-blend.name': 'Reserve Blend, 500g',
      'product.highland-gold.name': 'Highland Gold, 380g',
      'product.wildflower-light.name': 'Wildflower Light, 340g',
      'product.mega.reserve': 'Reserve Blend, 500g',
      'product.mega.highland': 'Highland Gold, 380g',

      'quiz.result.wildflower.title': 'Wildflower Light, 340g',
      'quiz.result.wildflower.desc': 'Lower viscosity, mild floral profile. Raw, cold-bottled.',
      'quiz.result.reserve.title': 'Reserve Blend, 500g',
      'quiz.result.reserve.desc': 'Multi-floral alpine blend. Raw, unfiltered, cold-bottled.',
      'quiz.result.highland.title': 'Highland Gold, 380g',
      'quiz.result.highland.desc': 'High-altitude single-origin. Higher pollen density, deep amber.',
      'quiz.result.light.desc': 'Light wildflower notes. Single-harvest batch.',
      'quiz.result.creamy.desc': 'Medium viscosity, multi-floral. Never heated above 40°C.',
      'quiz.result.bold.desc': 'Highland wildflower, deep amber. Highest pollen density in range.',
      'quiz.result.morning.desc': 'Mild floral profile, lower viscosity. Raw, cold-bottled.',
      'quiz.result.afternoon.desc': 'Multi-floral blend. Batch-coded, amber glass packaging.',
      'quiz.result.evening.desc': 'Light wildflower honey. Single-origin, cold-bottled.',

      'aria.openMenu': 'Open menu',
      'aria.closeMenu': 'Close menu',
      'aria.openCart': 'Open cart',
      'aria.closeCart': 'Close cart',
      'aria.closeQuiz': 'Close quiz',
      'aria.home': 'Metche home',
      'aria.subscribe': 'Subscribe',
      'aria.email': 'Email address',
      'aria.language': 'Language',
      'aria.navPrimary': 'Primary navigation',
      'aria.navSecondary': 'Secondary navigation',
      'alt.hero': 'Bee on wildflower — raw honey harvest',
      'alt.beekeeper': 'Beekeeper inspecting a hive frame',
      'alt.masterBeekeeper': 'Master beekeeper in the field',
      'alt.product.reserveRitual': 'Reserve Blend, 500g raw honey',
      'alt.product.morningGlow': 'Wildflower Light, 340g raw honey',
      'alt.product.highlandDeep': 'Highland Gold, 2×250g raw honey',
      'alt.mega.reserve': 'Reserve Blend raw honey jar',
      'alt.mega.highland': 'Highland Gold raw honey jar',
      'alt.compare.bee': 'Honeybee',
      'alt.compare.honeycomb': 'Raw honeycomb',
      'alt.compare.wildflowers': 'Wildflowers',
      'alt.blog.0': 'Honey and wellness',
      'alt.blog.1': 'First jar of honey',
      'alt.blog.2': 'Creamy honey texture',
      'social.instagram': 'Instagram',
      'social.tiktok': 'TikTok',
      'social.facebook': 'Facebook',
      'social.youtube': 'YouTube'
    },

    mk: {
      'meta.title': 'Метче | Чист суров мед, бережно собран',
      'meta.description': 'Метче нуди мал сериски суров мед од ливадски цветни ливади. Следлив, нефилтриран и флашен за секојдневни ритуали.',
      'meta.ogImageAlt': 'Метче — чист суров мед, бережно собран',

      'brand.wordmark': 'метче',
      'brand.logo': 'Метче',

      'announcement.text': 'Нашата резервна ливадска мешавина е повторно достапна — сега во реупотребливи стаклени тегли.',
      'announcement.link': 'Заштедете 25% на сетови со повеќе тегли',

      'nav.shopHoney': 'Купи мед',
      'nav.learn': 'Дознај',
      'nav.allJars': 'Сите тегли',
      'nav.singleOrigin': 'Единечен потекло',
      'nav.rawHoney': 'Што е суров мед?',
      'nav.shopAll': 'Купи сè',
      'nav.origins': 'Наш потекло',
      'nav.apiaries': 'Наши пчеларни',
      'nav.journal': 'Дневник за мед',
      'nav.selector': 'Избор на производ',
      'nav.faq': 'ЧПП',

      'mega.shop.desc': 'Од алпски ливади и сончеви пчеларни — медот на Метче е незагреан, немешан и флашен на врвот на цветот.',
      'mega.learn.desc': 'Секоја серија на Метче е поврзана со една берба и пчеларот што ја негувал.',
      'badge.bestseller': 'Најпродаван',
      'badge.limited': 'Ограничено',

      'hero.title': 'Мед за кој вреди да се забавите.',
      'hero.sub': 'Мал сериски суров мед од ливадски цветни ливади — нефилтриран, следлив и флашен на врвот на цветот.',
      'hero.cta.shop': 'Купи суров мед',
      'hero.cta.selector': 'Избор на производ',
      'hero.reviews': '41 верификувани рецензии со 5 ѕвезди',

      'products.title': 'Тегли со суров мед',
      'products.shopAll': 'КУПИ СÈ',

      'meet.title': 'Запознајте го Метче',
      'meet.text': 'Роден во планински пчеларни, познат по <em>природно сложен цветен карактер</em>, <em>бавна кристализација</em> и <em>полен богат со антиоксиданси</em> — овој <em>етички собран</em> мед е повеќе од основна намирница. Тоа е тивок дневен ритуал.',

      'grades.heading': 'Кај суровиот мед, цветниот интензитет ја одразува длабочината на вкусот и природните соединенија.',
      'grades.tab.reserve': 'Резервен микс',
      'grades.tab.highland': 'Планинско злато',
      'grades.tab.wildflower': 'Ливадски лесен',
      'grades.disclaimer': '*Овие тврдења не се оценети од Администрацијата за храна и лекови (FDA). Производот не е наменет за дијагностицирање, лечење, излекување или спречување на болести. Многу корисници забележуваат благодети по неколку недели редовна употреба.',
      'grades.reserve.0': 'Путерест карамел завршеток со ливадски цветови',
      'grades.reserve.1': 'Богат со ензими и природни пребиотици',
      'grades.reserve.2': 'Стабилна, чиста енергија без пад',
      'grades.reserve.3': 'Поддршка на секојдневен имунитет*',
      'grades.reserve.4': 'Нежен за варењето и цревата*',
      'grades.reserve.5': 'Помага при сезонска воспаленост*',
      'grades.highland.0': 'Длабок килибарен тон со нотки на даб',
      'grades.highland.1': 'Поголема густина на полен од алпски цветови',
      'grades.highland.2': 'Долготрајна слаткост, густа текстура',
      'grades.highland.3': 'Идеален за активни утра и обнова*',
      'grades.highland.4': 'Поддршка на редовно варење*',
      'grades.highland.5': 'Помага во смирување на воспаление*',
      'grades.wildflower.0': 'Светло златна боја со цитрусна нота',
      'grades.wildflower.1': 'Нежен цветен аромат од мешани ливади',
      'grades.wildflower.2': 'Лесна дневна доза за целото семејство',
      'grades.wildflower.3': 'Нежна имунолошка поддршка*',
      'grades.wildflower.4': 'Поддршка на удобно варење*',
      'grades.wildflower.5': 'Балансира енергија низ попладнево*',

      'featured.badge': '#1 најпродаван',
      'featured.reserve.title': 'Резервен микс, 500г',
      'featured.reserve.sub': 'Суров · Нефилтриран · Ладно флашен',
      'featured.reserve.desc': 'Мулти-цветна алпска мешавина. Килибарно стакло, шифра на серија, никогаш над 40°C.',
      'featured.highland.title': 'Планинско злато, 380г',
      'featured.highland.sub': 'Суров · Планинско единечно потекло',
      'featured.highland.desc': 'Планински ливадски мед. Поголема густина на полен, длабок килибарен профил.',
      'featured.wildflower.title': 'Ливадски лесен, 340г',
      'featured.wildflower.sub': 'Суров · Благ цветен профил',
      'featured.wildflower.desc': 'Пониска вискозност, лесни ливадски ноти. Ладно флашен, една берба.',
      'featured.addCart': 'Додај во кошничка — €{price}',

      'compare.label': 'СПОРЕДБА',
      'compare.title': 'Како се споредува Метче',
      'compare.intro': 'Многу тегли велат „суров" или „чист" — но деталите се разликуваат. Еве искрен преглед на нашите мали серии според друг суров мед и стандардни супермаркет опции.',
      'compare.col.metche': 'Метче',
      'compare.col.other': 'Друг суров',
      'compare.col.regular': 'Обичен мед',
      'compare.row.0': 'Заштитно килибарно стакло',
      'compare.row.1': 'Независно тестиран за чистота',
      'compare.row.2': 'Сертификат без пестициди',
      'compare.row.3': '100% следливост до пчеларник',
      'compare.row.4': 'Етички стандард за пчеларство',

      'taste.title': 'Вкусот на Метче',
      'taste.intro': 'Мазен и кремав, сличен на богат путерест карамел — уживајте директно од теглата.',
      'taste.caramel.title': 'Карамел',
      'taste.caramel.desc': 'Богат и печен — доминантна нота на првата лажица.',
      'taste.floral.title': 'Цветен',
      'taste.floral.desc': 'Лесен и свеж — блага слаткост од сезонски ливадски цветови.',
      'taste.creamy.title': 'Кремав',
      'taste.creamy.desc': 'Густ, мазен, покрива лажицата — никогаш течен.',
      'taste.earthy.title': 'Земјен',
      'taste.earthy.desc': 'Подлабок, основен завршеток — белег на незагреан суров мед.',

      'reviews.title': 'Обожаван од 41 верификувани рецензии со 5 ѕвезди',
      'reviews.0': '„Заменете го секој засладувач во кујната. Разликата ја чувствувате од првиот ден."',
      'reviews.1': '„Секое утро земам по лажица. Стана незаменливо."',
      'reviews.2': '„Постабилна енергија, подобар фокус, не очекував мед да биде вака намерен."',
      'reviews.3': '„Навистина е различен. Покремав, подлабок, вреди секој евро."',
      'reviews.4': '„Најдобриот мед што го имам пробано. Точка."',

      'beekeeper.intro': 'Нашите пчелари го следат <em>Уметноста на нежното берење</em> — традиција што ја става здравјето на пчелите и биоразновидноста пред количината.',
      'beekeeper.name': 'Запознајте го Томас',
      'beekeeper.text': 'Томас е еден од основачките мајстор-пчелари на Метче, од далечните планински долини каде се раѓа нашиот Резервен микс.',
      'beekeeper.quote': '„Она што го прави пчеларството посебно е што не произведува само мед — го одржува целиот пејзаж околу нас."',
      'beekeeper.sig': 'Мајстор-пчелар, Метче',
      'beekeeper.cta': 'Нашата приказна',

      'blog.title': 'Откријте што го прави суровиот мед различен',
      'blog.label': 'Дневник за мед',
      'blog.0.meta': 'Дневник | 12 март 2025',
      'blog.0.title': 'Суров мед како природен пребиотик: што вели истражувањето',
      'blog.1.meta': 'Дневник | 8 јануари 2024',
      'blog.1.title': 'Вашиот прв месец со Метче: што да очекувате',
      'blog.2.meta': 'Дневник | 3 ноември 2025',
      'blog.2.title': 'Зошто суровиот мед вкусува побогато: науката зад текстурата',
      'blog.readMore': 'Прочитај повеќе',

      'quiz.section.title': 'Ви треба помош при избор?',
      'quiz.section.desc': 'Одговорете на три прашања — ќе препорачаме производ според профил и големина.',
      'quiz.section.cta': 'Отвори избор на производ',
      'quiz.title': 'Избор на производ',
      'quiz.q1': 'Што е најважно за вас?',
      'quiz.q1.a': 'Секојдневна нежна употреба',
      'quiz.q1.b': 'Балансиран, среден интензитет',
      'quiz.q1.c': 'Длабок, смел вкус',
      'quiz.q2': 'Кога го користите медот?',
      'quiz.q2.a': 'Утрински чај или тост',
      'quiz.q2.b': 'Попладневна енергија',
      'quiz.q2.c': 'Вечерен одмор',
      'quiz.q3': 'Каков мед сакате?',
      'quiz.q3.a': 'Лесен и цветен',
      'quiz.q3.b': 'Кремав и карамел',
      'quiz.q3.c': 'Темен и сложен',
      'quiz.result.label': 'Препорачуваме',
      'quiz.progress': '{step} / 3',
      'quiz.complete': 'Завршено',

      'footer.newsletter': 'Добијте ги најновите вести за мед и ексклузивни понуди.',
      'footer.email': 'Е-пошта',
      'footer.fda': '*Овие тврдења не се оценети од Администрацијата за храна и лекови. Производот не е наменет за дијагностицирање, лечење, излекување или спречување на болести.',
      'footer.thanks': 'Благодариме — сте на листата.',
      'footer.shop': 'Купи мед',
      'footer.learn': 'Дознај',
      'footer.support': 'Поддршка',
      'footer.social': 'Социјални мрежи',
      'footer.contact': 'Контакт',
      'footer.returns': 'Враќања и замени',
      'footer.locator': 'Продавници',
      'footer.tagline': 'Тивката слаткост зад вашите најстабилни денови.',
      'footer.copy': '© Сите права задржани 2026',
      'footer.terms': 'Услови',
      'footer.privacy': 'Приватност',

      'cart.title': 'Кошничка',
      'cart.subtotal': 'Меѓузбир',
      'cart.checkout': 'Наплата',
      'cart.empty': 'Вашата кошничка е празна',
      'cart.shipping.remaining': 'Потрошете уште €{amount} за бесплатна достава',
      'cart.shipping.free': 'Имате право на бесплатна достава!',
      'cart.remove': 'Отстрани',
      'cart.checkout.alert': 'Ви благодариме за нарачката! Наплатата е демо — поврзете го вашиот платежен систем.',

      'product.reserve-ritual.name': 'Резервен микс, 500г',
      'product.reserve-ritual.grade': 'Резервен микс',
      'product.morning-glow.name': 'Ливадски лесен, 340г',
      'product.morning-glow.grade': 'Ливадски лесен',
      'product.highland-deep.name': 'Планинско злато, 2×250г',
      'product.highland-deep.grade': 'Планинско злато',
      'product.reserve-blend.name': 'Резервен микс, 500г',
      'product.highland-gold.name': 'Планинско злато, 380г',
      'product.wildflower-light.name': 'Ливадски лесен, 340г',
      'product.mega.reserve': 'Резервен микс, 500г',
      'product.mega.highland': 'Планинско злато, 380г',

      'quiz.result.wildflower.title': 'Ливадски лесен, 340г',
      'quiz.result.wildflower.desc': 'Пониска вискозност, благ цветен профил. Суров, ладно флашен.',
      'quiz.result.reserve.title': 'Резервен микс, 500г',
      'quiz.result.reserve.desc': 'Мулти-цветна алпска мешавина. Суров, нефилтриран, ладно флашен.',
      'quiz.result.highland.title': 'Планинско злато, 380г',
      'quiz.result.highland.desc': 'Планинско единечно потекло. Поголема густина на полен, длабок килибар.',
      'quiz.result.light.desc': 'Лесни ливадски ноти. Една берба.',
      'quiz.result.creamy.desc': 'Средна вискозност, мулти-цветен. Никогаш над 40°C.',
      'quiz.result.bold.desc': 'Планински ливадски мед, длабок килибар. Највисока густина на полен.',
      'quiz.result.morning.desc': 'Благ цветен профил, пониска вискозност. Суров, ладно флашен.',
      'quiz.result.afternoon.desc': 'Мулти-цветна мешавина. Шифра на серија, килибарно стакло.',
      'quiz.result.evening.desc': 'Лесен ливадски мед. Единечно потекло, ладно флашен.',

      'aria.openMenu': 'Отвори мени',
      'aria.closeMenu': 'Затвори мени',
      'aria.openCart': 'Отвори кошничка',
      'aria.closeCart': 'Затвори кошничка',
      'aria.closeQuiz': 'Затвори избор',
      'aria.home': 'Метче почетна',
      'aria.subscribe': 'Претплати се',
      'aria.email': 'Е-пошта',
      'aria.language': 'Јазик',
      'aria.navPrimary': 'Главна навигација',
      'aria.navSecondary': 'Споредна навигација',
      'alt.hero': 'Пчела на ливадски цвет — берба на суров мед',
      'alt.beekeeper': 'Пчелар го прегледува рамката од пчеларник',
      'alt.masterBeekeeper': 'Мајстор-пчелар на терен',
      'alt.product.reserveRitual': 'Резервен микс, 500г суров мед',
      'alt.product.morningGlow': 'Ливадски лесен, 340г суров мед',
      'alt.product.highlandDeep': 'Планинско злато, 2×250г суров мед',
      'alt.mega.reserve': 'Тегла со Резервен микс суров мед',
      'alt.mega.highland': 'Тегла со Планинско злато суров мед',
      'alt.compare.bee': 'Пчела',
      'alt.compare.honeycomb': 'Сурова саќе',
      'alt.compare.wildflowers': 'Ливадски цветови',
      'alt.blog.0': 'Мед и добросостојба',
      'alt.blog.1': 'Прва тегла мед',
      'alt.blog.2': 'Кремава текстура на мед',
      'social.instagram': 'Инстаграм',
      'social.tiktok': 'ТикТок',
      'social.facebook': 'Фејсбук',
      'social.youtube': 'Јутјуб'
    }
  };

  // Contact page translations
  translations.en = Object.assign({}, translations.en, {
    'contact.hero.title': 'Get in Touch',
    'contact.hero.sub': "We're here to help. Reach out with questions, feedback, or just to say hello.",
    'contact.form.title': 'Send us a Message',
    'contact.form.desc': "We'll get back to you as soon as possible, typically within 24 hours.",
    'contact.form.name': 'Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.success': "Thank you for reaching out. We'll be in touch soon.",
    'contact.details.title': 'Other Ways to Reach Us',
    'contact.details.email': 'Email',
    'contact.details.phone': 'Phone',
    'contact.details.location': 'Location',
    'contact.details.address': 'Wildflower Valley, Highland Region\nPchinja, North Macedonia',
    'contact.details.hours': 'Business Hours',
    'contact.details.schedule': 'Monday – Friday: 9 AM – 6 PM\nSaturday: 10 AM – 4 PM\nSunday: Closed',
    'contact.faq.title': 'Frequently Asked Questions',
    'contact.faq.intro': "Find answers to common questions below. If you don't find what you're looking for, feel free to reach out directly.",
    'contact.faq.q1.question': 'What is the difference between raw and regular honey?',
    'contact.faq.q1.answer': "Raw honey is unheated and unfiltered, preserving enzymes, pollen, and natural compounds that heating removes. Regular honey is often pasteurized and blended. Metche's raw honey is bottled at the peak of bloom, never heated above 40°C.",
    'contact.faq.q2.question': 'How should I store Metche honey?',
    'contact.faq.q2.answer': 'Store in a cool, dark place at room temperature. Honey naturally crystallizes over time — this is a sign of quality and purity. If you prefer a softer texture, gently warm the jar in warm water. Never microwave or heat above 40°C, as this damages the natural compounds.',
    'contact.faq.q3.question': 'Do you offer international shipping?',
    'contact.faq.q3.answer': 'Currently, we ship throughout Europe with standard and express options. International orders outside Europe are being evaluated. Contact us for specific shipping inquiries or custom orders.',
    'contact.faq.q4.question': 'What is your return policy?',
    'contact.faq.q4.answer': "We stand behind the quality of our honey. If you're not completely satisfied within 30 days of purchase, we offer a full refund or replacement. Unopened jars can be returned for any reason.",
    'contact.faq.q5.question': 'Is your honey suitable for infants?',
    'contact.faq.q5.answer': 'Raw honey should not be given to infants under 12 months due to the rare risk of botulism. For children over 12 months and adults, our raw honey is a wonderful addition to their diet.',
    'contact.faq.q6.question': 'Are your beekeeping practices ethical?',
    'contact.faq.q6.answer': "Yes. All our honey comes from beekeepers who follow the Art of Gentle Harvesting — prioritizing hive health, bee welfare, and meadow biodiversity over volume. Every batch is 100% traceable to a specific apiary and harvest season.",
    'aria.contactName': 'Your name',
    'aria.contactEmail': 'Your email',
    'aria.contactSubject': 'Message subject',
    'aria.contactMessage': 'Your message'
  });

  translations.mk = Object.assign({}, translations.mk, {
    'contact.hero.title': 'Контакт',
    'contact.hero.sub': 'Тука сме за да помогнеме. Контактирајте не со прашања, повратни информации или само да поздравите.',
    'contact.form.title': 'Пишете ни порака',
    'contact.form.desc': 'Ќе ви одговориме што е можно побрзо, обично во рок од 24 часа.',
    'contact.form.name': 'Име',
    'contact.form.email': 'Е-пошта',
    'contact.form.subject': 'Наслов',
    'contact.form.message': 'Порака',
    'contact.form.submit': 'Испрати порака',
    'contact.form.success': 'Ви благодариме што не контактиравте. Ќе ве известиме наскоро.',
    'contact.details.title': 'Други начини да не контактирате',
    'contact.details.email': 'Е-пошта',
    'contact.details.phone': 'Телефон',
    'contact.details.location': 'Локација',
    'contact.details.address': 'Долина на ливади, Планински регион\nПчinja, Северна Македонија',
    'contact.details.hours': 'Работно време',
    'contact.details.schedule': 'Понеделник – Петок: 9:00 – 18:00\nСабота: 10:00 – 16:00\nНедела: Затворено',
    'contact.faq.title': 'Најчесто поставувани прашања',
    'contact.faq.intro': 'Најдете одговори на чести прашања подолу. Ако не најдете што барате, слободно контактирајте не директно.',
    'contact.faq.q1.question': 'Кое е разликата помеѓу суров и обичен мед?',
    'contact.faq.q1.answer': 'Суровиот мед не е загреан и не е филтриран, го зачувува ензимите, поленот и природните соединенија што грењето ги отстранува. Обичниот мед често е пастеризиран и мешан. Метче-ов мед се флашува на врвот на цветот, никогаш над 40°C.',
    'contact.faq.q2.question': 'Како треба да го чувам Метче медот?',
    'contact.faq.q2.answer': 'Чувајте на ладно, темно место на собна температура. Медот природно кристализира со тек на време — тоа е знак за квалитет и чистота. Ако сакате порамна текстура, нежно загрејте ја теглата во топла вода. Никогаш не користете микробранова или загревање над 40°C.',
    'contact.faq.q3.question': 'Дали нудите меѓународна достава?',
    'contact.faq.q3.answer': 'Во моментов испраќаме низ цела Европа со стандардни и експрес опции. Меѓународни нарачки надвор од Европа се разгледуваат. Контактирајте не за специфични прашања за достава или нарачки по нарачка.',
    'contact.faq.q4.question': 'Која е вашата политика за враќање?',
    'contact.faq.q4.answer': 'Го поддржуваме квалитетот на нашиот мед. Ако не сте целосно задоволни во рок од 30 дена од купувањето, нудиме целосно враќање на средствата или замена. Ненадворени тегли може да се вратат од било кој причина.',
    'contact.faq.q5.question': 'Дали вашиот мед е погоден за бебиња?',
    'contact.faq.q5.answer': 'Суровиот мед не треба да се дава на бебиња под 12 месеци поради редок ризик од ботулизам. За деца над 12 месеци и возрасни, нашиот суров мед е одличен додаток во исхраната.',
    'contact.faq.q6.question': 'Дали вашите практики на пчеларство се етички?',
    'contact.faq.q6.answer': 'Да. Сите наши медови доаѓаат од пчелари кои ги следат Уметноста на нежното берење — приоритизирајќи го здравјето на пчелите, благосостојбата на пчелите и биоразновидноста на ливадите пред количината. Секоја серија е 100% следлива до одреден пчеларник и сезона на берење.',
    'aria.contactName': 'Вашето име',
    'aria.contactEmail': 'Вашата е-пошта',
    'aria.contactSubject': 'Наслов на пораката',
    'aria.contactMessage': 'Вашата порака'
  });
    translations.mk = Object.assign({}, translations.mk, {
      'products.page.title': 'Сите производи',
      'products.page.subtitle': 'Откријте ја нашата цела колекција на суров мед. Секоја тегла ја раскажува приказната за една жетва, една ливада и пчеларот кој неа ја негуваше со внимание.',

      'cta.title': 'Подготвени да ја најдете вашата совршена тегла?',
      'cta.desc': 'Направете го нашиот квиз „Селектор на производи“ — одговорете на три прашања и ќе ви препорачаме идеален мед.',
      'cta.button': 'Отвори селектор на производи',

      'why.title': 'Зошто да го изберете Метче',
      'why.traceable.title': '100% Следлив',
      'why.traceable.desc': 'Секоја тегла е поврзана со конкретна жетва, ливада и пчелар. Скенирајте го кодот на серијата за да ја дознаете приказната.',
      'why.unfiltered.title': 'Нефилтриран и суров',
      'why.unfiltered.desc': 'Не е загреан над 40°C. Сите ензими, полен и природни соединенија остануваат непроменети.',
      'why.ethical.title': 'Етичко берење',
      'why.ethical.desc': 'Нашите пчелари ја практикуваат Уметноста на нежното берење, давајќи приоритет на здравјето на кошниците и биоразновидноста на ливадите.',
      'why.tested.title': 'Трето-страно тестирање',
      'why.tested.desc': 'Сертифицирано без остатоци од пестициди и тестиран за чистота. Секоја серија ги исполнува нашите строги стандарди.',
      'product.wildflower.desc': 'Пониска вискозност, лесни цветни ноти. Студено полнење, единична жетвена серија.',
      'product.highland.desc': 'Високопланински мед од диви цветови. Поголема густина на полен, длабок амбер профил.',
      'product.reserve.desc': 'Мешавина од алпски мултифлора. Амбер шише, кодирана серија, никогаш загреан над 40°C.'
    });

    translations.en = Object.assign({}, translations.en, {
      'products.page.title': 'All Products',
      'products.page.subtitle': 'Discover our complete collection of raw honey. Each jar tells the story of a single harvest, a specific meadow, and the beekeeper who tended it with care.',

      'cta.title': 'Ready to find your perfect jar?',
      'cta.desc': "Take our Product Selector quiz — answer three questions and we'll recommend the ideal honey for you.",
      'cta.button': 'Open Product Selector',

      'why.title': 'Why Choose Metche',
      'why.traceable.title': '100% Traceable',
      'why.traceable.desc': 'Every jar is linked to a specific harvest, meadow, and beekeeper. Scan the batch code to learn the story.',
      'why.unfiltered.title': 'Unfiltered & Raw',
      'why.unfiltered.desc': 'Never heated above 40°C. All the enzymes, pollen, and natural compounds remain intact.',
      'why.ethical.title': 'Ethically Harvested',
      'why.ethical.desc': 'Our beekeepers follow the Art of Gentle Harvesting, prioritizing hive health and meadow biodiversity.',
      'why.tested.title': 'Third-Party Tested',
      'why.tested.desc': 'Certified pesticide residue-free and tested for purity. Every batch meets our rigorous standards.',
      'product.wildflower.desc': 'Lower viscosity, light wildflower notes. Cold-bottled, single-harvest batch.',
      'product.highland.desc': 'High-altitude wildflower honey. Higher pollen density, deep amber profile.',
      'product.reserve.desc': 'Multi-floral alpine blend. Amber glass, batch-coded, never heated above 40°C.'
  });

  let currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

  function t(key, vars = {}) {
    const str = translations[currentLang]?.[key] ?? translations.en[key] ?? key;
    return Object.entries(vars).reduce(
      (out, [k, v]) => out.replace(new RegExp(`\\{${k}\\}`, 'g'), v),
      str
    );
  }

  function applyLanguage(lang) {
    currentLang = translations[lang] ? lang : 'en';
    localStorage.setItem(STORAGE_KEY, currentLang);
    document.documentElement.lang = currentLang === 'mk' ? 'mk' : 'en';
    document.documentElement.classList.toggle('lang-mk', currentLang === 'mk');
    document.documentElement.classList.toggle('lang-en', currentLang === 'en');

    document.title = t('meta.title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = t('meta.description');

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = t('meta.title');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = t('meta.description');
    const ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
    if (ogImageAlt) ogImageAlt.content = t('meta.ogImageAlt');

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.content = t('meta.title');
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.content = t('meta.description');
    const twImageAlt = document.querySelector('meta[name="twitter:image:alt"]');
    if (twImageAlt) twImageAlt.content = t('meta.ogImageAlt');

    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', t(el.dataset.i18nAria));
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      el.alt = t(el.dataset.i18nAlt);
    });

    document.querySelectorAll('[data-product]').forEach(el => {
      const id = el.dataset.product;
      const name = t(`product.${id}.name`);
      el.dataset.name = name;
      const grade = el.querySelector('[data-i18n-grade]');
      if (grade) grade.textContent = t(`product.${id}.grade`);
      const title = el.querySelector('[data-i18n-name]');
      if (title) title.textContent = name;
      el.querySelectorAll('.add-to-cart[data-price]').forEach(btn => {
        btn.dataset.name = name;
        btn.textContent = t('featured.addCart', { price: btn.dataset.price });
      });
    });

    document.querySelectorAll('[data-i18n-mega]').forEach(el => {
      el.textContent = t(el.dataset.i18nMega);
    });

    document.querySelectorAll('[data-i18n-grade-item]').forEach(el => {
      el.textContent = t(el.dataset.i18nGradeItem);
    });

    document.querySelectorAll('[data-i18n-review]').forEach(el => {
      el.textContent = t(el.dataset.i18nReview);
    });

    document.querySelectorAll('[data-i18n-blog]').forEach(el => {
      const [idx, field] = el.dataset.i18nBlog.split('.');
      el.textContent = t(`blog.${idx}.${field}`);
    });

    document.querySelectorAll('[data-i18n-social]').forEach(el => {
      el.textContent = t(el.dataset.i18nSocial);
      if (el.hasAttribute('aria-label')) {
        el.setAttribute('aria-label', t(el.dataset.i18nSocial));
      }
    });

    document.querySelectorAll('.lang-switcher').forEach(sw => {
      sw.dataset.active = currentLang;
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.dataset.lang === currentLang;
      btn.classList.toggle('lang-btn--active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    document.dispatchEvent(new CustomEvent('metche:languagechange', { detail: { lang: currentLang } }));
  }

  function initLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });
  }

  window.MetcheI18n = {
    t,
    getLang: () => currentLang,
    setLang: applyLanguage,
    init() {
      initLanguageSwitcher();
      applyLanguage(currentLang);
    }
  };
})();
