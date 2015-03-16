var kor = require('kor');

var nextId = 1;

class TodoStore {

    constructor() {

        this.all = kor.observableArray();

        this.completed = kor.pureComputed(
            () => this.all().filter(i => i.complete())
        ).extend({ throttle: 0 });
    }

    create(text) {
        text = text.trim();
        if (!text) {
            return;
        }
        var item = {
            id: nextId++,
            complete: kor.observable(false),
            text: kor.observable(text),
            destroy: () => this.all.remove(item)
        };
        this.all.push(item);
    }

    toggleCompleteAll() {
        var newState = this.all().length !== this.completed().length;
        this.all().forEach(item => item.complete(newState));
    }

    destroyCompleted() {
        this.all(this.all().filter(item => !item.complete()));
    }
}

module.exports = TodoStore;
