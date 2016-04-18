# class-validator module for Microframework

Adds integration between [class-validator](http://github.com/pleerock/class-validator) and
[microframework](https://github.com/pleerock/microframework).

## Usage

1. Install module:

    `npm install --save microframework-class-validator`

2. Simply register module in the microframework when you are bootstrapping it.
    
    ```typescript
    
        import {MicroFrameworkBootstrapper} from "microframework/MicroFrameworkBootstrapper";
        import {ClassValidatorModule} from "microframework-class-validator/ClassValidatorModule";
        
        new MicroFrameworkBootstrapper({ baseDirectory: __dirname })
            .registerModules([
                new ClassValidatorModule()
            ])
            .bootstrap()
            .then(result => console.log('Module is running. Validation is available now.'))
            .catch(error => console.error('Error: ', error));
    ```

3. ES6 features are used, so you may want to install [es6-shim](https://github.com/paulmillr/es6-shim) too:

    `npm install es6-shim --save`

    you may need to `require("es6-shim");` in your app.

4. Now you can use [class-validator](http://github.com/pleerock/class-validator) module in your microframework.

## Todos

* cover with tests
* add more docs