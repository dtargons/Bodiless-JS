import { asTokenGroup } from '../util';
import { vitalColor } from './semantic';

const meta = {
  categories: {
    Type: ['Element'],
    Group: ['BreadcrumbElement'],
  },
};

export default asTokenGroup(meta)({
  TextDarkThemeActive: vitalColor.TextDarkThemeBase,
  TextDarkThemeHover: vitalColor.TextInteractiveDarkThemeIdle,
  TextDarkThemeIdle: vitalColor.TextDarkThemeBase,
  TextLightThemeActive: vitalColor.TextLightThemeBase,
  TextLightThemeHover: vitalColor.TextInteractiveLightThemeIdle,
  TextLightThemeIdle: vitalColor.TextLightThemeBase,
});