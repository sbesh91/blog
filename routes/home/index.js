import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {	
	
	componentWillMount(){
		this.state = {
			cards: [
				{
					name: "twitter"					
				},
				{
					name: "linkdin"
				},
				{
					name: "github"
				},
				{
					name: "blog"
				}
			]
		};
	}

	componentDidMount(){		
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
								class={style.card}></div>
						)
					}
				</section>
				<section id="overlay"></section>  				
			</div>
		);
	}
}
