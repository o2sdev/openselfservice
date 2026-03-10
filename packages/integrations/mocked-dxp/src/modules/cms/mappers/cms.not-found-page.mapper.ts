import { CMS } from '@o2s/framework/modules';

const NOT_FOUND_PAGE_PL: CMS.Model.NotFoundPage.NotFoundPage = {
    title: 'Strona nie znaleziona',
    description: 'Strona, której szukasz, nie istnieje.',
    url: '/',
    urlLabel: 'Przejdź do strony głównej',
};

const NOT_FOUND_PAGE_EN: CMS.Model.NotFoundPage.NotFoundPage = {
    title: 'Page not found',
    description: 'The page you are looking for does not exist.',
    url: '/',
    urlLabel: 'Go to home page',
};

const NOT_FOUND_PAGE_DE: CMS.Model.NotFoundPage.NotFoundPage = {
    title: 'Seite nicht gefunden',
    description: 'Die Seite, die Sie suchen, existiert nicht.',
    url: '/',
    urlLabel: 'Zur Startseite wechseln',
};

export const mapNotFoundPage = (locale: string): CMS.Model.NotFoundPage.NotFoundPage => {
    switch (locale) {
        case 'en':
            return NOT_FOUND_PAGE_EN;
        case 'de':
            return NOT_FOUND_PAGE_DE;
        case 'pl':
            return NOT_FOUND_PAGE_PL;
    }

    return NOT_FOUND_PAGE_EN;
};
