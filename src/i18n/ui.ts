export const languages = {
  en: 'EN',
  zh: 'ZH',
};

export const defaultLang = 'en';
export const showDefaultLang = false;

export const ui: any = {
  en: {
    'nav.home': 'HOME',
    'nav.about': 'ABOUT',
    'nav.blog': 'BLOG',
    'nav.project': 'PROJECT',
    'nav.photo': 'PHOTO',
    'post.updated': 'UPDATED',
    'post.created': 'CREATED'
  },
  zh: {
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.blog': '博客',
    'nav.project': '项目',
    'nav.photo': '摄影',
    'post.updated': '更新于',
    'post.created': '创建于'
  },
} as const;
