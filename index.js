class SuperSet extends Set {
    toArray() {
        const setValues = this.values();
        let outputArray = [];

        for (let value of setValues) {
            outputArray.push(value);
        }

        return outputArray;
    }

    union(addingSet) {
        const initialSet = new Set(this);
        if (addingSet instanceof SuperSet) {
            addingSet.forEach(value => {
                initialSet.add(value);
            });

            return new SuperSet(initialSet);
        } else {
            throw new Error('the adding object is not type SuperSet');
        }
    }
}

const a = new SuperSet([1,2,3]);
const b = new SuperSet([3,4,5]);

const c = a.union(b);
console.log(a);
console.log(b);
console.log(c);

