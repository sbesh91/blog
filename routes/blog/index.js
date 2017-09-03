import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Blog extends Component {

  componentWillMount() {
    this.state = {
      posts: [
        {
          "title":"Let's talk about Flexbox",
          "url":"/blog/flex",
          "date":"February 4th 2016",
          "primaryColor":"#3e50b4",
          "secondaryColor":"#303F9F",        
          "background": "background:radial-gradient(circle at center, #fff, #fff 90%, #3e50b4 100%);",
          "image":"",
          "desc":"Adventures in tomorrow's layout engine today."
        }
      ]
    };
  }
  
  render(){
    return (
      <div class={style.blog}>
        {this.state.posts.map((i) =>
          <Link 
            href={i.url}
            class={style.card}
            style={i.background}>
            <h3>
              {i.title}
            </h3>
          </Link>
        )}
      </div>
    );
  }
}