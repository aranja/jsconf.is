const companies = {
  advania: {
    name: 'Advania',
    description: '<p>Advania is a Nordic IT corporation, operating in 22 locations in Iceland, Sweden, Norway, and Denmark. The company focuses on helping customers to improve their performance with innovative use of best available IT platforms and services.  Advania serves thousands of corporate customers, multinational enterprises, governments and public institutions, big, small and medium-sized companies in all aspects of society.</p>' +
    '<p>Advania traces its roots to 1939 when an Icelandic entrepreneur founded an office equipment repair workshop in Reykjavik. In the following decades, three separate branches of IT-companies evolved in three Nordic countries, <a href="https://www.advania.is/" target="_blank">Iceland</a>, <a href="https://www.advania.se/" target="_blank">Sweden</a>, and <a href="https://www.advania.no/" target="_blank">Norway</a>. In 2012 they were braided into one and Advania was formed. For further information, please visit <a href="https://www.advania.com/" target="_blank">www.advania.com</a>.</p>',
    website: 'https://advania.com/',
    image: 'advania.png',
  },
  apress: {
    name: 'Apress',
    description: null,
    website: 'https://www.apress.com',
    image: 'apress.svg',
  },
  aranja: {
    name: 'Aranja',
    description: null,
    website: 'https://aranja.com',
    image: 'aranja.svg',
  },
  satt: {
    name: 'Satt',
    website: 'https://www.sattrestaurant.com',
  },
  austur: {
    name: 'Austur',
    website: 'https://www.facebook.com/austurclub/',
  },
  subway: {
    name: 'Subway',
    website: 'https://subway.is/',
  },
  matarkjallarinn: {
    name: 'Matarkjallarinn',
    website: 'https://matarkjallarinn.is/',
  },
  sjavargrillid: {
    name: 'Sjávargrillið',
    website: 'https://sjavargrillid.is/',
  },
  fiskfelagid: {
    name: 'Fiskfélagið',
    website: 'https://fiskfelagid.is/',
  },
  'xo-food': {
    name: 'XO Food',
    website: 'https://xofood.is/',
  },
  'js-watch': {
    name: 'JS Watch',
    website: 'https://www.jswatch.com/',
  },
  'tales-from-iceland': {
    name: 'Tales from Iceland',
    website: 'https://talesfromiceland.is/',
  },
  handprjonasambandid: {
    name: 'Handprjónasamband Íslands',
    website: 'https://handprjonasambandid.is/',
  },
  lemon: {
    name: 'Lemon',
    website: 'https://lemon.is/',
  },
  dominos: {
    name: 'Dominos',
    website: 'https://dominos.is/',
  },
  slippbarinn: {
    name: 'Slippbarinn',
    website: 'https://slippbarinn.is/',
  },
  'zo-on': {
    name: 'ZO-ON',
    website: 'https://zo-on.com/',
  },
  'kosmos-og-kaos': {
    name: 'Kosmos & Kaos',
    description: '<p>Kosmos & Kaos is a quality digital agency that' +
    ' approaches all of its projects with heart and soul. With a keen eye for design, clear goals, good craftsmanship and  exceptional knowledge in the field, we have continuously brought our clients beautiful designed & developed digital products with splendid end results.</p><p>Founded in March 2010, Kosmos & Kaos went from operating on a kitchen table, to opening two offices in less than one year. One in Reykjanesbær, and another one in Reykjavik.</p><p>Having multiple honourable mentions and awards for its work, Kosmos & Kaos have also been recognised for being a family-friendly workplace and having an impressive employee policy which keeps being improved.</p><p>We want our customers to succeed and excel. Without fluff and complicated words, we create award-winning user-friendly digital experiences. Our success speaks for itself.</p>',
    website: 'https://kosmosogkaos.is/',
    image: 'kosmos-og-kaos.svg',
  },
  tempo: {
    name: 'Tempo',
    description: null,
    website: 'https://tempo.io/',
    image: 'tempo.png',
  },
  ccp: {
    name: 'CCP',
    description: null,
    website: 'https://www.ccpgames.com/',
    image: 'ccp.png',
  },
  ueno: {
    name: 'ueno.',
    description: null,
    website: 'https://ueno.co/',
    image: 'ueno.png',
  },
  mozilla: {
    name: 'Mozilla',
    description: null,
    website: 'https://www.mozilla.org',
    image: 'mozilla.svg',
  },
  landsbankinn: {
    name: 'Landsbankinn',
    description: null,
    website: 'https://www.landsbankinn.com/',
    image: 'lb.jpg',
  },
  twilio: {
    name: 'twilio',
    description: null,
    website: 'https://www.twilio.com/',
    image: 'twilio.png',
  },
  'net-app': {
    name: 'NetApp',
    description: null,
    website: 'https://www.netapp.com',
    image: 'net-app.png',
  },
  'hard-rock': {
    name: 'Hard Rock Cafe Reykjavik',
    description: null,
    website: 'http://www.hardrock.com/cafes/reykjavik/',
    image: 'hardrock.png',
  },
  icelandair: {
    name: 'Icelandair',
    description: null,
    website: 'http://www.icelandair.com/',
    image: 'icelandair.svg',
  },
  'wuxi-nextcode': {
    name: 'WuXi NextCODE',
    description: null,
    website: 'https://www.wuxinextcode.com/',
    image: 'wuxi-nextcode.svg',
  },
}

module.exports = {
  companies,
  sponsors: [{
    name: 'Platinum',
    ids: [
      'advania',
    ],
  }, {
    name: 'Silver',
    ids: [
      'aranja',
      'kosmos-og-kaos',
      'landsbankinn',
      'mozilla',
      'twilio',
    ],
  }, {
    name: 'Bronze',
    ids: [
      'apress',
      'ccp',
      'hard-rock',
      'icelandair',
      'net-app',
      'ueno',
      'tempo',
      'wuxi-nextcode',
    ],
  }],
}
