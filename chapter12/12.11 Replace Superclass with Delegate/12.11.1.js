class CatalogItem {
    constructor(id, title, tags) {
        this._id = id;
        this._title = title;
        this._tags = tags;
    }

    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    hasTag(arg) {
        return this._tags.include(arg);
    }
}

class Scroll {
    constructor(id, title, tags, dateLastCleaned) {
        this._catalogItem = new CatalogItem(id, title, tags);
        this._lastCleaned = dateLastCleaned;
    }

    get id() {
        return this._catalogItem._id;
    }
    get title() {
        return this._catalogItem._title;
    }
    hasTag(aString) {
        return this._catalogItem.hasTag(aString);
    }

    needsCleaning(targetDate) {
        const threshold = this.hasTag('reserved') ? 700 : 1500;
        return this.daysSinceLastCleaning(targetDate) > threshold;
    }

    daysSinceLastCleaning(targetDate) {
        return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
    }
}
