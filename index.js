import I18n from './vendor/i18n';
import * as Localization from 'expo-localization';

/**
 * import { Localization } from 'expo'  depricated from sdk 35
 * Upgrade to 
 * import * as Localization from 'expo-localization';
 * 
 * Use const { locale } = await Localization.getLocalizationAsync();instead of const locale = await Localization.locale(); 
 */

I18n.initAsync = async () => {
    const { locale } = await Localization.getLocalizationAsync();
    I18n.locale = (locale) ? locale.replace(/_/, '-') : '';
}

export default I18n;
