/**
 * Metche: i18n (English + Macedonian)
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'metche-lang';

  const translations = {
    en: {
      'meta.title': "Metche | Pure Raw Honey from Macedonia",
      'meta.description': "Metche is a family beekeeping brand. Raw honey from our meadows and mountain pastures: unheated, unfiltered, and harvested as it should be.",
      'meta.ogImageAlt': "Metche: pure raw honey, carefully harvested",

      'brand.wordmark': 'metche',
      'brand.logo': 'Metche',

      'announcement.text': "25% off every multi-jar set.",
      'announcement.link': "View the sets",

      'nav.shopHoney': 'Shop Honey',
      'nav.learn': 'Learn',
      'nav.explore': 'Explore',
      'nav.allJars': "All Jars",
      'nav.singleOrigin': "From One Place",
      'nav.rawHoney': 'What Is Raw Honey?',
      'nav.shopAll': "Full Range",
      'nav.products': 'All Products',
      'nav.product.reserve': "Floral Bouquet",
      'nav.product.wildflower': "Meadow Honey",
      'nav.product.highland': "Mountain Honey",
      'nav.blog.prebiotic': "Raw Honey and Digestion",
      'nav.blog.firstMonth': "First Month with Metche",
      'nav.blog.richer': "Why Raw Honey Tastes Richer",
      'nav.origins': "Where Our Honey Grows",
      'nav.apiaries': "Our Apiaries",
      'nav.journal': "About Honey",
      'nav.selector': "Help Me Choose",
      'nav.faq': "Questions and Answers",

      'mega.shop.desc': "From Macedonian meadows and apiaries: our honey is not heated or blended, and it is jarred when the flowers are at their peak.",
      'mega.learn.desc': "Every jar can be traced to one harvest and the beekeeper who tended it.",
      'badge.bestseller': "Most Popular",
      'badge.limited': "Limited Quantity",

      'hero.title': "Honey to Remember.",
      'hero.sub': "Raw Macedonian honey from our meadows and pastures: pure, unfiltered, and jarred when the flowers are at their peak.",
      'hero.cta.shop': 'Shop Raw Honey',
      'hero.cta.selector': "Help Me Choose",
      'hero.reviews': "41 five-star customer reviews",

      'products.title': "Our Jars",
      'products.shopAll': "VIEW ALL",

      'meet.title': "About Metche",
      'meet.text': "We harvest our honey from the mountain pastures and flower meadows around Kalanjevo. It is known for its <em>full floral taste</em>, <em>slow crystallisation</em>, and <em>pollen that stays in the jar</em>. This is not just another sweetener: it is honey straight from the apiary, made for every day.",

      'grades.heading': "With raw honey, the flowers visited by the bees can be tasted in both its flavour and its texture.",
      'grades.tab.reserve': "Floral Bouquet",
      'grades.tab.highland': "Mountain Honey",
      'grades.tab.wildflower': "Meadow Honey",
      'grades.disclaimer': "*These statements have not been evaluated by the Food and Veterinary Agency. This product is not a medicine and is not intended to diagnose, treat, or prevent disease. Many customers notice a change after a few weeks of regular use.",
      'grades.reserve.0': "Soft caramel finish with meadow flowers",
      'grades.reserve.1': "Rich in enzymes and natural prebiotics",
      'grades.reserve.2': "Clean energy without the afternoon crash",
      'grades.reserve.3': "Everyday support*",
      'grades.reserve.4': "Gentle on the stomach*",
      'grades.reserve.5': "Helpful when the seasons change*",
      'grades.highland.0': "Deep amber gold with a fuller note",
      'grades.highland.1': "More pollen from mountain flowers",
      'grades.highland.2': "Thick honey with long-lasting sweetness",
      'grades.highland.3': "Good for active mornings*",
      'grades.highland.4': "Supports regular digestion*",
      'grades.highland.5': "Helpful when the body feels tired*",
      'grades.wildflower.0': "Light golden colour with a mild, fresh taste",
      'grades.wildflower.1': "Soft aroma from mixed meadows",
      'grades.wildflower.2': "An easy daily spoonful for the whole family",
      'grades.wildflower.3': "Gentle support*",
      'grades.wildflower.4': "Comfortable digestion*",
      'grades.wildflower.5': "Steady energy throughout the day*",

      'featured.badge': "#1 most popular",
      'featured.reserve.title': "Floral Bouquet, 500g",
      'featured.reserve.sub': "Raw · Unfiltered · Cold-filled",
      'featured.reserve.desc': "A blend of several flowers. Dark glass, batch code, never heated above 40°C.",
      'featured.highland.title': "Mountain Honey, 380g",
      'featured.highland.sub': "Raw · From mountain pastures",
      'featured.highland.desc': "Honey from high meadows. Thicker, richer, and deeper in colour.",
      'featured.wildflower.title': "Meadow Honey, 340g",
      'featured.wildflower.sub': "Raw · Mild meadow taste",
      'featured.wildflower.desc': "Lighter, with soft meadow notes. Cold-filled from a single harvest.",
      'featured.addCart': 'Add to Cart: €{price}',

      'compare.label': "COMPARISON",
      'compare.title': "What Sets Us Apart from Other Honey",
      'compare.intro': "Many jars say “raw” or “pure”, but they are not all the same. Here is an honest look at how our honey differs from other raw honey and ordinary supermarket honey.",
      'compare.col.metche': 'Metche',
      'compare.col.other': "Other Raw Honey",
      'compare.col.regular': "Regular Honey",
      'compare.row.0': "Dark glass that protects the honey",
      'compare.row.1': "Tested for purity",
      'compare.row.2': "Free from pesticide residue",
      'compare.row.3': "The source apiary is known",
      'compare.row.4': "Beekeeping that cares for the bees",

      'taste.title': "What Metche Tastes Like",
      'taste.intro': "Thick and creamy, like soft caramel: best enjoyed straight from the spoon.",
      'taste.caramel.title': 'Caramel',
      'taste.caramel.desc': "Rich, toasted flavour: noticeable from the very first spoonful.",
      'taste.floral.title': 'Floral',
      'taste.floral.desc': "Light and fresh: gentle sweetness from meadow flowers.",
      'taste.creamy.title': 'Creamy',
      'taste.creamy.desc': "Thick and smooth, it coats the spoon without running.",
      'taste.earthy.title': 'Earthy',
      'taste.earthy.desc': "A deeper finish: the mark of unheated honey.",

      'reviews.title': "41 Five-Star Reviews from Our Customers",
      'reviews.0': "“Since we found Metche, we hardly use sugar anymore. You can taste the difference from the very first spoonful.”",
      'reviews.1': "“One spoonful every morning. It has become a staple in our home, just like bread.”",
      'reviews.2': "“My energy feels steadier throughout the day, without that afternoon crash. I never thought honey could suit me this well.”",
      'reviews.3': "“This is a different kind of honey. Creamier, richer, and worth every denar.”",
      'reviews.4': "“The best Macedonian honey I have tried. Full stop.”",
      'reviews.0.cite': "Ana from Skopje",
      'reviews.1.cite': "Marija from Bitola",
      'reviews.2.cite': "Goran from Kumanovo",
      'reviews.3.cite': "Vesna from Ohrid",
      'reviews.4.cite': "Zorana from Štip",

      'beekeeper.intro': "Our beekeepers work the traditional way, with <em>gentle harvesting</em>: the health of the bees and the meadow comes first, and the harvest quantity comes second.",
      'beekeeper.name': "Meet Jovica",
      'beekeeper.text': "Jovica is one of the first beekeepers we worked with. He was born in Negotino, and his apiaries stand on the slopes of Serta, where our Floral Bouquet is born.",
      'beekeeper.quote': "“Beekeeping is not only about honey. If you care for the bees properly, you care for the whole landscape around them.”",
      'beekeeper.sig': "Beekeeper, Metche",
      'beekeeper.cta': "Our Story",

      'blog.title': "Why Raw Honey Is Different",
      'blog.label': "About Honey",
      'blog.page.title': "About Honey",
      'blog.page.subtitle': "Short articles about raw honey, everyday habits, and the meadows behind every jar.",
      'blog.0.meta': "Article | March 12, 2025",
      'blog.0.title': "Raw Honey and Digestion: What People Experience",
      'blog.1.meta': "Article | January 8, 2024",
      'blog.1.title': "Your First Month with Metche: What to Expect",
      'blog.2.meta': "Article | November 3, 2025",
      'blog.2.title': "Why Raw Honey Is Thicker and Richer",
      'blog.readMore': "Read More",

      'quiz.section.title': "Not Sure What to Choose?",
      'quiz.section.desc': "Answer three short questions and we will tell you which honey suits you.",
      'quiz.section.cta': "Start",
      'quiz.title': "Help Me Choose",
      'quiz.q1': "What matters most to you?",
      'quiz.q1.a': "Mild honey for every day",
      'quiz.q1.b': "Medium, balanced flavour",
      'quiz.q1.c': "Strong, deeper honey",
      'quiz.q2': "When do you usually eat it?",
      'quiz.q2.a': "In the morning with tea or bread",
      'quiz.q2.b': "In the afternoon for energy",
      'quiz.q2.c': "In the evening, at a slower pace",
      'quiz.q3': "What kind of honey are you looking for?",
      'quiz.q3.a': "Light and floral",
      'quiz.q3.b': "Creamy and caramel-like",
      'quiz.q3.c': "Dark and full-bodied",
      'quiz.result.label': "We Recommend",
      'quiz.progress': '{step} / 3',
      'quiz.complete': "Done",

      'footer.newsletter': "Sign up for news, honey tips, and first access to offers.",
      'footer.email': "Email",
      'footer.fda': "*These statements have not been evaluated by the Food and Veterinary Agency. This product is not a medicine and is not intended to diagnose, treat, or prevent disease.",
      'footer.thanks': "Thank you, you are on the list.",
      'footer.shop': "Shop Honey",
      'footer.learn': "Learn More",
      'footer.support': 'Support',
      'footer.social': "Follow Us",
      'footer.contact': "Contact",
      'footer.returns': "Returns and Exchanges",
      'footer.locator': "Where to Find Us",
      'footer.tagline': "Natural honey from Macedonian meadows.",
      'footer.copy': "© All rights reserved 2026",
      'footer.terms': 'Terms',
      'footer.privacy': 'Privacy',

      'cart.title': 'Cart',
      'cart.subtotal': "Total",
      'cart.checkout': "Order Now",
      'cart.empty': "The cart is empty",
      'cart.shipping.remaining': "Spend another €{amount} for free delivery",
      'cart.shipping.free': "You have free delivery!",
      'cart.remove': 'Remove',
      'cart.checkout.alert': "Thank you for your order! Payment is a demo: connect the payment system.",

      'product.reserve-ritual.name': "Floral Bouquet, 500g",
      'product.reserve-ritual.grade': "Floral Bouquet",
      'product.morning-glow.name': "Meadow Honey, 340g",
      'product.morning-glow.grade': "Meadow Honey",
      'product.highland-deep.name': "Mountain Honey, 2×250g",
      'product.highland-deep.grade': "Mountain Honey",
      'product.reserve-blend.name': "Floral Bouquet, 500g",
      'product.highland-gold.name': "Mountain Honey, 380g",
      'product.wildflower-light.name': "Meadow Honey, 340g",
      'product.mega.reserve': "Floral Bouquet, 500g",
      'product.mega.highland': "Mountain Honey, 380g",

      'quiz.result.wildflower.title': "Meadow Honey, 340g",
      'quiz.result.wildflower.desc': "Lighter, with a mild meadow taste. Raw and cold-filled.",
      'quiz.result.reserve.title': "Floral Bouquet, 500g",
      'quiz.result.reserve.desc': "A blend of several flowers. Raw, unfiltered, and cold-filled.",
      'quiz.result.highland.title': "Mountain Honey, 380g",
      'quiz.result.highland.desc': "From mountain pastures. Thicker, with a deeper colour.",
      'quiz.result.light.desc': "Soft meadow notes. From one harvest.",
      'quiz.result.creamy.desc': "Medium thickness with a mixed floral taste. Never above 40°C.",
      'quiz.result.bold.desc': "Mountain honey, deep amber gold. Our thickest.",
      'quiz.result.morning.desc': "Mild meadow profile. Raw and cold-filled.",
      'quiz.result.afternoon.desc': "A blend of several flowers. Batch-coded in dark glass.",
      'quiz.result.evening.desc': "Light meadow honey. From one place and cold-filled.",

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
      'alt.hero': "Bee on a meadow flower: raw honey harvest",
      'alt.beekeeper': "Beekeeper inspecting the honeycomb",
      'alt.masterBeekeeper': "Beekeeper in the field",
      'alt.product.reserveRitual': "Floral Bouquet, 500g raw honey",
      'alt.product.morningGlow': "Meadow Honey, 340g raw honey",
      'alt.product.highlandDeep': "Mountain Honey, 2×250g raw honey",
      'alt.mega.reserve': "Jar of Floral Bouquet",
      'alt.mega.highland': "Jar of Mountain Honey",
      'alt.compare.bee': "Bee",
      'alt.compare.honeycomb': "Raw honeycomb",
      'alt.compare.wildflowers': "Meadow flowers",
      'alt.blog.0': "Honey and everyday life",
      'alt.blog.1': "First jar of honey",
      'alt.blog.2': "Creamy honey texture",
      'social.instagram': 'Instagram',
      'social.tiktok': 'TikTok',
      'social.facebook': 'Facebook',
      'social.youtube': 'YouTube'
    },

    mk: {
      'meta.title': 'Метче | Чист суров мед од Македонија',
      'meta.description': 'Метче е семеен пчеларски бренд. Суров мед од нашите ливади и планински пасишта: негреан, нефилтриран и собран како што треба.',
      'meta.ogImageAlt': 'Метче: чист суров мед, собран со грижа',

      'brand.wordmark': 'метче',
      'brand.logo': 'Метче',

      'announcement.text': 'Попуст од 25% на секој сет со повеќе тегли.',
      'announcement.link': 'Погледнете ги сетовите',

      'nav.shopHoney': 'Купи мед',
      'nav.learn': 'Дознај',
      'nav.explore': 'Откриј',
      'nav.allJars': 'Сите тегли',
      'nav.singleOrigin': 'Од едно место',
      'nav.rawHoney': 'Што е суров мед?',
      'nav.shopAll': 'Цел асортиман',
      'nav.products': 'Сите производи',
      'nav.product.reserve': 'Цветен букет',
      'nav.product.wildflower': 'Ливадски мед',
      'nav.product.highland': 'Планински мед',
      'nav.blog.prebiotic': 'Суров мед и варењето',
      'nav.blog.firstMonth': 'Прв месец со Метче',
      'nav.blog.richer': 'Зошто медот е побогат',
      'nav.origins': 'Каде расте медот',
      'nav.apiaries': 'Нашите пчеларници',
      'nav.journal': 'За медот',
      'nav.selector': 'Помош при избор',
      'nav.faq': 'Прашања и одговори',

      'mega.shop.desc': 'Од македонски ливади и пчеларници: нашиот мед не се загрева, не се меша и се полни во тегла додека цветот е најсилен.',
      'mega.learn.desc': 'Секоја тегла може да се следи до една берба и до пчеларот што ја водел.',
      'badge.bestseller': 'Најбарана',
      'badge.limited': 'Ограничена количина',

      'hero.title': 'Мед што се памети.',
      'hero.sub': 'Суров македонски мед од нашите ливади и пасишта: чист, нефилтриран и полнет додека цветот е најсилен.',
      'hero.cta.shop': 'Купи суров мед',
      'hero.cta.selector': 'Помош при избор',
      'hero.reviews': '41 петѕвездени оценки од купувачи',

      'products.title': 'Нашите тегли',
      'products.shopAll': 'ВИДИ СЀ',

      'meet.title': 'За Метче',
      'meet.text': 'Медот го береме од планинските пасишта и цветните ливади околу Калањево. Го познаваат по <em>полн цветен вкус</em>, <em>бавно стврднување</em> и <em>полен што останува во теглата</em>. Ова не е обичен засладувач: ова е мед како од пчеларница, за секој ден.',

      'grades.heading': 'Кај суровиот мед, цветот што го сечат пчелите се чувствува и во вкусот, и во густината.',
      'grades.tab.reserve': 'Цветен букет',
      'grades.tab.highland': 'Планински мед',
      'grades.tab.wildflower': 'Ливадски мед',
      'grades.disclaimer': '*Овие тврдења не се оценети од Агенцијата за храна и ветеринарство. Производот не е лек и не е наменет за дијагноза, лекување или спречување на болести. Многу купувачи чувствуваат промена по неколку недели редовна употреба.',
      'grades.reserve.0': 'Мек карамелест завршеток со ливадски цветови',
      'grades.reserve.1': 'Богат со ензими и природни пребиотици',
      'grades.reserve.2': 'Чиста енергија без оној пад попладне',
      'grades.reserve.3': 'Поддршка во секојдневието*',
      'grades.reserve.4': 'Нежен кон стомакот*',
      'grades.reserve.5': 'Помага кога се менува сезоната*',
      'grades.highland.0': 'Темно килибарно злато со подлабока нота',
      'grades.highland.1': 'Повеќе полен од планински цветови',
      'grades.highland.2': 'Густ мед, слаткоста долго останува',
      'grades.highland.3': 'Добар за активни утра*',
      'grades.highland.4': 'Поддршка за редовно варење*',
      'grades.highland.5': 'Помага кога телото е заморено*',
      'grades.wildflower.0': 'Светла златна боја со благ, свеж вкус',
      'grades.wildflower.1': 'Мек мирис од мешани ливади',
      'grades.wildflower.2': 'Лесна дневна доза за целото семејство',
      'grades.wildflower.3': 'Нежна поддршка*',
      'grades.wildflower.4': 'Удобно варење*',
      'grades.wildflower.5': 'Рамномерна енергија преку ден*',

      'featured.badge': '#1 најбарана',
      'featured.reserve.title': 'Цветен букет, 500г',
      'featured.reserve.sub': 'Суров · Нефилтриран · Ладно полнет',
      'featured.reserve.desc': 'Мешавина од повеќе цветови. Темно стакло, шифра на серија, никогаш над 40°C.',
      'featured.highland.title': 'Планински мед, 380г',
      'featured.highland.sub': 'Суров · Од планински пасишта',
      'featured.highland.desc': 'Мед од високи ливади. Погуст, побогат, подлабока боја.',
      'featured.wildflower.title': 'Ливадски мед, 340г',
      'featured.wildflower.sub': 'Суров · Благ ливадски вкус',
      'featured.wildflower.desc': 'Полесен, со меки ливадски ноти. Ладно полнет, од една берба.',
      'featured.addCart': 'Додај во кошничка: €{price}',

      'compare.label': 'СПОРЕДБА',
      'compare.title': 'Што нè дели од другиот мед',
      'compare.intro': 'Многу тегли пишуваат „суров“ или „чист“, ама не е сѐ исто. Еве искрено како се разликува нашиот мед од друг суров и од обичниот супермаркет-мед.',
      'compare.col.metche': 'Метче',
      'compare.col.other': 'Друг суров',
      'compare.col.regular': 'Обичен мед',
      'compare.row.0': 'Темно стакло што го чува медот',
      'compare.row.1': 'Проверен за чистота',
      'compare.row.2': 'Без остатоци од пестициди',
      'compare.row.3': 'Се знае од кој пчеларник е',
      'compare.row.4': 'Пчеларство со грижа за пчелите',

      'taste.title': 'Каков вкус има Метче',
      'taste.intro': 'Густ и кремав, како мек карамел: најдобар право од лажица.',
      'taste.caramel.title': 'Карамел',
      'taste.caramel.desc': 'Богат, печен вкус: се чувствува уште на првата лажица.',
      'taste.floral.title': 'Цветен',
      'taste.floral.desc': 'Лесен и свеж: блага слаткост од ливадски цветови.',
      'taste.creamy.title': 'Кремав',
      'taste.creamy.desc': 'Густ, мазен, ја облекува лажицата, не се истура.',
      'taste.earthy.title': 'Земјен',
      'taste.earthy.desc': 'Подлабок завршеток: вака се познава незагреаниот мед.',

      'reviews.title': '41 оценки со пет ѕвезди од нашите купувачи',
      'reviews.0': '„Откако го најдовме Метче, шеќерот речиси не го користиме. Разликата ја чувствуваш уште од првата лажица.“',
      'reviews.1': '„Секое утро по една лажичка. Стана навика во куќата, како лебот.“',
      'reviews.2': '„Преку ден имам порамномерна енергија, без оној пад попладне. Не мислев дека медот може вака да ми легне.“',
      'reviews.3': '„Друг мед е ова. Покремав, побогат, вреди секој денар.“',
      'reviews.4': '„Најдобриот македонски мед што сум пробала. Точка.“',
      'reviews.0.cite': 'Ана од Скопје',
      'reviews.1.cite': 'Марија од Битола',
      'reviews.2.cite': 'Горан од Куманово',
      'reviews.3.cite': 'Весна од Охрид',
      'reviews.4.cite': 'Зорана од Штип',

      'beekeeper.intro': 'Нашите пчелари работат по старо, со <em>нежно берење</em>: прво здравјето на пчелите и ливадата, па дури потоа количината.',
      'beekeeper.name': 'Запознајте го Јовица',
      'beekeeper.text': 'Јовица е еден од првите пчелари со кои работиме. Роден е во Неготино, а неговите пчеларници се на падините на Серта, каде се раѓа нашиот Цветен букет.',
      'beekeeper.quote': '„Пчеларството не е само мед. Ако ги чуваш пчелите како што треба, ја чуваш и целата околина.“',
      'beekeeper.sig': 'Пчелар, Метче',
      'beekeeper.cta': 'Нашата приказна',

      'blog.title': 'Зошто суровиот мед е друг',
      'blog.label': 'За медот',
      'blog.page.title': 'За медот',
      'blog.page.subtitle': 'Кратки текстови за суров мед, секојдневни навики и ливадите зад секоја тегла.',
      'blog.0.meta': 'Текст | 12 март 2025',
      'blog.0.title': 'Суров мед и варењето: што кажуваат искуствата',
      'blog.1.meta': 'Текст | 8 јануари 2024',
      'blog.1.title': 'Првиот месец со Метче: што да очекувате',
      'blog.2.meta': 'Текст | 3 ноември 2025',
      'blog.2.title': 'Зошто суровиот мед е погуст и побогат',
      'blog.readMore': 'Прочитај повеќе',

      'quiz.section.title': 'Не сте сигурни што да изберете?',
      'quiz.section.desc': 'Три кратки прашања и ќе ви кажеме кој мед ви одговара.',
      'quiz.section.cta': 'Започни',
      'quiz.title': 'Помош при избор',
      'quiz.q1': 'Што ви е најважно?',
      'quiz.q1.a': 'Мек, секојдневен мед',
      'quiz.q1.b': 'Среден, балансиран вкус',
      'quiz.q1.c': 'Силен, подлабок мед',
      'quiz.q2': 'Кога најчесто го јадете?',
      'quiz.q2.a': 'Наутро со чај или леб',
      'quiz.q2.b': 'Попладне за енергија',
      'quiz.q2.c': 'Навечер, побавно',
      'quiz.q3': 'Каков мед барате?',
      'quiz.q3.a': 'Лесен и цветен',
      'quiz.q3.b': 'Кремав и карамелест',
      'quiz.q3.c': 'Темен и полн',
      'quiz.result.label': 'Ви го препорачуваме',
      'quiz.progress': '{step} / 3',
      'quiz.complete': 'Готово',

      'footer.newsletter': 'Пријавете се за новости, совети за мед и први понуди.',
      'footer.email': 'Е-пошта',
      'footer.fda': '*Овие тврдења не се оценети од Агенцијата за храна и ветеринарство. Производот не е лек и не е наменет за дијагноза, лекување или спречување на болести.',
      'footer.thanks': 'Благодариме, сте на листата.',
      'footer.shop': 'Купи мед',
      'footer.learn': 'Дознај повеќе',
      'footer.support': 'Поддршка',
      'footer.social': 'Следете не',
      'footer.contact': 'Контакт',
      'footer.returns': 'Враќања и замени',
      'footer.locator': 'Каде да најдете',
      'footer.tagline': 'Природен мед од македонски ливади.',
      'footer.copy': '© Сите права задржани 2026',
      'footer.terms': 'Услови',
      'footer.privacy': 'Приватност',

      'cart.title': 'Кошничка',
      'cart.subtotal': 'Вкупно',
      'cart.checkout': 'Нарачај',
      'cart.empty': 'Кошничката е празна',
      'cart.shipping.remaining': 'Потрошете уште €{amount} за бесплатна достава',
      'cart.shipping.free': 'Имате бесплатна достава!',
      'cart.remove': 'Отстрани',
      'cart.checkout.alert': 'Ви благодариме за нарачката! Наплатата е демо: поврзете го платежниот систем.',

      'product.reserve-ritual.name': 'Цветен букет, 500г',
      'product.reserve-ritual.grade': 'Цветен букет',
      'product.morning-glow.name': 'Ливадски мед, 340г',
      'product.morning-glow.grade': 'Ливадски мед',
      'product.highland-deep.name': 'Планински мед, 2×250г',
      'product.highland-deep.grade': 'Планински мед',
      'product.reserve-blend.name': 'Цветен букет, 500г',
      'product.highland-gold.name': 'Планински мед, 380г',
      'product.wildflower-light.name': 'Ливадски мед, 340г',
      'product.mega.reserve': 'Цветен букет, 500г',
      'product.mega.highland': 'Планински мед, 380г',

      'quiz.result.wildflower.title': 'Ливадски мед, 340г',
      'quiz.result.wildflower.desc': 'Полесен, благ ливадски вкус. Суров, ладно полнет.',
      'quiz.result.reserve.title': 'Цветен букет, 500г',
      'quiz.result.reserve.desc': 'Мешавина од повеќе цветови. Суров, нефилтриран, ладно полнет.',
      'quiz.result.highland.title': 'Планински мед, 380г',
      'quiz.result.highland.desc': 'Од планински пасишта. Погуст, подлабока боја.',
      'quiz.result.light.desc': 'Меки ливадски ноти. Од една берба.',
      'quiz.result.creamy.desc': 'Средна густина, мешан цветен вкус. Никогаш над 40°C.',
      'quiz.result.bold.desc': 'Планински мед, длабоко килибарно злато. Најгуст.',
      'quiz.result.morning.desc': 'Благ ливадски профил. Суров, ладно полнет.',
      'quiz.result.afternoon.desc': 'Мешавина од повеќе цветови. Со шифра и темно стакло.',
      'quiz.result.evening.desc': 'Лесен ливадски мед. Од едно место, ладно полнет.',

      'aria.openMenu': 'Отвори мени',
      'aria.closeMenu': 'Затвори мени',
      'aria.openCart': 'Отвори кошничка',
      'aria.closeCart': 'Затвори кошничка',
      'aria.closeQuiz': 'Затвори',
      'aria.home': 'Метче почетна',
      'aria.subscribe': 'Пријави се',
      'aria.email': 'Е-пошта',
      'aria.language': 'Јазик',
      'aria.navPrimary': 'Главна навигација',
      'aria.navSecondary': 'Споредна навигација',
      'alt.hero': 'Пчела на ливадски цвет: берба на суров мед',
      'alt.beekeeper': 'Пчелар го прегледува саќето',
      'alt.masterBeekeeper': 'Пчелар на терен',
      'alt.product.reserveRitual': 'Цветен букет, 500г суров мед',
      'alt.product.morningGlow': 'Ливадски мед, 340г суров мед',
      'alt.product.highlandDeep': 'Планински мед, 2×250г суров мед',
      'alt.mega.reserve': 'Тегла Цветен букет',
      'alt.mega.highland': 'Тегла Планински мед',
      'alt.compare.bee': 'Пчела',
      'alt.compare.honeycomb': 'Сурово саќе',
      'alt.compare.wildflowers': 'Ливадски цветови',
      'alt.blog.0': 'Мед и секојдневие',
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
    'contact.hero.title': "Contact",
    'contact.hero.sub': "We are here. Write to us about an order, delivery, or simply to ask something about the honey.",
    'contact.form.title': "Send Us a Message",
    'contact.form.desc': "We usually reply the same day, and within 24 hours at the latest.",
    'contact.form.name': "Full Name",
    'contact.form.email': "Email",
    'contact.form.subject': "What Is It About?",
    'contact.form.message': "Message",
    'contact.form.submit': "Send",
    'contact.form.success': "Received. We will get back to you soon.",
    'contact.details.title': "Other Ways to Contact Us",
    'contact.details.email': 'Email',
    'contact.details.phone': 'Phone',
    'contact.details.location': "Where We Are",
    'contact.details.address': "Kalanjevo, Municipality of Negotino\nTikveš, Macedonia",
    'contact.details.hours': "Working Hours",
    'contact.details.schedule': "Monday to Friday: 9:00, 18:00\nSaturday: 10:00, 16:00\nSunday: closed",
    'contact.faq.title': "Common Questions",
    'contact.faq.intro': "Here are answers to the questions we are asked most often. If you cannot find what you need, contact us.",
    'contact.faq.q1.question': "What is the difference between raw and regular honey?",
    'contact.faq.q1.answer': "Raw honey is not heated or finely filtered, so its enzymes, pollen, and the elements destroyed by heat remain in it. Regular honey is often pasteurised and blended. We jar Metche while the flowers are at their peak and never above 40°C.",
    'contact.faq.q2.question': "How should I store Metche honey?",
    'contact.faq.q2.answer': "Keep it in a cool, dark place at room temperature. If it starts to crystallise, that is a sign of genuine raw honey. Place the jar in warm water to soften it. Do not use a microwave or heat it above 40°C.",
    'contact.faq.q3.question': "Do you deliver across Macedonia and abroad?",
    'contact.faq.q3.answer': "Yes, we deliver throughout Macedonia. For orders outside the country, write to us and we will explain the available options and delivery times.",
    'contact.faq.q4.question': "What if I am not satisfied?",
    'contact.faq.q4.answer': "We stand behind our honey. If you are not satisfied within 30 days, we will refund you or send a new jar. Unopened jars may be returned without question.",
    'contact.faq.q5.question': "Is it suitable for babies?",
    'contact.faq.q5.answer': "Raw honey must not be given to children under 12 months. For older children and adults, it can be a good part of the diet when enjoyed in moderation.",
    'contact.faq.q6.question': "How do you care for the bees?",
    'contact.faq.q6.answer': "We work only with beekeepers who care for their bees attentively: the hive and the meadow come first, and the harvest quantity comes second. Every batch can be traced to a specific apiary and season.",
    'aria.contactName': "Your name",
    'aria.contactEmail': "Your email",
    'aria.contactSubject': "Message subject",
    'aria.contactMessage': "Your message",
  });

  translations.mk = Object.assign({}, translations.mk, {
    'contact.hero.title': 'Контакт',
    'contact.hero.sub': 'Тука сме. Пишете ни за нарачка, достава или само да прашате нешто за медот.',
    'contact.form.title': 'Испратете ни порака',
    'contact.form.desc': 'Обично одговараме истиот ден, најдоцна за 24 часа.',
    'contact.form.name': 'Име и презиме',
    'contact.form.email': 'Е-пошта',
    'contact.form.subject': 'За што станува збор',
    'contact.form.message': 'Порака',
    'contact.form.submit': 'Испрати',
    'contact.form.success': 'Примено. Ќе ви се јавиме наскоро.',
    'contact.details.title': 'Други начини за контакт',
    'contact.details.email': 'Е-пошта',
    'contact.details.phone': 'Телефон',
    'contact.details.location': 'Каде сме',
    'contact.details.address': 'Калањево, Општина Неготино\nТиквеш, Македонија',
    'contact.details.hours': 'Работно време',
    'contact.details.schedule': 'Понеделник до петок: 9:00, 18:00\nСабота: 10:00, 16:00\nНедела: затворено',
    'contact.faq.title': 'Најчести прашања',
    'contact.faq.intro': 'Еве одговори на тоа што најчесто нè прашуваат. Ако не најдете што барате, јавете ни се.',
    'contact.faq.q1.question': 'Која е разликата меѓу суров и обичен мед?',
    'contact.faq.q1.answer': 'Суровиот мед не се загрева и не се фино цеди, па во него остануваат ензимите, поленот и она што греењето го уништува. Обичниот мед често е пастеризиран и мешан. Метче го полниме додека цветот е најсилен и никогаш над 40°C.',
    'contact.faq.q2.question': 'Како да го чувам медот од Метче?',
    'contact.faq.q2.answer': 'На ладно и темно место, на собна температура. Ако почне да се стврднува, тоа е знак дека е вистински суров мед. Ставете ја теглата во топла вода да омекне. Не користете микробранова и не го грејте над 40°C.',
    'contact.faq.q3.question': 'Дали испраќате низ Македонија и на странство?',
    'contact.faq.q3.answer': 'Да, доставуваме низ цела Македонија. За нарачки надвор од земјава пишете ни, ќе ви кажеме опции и рокови.',
    'contact.faq.q4.question': 'Што ако не сум задоволен?',
    'contact.faq.q4.answer': 'Стоиме зад медот. Ако во рок од 30 дена не сте задоволни, враќаме пари или праќаме нова тегла. Неотворени тегли може да се вратат без прашање.',
    'contact.faq.q5.question': 'Дали смее за бебиња?',
    'contact.faq.q5.answer': 'Суров мед не се дава на деца под 12 месеци. За постари деца и возрасни е добар дел од исхраната, во умерени количини.',
    'contact.faq.q6.question': 'Како ги чувате пчелите?',
    'contact.faq.q6.answer': 'Работиме само со пчелари што ги чуваат пчелите внимателно: прво кошницата и ливадата, па количината. Секоја серија може да се следи до конкретен пчеларник и сезона.',
    'aria.contactName': 'Вашето име',
    'aria.contactEmail': 'Вашата е-пошта',
    'aria.contactSubject': 'Наслов на пораката',
    'aria.contactMessage': 'Вашата порака'
  });
    translations.mk = Object.assign({}, translations.mk, {
      'products.page.title': 'Нашиот мед',
      'products.page.subtitle': 'Целиот асортиман суров мед. Секоја тегла е од една берба, една ливада и еден пчелар.',

      'cta.title': 'Не знаете кој мед да земете?',
      'cta.desc': 'Три кратки прашања и ќе ви препорачаме мед според вашиот вкус.',
      'cta.button': 'Започни',

      'why.title': 'Зошто токму Метче',
      'why.traceable.title': 'Се знае од каде е',
      'why.traceable.desc': 'Секоја тегла има шифра. Може да видите која берба, која ливада и кој пчелар стои зад неа.',
      'why.unfiltered.title': 'Суров и нефилтриран',
      'why.unfiltered.desc': 'Не се загрева над 40°C. Ензимите, поленот и природните материи остануваат во теглата.',
      'why.ethical.title': 'Чесно пчеларство',
      'why.ethical.desc': 'Прво здравјето на пчелите и ливадата, па дури потоа количината што ќе се набере.',
      'why.tested.title': 'Проверен квалитет',
      'why.tested.desc': 'Без остатоци од пестициди и проверен за чистота. Секоја серија минува низ истите правила.',
      'product.wildflower.desc': 'Полесен, со меки ливадски ноти. Ладно полнет, од една берба.',
      'product.highland.desc': 'Мед од високи пасишта. Погуст, подлабока боја.',
      'product.reserve.desc': 'Мешавина од повеќе цветови. Темно стакло, шифра на серија, никогаш над 40°C.'
    });

    translations.en = Object.assign({}, translations.en, {
      'products.page.title': "Our Honey",
      'products.page.subtitle': "Our full range of raw honey. Every jar comes from one harvest, one meadow, and one beekeeper.",

      'cta.title': "Not Sure Which Honey to Choose?",
      'cta.desc': "Answer three short questions and we will recommend a honey based on your taste.",
      'cta.button': "Start",

      'why.title': "Why Metche",
      'why.traceable.title': "You Know Where It Comes From",
      'why.traceable.desc': "Every jar has a code. You can see the harvest, meadow, and beekeeper behind it.",
      'why.unfiltered.title': "Raw and Unfiltered",
      'why.unfiltered.desc': "It is never heated above 40°C. The enzymes, pollen, and natural elements stay in the jar.",
      'why.ethical.title': "Honest Beekeeping",
      'why.ethical.desc': "The health of the bees and the meadow comes first, and only then the amount harvested.",
      'why.tested.title': "Tested Quality",
      'why.tested.desc': "Free from pesticide residue and tested for purity. Every batch follows the same rules.",
      'product.wildflower.desc': "Lighter, with soft meadow notes. Cold-filled from one harvest.",
      'product.highland.desc': "Honey from high pastures. Thicker, with a deeper colour.",
      'product.reserve.desc': "A blend of several flowers. Dark glass, batch code, never above 40°C.",
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

    const pageTitleKey = document.documentElement.dataset.metaTitleKey;
    const pageDescriptionKey = document.documentElement.dataset.metaDescriptionKey;
    const pageTitle = pageTitleKey
      ? `${t(pageTitleKey)} | ${currentLang === 'mk' ? 'Метче' : 'Metche'}`
      : t('meta.title');
    const pageDescription = pageDescriptionKey
      ? t(pageDescriptionKey)
      : t('meta.description');

    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = pageDescription;

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = pageTitle;
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = pageDescription;
    const ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
    if (ogImageAlt) ogImageAlt.content = t('meta.ogImageAlt');

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.content = pageTitle;
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.content = pageDescription;
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

    document.querySelectorAll('[data-i18n-cite]').forEach(el => {
      el.textContent = t(el.dataset.i18nCite);
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
