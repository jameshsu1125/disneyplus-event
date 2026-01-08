export const PAGE = {
  home: 'home',
};

export const REST_PATH = {
  test: 'todos/1',
};

export const Users = {
  actors: [
    { photo: 'user-0', name: '店長 / 曾國雄', description: '人稱雄哥，專營凶宅多年' },
    { photo: 'user-1', name: '資深專員 / 陳永仁', description: '毒舌，近期面臨婚姻危機' },
    {
      photo: 'user-2',
      name: '實習專員 / 張亦澤',
      description: '上進肯努力，為妹妹的醫藥費成為房仲',
    },
    { photo: 'user-3', name: '實習專員 / 李靜', description: '聰明熱心，尚未知道成為房仲的理由' },
  ],
  experts: [
    {
      photo: 'user-4',
      name: '靈媒 / 畢墨雨',
      description: '人稱小墨，年紀輕卻已是資深通靈者，刀子口豆腐心',
    },
    { photo: 'user-5', name: '算命師 / 畢婆婆', description: '精通中醫與算命是令人安心的存在' },
  ],
};

export const URLList = {
  annual:
    'https://www.disneyplus.com/commerce/plans?isLicensePlateUser=false&billingCadence=ANNUAL',
  plans: 'https://www.disneyplus.com/zh-hant/commerce/plans',
};

export const LandingPatternTransition = [
  {
    initial: { css: { opacity: 0 }, delay: 0, duration: 100 },
    animate: { css: { opacity: 1 }, delay: 0, duration: 500 },
  },
  {
    initial: { css: { opacity: 0 }, delay: 0, duration: 100 },
    animate: { css: { opacity: 1 }, delay: 300, duration: 500 },
  },
  {
    initial: { css: { opacity: 0 }, delay: 0, duration: 100 },
    animate: { css: { opacity: 1 }, delay: 600, duration: 500 },
  },
  {
    initial: { css: { opacity: 0 }, delay: 0, duration: 100 },
    animate: { css: { opacity: 1 }, delay: 900, duration: 500 },
  },

  {
    initial: { css: { opacity: 0 }, delay: 0, duration: 100 },
    animate: { css: { opacity: 1 }, delay: 1200, duration: 500 },
  },
  {
    initial: { css: { opacity: 0 }, delay: 0, duration: 100 },
    animate: { css: { opacity: 1 }, delay: 1500, duration: 500 },
  },
  {
    initial: { css: { opacity: 0, x: -50 }, delay: 0, duration: 100 },
    animate: { css: { opacity: 1, x: 0 }, delay: 1200, duration: 500 },
  },
  {
    initial: { css: { opacity: 0, x: 50 }, delay: 0, duration: 100 },
    animate: { css: { opacity: 1, x: 0 }, delay: 1200, duration: 500 },
  },
  {
    initial: { css: { opacity: 0, x: -50 }, delay: 0, duration: 100 },
    animate: { css: { opacity: 1, x: 0 }, delay: 1500, duration: 500 },
  },
  {
    initial: { css: { opacity: 0, x: 50 }, delay: 0, duration: 100 },
    animate: { css: { opacity: 1, x: 0 }, delay: 1500, duration: 500 },
  },
  {
    initial: { css: { opacity: 0 }, delay: 0, duration: 100 },
    animate: { css: { opacity: 1 }, delay: 1800, duration: 500 },
  },
  {
    initial: { css: { opacity: 0 }, delay: 0, duration: 100 },
    animate: { css: { opacity: 1 }, delay: 1900, duration: 500 },
  },
  {
    initial: { css: { opacity: 0 }, delay: 0, duration: 100 },
    animate: { css: { opacity: 1 }, delay: 2000, duration: 500 },
  },
  {
    initial: { css: { opacity: 0 }, delay: 0, duration: 100 },
    animate: { css: { opacity: 1 }, delay: 2100, duration: 500 },
  },
  {
    initial: { css: { opacity: 0, scale: 3 }, delay: 0, duration: 100 },
    animate: { css: { opacity: 1, scale: 1 }, delay: 2400, duration: 200 },
  },
  {
    initial: { css: { opacity: 0, scale: 3 }, delay: 0, duration: 100 },
    animate: { css: { opacity: 1, scale: 1 }, delay: 2700, duration: 200 },
  },
  {
    initial: { css: { opacity: 0, scale: 3 }, delay: 0, duration: 100 },
    animate: { css: { opacity: 1, scale: 1 }, delay: 3000, duration: 200 },
  },
  {
    initial: { css: { opacity: 0, scale: 3 }, delay: 0, duration: 100 },
    animate: { css: { opacity: 1, scale: 1 }, delay: 3300, duration: 200 },
  },
];
