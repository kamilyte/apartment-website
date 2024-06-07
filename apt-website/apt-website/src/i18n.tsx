import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEnglish from "./translation/english/translation.json";
import translationLithuanian from "./translation/lithuanian/translation.json";

const resources = {
    en: {
        translation: translationEnglish
    },
    lt: {
        translation: translationLithuanian
    }
}

i18next.use(initReactI18next).init({resources, lng:"en"});

export default i18next;

