import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	constructor(){
		super();
		
		this.state = {
			deg: this.getDegrees(),
			seedColor: this.getColor(),
			blendColor: this.getColor()
		};

		this.setRepeat();
	}

	setRepeat(){
		setInterval(()=> {
			this.setState({
				deg: this.getDegrees(),
				seedColor: this.getColor(),
				blendColor: this.getColor()
			});

			console.log("update colors");
		},2000)
	}

	getRandomNumber(min,max){
		return Math.floor(Math.random() * max) + min;
	}

	getDegrees(){
		return this.getRandomNumber(1,180);
	}

	getColor(){
		const colors = [
			"f44336",
			"e91e63",
			"9c27b0",
			"673ab7",
			"3f51b5",
			"2196f3",
			"03a9f4",
			"00bcd4",
			"009688",
			"4caf50", 
			"8bc34a",
			"cddc39",
			"ffeb3b",
			"ffc107",
			"ff9800",
			"ff5722"
		];

		return colors[this.getRandomNumber(0,colors.length)];
	}

	render() {
		return (
			<div class={style.home}>
				<button 
					style={{
						background: `linear-gradient(
							${this.state.deg}deg,
							#${this.state.seedColor},
							#${this.state.blendColor})`
					}}
					class={style.btn}>test</button>			
			</div>
		);
	}
}
