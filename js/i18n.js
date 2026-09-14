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
    'faq.meta.title': "Questions and Answers",
    'faq.meta.description': "Answers to common questions about Metche raw honey: storage, delivery, returns, and how we care for the bees.",
    'faq.hero.title': "Questions and Answers",
    'faq.hero.sub': "Here are answers to the questions we are asked most often. If you cannot find what you need, contact us.",
    'faq.cta.title': "Still have a question?",
    'faq.cta.desc': "Write to us about an order, delivery, or anything else you would like to know about the honey.",
    'faq.cta.button': "Contact Us",
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
    'faq.meta.title': 'Прашања и одговори',
    'faq.meta.description': 'Одговори на најчестите прашања за суровиот мед од Метче: чување, достава, враќања и како ги чуваме пчелите.',
    'faq.hero.title': 'Прашања и одговори',
    'faq.hero.sub': 'Еве одговори на тоа што најчесто нè прашуваат. Ако не најдете што барате, јавете ни се.',
    'faq.cta.title': 'Сѐ уште имате прашање?',
    'faq.cta.desc': 'Пишете ни за нарачка, достава или било што друго што сакате да знаете за медот.',
    'faq.cta.button': 'Контакт',
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
      'why.label': 'Нашето ветување',
      'why.subtitle': 'Четири работи што остануваат исти во секоја тегла, од ливада до маса.',
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
      'product.reserve.desc': 'Мешавина од повеќе цветови. Темно стакло, шифра на серија, никогаш над 40°C.',

      'pdp.crumbs.aria': 'Патека',
      'pdp.gallery.aria': 'Слики од производот',
      'pdp.qty.aria': 'Количина',
      'pdp.qty.decrease': 'Намали количина',
      'pdp.qty.increase': 'Зголеми количина',
      'pdp.vat': 'Со ДДВ. Бесплатна достава од 50 €.',
      'pdp.trust.ship': 'Бесплатна достава низ Македонија над 50 €',
      'pdp.trust.return': '30 дена за враќање ако не сте задоволни',
      'pdp.trust.raw': 'Суров, нефилтриран, никогаш над 40°C',
      'pdp.profile.title': 'Вкус',
      'pdp.profile.floral': 'Цветен',
      'pdp.profile.body': 'Тело',
      'pdp.profile.sweet': 'Сладост',
      'pdp.spec.weight': 'Тежина',
      'pdp.spec.origin': 'Потекло',
      'pdp.spec.harvest': 'Берба',
      'pdp.spec.fill': 'Полнење',
      'pdp.fill.value': 'Ладно, никогаш над 40°C',
      'pdp.spec.glass': 'Тегла',
      'pdp.glass.value': 'Темно стакло',
      'pdp.notes.label': 'Во теглата',
      'pdp.notes.title': 'Што ќе вкусите',
      'pdp.notes.sub': 'Цвеќињата што ги посетиле пчелите се чувствуваат и во вкусот и во текстурата.',
      'pdp.use.label': 'Како да се јаде',
      'pdp.use.title': 'Три едноставни начини',
      'pdp.use.1.title': 'Наутро, со лажица',
      'pdp.use.1.desc': 'Една лажица сама или со чај. Не го мешајте во врела вода.',
      'pdp.use.2.title': 'На леб',
      'pdp.use.2.desc': 'Доволно густ да остане на ножот. Добар со путер или сирење.',
      'pdp.use.3.title': 'Во кујна',
      'pdp.use.3.desc': 'Јогурт, овесни снегулки, печени зеленчуци. Не го варете.',
      'pdp.related': 'Други тегли',
      'pdp.origin.label': 'Од каде е',
      'pdp.long.reserve': 'Мешавина од ливадски цветови од падините на Серта, полнета во темно стакло кога цветот е на врв. Никогаш не се загрева над 40°C, па ензимите, поленот и мекиот карамелест завршеток остануваат во теглата. Ова е медот што повеќето наши купувачи го држат на маса секој ден.',
      'pdp.long.wildflower': 'Полек мед од мешани ливади околу Калањево. Мек мирис, блага сладост и лесна лажица за целото семејство. Ладно полнет од една берба, нефилтриран, со поленот од полето сè уште во него.',
      'pdp.long.highland': 'Мед од високи планински пасишта: погуст, потемен и побавен на лажицата. Две тегли од 250г од една планинска берба, со подлабока килибарна нота и повеќе полен од планински цветови. Ограничена количина секоја сезона.',
      'pdp.origin.reserve.title': 'Каде се раѓа цветен букет',
      'pdp.origin.reserve.body': 'Јовица е еден од првите пчелари со кои работиме. Роден е во Неготино, а пчеларниците му стојат на падините на Серта, каде што се раѓа нашиот цветен букет. <em>Прво здравјето на пчелите и ливадата</em>, па дури потоа количината.',
      'pdp.origin.wildflower.title': 'Ливадите околу Калањево',
      'pdp.origin.wildflower.body': 'Ливадскиот мед го береме од мешани цветови околу Калањево, кога ливадата е најсилна. Една берба, еден пчелар, една тегла. <em>Благ и свеж</em>, направен за секој ден, не за полица во супермаркет.',
      'pdp.origin.highland.title': 'Од високите пасишта',
      'pdp.origin.highland.body': 'Планинскиот мед доаѓа од повисоки ливади, каде што цветот е поредок, а нектарот поконцентриран. Затоа е погуст и потемен. <em>Секоја сезона е ограничена</em>: кога бербата ќе заврши, теглите завршуваат со неа.',
      'pdp.reserve.weight': '500г',
      'pdp.reserve.origin': 'Падини на Серта, Неготино',
      'pdp.reserve.harvest': 'Една сезона, со шифра',
      'pdp.wildflower.weight': '340г',
      'pdp.wildflower.origin': 'Ливади околу Калањево',
      'pdp.wildflower.harvest': 'Една берба',
      'pdp.highland.weight': '2 × 250г',
      'pdp.highland.origin': 'Високи планински пасишта',
      'pdp.highland.harvest': 'Ограничена сезонска серија'
    });

    translations.en = Object.assign({}, translations.en, {
      'products.page.title': "Our Honey",
      'products.page.subtitle': "Our full range of raw honey. Every jar comes from one harvest, one meadow, and one beekeeper.",

      'cta.title': "Not Sure Which Honey to Choose?",
      'cta.desc': "Answer three short questions and we will recommend a honey based on your taste.",
      'cta.button': "Start",

      'why.title': "Why Metche",
      'why.label': "Our promise",
      'why.subtitle': "Four things that stay the same in every jar, from meadow to table.",
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

      'pdp.crumbs.aria': 'Breadcrumb',
      'pdp.gallery.aria': 'Product images',
      'pdp.qty.aria': 'Quantity',
      'pdp.qty.decrease': 'Decrease quantity',
      'pdp.qty.increase': 'Increase quantity',
      'pdp.vat': 'Includes VAT. Free delivery from €50.',
      'pdp.trust.ship': 'Free delivery across Macedonia over €50',
      'pdp.trust.return': '30-day returns if you are not satisfied',
      'pdp.trust.raw': 'Raw, unfiltered, never above 40°C',
      'pdp.profile.title': 'Taste',
      'pdp.profile.floral': 'Floral',
      'pdp.profile.body': 'Body',
      'pdp.profile.sweet': 'Sweetness',
      'pdp.spec.weight': 'Weight',
      'pdp.spec.origin': 'Origin',
      'pdp.spec.harvest': 'Harvest',
      'pdp.spec.fill': 'Fill',
      'pdp.fill.value': 'Cold-filled, never above 40°C',
      'pdp.spec.glass': 'Jar',
      'pdp.glass.value': 'Dark glass',
      'pdp.notes.label': 'In the jar',
      'pdp.notes.title': 'What you will taste',
      'pdp.notes.sub': 'The flowers the bees visited can be tasted in both the flavour and the texture.',
      'pdp.use.label': 'How to eat it',
      'pdp.use.title': 'Three simple ways',
      'pdp.use.1.title': 'A morning spoonful',
      'pdp.use.1.desc': 'One spoonful on its own or with tea. Do not stir it into boiling water.',
      'pdp.use.2.title': 'On bread',
      'pdp.use.2.desc': 'Thick enough to stay on the knife. Good with butter or cheese.',
      'pdp.use.3.title': 'In the kitchen',
      'pdp.use.3.desc': 'Yogurt, porridge, roasted vegetables. Do not boil it.',
      'pdp.related': 'Other jars',
      'pdp.origin.label': 'Where it comes from',
      'pdp.long.reserve': 'A blend of meadow flowers from the slopes of Serta, jarred in dark glass when the bloom is at its peak. Never heated above 40°C, so the enzymes, pollen, and a soft caramel finish stay in the jar. This is the honey most of our customers keep on the table every day.',
      'pdp.long.wildflower': 'A lighter honey from mixed meadows around Kalanjevo. Soft aroma, mild sweetness, and an easy spoonful for the whole family. Cold-filled from a single harvest, unfiltered, still carrying the pollen of the field.',
      'pdp.long.highland': 'Honey from high mountain pastures: thicker, darker, and slower on the spoon. Two 250g jars from one highland harvest, with a fuller amber note and more pollen from mountain flowers. Limited quantity each season.',
      'pdp.origin.reserve.title': 'Where Floral Bouquet is born',
      'pdp.origin.reserve.body': 'Jovica is one of the first beekeepers we worked with. He was born in Negotino, and his apiaries stand on the slopes of Serta, where our Floral Bouquet is born. <em>The health of the bees and the meadow comes first</em>, and only then the amount harvested.',
      'pdp.origin.wildflower.title': 'The meadows around Kalanjevo',
      'pdp.origin.wildflower.body': 'We harvest Meadow Honey from mixed blossom around Kalanjevo, when the field is at its strongest. One harvest, one beekeeper, one jar. <em>Mild and fresh</em>, made for every day, not for a supermarket shelf.',
      'pdp.origin.highland.title': 'From the high pastures',
      'pdp.origin.highland.body': 'Mountain Honey comes from higher meadows, where blossom is scarcer and the nectar more concentrated. That is why it is thicker and darker. <em>Each season is limited</em>: when the harvest ends, so do the jars.',
      'pdp.reserve.weight': '500g',
      'pdp.reserve.origin': 'Serta slopes, Negotino',
      'pdp.reserve.harvest': 'Single season, batch-coded',
      'pdp.wildflower.weight': '340g',
      'pdp.wildflower.origin': 'Meadows around Kalanjevo',
      'pdp.wildflower.harvest': 'Single harvest',
      'pdp.highland.weight': '2 × 250g',
      'pdp.highland.origin': 'High mountain pastures',
      'pdp.highland.harvest': 'Limited seasonal batch'
  });

  translations.en = Object.assign({}, translations.en, {
    'product.reserve.page.title': 'Floral Bouquet',
    'product.reserve.page.subtitle': 'A harmonious blend of several flowers. Raw, unfiltered, and cold-filled from one harvest.',
    'product.reserve.detail.name': 'Floral Bouquet, 500g',
    'product.reserve.detail.desc1': 'Our signature blend combines the finest floral notes from several carefully selected flowers. Every jar comes from a single harvest and a single meadow, ensuring consistent quality and traceability.',
    'product.reserve.detail.desc2': 'Dark glass packaging protects the honey from light exposure. Each jar includes a batch code so you can trace your honey back to the harvest, meadow, and beekeeper.',
    'product.reserve.features.title': 'What You Get',
    'product.reserve.features.0': '500g of raw, unfiltered honey',
    'product.reserve.features.1': 'Dark glass jar with batch code',
    'product.reserve.features.2': 'Never heated above 40°C',
    'product.reserve.features.3': 'From one harvest, one meadow, one beekeeper',
    'product.reserve.features.4': 'Free from pesticide residue',
    'product.reserve.meta.sizeLabel': 'Size',
    'product.reserve.meta.sizeValue': '500g',
    'product.reserve.meta.typeLabel': 'Type',
    'product.reserve.meta.typeValue': 'Floral Blend',
    'product.reserve.meta.packagingLabel': 'Packaging',
    'product.reserve.meta.packagingValue': 'Dark Glass',
    'product.reserve.shipping.title': 'Free Delivery',
    'product.reserve.shipping.desc': 'On orders over €50',
    'product.reserve.characteristics.title': 'Characteristics',
    'product.reserve.characteristics.0.title': 'Floral Notes',
    'product.reserve.characteristics.0.desc': 'A delicate balance of multiple flower varieties creates a complex and sophisticated taste profile.',
    'product.reserve.characteristics.1.title': 'Color',
    'product.reserve.characteristics.1.desc': 'Medium amber with warm golden tones. The color represents the diverse floral sources.',
    'product.reserve.characteristics.2.title': 'Taste',
    'product.reserve.characteristics.2.desc': 'Balanced sweetness with subtle floral undertones. Perfect for everyday enjoyment.',
    'product.reserve.characteristics.3.title': 'Temperature',
    'product.reserve.characteristics.3.desc': 'Never heated above 40°C to preserve all natural enzymes and pollen.',
    'product.reserve.related.title': 'You Might Also Like',
    'product.reserve.cta.title': 'Not Sure Which Honey to Choose?',
    'product.reserve.cta.desc': 'Answer three short questions and we will recommend a honey based on your taste.',
    'product.reserve.cta.button': 'Start'
  });

  translations.mk = Object.assign({}, translations.mk, {
    'product.reserve.page.title': 'Цветен букет',
    'product.reserve.page.subtitle': 'Хармонична мешавина од повеќе цветови. Суров, нефилтриран и ладно полнет од една берба.',
    'product.reserve.detail.name': 'Цветен букет, 500г',
    'product.reserve.detail.desc1': 'Нашиот потписен микс ги обединува најдобрите цветни ноти од неколку внимателно избрани цветови. Секоја тегла е од една берба и една ливада, па затоа има конзистентен квалитет и следливост.',
    'product.reserve.detail.desc2': 'Темното стакло го штити медот од светлина. Секоја тегла има шифра на серија, па може да го следите до бербата, ливадата и пчеларот.',
    'product.reserve.features.title': 'Што добивате',
    'product.reserve.features.0': '500г суров, нефилтриран мед',
    'product.reserve.features.1': 'Темна стаклена тегла со шифра на серија',
    'product.reserve.features.2': 'Никогаш не се загрева над 40°C',
    'product.reserve.features.3': 'Од една берба, една ливада, еден пчелар',
    'product.reserve.features.4': 'Без остатоци од пестициди',
    'product.reserve.meta.sizeLabel': 'Големина',
    'product.reserve.meta.sizeValue': '500г',
    'product.reserve.meta.typeLabel': 'Тип',
    'product.reserve.meta.typeValue': 'Цветен микс',
    'product.reserve.meta.packagingLabel': 'Пакување',
    'product.reserve.meta.packagingValue': 'Темно стакло',
    'product.reserve.shipping.title': 'Бесплатна достава',
    'product.reserve.shipping.desc': 'За нарачки над €50',
    'product.reserve.characteristics.title': 'Карактеристики',
    'product.reserve.characteristics.0.title': 'Цветни ноти',
    'product.reserve.characteristics.0.desc': 'Мека рамнотежа на повеќе цветни видови создава сложен и софистициран вкус.',
    'product.reserve.characteristics.1.title': 'Боја',
    'product.reserve.characteristics.1.desc': 'Средно килибарна со топли златни тонови. Бојата ја одразува разновидноста на цветните извори.',
    'product.reserve.characteristics.2.title': 'Вкус',
    'product.reserve.characteristics.2.desc': 'Балансирана слаткост со нежни цветни ноти. Совршен за секојдневна употреба.',
    'product.reserve.characteristics.3.title': 'Температура',
    'product.reserve.characteristics.3.desc': 'Никогаш не се загрева над 40°C за да се зачуваат ензимите и поленот.',
    'product.reserve.related.title': 'Можеби ќе ве интересира',
    'product.reserve.cta.title': 'Не сте сигурни кој мед да изберете?',
    'product.reserve.cta.desc': 'Три кратки прашања и ќе ви препорачаме мед според вашиот вкус.',
    'product.reserve.cta.button': 'Започни'
  });

  translations.en = Object.assign({}, translations.en, {
    'product.highland.page.title': 'Mountain Honey',
    'product.highland.page.subtitle': 'Deep, earthy, and full-bodied. Raw, unfiltered, and cold-filled from the high pastures.',
    'product.highland.detail.name': 'Mountain Honey, 2×250g',
    'product.highland.detail.desc1': 'Harvested from high pastures and remote slopes, our Mountain Honey offers a deeper colour and a more intense, earthy character. Every jar comes from a single harvest and a single beekeeper, preserving both depth and traceability.',
    'product.highland.detail.desc2': 'Dark glass packaging protects the honey from light exposure. Each jar includes a batch code so you can trace your honey back to the harvest, meadow, and beekeeper.',
    'product.highland.features.title': 'What You Get',
    'product.highland.features.0': '2×250g of raw, unfiltered honey',
    'product.highland.features.1': 'Dark glass jars with batch code',
    'product.highland.features.2': 'Never heated above 40°C',
    'product.highland.features.3': 'From one harvest, one meadow, one beekeeper',
    'product.highland.features.4': 'Free from pesticide residue',
    'product.highland.meta.sizeLabel': 'Size',
    'product.highland.meta.sizeValue': '2×250g',
    'product.highland.meta.typeLabel': 'Type',
    'product.highland.meta.typeValue': 'Mountain Honey',
    'product.highland.meta.packagingLabel': 'Packaging',
    'product.highland.meta.packagingValue': 'Dark Glass',
    'product.highland.shipping.title': 'Free Delivery',
    'product.highland.shipping.desc': 'On orders over €50',
    'product.highland.characteristics.title': 'Characteristics',
    'product.highland.characteristics.0.title': 'Highland Notes',
    'product.highland.characteristics.0.desc': 'A richer, earthier profile shaped by herbs, wild mountain flora, and cool alpine air.',
    'product.highland.characteristics.1.title': 'Color',
    'product.highland.characteristics.1.desc': 'Deep amber with rich golden-brown tones, reflecting the complexity of the highland harvest.',
    'product.highland.characteristics.2.title': 'Taste',
    'product.highland.characteristics.2.desc': 'Bold and layered sweetness with a warm, lingering finish. Perfect for those who like depth.',
    'product.highland.characteristics.3.title': 'Temperature',
    'product.highland.characteristics.3.desc': 'Never heated above 40°C to preserve all natural enzymes and pollen.',
    'product.highland.related.title': 'You Might Also Like',
    'product.highland.cta.title': 'Not Sure Which Honey to Choose?',
    'product.highland.cta.desc': 'Answer three short questions and we will recommend a honey based on your taste.',
    'product.highland.cta.button': 'Start'
  });

  translations.mk = Object.assign({}, translations.mk, {
    'product.highland.page.title': 'Планински мед',
    'product.highland.page.subtitle': 'Длабок, земјен и полн. Суров, нефилтриран и ладно полнет од високите пасишта.',
    'product.highland.detail.name': 'Планински мед, 2×250г',
    'product.highland.detail.desc1': 'Собран од високи пасишта и далечни падини, нашиот планински мед има подлабока боја и поинтензивен, земјен карактер. Секоја тегла е од една берба и еден пчелар, одржувајќи длабочина и следливост.',
    'product.highland.detail.desc2': 'Темното стакло го штити медот од светлина. Секоја тегла има шифра на серија, па може да го следите до бербата, ливадата и пчеларот.',
    'product.highland.features.title': 'Што добивате',
    'product.highland.features.0': '2×250г суров, нефилтриран мед',
    'product.highland.features.1': 'Темни стаклени тегли со шифра на серија',
    'product.highland.features.2': 'Никогаш не се загрева над 40°C',
    'product.highland.features.3': 'Од една берба, една ливада, еден пчелар',
    'product.highland.features.4': 'Без остатоци од пестициди',
    'product.highland.meta.sizeLabel': 'Големина',
    'product.highland.meta.sizeValue': '2×250г',
    'product.highland.meta.typeLabel': 'Тип',
    'product.highland.meta.typeValue': 'Планински мед',
    'product.highland.meta.packagingLabel': 'Пакување',
    'product.highland.meta.packagingValue': 'Темно стакло',
    'product.highland.shipping.title': 'Бесплатна достава',
    'product.highland.shipping.desc': 'За нарачки над €50',
    'product.highland.characteristics.title': 'Карактеристики',
    'product.highland.characteristics.0.title': 'Планински ноти',
    'product.highland.characteristics.0.desc': 'Побогат и по-земјен профил, обликуван од билки, диви планински цветови и ладен алпски воздух.',
    'product.highland.characteristics.1.title': 'Боја',
    'product.highland.characteristics.1.desc': 'Длабоко килибарна боја со богати златно-кафеави тонови, што ја одразува сложеноста на планинската берба.',
    'product.highland.characteristics.2.title': 'Вкус',
    'product.highland.characteristics.2.desc': 'Смела и слоевита слаткост со топол, долг траен завршеток. Совршен за оние кои сакаат длабочина.',
    'product.highland.characteristics.3.title': 'Температура',
    'product.highland.characteristics.3.desc': 'Никогаш не се загрева над 40°C за да се зачуваат ензимите и поленот.',
    'product.highland.related.title': 'Можеби ќе ве интересира',
    'product.highland.cta.title': 'Не сте сигурни кој мед да изберете?',
    'product.highland.cta.desc': 'Три кратки прашања и ќе ви препорачаме мед според вашиот вкус.',
    'product.highland.cta.button': 'Започни'
  });

  translations.en = Object.assign({}, translations.en, {
    'product.wildflower.page.title': 'Meadow Honey',
    'product.wildflower.page.subtitle': 'Lighter, with soft meadow notes. Raw, unfiltered, and cold-filled from one harvest.',
    'product.wildflower.detail.name': 'Meadow Honey, 340g',
    'product.wildflower.detail.desc1': 'Light and delicate, our Meadow Honey captures the essence of spring meadows. Every jar comes from a single harvest and a single meadow, ensuring consistent quality and traceability.',
    'product.wildflower.detail.desc2': 'Dark glass packaging protects the honey from light exposure. Each jar includes a batch code so you can trace your honey back to the harvest, meadow, and beekeeper.',
    'product.wildflower.features.title': 'What You Get',
    'product.wildflower.features.0': '340g of raw, unfiltered honey',
    'product.wildflower.features.1': 'Dark glass jar with batch code',
    'product.wildflower.features.2': 'Never heated above 40°C',
    'product.wildflower.features.3': 'From one harvest, one meadow, one beekeeper',
    'product.wildflower.features.4': 'Free from pesticide residue',
    'product.wildflower.meta.sizeLabel': 'Size',
    'product.wildflower.meta.sizeValue': '340g',
    'product.wildflower.meta.typeLabel': 'Type',
    'product.wildflower.meta.typeValue': 'Meadow Honey',
    'product.wildflower.meta.packagingLabel': 'Packaging',
    'product.wildflower.meta.packagingValue': 'Dark Glass',
    'product.wildflower.shipping.title': 'Free Delivery',
    'product.wildflower.shipping.desc': 'On orders over €50',
    'product.wildflower.characteristics.title': 'Characteristics',
    'product.wildflower.characteristics.0.title': 'Meadow Notes',
    'product.wildflower.characteristics.0.desc': 'Soft and delicate floral notes that evoke the freshness of spring meadows and wildflowers.',
    'product.wildflower.characteristics.1.title': 'Color',
    'product.wildflower.characteristics.1.desc': 'Light golden amber. A clear indication of its gentle flavor profile and single-meadow origin.',
    'product.wildflower.characteristics.2.title': 'Taste',
    'product.wildflower.characteristics.2.desc': 'Mild and approachable sweetness with subtle meadow undertones. Perfect for daily enjoyment.',
    'product.wildflower.characteristics.3.title': 'Temperature',
    'product.wildflower.characteristics.3.desc': 'Never heated above 40°C to preserve all natural enzymes and pollen.',
    'product.wildflower.related.title': 'You Might Also Like',
    'product.wildflower.cta.title': 'Not Sure Which Honey to Choose?',
    'product.wildflower.cta.desc': 'Answer three short questions and we will recommend a honey based on your taste.',
    'product.wildflower.cta.button': 'Start'
  });

  translations.mk = Object.assign({}, translations.mk, {
    'product.wildflower.page.title': 'Ливадски мед',
    'product.wildflower.page.subtitle': 'Полесен, со меки ливадски ноти. Суров, нефилтриран и ладно полнет од една берба.',
    'product.wildflower.detail.name': 'Ливадски мед, 340г',
    'product.wildflower.detail.desc1': 'Лесен и деликатен, нашиот ливадски мед ја доловува есенцијата на пролетните ливади. Секоја тегла е од една берба и една ливада, па затоа има конзистентен квалитет и следливост.',
    'product.wildflower.detail.desc2': 'Темното стакло го штити медот од светлина. Секоја тегла има шифра на серија, па може да го следите до бербата, ливадата и пчеларот.',
    'product.wildflower.features.title': 'Што добивате',
    'product.wildflower.features.0': '340г суров, нефилтриран мед',
    'product.wildflower.features.1': 'Темна стаклена тегла со шифра на серија',
    'product.wildflower.features.2': 'Никогаш не се загрева над 40°C',
    'product.wildflower.features.3': 'Од една берба, една ливада, еден пчелар',
    'product.wildflower.features.4': 'Без остатоци од пестициди',
    'product.wildflower.meta.sizeLabel': 'Големина',
    'product.wildflower.meta.sizeValue': '340г',
    'product.wildflower.meta.typeLabel': 'Тип',
    'product.wildflower.meta.typeValue': 'Ливадски мед',
    'product.wildflower.meta.packagingLabel': 'Пакување',
    'product.wildflower.meta.packagingValue': 'Темно стакло',
    'product.wildflower.shipping.title': 'Бесплатна достава',
    'product.wildflower.shipping.desc': 'За нарачки над €50',
    'product.wildflower.characteristics.title': 'Карактеристики',
    'product.wildflower.characteristics.0.title': 'Ливадски ноти',
    'product.wildflower.characteristics.0.desc': 'Меки и деликатни цветни ноти што ја потсетуваат на свежината на пролетните ливади и дивите цветови.',
    'product.wildflower.characteristics.1.title': 'Боја',
    'product.wildflower.characteristics.1.desc': 'Светло килибарна. Јасен показател за нејзиниот нежен профил и потекло од една ливада.',
    'product.wildflower.characteristics.2.title': 'Вкус',
    'product.wildflower.characteristics.2.desc': 'Блага и пристапна слаткост со нежни ливадски ноти. Совршена за секојдневна употреба.',
    'product.wildflower.characteristics.3.title': 'Температура',
    'product.wildflower.characteristics.3.desc': 'Никогаш не се загрева над 40°C за да се зачуваат ензимите и поленот.',
    'product.wildflower.related.title': 'Можеби ќе ве интересира',
    'product.wildflower.cta.title': 'Не сте сигурни кој мед да изберете?',
    'product.wildflower.cta.desc': 'Три кратки прашања и ќе ви препорачаме мед според вашиот вкус.',
    'product.wildflower.cta.button': 'Започни'
  });

  // Single page translations

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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => window.MetcheI18n.init());
  } else {
    window.MetcheI18n.init();
  }
})();
