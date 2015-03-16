var React = require('react');
var Komponent = require('kor-react').Komponent;
var TodoItem = require('./TodoItem.react');

class MainSection extends Komponent {

    renderKor() {

        var store = this.props.store;
        var all = store.all();

        return all.length < 0 ? null : (
            <section id="main">
                <input id="toggle-all"
                    type="checkbox"
                    onChange={ () => store.toggleCompleteAll() }
                    checked={
                        store.completed().length ===
                        all.length ? 'checked' : ''
                    }
                />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul id="todo-list">{
                    all.map(item => <TodoItem key={item.id} todo={item} />)
                }</ul>
            </section>
        );
    }

}

module.exports = MainSection;
