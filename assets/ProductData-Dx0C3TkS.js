function r(o) {
    if (o.ok)
        return o.json();
    throw new Error("Bad Response")
}
class a {
    constructor(t) {
        this.category = t,
        this.path = `../json/${this.category}.json`
    }
    getData() {
        return fetch(this.path).then(r).then(t => t)
    }
    async findProductById(t) {
        return (await this.getData()).find(n => n.Id === t)
    }
}
export {a as P};
