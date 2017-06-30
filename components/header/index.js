import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>
					<Link 
						class={`${style.link}`}
						href="/">
						For The Web	
					</Link>
				</h1>
			</header>
		);
	}
}
