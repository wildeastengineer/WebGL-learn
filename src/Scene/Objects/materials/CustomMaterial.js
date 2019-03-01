class CustomMaterial {
    constructor(
        {
            logger,
            urlHelper
        }
    ) {
        this.logger = logger;
        this.urlHelper = urlHelper;
        this.animateWarningShown = false;
    }

    animate() {
        if (!this.animateWarningShown) {
            this.logger.warn('Method "animate" is not implemented.');
            this.animateWarningShown = true;
        }
    }

    getThreeInstance() {
        throw new Error('Method "getThreeInstance" is not implemented.')
    }
}

export default CustomMaterial;
