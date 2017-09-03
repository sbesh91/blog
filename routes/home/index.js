import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Home extends Component {	
	
	componentWillMount() {
		this.state = {
			cards: [
				{
					name: "twitter",
					href: "https://twitter.com/sbesh91",
					inPageLink: false
				},
				{
					name: "github",
					href: "https://www.github.com/sbesh91",
					inPageLink: false
				},
				{
					name: "linkedin",
					href: "https://www.linkedin.com/in/steven-beshensky-b211127a/",
					inPageLink: false
				},				
				// {
				// 	name: "blog",
				// 	href: "/blog",
				// 	inPageLink: true
				// }
			]
		};
	}

	render() {		
		return (
			<div class={style.home}>
				<section id="content" class={style.content}>
					{this.state.cards.map((i) => 						
							<div 
								id={i.name} 
								class={`${style.card}`}
								onClick={this.interact}>

								{i.inPageLink &&
									<Link 
										class={`${style.link } ${style[i.name]}`}
										href={i.href}></Link>
								}
								
								{!i.inPageLink &&
									<a
										rel="noopener"
										target="_blank"
										class={`${style.link } ${style[i.name]}`}
										href={i.href}></a>
								}									
							</div>
						)
					}
				</section>
			</div>
		);
	}
}
