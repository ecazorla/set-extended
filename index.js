class SuperSet extends Set {
    constructor(set) {
        super(set);
    }

    get cardinal () {
        let cardinalCount = 0;
        this.forEach(() => {cardinalCount++})
        return cardinalCount;
    }
}

const fn = {
    checkAllSet: (args) => {
        // Validate that all parameters are either sets or supersets
        // returns an array with the incorrect parameters
        return args.filter(arg => !(arg instanceof Set)).map((arg, key) => [arg, key]);
    }
}

const superSet = {
    union: (...args) => {
        this.returnSet = new Set();
        this.errorList = [];
        this.errorList = this.errorList.concat(fn.checkAllSet(args));
    
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
    },

    of: (arg) => {
        return new SuperSet(arg);
    }
}

module.exports = superSet;
