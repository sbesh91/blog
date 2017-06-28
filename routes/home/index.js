import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
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

	interact(e){
		if(e.target.id != "blog"){
			return;
		}

		document.querySelector("#blog_body").classList.add(style['blog']);		
		//todo fill the screen below the header and scroll the page
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
								class={style.card}
								onClick={this.interact}>
									{/*<Link 
										activeClassName={style.active} 
										href="/blog"
										onClick={this.interact}>blog</Link>*/}
								</div>
						)
					}
				</section>
				<section id="overlay"></section>  				
				<section id="blog_body"></section>
			</div>
		);
	}
}
