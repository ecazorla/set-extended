class SuperSet extends Set {
    constructor(set) {
        super(set);
    }

    get cardinal () {
        let cardinalCount = 0;
        this.forEach(() => {cardinalCount++});
        return cardinalCount;
    }

    complement(arg) {
        if (!fn.isSetOrSuperSet(arg)) {
            throw new Error(`${arg} is not a valid type set or superset`);
        }

        let returnSet = new SuperSet();
        this.forEach(value => {
            if (!arg.has(value)) {
                returnSet.add(value);
            }
        });

        return returnSet;
    }

    subsetOf(arg) {
        if (!fn.isSetOrSuperSet(arg)) {
            throw new Error(`${arg} is not a valid type set or superset`);
        }

        let isSubset = true;
        this.forEach(value => {
            if (!arg.has(value)) {
                isSubset = false;
            }
        });

        return isSubset;
    }

    equals(arg) {
        return this.subsetOf(arg) && arg.subsetOf(this);
    }
}

const fn = {
    isSet: (arg) => {
        return arg instanceof Set
    },
    isSuperSet: (arg) => {
        return arg instanceof SuperSet
    },
    isSetOrSuperSet: (arg) => {
        return fn.isSet(arg) || fn.isSuperSet(arg);
    },
    checkAllSet: (args) => {
        // Validate that all parameters are either sets or supersets
        // returns an array with the incorrect parameters
        return args.filter(arg => !fn.isSetOrSuperSet(arg)).map((arg, key) => [arg, key]);
    }
}

const superSet = {
    union: (...args) => {
        this.returnSet = new SuperSet();
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

        return this.returnSet;
    },

    intersection: (...args) => {
        this.returnSet = new SuperSet();
        this.errorList = [];
        this.errorList = this.errorList.concat(fn.checkAllSet(args));

        if (this.errorList.length > 0) {
            throw new Error(`${this.errorList.map(error => `arg[${error[1]}] ${error[0]} is not a valid type set or superset`).join(', ')}`);
        }

        if (args[0]) {
            args[0].forEach(value => {
                let valueIsInAllSets = true;
                for (let index = 1; index < args.length; index++) {
                    if (!args[index].has(value)) {
                        valueIsInAllSets = false;
                    }
                }

                if (valueIsInAllSets) {
                    this.returnSet.add(value)
                }
            })
        }

        return this.returnSet;
    },

    cartisianProduct: (...args) => {
        this.setA = args[0];
        this.setB = args[1];
        this.returnSet = new SuperSet();

        this.setA.forEach(setAvalue => {
            this.setB.forEach(setBvalue => {
                this.returnSet.add([setAvalue, setBvalue]);
            });
        });

        return this.returnSet
    },

    toArray: (arg) => {
        if (!fn.isSetOrSuperSet(arg)) {
            throw new Error('argument is not a valid type set or superset');
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
