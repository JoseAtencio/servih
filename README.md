# jooscode

## My first contribution, simple https service provider to optimize works.

### Pre requirements 📋

- [Vue.js](https://vuejs.org/)

### Install 🔧

```
npm i servih
```

_or_

```
yarn add servih
```

### Example⌨️

_create a .env.js file, at the root of the project_

```
module.exports = "https://jsonplaceholder.typicode.com";

```

_in main.js add servihOptions._

```
import {servihOptions} from 'servih'

servihOptions('token');

```

_in your component, or store use. Has support (get, post, put, delete)_

```
import {serviHttp} from 'servih'

export default {

   mounted() {
       this.test();
   },

    methods:{
        test:function(){
             serviHttp('posts', 'post', {name:'josedaniel'}).then(response=>{
                console.log(response);
                }).catch(errors=>{
                console.log(errors);
            });
        }
    }

}
```

## Built with 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
