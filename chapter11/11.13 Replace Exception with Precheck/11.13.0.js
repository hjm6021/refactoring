class ResourcePool {
    constructor() {
        this.available = [];
        this.allocated = [];
    }
    get resource() {
        try {
            result = available.pop();
            this.allocated.push(result);
        } catch (e) {
            if (e instanceof NoSuchElementException) {
                result = new Resource();
                this.allocated.push(result);
            }
        }
    }
}
