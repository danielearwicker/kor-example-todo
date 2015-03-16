var React = require('react');
var Komponent = require('kor-react').Komponent;
var TodoTextInput = require('./TodoTextInput.react');

class Header extends Komponent {

    renderKor() {

        return (
            <header id="header">
                <h1>todos</h1>
                <TodoTextInput
                    id="new-todo"
                    placeholder="What needs to be done?"
                    onSave={ text => this.props.store.create(text) }
                />
            </header>
        );
    }
}

module.exports = Header;
