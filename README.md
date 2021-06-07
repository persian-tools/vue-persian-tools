<div align="center">
	<p align="center">
		<img src="https://github.com/persian-tools/react-persian-tools/raw/master/images/logo.png" width="200">
	</p>
  <h1 align="center">Vue persian tools</h1>
  <p align="center">Persian tools wrapper for vue.js</p>
	
![CI/CD](https://github.com/persian-tools/vue-persian-tools/actions/workflows/storybook.yml/badge.svg)
![CI/CD](https://github.com/persian-tools/vue-persian-tools/actions/workflows/continuous-integration.yml/badge.svg)
![codecov](https://codecov.io/gh/persian-tools/vue-persian-tools/branch/master/graph/badge.svg)
[![GitHub license](https://img.shields.io/github/license/persian-tools/vue-persian-tools)](https://github.com/persian-tools/vue-persian-tools/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg)](https://github.com/persian-tools/vue-persian-tools/compare) 
[![CodeFactor](https://www.codefactor.io/repository/github/persian-tools/vue-persian-tools/badge)](https://www.codefactor.io/repository/github/persian-tools/vue-persian-tools)
</div>

---

### [See demo](https://persian-tools.github.io/vue-persian-tools)

### [Persian tools repo](https://github.com/persian-tools/persian-tools)

<br />

---

<br />

### Installation

npm

```bash
npm i @persian-tools/vue-persian-tools
```

**⚠️ If you are using vue2 you need to install composition api alongside the main package**

```bash
npm i @vue/composition-api
```

### Usage

```js
// in vue 2
import Vue from "vue";
import tools from "@persian-tools/vue-persian-tools";

Vue.use(tools, {
    components: true,
    directives: true
});

// in vue 3
import tools from "@persian-tools/vue-persian-tools";
createApp(App).use(tools, options);
```

this way, you can install directives & components globally.
by default only components will install globally. by passing `directives: true` to plugin options you can also enable directives

```js
{
    components: false, // it wont install components
    directives: true, // install directives globally
}
```

You can also install components & directives globally by their names.

```js
{
    components: ['isPersian', 'addOrdinalSuffix', '...'],
    directives: ['halfSpace'],
}
```

Or import them locally

```js
import { toPersianDirective, halfSpace } from "@persian-tools/vue-persian-tools";

export default {
    // install locally
    directives: { toPersianDirective },
    components: { halfSpace }
};
```

<br />

---

<br />

## components

### `tag prop`

every component accept a `tag` prop. you can use it to customize component html tag. default is `span`

```js
<is-persian tag="div"></is-persian>
```

<br />

---

### `isPersian` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/modules-ispersian--default)

**slots**:
<br />
`isPersian`: boolean

```html
<is-persian :str="text" :isComplex="complex" :trimPattern="trim" v-slot="{isPersian}">{{ isPersian }}</is-persian>
```

<br />

---

### `URLfix` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/modules-urlfix--default)

**slots**:
<br />
`url`: string

```html
<URLfix :url="your url" v-slot="{ url }">fixed URL: <b>{{ url }}</b></URLfix>
```

<br />

---

### `Sheba` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/modules-sheba--default)

**slots**:
<br />
`isValid`: boolean
<br />
`info`: ShebaResult

```html
<Sheba :shebaCode="code" v-slot="{ isValid, info }">
    is sheba valid: {{ isValid }}

    <h3>info about sheba</h3>
    <p>nickname: {{ info.nickname }}</p>
    <p>name: {{ info.name }}</p>
    <p>persianName: {{ info.persianName }}</p>
    <p>code: {{ info.code }}</p>
    <p>accountNumberAvailable: {{ info.accountNumberAvailable }}</p>
</Sheba>
```

<br />

---

### `addOrdinalSuffix` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/modules-addordinalsuffix--default)

**slots**:
<br />
`text`: string

```html
<addOrdinalSuffix :number="text" v-slot="{ text }">{{ text }}</addOrdinalSuffix>
```

<br />

---

### `bill` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/modules-bill--default)

**slots**:
<br />
`result`: billResult
<br />
`amount`: number
<br />
`type`: billType
<br />
`isBillValid`: boolean
<br />
`isBillIdValid`: boolean
<br />
`isBillPaymentValid`: boolean

```html
<bill :bill="val" v-slot="{ result, amount, type, isBillValid, isBillIdValid, isBillPaymentValid }">
    <p>result of bill:{{ result }}</p>
    <p>amount:{{ amount }}</p>
    <p>bill type:{{ type }}</p>
    <p>is bill valid:{{ isBillValid }}</p>
    <p>is bill id valid:{{ isBillIdValid }}</p>
    <p>is bill payment id valid:{{ isBillPaymentValid }}</p>
</bill>
```

<br />

---

### `commas` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/modules-commas--default)

**slots**:
<br />
`number`: number | string

```html
<div>
    <addCommas :number="your number..." v-slot="{ number }"> {{ number }}</addCommas>
    <removeCommas :number="your number..." v-slot="{ number }">{{ number }}</removeCommas>
</div>
```

<br />

---

### `digits` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/modules-digits--default)

**slots**:
<br />
`value`: string

```html
<digits :number="input number..." :convert="language to convert..." v-slot="{ value }">converted to: {{ value }}</digits>
```

<br />

---

### `extractCardNumber` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/modules-extractcardnumber--default)

**slots**:
<br />
`cards`: ExtractCardNumber[]
<br />
`valid`: ExtractCardNumber[]

```html
<extractCardNumber :str="val" v-slot="{ cards, valid }">
    <ul>
        <h4>all extracted cards:</h4>
        <li v-for="(card, i) in cards" :key="i">
            <p>index: {{ card.index }}</p>
            <p>pure: {{ card.pure }}</p>
            <p>base: {{ card.base }}</p>
            <p>isValid: {{ card.isValid }}</p>
        </li>
        <li v-for="(card, i) in valid" :key="i">
            <p>index: {{ card.index }}</p>
            <p>pure: {{ card.pure }}</p>
            <p>base: {{ card.base }}</p>
            <p>isValid: {{ card.isValid }}</p>
        </li>
    </ul>
</extractCardNumber>
```

<br />

---

### `getBankNameFromCardNumber` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/modules-getbanknamefromcardnumber--default)

**slots**:
<br />
`bankName`: string

```html
<getBankNameFromCardNumber :digits="card_number..." v-slot="{ bankName }"> {{ bankName }}</getBankNameFromCardNumber>
```

<br />

---

### `getPlaceByIranNationalId` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/modules-getplacebyirannationalid--default)

**slots**:
<br />
`city`: string
<br />
`codes`: string[]
<br />
`province`: string

```html
<getPlaceByIranNationalId :nationalId="id..." v-slot="{ city, codes, province }">
    city: <b> {{ city }} </b> <br />
    province: <b> {{ province}} </b> codes: <b> {{ codes }} </b>
</getPlaceByIranNationalId>
```

<br />

---

### `halfSpace` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/modules-halfspace--default)

**slots**:
<br />
`text`: string

```html
<halfSpace :str="text" v-slot="{ text }">{{ text }}</halfSpace>
```

<br />

---

### `hasPersian` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/modules-haspersian--default)

**slots**:
<br />
`hasPersian`: boolean

```html
<hasPersian :str="text" v-slot="{ hasPersian }">{{ hasPersian }}</hasPersian>
```

<br />

---

### `isArabic` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/modules-isarabic--default)

**slots**:
<br />
`isArabic`: boolean

```html
<isArabic :str="text" :trimPattern="trim" v-slot="{ isArabic }">{{ isArabic }}</isArabic>
```

<br />

---

### `numberToWords` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/modules-numbertowords--default)

**slots**:
<br />
`words`: string

```html
<numberToWords :number="val" v-slot="{ words }">{{ words }}</numberToWords>
```

<br />

---

### `phoneNumber` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/modules-phonenumber--default)

**slots**:
<br />
`details`: OperatorModel | null
<br />
`isValid`: boolean

```html
<phoneNumber :number="val" v-slot="{ details, isValid }">
    <p>details: {{ details }}</p>
    <p>is phone number valid: {{ isValid }}</p>
</phoneNumber>
```

<br />

---

### `removeOrdinalSuffix` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/modules-removeordinalsuffix--default)

**slots**:
<br />
`text`: string

```html
<removeOrdinalSuffix :number="text" v-slot="{ text }"><b>{{ text }}</b></removeOrdinalSuffix>
```

<br />

---

### `toPersianChars` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/modules-topersianchars--default)

**slots**:
<br />
`text`: string

```html
<toPersianChars :str="val" v-slot="{ text }">{{ text }}</toPersianChars>
```

<br />

---

### `verifyCardNumber` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/modules-verifycardnumber--default)

**slots**:
<br />
`isValid`: boolean

```html
<verifyCardNumber :digits="text" v-slot="{ isValid }">{{ isValid }}</verifyCardNumber>
```

<br />

---

### `verifyIranianNationalId` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/modules-verifyiraniannationalid--default)

**slots**:
<br />
`isValid`: boolean

```html
<verifyIranianNationalId :nationalId="text" v-slot="{ isValid }">{{ isValid }}</verifyIranianNationalId>
```

<br />

---

### `wordsToNumber` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/modules-wordstonumber--default)

**slots**:
<br />
`number`: number

```html
<wordsToNumber :words="val..." fuzzy addCommas v-slot="{ number }">{{ number }}</wordsToNumber>
```

<br />

---

## directives

all directives have sync modifiers. using this modifier will enable reactive data in your directive.

### `halfSpace directive` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/directives-halfspace--default)

```html
<span v-half-space>your text</span> <input :value="text" v-half-space.sync />
```

<br />

---

### `toPersian directive` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/directives-topersian--default)

```html
<span v-to-persian>...</span> <input :value="text" v-to-persian.sync />
```

<br />

---

### `URLFix directive` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/directives-topersian--default)

```html
<span v-url-fix>...</span> <input :value="text" v-url-fix.sync />
```

<br />

---

### `addOrdinalSuffix directive` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/directives-addordinalsuffix--default)

```html
<span v-add-ordinal-suffix>...</span> <input :value="text" v-add-ordinal-suffix.sync />
```

<br />

---

### `removeOrdinalSuffix directive` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/directives-removeordinalsuffix--default)

```html
<span v-remove-ordinal-suffix>...</span> <input :value="text" v-remove-ordinal-suffix.sync />
```

<br />

---

### `numberToWords directive` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/directives-numbertowords--default)

```html
<span v-number-to-words>...</span> <input :value="text" v-number-to-words.sync />
```

<br />

---

### `wordsToNumber directive` [See details](https://persian-tools.github.io/vue-persian-tools/?path=/docs/directives-wordsToNumber--default)

**modifires**:
<br />
`addCommas`, `fuzzy`
<br />
**argument**:
<br />
`digits`: 'fa' | 'en' | 'ar'

```html
<span v-words-to-number:fa.addCommas>...</span> <input :value="text" v-words-to-number:en.fuzzy.sync />
```

<br />

---

## Contributing

check [Contributing.md](https://github.com/persian-tools/vue-persian-tools/blob/master/.github/contributing.md) for more information

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/persian-tools/vue-persian-tools/blob/master/LICENSE) file for details.

## Changelogs

-   [changelog](https://github.com/persian-tools/vue-persian-tools/blob/master/CHANGELOG.md)
