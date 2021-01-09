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

### ⌨️

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

```

```

```

```
