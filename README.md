# Validator.ts module for Microframework

Adds integration between [validator.ts](http://github.com/PLEEROCK/validator.ts) and 
[microframework](https://github.com/PLEEROCK/microframework).

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

3. Now you can use [validator.ts](http://github.com/PLEEROCK/validator.ts) module in your microframework.

## Todos

* cover with tests
* add more docs