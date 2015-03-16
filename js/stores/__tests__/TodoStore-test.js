/*
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoStore-test
 */

jest.dontMock('../TodoStore');

var TodoStore = require('../TodoStore');

describe('TodoStore', function() {

    var todoStore;
    var callback;

    // mock actions
    // var actionTodoCreate = {
    //   actionType: TodoConstants.TODO_CREATE,
    //   text: 'foo'
    // };
    // var actionTodoDestroy = {
    //   actionType: TodoConstants.TODO_DESTROY,
    //   id: 'replace me in test'
    // };

    beforeEach(function() {
        todoStore = new TodoStore();
    });

    it('should initialize with no to-do items', function() {
        var all = todoStore.all();
        expect(all).toEqual([]);
    });

    it('creates a to-do item', function() {
        todoStore.create("foo");
        var all = todoStore.all();
        expect(all.length).toBe(1);
        expect(all[0].text()).toEqual('foo');
    });

    it('destroys a to-do item', function() {
        todoStore.create("foo");
        expect(todoStore.all().length).toBe(1);
        todoStore.all()[0].destroy();
        expect(todoStore.all().length).toBe(0);
    });

    it('can determine how many items are complete', function() {
        for (var i = 0; i < 3; i++) {
            todoStore.create("foo");
        }
        expect(todoStore.all().length).toBe(3);
        expect(todoStore.complete().length).toBe(0);

        todoStore.all()[0].complete(true);
        expect(todoStore.complete().length).toBe(1);

        todoStore.all()[1].complete(true);
        expect(todoStore.complete().length).toBe(2);

        todoStore.all()[2].complete(true);
        expect(todoStore.complete().length).toBe(3);

        todoStore.all()[1].complete(false);
        expect(todoStore.complete().length).toBe(2);
    });

});
