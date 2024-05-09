import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';


const language = localStorage.getItem("lang");

//LanguageDetector is a middleware to detect the currect language and change accordingly
i18n.use(LanguageDetector).use(initReactI18next).init({
    debug : true,
    lng : language,
    fallbackLng : "en",
    resources : {
        en : {
            translation : {
                about : "About",
                shop : 'Shop',
                contact : "Contact",
                login : "Login",
                logout : "Logout",
                newArrivals : "New Arrivals",
                bestSellers : "Bestsellrs",
                exclusive : 'Exclusive',
                discover : "Discover Our New Arrivals",
                subToNews : "SIGNUP TO OUR NEWSLETTER!",
                news : "News",
                offer : "$10 off on your first order",
                discoverNews : "Discover All our news"
            } 
        },
        hi : {
            translation : {     
                about : "जानकारी",
                shop : "दुकान",
                contact : 'संपर्क',
                login : "लॉगिन" ,
                logout : "लॉगआउट",
                newArrivals : "नई आगमन",
                bestSellers : "बेस्टसेलर्स",
                exclusive : 'विशेष',
                discover : "हमारे नए उत्पादों की खोज करें",
                subToNews : "हमारे समाचारपत्रिका के लिए साइनअप करें!",
                news : "समाचार",
                offer : "पहले आदेश पर $10 की छूट",
                discoverNews : "हमारी सभी खबरें खोजें"

            } 
        },  
        or : {
            translation : {
                about : "ବିବରଣୀ",
                shop : "ପ୍ରଡକ୍ଟ",
                contact : 'ସମ୍ପର୍କ',
                login : "ଲଗଇନ" ,
                logout : "ଲଗଆଉଟ",
                newArrivals : "ନୂତନ ଆଗମନ",
                bestSellers : "ଲୋକପ୍ରିୟ",
                exclusive : 'ବିଶେଷ',
                discover : "ଆମ ନୂତନ ପ୍ରଡକ୍ଟଗୁଡ଼ିକ ଆବିଷ୍କରଣ କରନ୍ତୁ",
                subToNews : "ଆମ ସମାଚାର କୁ ସବ୍‌ସ୍କ୍ରାଇବ୍ କରନ୍ତୁ",
                news : "ସମାଚାର",
                offer : "ପ୍ରଥମ ଆଦେଶ ଉପରେ $10 ଛାଡ଼ ପ୍ରାପ୍ତ କରନ୍ତୁ",
                discoverNews : "ସମସ୍ତ ଆମର ସମାଚାରଗୁଡ଼ିକ ଆବିଷ୍କରଣ କରନ୍ତୁ"
            } 
        }
    }
})