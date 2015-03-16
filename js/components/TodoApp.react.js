var React = require('react');
var Komponent = require('kor-react').Komponent;
var Footer = require('./Footer.react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');

class TodoApp extends Komponent {

    renderKor() {

	    return (
            <div>
                <Header store={this.props.store} />
                <MainSection store={this.props.store} />
                <Footer store={this.props.store} />
            </div>
	    );
    }
}

module.exports = TodoApp;
