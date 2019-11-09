const superSet = {
    union: (...args) => {
        this.returnSet = new Set();
        this.errorList = [];
    
        // Validate that all parameters are either sets or supersets
        args.forEach((arg, key) => {
            if (!(arg instanceof Set)) {
                this.errorList.push([arg, key]);
            }
        });
    
        if (this.errorList.length > 0) {
            throw new Error(`${this.errorList.map(error => `arg[${error[1]}] ${error[0]} is not a valid type set or superset`).join(', ')}`);
        }
    
        args.forEach(arg => {
            arg.forEach(value => {
                this.returnSet.add(value);
            })
        });
    
        return new Set(this.returnSet);
    },
    
    toArray: (arg) => {
        if (!(arg instanceof Set)) {
            throw new Error('argument is not a valid type set');
        }
    
        this.setValues = arg.values();
        this.outputArray = [];
    
        for (let value of this.setValues) {
            this.outputArray.push(value);
        }
    
        return this.outputArray;
    }
}

module.exports = superSet;
