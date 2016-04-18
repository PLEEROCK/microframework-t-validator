import {Module, ModuleInitOptions} from "microframework/Module";
import {Validator} from "class-validator/Validator";

/**
 * class-validator module integration with microframework.
 */
export class ClassValidatorModule implements Module {

    // -------------------------------------------------------------------------
    // Properties
    // -------------------------------------------------------------------------

    private options: ModuleInitOptions;

    // -------------------------------------------------------------------------
    // Implemented Methods
    // -------------------------------------------------------------------------

    getName(): string {
        return "ClassValidatorModule";
    }

    init(options: ModuleInitOptions): void {
        this.options = options;
    }

    onBootstrap(dependentModules?: Module[]): Promise<any> {
        this.setupContainers();
        return Promise.resolve();
    }

    onShutdown(): Promise<any> {
        return Promise.resolve();
    }

    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------

    private setupContainers() {
        const validator: Validator = this.options.container.get(Validator);
        validator.container = this.options.container;
    }

}