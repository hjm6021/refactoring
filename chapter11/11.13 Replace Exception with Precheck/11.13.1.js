class ResourcePool {
    constructor() {
        this.available = [];
        this.allocated = [];
    }
    get resource() {
        this.available.length === 0 ? (result = new Resource()) : (result = available.pop());
        this.allocated.push(result);
    }
}
