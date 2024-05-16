'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      <script type="text/javascript" src="https://cdn.kustomerapp.com/card-js/latest/kustomer-card.min.js"></script>

      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
console.log("Hi this is a test")

const domContainer = document.getElementById('like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
