var React = require('react');
var Komponent = require('kor-react').Komponent;
var TodoTextInput = require('./TodoTextInput.react');
var kor = require('kor');

var cx = require('react/lib/cx');

class TodoItem extends Komponent {

    constructor() {
        this.isEditing = kor.observable(false);
    }

    renderKor() {
        var todo = this.props.todo;

        var input;
        if (this.isEditing()) {
            input =
                <TodoTextInput
                    className="edit"
                    onSave={
                        text => {
                            this.props.todo.text(text);
                            this.isEditing(false);
                        }
                    }
                    value={ todo.text() }
                />;
        }

        return (
            <li className={cx({
                    'completed': todo.complete(),
                    'editing': this.isEditing()
                })}
                key={todo.id}>
                <div className="view">
                    <input className="toggle"
                            type="checkbox"
                            checked={ todo.complete() }
                            onChange={ () => todo.complete(!todo.complete()) }
                    />
                    <label onDoubleClick={ () => this.isEditing(true) }>
                        {todo.text()}
                    </label>
                    <button className="destroy"
                            onClick={ () => todo.destroy() }
                    />
                </div>
                {input}
            </li>
        );
    }
}

module.exports = TodoItem;
