# Validator.ts module for Microframework

Adds integration between [validator.ts](http://github.com/pleerock/validator.ts) and
[microframework](https://github.com/pleerock/microframework).

## Usage

1. Install module:

    `npm install --save microframework-validator.ts`

2. Simply register module in the microframework when you are bootstrapping it.
    
    ```typescript
    
        import {MicroFrameworkBootstrapper} from "microframework/MicroFrameworkBootstrapper";
        import {ValidatorTsModule} from "microframework-validator.ts/ValidatorTsModule";
        
        new MicroFrameworkBootstrapper({ baseDirectory: __dirname })
            .registerModules([
                new ValidatorTsModule()
            ])
            .bootstrap()
            .then(result => console.log('Module is running. Validation is available now.'))
            .catch(error => console.error('Error: ', error));
    ```

3. ES6 features are used, so you may want to install [es6-shim](https://github.com/paulmillr/es6-shim) too:

    `npm install es6-shim --save`

    you may need to `require("es6-shim");` in your app.

4. Now you can use [validator.ts](http://github.com/pleerock/validator.ts) module in your microframework.

## Todos

* cover with tests
* add more docs