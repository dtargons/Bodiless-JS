[@bodiless/vital-card](../README.md) / VitalCardFlowContainer

# Interface: VitalCardFlowContainer

Tokens for the vital card flow container

## Table of contents

### Properties

- [WithBasicVariations](VitalCardFlowContainer.md#withbasicvariations)
- [WithCardVariations](VitalCardFlowContainer.md#withcardvariations)
- [WithCategoryVariations](VitalCardFlowContainer.md#withcategoryvariations)
- [WithHeroVariations](VitalCardFlowContainer.md#withherovariations)
- [WithProductVariations](VitalCardFlowContainer.md#withproductvariations)
- [WithTopicVariations](VitalCardFlowContainer.md#withtopicvariations)

## Properties

### WithBasicVariations

• **WithBasicVariations**: `TokenSpec`<`any`, { `A11y`: {} ; `A11yContent`: {} ; `Analytics`: {} ; `Behavior`: {} ; `Components`: {} ; `Content`: {} ; `Core`: {} ; `Layout`: {} ; `SEO`: {} ; `Schema`: {} ; `Spacing`: {} ; `Theme`: {}  }\>

Composable token which adds basic card variations.
Defined by Fully clickable card with no visible CTA varied over
 - Orientation Properties
 - Content Variations

#### Defined in

[vital-card/src/components/FlowContainer/tokens/vitalCardFlowContainer.ts:228](https://github.com/dtargons/Bodiless-JS/blob/2c593824/packages/vital-card/src/components/FlowContainer/tokens/vitalCardFlowContainer.ts#L228)

___

### WithCardVariations

• **WithCardVariations**: `TokenSpec`<`any`, { `A11y`: {} ; `A11yContent`: {} ; `Analytics`: {} ; `Behavior`: {} ; `Components`: {} ; `Content`: {} ; `Core`: {} ; `Layout`: {} ; `SEO`: {} ; `Schema`: {} ; `Spacing`: {} ; `Theme`: {}  }\>

Composable token which adds all card variations.

#### Shadowing:

**`Example`**

Add components via shadowing.
```js
const WithCardVariations = asFluidToken(vitalCardFlowContainerBase, {
  Components: {
    ...vitalCardFlowContainerBase.ProductVariations,
    ...myCustomVariations
  },
});
```

#### Defined in

[vital-card/src/components/FlowContainer/tokens/vitalCardFlowContainer.ts:221](https://github.com/dtargons/Bodiless-JS/blob/2c593824/packages/vital-card/src/components/FlowContainer/tokens/vitalCardFlowContainer.ts#L221)

___

### WithCategoryVariations

• **WithCategoryVariations**: `TokenSpec`<`any`, { `A11y`: {} ; `A11yContent`: {} ; `Analytics`: {} ; `Behavior`: {} ; `Components`: {} ; `Content`: {} ; `Core`: {} ; `Layout`: {} ; `SEO`: {} ; `Schema`: {} ; `Spacing`: {} ; `Theme`: {}  }\>

Composable token which adds category card - no variations.

#### Defined in

[vital-card/src/components/FlowContainer/tokens/vitalCardFlowContainer.ts:239](https://github.com/dtargons/Bodiless-JS/blob/2c593824/packages/vital-card/src/components/FlowContainer/tokens/vitalCardFlowContainer.ts#L239)

___

### WithHeroVariations

• **WithHeroVariations**: `TokenSpec`<`any`, { `A11y`: {} ; `A11yContent`: {} ; `Analytics`: {} ; `Behavior`: {} ; `Components`: {} ; `Content`: {} ; `Core`: {} ; `Layout`: {} ; `SEO`: {} ; `Schema`: {} ; `Spacing`: {} ; `Theme`: {}  }\>

Composable token which adds hero card variations.
Defined by HeroBase - horizontal only cards with visible CTA varied over
 - Link Styles
 - Horizontal Variations to vary on Left or Right Images & Content Top & Centered.

#### Defined in

[vital-card/src/components/FlowContainer/tokens/vitalCardFlowContainer.ts:235](https://github.com/dtargons/Bodiless-JS/blob/2c593824/packages/vital-card/src/components/FlowContainer/tokens/vitalCardFlowContainer.ts#L235)

___

### WithProductVariations

• **WithProductVariations**: `TokenSpec`<`any`, { `A11y`: {} ; `A11yContent`: {} ; `Analytics`: {} ; `Behavior`: {} ; `Components`: {} ; `Content`: {} ; `Core`: {} ; `Layout`: {} ; `SEO`: {} ; `Schema`: {} ; `Spacing`: {} ; `Theme`: {}  }\>

Composable token which adds product card variations.
Defined by vertical only cards and with CTA varied over
- Link Variations
- Content remove of eyebrow

#### Defined in

[vital-card/src/components/FlowContainer/tokens/vitalCardFlowContainer.ts:250](https://github.com/dtargons/Bodiless-JS/blob/2c593824/packages/vital-card/src/components/FlowContainer/tokens/vitalCardFlowContainer.ts#L250)

___

### WithTopicVariations

• **WithTopicVariations**: `TokenSpec`<`any`, { `A11y`: {} ; `A11yContent`: {} ; `Analytics`: {} ; `Behavior`: {} ; `Components`: {} ; `Content`: {} ; `Core`: {} ; `Layout`: {} ; `SEO`: {} ; `Schema`: {} ; `Spacing`: {} ; `Theme`: {}  }\>

Composable token which adds topic card variations.

#### Defined in

[vital-card/src/components/FlowContainer/tokens/vitalCardFlowContainer.ts:243](https://github.com/dtargons/Bodiless-JS/blob/2c593824/packages/vital-card/src/components/FlowContainer/tokens/vitalCardFlowContainer.ts#L243)