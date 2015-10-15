# T-Validator module for Microframework

Adds integration between [t-validator](http://github.com/PLEEROCK/t-validator) and 
[microframework](https://github.com/PLEEROCK/microframework).

## Usage

1. Install module:

    `npm install --save microframework-t-validator`

2. Simply register module in the microframework when you are bootstrapping it.
    
    ```typescript
    
        import {MicroFrameworkBootstrapper} from "microframework/MicroFrameworkBootstrapper";
        import {TValidatorModule} from "microframework-t-validator/TValidatorModule";
        
        new MicroFrameworkBootstrapper({ baseDirectory: __dirname })
            .registerModules([
                new TValidatorModule()
            ])
            .bootstrap()
            .then(result => console.log('Module is running. Validation is available now.'))
            .catch(error => console.error('Error: ', error));
            
    ```

3. Now you can use [t-validator](http://github.com/PLEEROCK/t-validator) module in your microframework.

## Todos

* cover with tests
* add more docs