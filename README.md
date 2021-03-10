<div align="center">
	<p align="center">
		<img src="https://github.com/persian-tools/react-persian-tools/raw/master/images/logo.png" width="200">
	</p>
  <h1 align="center">Vue persian tools</h1>
  <h2 align="center">[Work In Progress]</h2>
  <p align="center">Persian tools wrapper for vue.js</p>
	
![CI/CD](https://github.com/persian-tools/vue-persian-tools/actions/workflows/storybook.yml/badge.svg)
[![GitHub license](https://img.shields.io/github/license/persian-tools/vue-persian-tools)](https://github.com/persian-tools/vue-persian-tools/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg)](https://github.com/persian-tools/vue-persian-tools/compare) 
</div>



- - -

### Development

running tests

```
yarn test
```

development

```
yarn storybook
```

### `isPersian`

**props**

| name          | default value   |  description                                  |
| ------------- |:-------------   | :---------------------------------------------|
| text          | null            | `Text to be evaluated.`                       |       
| tag           | span            | `default vue slot html tag`                   |   

**scoped slots**

| scope          | return type     | 
| -------------  |:-------------  |
| isPersian      | boolean         |      

### Todos

**`modules`**

- [x] isPersian
- [ ] URLfix
- [ ] addOrdinalSuffix
- [ ] bill
- [ ] commas
- [ ] digits
- [ ] extractCardNumbers
- [ ] getBankNameFromCardNumber
- [ ] getPlaceByIranNationalId
- [ ] halfSpace
- [ ] nationalId
- [ ] numberToWords
- [ ] phoneNumber
- [ ] removeOrdinalSuffix
- [ ] sheba
- [ ] sortText
- [ ] toPersianChars
- [ ] verifyCardNumber
- [ ] wordsToNumber
- [ ] isArabic


## Contributing

Thank you for your interest in contributing! Please feel free to put up a PR for any issue or feature request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/persian-tools/vue-persian-tools/blob/master/LICENSE) file for details.

## Changelogs
- [changelog](https://github.com/persian-tools/vue-persian-tools/blob/master/CHANGELOG.md)
