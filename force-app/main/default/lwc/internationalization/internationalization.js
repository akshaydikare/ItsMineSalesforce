import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/locale'
import CURRENCY from '@salesforce/i18n/currency'
import DIR from '@salesforce/i18n/dir'
import LANG from '@salesforce/i18n/lang';
export default class Internationalization extends LightningElement {
    dir = DIR //'rtl'
    lang = LANG
    number = 6575557.86
    formattedNumber = new Intl.NumberFormat(LOCALE,{  //'ar-EG'
        style:'currency',
        currency:CURRENCY, //'USD', 'EGP'
        currencyDisplay:'symbol'
    }).format(this.number)



    date = new Date(2020, 6, 7);
    formattedDate = new Intl.DateTimeFormat(LOCALE).format(this.date);
}