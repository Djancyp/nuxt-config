# JSON CONFIG FOR NUXT 

This module allows you to have Node [config](https://www.npmjs.com/package/config) package into nuxtjs.
## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
npm i nuxt-json-config
```

## Usage

1- Create config folder and config json file on root dir.
```bash
$ mkdir config
$ vi config/default.json
```
2- Edit config as you wish
```python
{
  "server":{
    "host":"http://localhost:3000",
    "example":"/api/ex"
 }
}
```
3- Register module in nuxt.config.js
```python
  modules: [
    'nuxt-json-config'
  ],
```

4- yarn dev and start the project

in components, you can access all config by

```bash
this.$config
```

example:
```bash
mounted(){
  console.log(this.$config.server.host)
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)