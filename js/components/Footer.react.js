var React = require('react');
var Komponent = require('kor-react').Komponent;

class Footer extends Komponent {

    renderKor() {

        var store = this.props.store;
        var total = store.all().length;
        if (total === 0) {
            return null;
        }
        var completed = store.completed().length;

        var itemsLeft = total - completed;
        var itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
        itemsLeftPhrase += 'left';

        var clearCompletedButton = !completed ? null :
            <button
              id="clear-completed"
              onClick={ () => store.destroyCompleted() }>
              Clear completed ({ completed })
            </button>;

      	return (
          <footer id="footer">
            <span id="todo-count">
              <strong>
                {itemsLeft}
              </strong>
              {itemsLeftPhrase}
            </span>
            {clearCompletedButton}
          </footer>
        );
    }
}

module.exports = Footer;
