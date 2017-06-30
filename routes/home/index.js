import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Home extends Component {	
	
	componentWillMount(){
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
				{
					name: "blog",
					href: "/blog",
					inPageLink: true
				}
			]
		};
	}

	componentDidMount(){		
		document.querySelector("body").classList.add(style["no-overflow"]);
		requestAnimationFrame(() => {			
			this.screenAnimation();
		});
	}

	screenAnimation(){
		let content = document.querySelector("#content");
		let overlay = document.querySelector("#overlay");

		content.classList.add(style['content']);
		overlay.classList.add(style['overlay']);

		content.addEventListener("animationend",
			(e) => {
				requestAnimationFrame(() => {
					for(const i of this.state.cards){
						document.querySelector(`#${i.name}`).classList.add(style['pop']);
					}

					document.querySelector("body").classList.remove(style["no-overflow"]);
				});
			}, false);

		overlay.addEventListener("animationend",
			(e) => {							
				
			}, false);
	}

	render() {		
		return (
			<div class={style.home}>				
				<header></header>
				<section id="content">
					{
						this.state.cards.map((i) => 						
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
										target="_blank"
										class={`${style.link } ${style[i.name]}`}
										href={i.href}></a>
								}									
							</div>
						)
					}
				</section>
				<section id="overlay"></section>
			</div>
		);
	}
}
