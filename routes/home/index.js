import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {	
	
	componentWillMount(){
		this.state = {
			cards: [
				{
					name: "one"					
				},
				{
					name: "two"
				},
				{
					name: "three"
				}
			]
		};
	}

	componentDidMount(){		
		for(const i of this.state.cards){
			document.querySelector(`#${i.name}`).classList.add(style[i.name]);
		}
	}

	render() {		
		return (
			<div class={style.home}>
				{
					this.state.cards.map((i) => 						
						<div 
							id={i.name} 
							class={style.card}></div>
					)
				}
			</div>
		);
	}
}
