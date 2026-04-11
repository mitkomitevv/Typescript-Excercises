export function ApplyInsurance(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.get;

    if (!originalMethod) {
        throw new Error(`ApplyInsurance can only be applied to getters`)
    }

    descriptor.get = function() {
        const originalBaseRentalPrice = originalMethod?.call(this);

        if (originalBaseRentalPrice === undefined) {
            return undefined;
        }

        return Number((originalBaseRentalPrice * 1.12).toFixed(2));
    }

    return descriptor;
}