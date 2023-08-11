@bodiless/i18n

# @bodiless/i18n

## Table of contents

### Language Node API Classes

- [LanguageContentNode](classes/LanguageContentNode.md)

### Type Aliases

- [Directions](README.md#directions)
- [Language](README.md#language)
- [LanguageContextType](README.md#languagecontexttype)
- [Languages](README.md#languages)
- [PropsWithLanguages](README.md#propswithlanguages)

### Variables

- [LanguageContext](README.md#languagecontext)

### API Functions

- [asLanguageSelector](README.md#aslanguageselector)
- [useLanguageSelectorProps](README.md#uselanguageselectorprops)

### Language Node API Functions

- [withLanguageNode](README.md#withlanguagenode)

### Language Provider Functions

- [getCurrentLanguage$](README.md#getcurrentlanguage$)
- [getLanguagesWithDefaultValues](README.md#getlanguageswithdefaultvalues)
- [setCurrentLanguage$](README.md#setcurrentlanguage$)
- [useLangDirProps](README.md#uselangdirprops)
- [useLanguageContext](README.md#uselanguagecontext)
- [withCurrentLanguageFromHostPrefix](README.md#withcurrentlanguagefromhostprefix)
- [withCurrentLanguageFromPath](README.md#withcurrentlanguagefrompath)
- [withLangDirProps](README.md#withlangdirprops)
- [withLanguageProvider](README.md#withlanguageprovider)
- [withLanguages](README.md#withlanguages)

## Type Aliases

### Directions

Ƭ **Directions**: ``"ltr"`` \| ``"rtl"``

#### Defined in

[bodiless-i18n/src/LanguageProvider/LanguageProvider.tsx:6](https://github.com/dtargons/Bodiless-JS/blob/2c593824/packages/bodiless-i18n/src/LanguageProvider/LanguageProvider.tsx#L6)

___

### Language

Ƭ **Language**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ariaChangeLanguage?` | { `[name: string]`: `string`;  } |
| `direction?` | `string` & [`Directions`](README.md#directions) |
| `hrefLang?` | `string` |
| `isCurrent?` | `boolean` |
| `isDefault?` | `boolean` |
| `label?` | `string` |
| `name` | `string` |

#### Defined in

[bodiless-i18n/src/LanguageProvider/LanguageProvider.tsx:8](https://github.com/dtargons/Bodiless-JS/blob/2c593824/packages/bodiless-i18n/src/LanguageProvider/LanguageProvider.tsx#L8)

___

### LanguageContextType

Ƭ **LanguageContextType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getCurrentLanguage` | () => [`Language`](README.md#language) |
| `languages` | [`Languages`](README.md#languages) |
| `setCurrentLanguage` | (`lang`: `string`) => [`Languages`](README.md#languages) \| ``null`` |
| `setLanguages` | `React.Dispatch`<`React.SetStateAction`<[`Languages`](README.md#languages)\>\> |

#### Defined in

[bodiless-i18n/src/LanguageProvider/LanguageProvider.tsx:26](https://github.com/dtargons/Bodiless-JS/blob/2c593824/packages/bodiless-i18n/src/LanguageProvider/LanguageProvider.tsx#L26)

___

### Languages

Ƭ **Languages**: [`Language`](README.md#language)[]

#### Defined in

[bodiless-i18n/src/LanguageProvider/LanguageProvider.tsx:20](https://github.com/dtargons/Bodiless-JS/blob/2c593824/packages/bodiless-i18n/src/LanguageProvider/LanguageProvider.tsx#L20)

___

### PropsWithLanguages

Ƭ **PropsWithLanguages**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `languages?` | [`Languages`](README.md#languages) |

#### Defined in

[bodiless-i18n/src/LanguageProvider/LanguageProvider.tsx:22](https://github.com/dtargons/Bodiless-JS/blob/2c593824/packages/bodiless-i18n/src/LanguageProvider/LanguageProvider.tsx#L22)

## Variables

### LanguageContext

• `Const` `Private` **LanguageContext**: `Context`<[`LanguageContextType`](README.md#languagecontexttype)\>

#### Defined in

[bodiless-i18n/src/LanguageProvider/LanguageProvider.tsx:36](https://github.com/dtargons/Bodiless-JS/blob/2c593824/packages/bodiless-i18n/src/LanguageProvider/LanguageProvider.tsx#L36)

## API Functions

### asLanguageSelector

▸ **asLanguageSelector**<`P`\>(`C`): `ComponentWithMeta`<`PP`<`P`, {}, { `children`: `string` ; `href`: `string`  }\>\>

asLanguageSelector is a HOC which, when applied to a link,
turns it into a language toggler.

**`Params`**

useLanguageSelectorProps hook

**`See`**

useLanguageSelectorProps

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `object` & `Partial`<{ `children`: `string` ; `href`: `string`  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `C` | `ComponentOrTag`<`P`\> |

#### Returns

`ComponentWithMeta`<`PP`<`P`, {}, { `children`: `string` ; `href`: `string`  }\>\>

#### Defined in

fclasses/lib/types.d.ts:89

___

### useLanguageSelectorProps

▸ **useLanguageSelectorProps**(): `Object`

useLanguageSelectorProps is a hook that helps to toggle between two languages
defined on the site.

#### Returns

`Object`

and object of props:
- children: the name of the lenguage to toggle on
- href: path prefix for the language to toggle on

| Name | Type |
| :------ | :------ |
| `children` | `string` |
| `href` | `string` |

#### Defined in

[bodiless-i18n/src/LanguageSelector/index.ts:31](https://github.com/dtargons/Bodiless-JS/blob/2c593824/packages/bodiless-i18n/src/LanguageSelector/index.ts#L31)

___

## Language Node API Functions

### withLanguageNode

▸ **withLanguageNode**<`P`\>(`C`): `ComponentWithMeta`<`PP`<`P`, {}, {}\>\>

`withLanguageNode` is a HOC that allows the wrapped component to handle its
data in a multilingual manner.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `C` | `ComponentOrTag`<`P`\> |

#### Returns

`ComponentWithMeta`<`PP`<`P`, {}, {}\>\>

#### Defined in

fclasses/lib/types.d.ts:89

___

## Language Provider Functions

### getCurrentLanguage$

▸ **getCurrentLanguage$**(`languages`): [`Language`](README.md#language)

`getCurrentLanguage$` is a helper function that filters the list of languages and
defines which one is current.

**`Example`**

will return true for all home pages of root and each language top
path/folder.
```js
const isHomePage = () => (
  useNode().node.pagePath === '/'
  || useNode().node.pagePath === `/${useLanguageContext().getCurrentLanguage().name}/`
);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `languages` | [`Languages`](README.md#languages) | list of language objects. |

#### Returns

[`Language`](README.md#language)

current language object.

#### Defined in

[bodiless-i18n/src/LanguageProvider/LanguageProvider.tsx:70](https://github.com/dtargons/Bodiless-JS/blob/2c593824/packages/bodiless-i18n/src/LanguageProvider/LanguageProvider.tsx#L70)

___

### getLanguagesWithDefaultValues

▸ **getLanguagesWithDefaultValues**(`languages?`): [`Languages`](README.md#languages)

`getLanguagesWithDefaultValues` is a helper function which ensures that all
languages in the passed list get all necessary default values.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `languages` | [`Languages`](README.md#languages) | `[]` | list of language objects |

#### Returns

[`Languages`](README.md#languages)

- list of language objects with necessary default values

#### Defined in

[bodiless-i18n/src/LanguageProvider/LanguageProvider.tsx:112](https://github.com/dtargons/Bodiless-JS/blob/2c593824/packages/bodiless-i18n/src/LanguageProvider/LanguageProvider.tsx#L112)

___

### setCurrentLanguage$

▸ **setCurrentLanguage$**(`langName`, `languages`): [`Languages`](README.md#languages)

`setCurrentLanguage$` is a helper function that sets `isCurrent` option to
true for the selected language, and sets `isCurrent: false` for all other
languages in the list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `langName` | `string` | string |
| `languages` | [`Languages`](README.md#languages) | list of language objects |

#### Returns

[`Languages`](README.md#languages)

updated list of language objects

#### Defined in

[bodiless-i18n/src/LanguageProvider/LanguageProvider.tsx:86](https://github.com/dtargons/Bodiless-JS/blob/2c593824/packages/bodiless-i18n/src/LanguageProvider/LanguageProvider.tsx#L86)

___

### useLangDirProps

▸ **useLangDirProps**(): `Object`

useLangDirProps is a hook that gets current language name and direction from languageProvider.

#### Returns

`Object`

an object with lang and dir props.

| Name | Type |
| :------ | :------ |
| `dir` | `undefined` \| ``"ltr"`` \| ``"rtl"`` |
| `lang` | `string` |

#### Defined in

[bodiless-i18n/src/LanguageProvider/withLangDirProps.ts:11](https://github.com/dtargons/Bodiless-JS/blob/2c593824/packages/bodiless-i18n/src/LanguageProvider/withLangDirProps.ts#L11)

___

### useLanguageContext

▸ **useLanguageContext**(): [`LanguageContextType`](README.md#languagecontexttype)

Hook which can be used to use language content.

#### Returns

[`LanguageContextType`](README.md#languagecontexttype)

#### Defined in

[bodiless-i18n/src/LanguageProvider/LanguageProvider.tsx:49](https://github.com/dtargons/Bodiless-JS/blob/2c593824/packages/bodiless-i18n/src/LanguageProvider/LanguageProvider.tsx#L49)

___

### withCurrentLanguageFromHostPrefix

▸ **withCurrentLanguageFromHostPrefix**<`P`\>(`C`): `ComponentWithMeta`<`PP`<`P`, {}, {}\>\>

`withCurrentLanguageFromHostPrefix` HOC defines the current language
by reading the host prefix, e.g., 'es' in https://es.example.com.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `C` | `ComponentOrTag`<`P`\> |

#### Returns

`ComponentWithMeta`<`PP`<`P`, {}, {}\>\>

#### Defined in

fclasses/lib/types.d.ts:89

___

### withCurrentLanguageFromPath

▸ **withCurrentLanguageFromPath**<`P`\>(`C`): `ComponentWithMeta`<`PP`<`P`, {}, {}\>\>

`withCurrentLanguageFromPath` defines the current language
by reading the first section in the path, e.g., 'es' in https://example.com/es/some-page.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `C` | `ComponentOrTag`<`P`\> |

#### Returns

`ComponentWithMeta`<`PP`<`P`, {}, {}\>\>

#### Defined in

fclasses/lib/types.d.ts:89

___

### withLangDirProps

▸ **withLangDirProps**<`P`\>(`C`): `ComponentWithMeta`<`PP`<`P`, {}, { `dir`: `undefined` \| ``"ltr"`` \| ``"rtl"`` = direction; `lang`: `string`  }\>\>

withLangDirProps HOC adds lang and dir attributes on a tag where applied.

**`Params`**

useLanguageSelectorProps hook

**`See`**

useLangDirProps

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `object` & `Partial`<{ `dir`: `undefined` \| ``"ltr"`` \| ``"rtl"`` = direction; `lang`: `string`  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `C` | `ComponentOrTag`<`P`\> |

#### Returns

`ComponentWithMeta`<`PP`<`P`, {}, { `dir`: `undefined` \| ``"ltr"`` \| ``"rtl"`` = direction; `lang`: `string`  }\>\>

#### Defined in

fclasses/lib/types.d.ts:89

___

### withLanguageProvider

▸ **withLanguageProvider**<`P`\>(`C`): `ComponentWithMeta`<`PP`<`P`, {}, {}\>\>

`withLanguageProvider` is a HOC that wraps a component into a context provider
which provides a list of sites' languages and allows to get and set the current (active)
language.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `C` | `ComponentOrTag`<`P`\> |

#### Returns

`ComponentWithMeta`<`PP`<`P`, {}, {}\>\>

- list of sites' languages and allows to get and set the current (active)
language.

#### Defined in

fclasses/lib/types.d.ts:89

___

### withLanguages

▸ **withLanguages**(`languages`): `HOCWithMeta`<{}, `Partial`<`Object`\>, { `languages`: [`Languages`](README.md#languages)  }\>

`withLanguages` HOC adds language provider to the component and implements default
mechanism of detecting which language is active (by first path section).
Should be applied on page wrapper component in order to provide necessary language info for
all nested components.

#### Parameters

| Name | Type |
| :------ | :------ |
| `languages` | [`Languages`](README.md#languages) |

#### Returns

`HOCWithMeta`<{}, `Partial`<`Object`\>, { `languages`: [`Languages`](README.md#languages)  }\>

#### Defined in

[bodiless-i18n/src/LanguageProvider/LanguageProvider.token.tsx:60](https://github.com/dtargons/Bodiless-JS/blob/2c593824/packages/bodiless-i18n/src/LanguageProvider/LanguageProvider.token.tsx#L60)