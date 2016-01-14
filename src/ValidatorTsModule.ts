import {Module, ModuleInitOptions} from "microframework/Module";
import {Validator} from "validator.ts/Validator";

/**
 * Validator.ts module integration with microframework.
 */
export class ValidatorTsModule implements Module {

    // -------------------------------------------------------------------------
    // Properties
    // -------------------------------------------------------------------------

    private options: ModuleInitOptions;

    // -------------------------------------------------------------------------
    // Implemented Methods
    // -------------------------------------------------------------------------

    getName(): string {
        return 'ValidatorTsModule';
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