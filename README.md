<div align="center">
	<p align="center">
		<img src="https://github.com/persian-tools/react-persian-tools/raw/master/images/logo.png" width="200">
	</p>
  <h1 align="center">Vue persian tools</h1>
  <h2 align="center">[Work In Progress]</h2>
  <p align="center">Persian tools wrapper for vue.js</p>
	
![CI/CD](https://github.com/persian-tools/vue-persian-tools/actions/workflows/storybook.yml/badge.svg)
![CI/CD](https://github.com/persian-tools/vue-persian-tools/actions/workflows/continuous-integration.yml/badge.svg)
![codecov](https://codecov.io/gh/persian-tools/vue-persian-tools/branch/master/graph/badge.svg)
[![GitHub license](https://img.shields.io/github/license/persian-tools/vue-persian-tools)](https://github.com/persian-tools/vue-persian-tools/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg)](https://github.com/persian-tools/vue-persian-tools/compare) 
[![CodeFactor](https://www.codefactor.io/repository/github/persian-tools/vue-persian-tools/badge)](https://www.codefactor.io/repository/github/persian-tools/vue-persian-tools)
[![Maintainability](https://api.codeclimate.com/v1/badges/b03e0adbfad2fea89faf/maintainability)](https://codeclimate.com/github/persian-tools/vue-persian-tools/maintainability)
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

---
<br />

### `tag prop`
every component accept a `tag` prop. you can use it to customize component html tag. default is `span`
```js
<is-persian tag="div"></is-persian>
```


### `isPersian`

**props**

| name            | type            |  description                                  | default value |
| -------------   |:-------------   | :---------------------------------------------| :-----------  |
| text `required` | string          | `Text to be evaluated.`                       |  null         |       
| trimPattern     | RegExp          | `characters which you want to trim from the string.` |  `/["'-+()؟\s.]/g`         | 

**slots**

| scope          | return type     | 
| -------------  |:-------------  |
| isPersian      | boolean         |      


---

### `URLfix`

**props**

| name            | type            |  description                                  | default value |
| -------------   |:-------------   | :---------------------------------------------| :-----------  |
| url `required` | string           | `url that need to be fixed`                   |  null         |        

**slots**

| scope          | return type     | 
| -------------  |:-------------  |
| url            | string         |   


---

### `hasPersian`

**props**

| name            | type            |  description                                  | default value |
| -------------   |:-------------   | :---------------------------------------------| :-----------  |
| str `required` | string           | `Check if string includes persian alphabet.`  |  null         |        

**slots**

| scope          | return type     | 
| -------------  |:-------------  |
| hasPersian     | boolean         |   

### Todos

**`modules`**

- [x] isPersian
- [x] URLfix
- [x] hasPersian
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
