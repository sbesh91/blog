import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Header extends Component {
	constructor(){
		super();	
		let that = this;
		let width = document.body.clientWidth;			
		this.state = {
			width: width,
			offsetWidth: width / this.getSize(width),
			height: 50
		};	
	}
	componentDidMount(){		
		this.build();
	}		
	getSize(width){
		if(width > 1200){
			return 36;
		}
		if(width > 1000){
			return 28;
		}
		if(width > 800){
			return 24;
		}
		if(width > 600){
			return 20;
		}
		if(width > 400){
			return 16;
		}
	}	
	build(){		
		let canvas = document.getElementById('canvas');		
		let ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	
		let width = this.state.width;		
		let height = 25;
		let offsetWidth = this.state.offsetWidth;
		let count = 0;					

		while(width > 0){	
			let total = Math.floor(this.state.width / (offsetWidth * 2));
			let isLast = count == total;			
			let offsetx = offsetWidth * 2 * count;			
			
			ctx.beginPath();
			ctx.moveTo(0 + offsetx,0);
			ctx.lineTo(offsetWidth * 2 + offsetx,0);
			ctx.lineTo(offsetWidth + offsetx, height);
			ctx.fillStyle =`hsl(198, 100%, 80%)`;
			ctx.strokeStyle = "#212121";
			ctx.fill();

			ctx.beginPath();
			ctx.moveTo(0 + offsetx,0);
			ctx.lineTo(offsetWidth + offsetx, height);
			ctx.lineTo(0 + offsetx, height * 2);
			ctx.fillStyle =`hsl(198, 100%, 70%)`;
			ctx.strokeStyle = "#212121";
			ctx.fill();

			ctx.beginPath();
			ctx.moveTo(0 + offsetx, height * 2);
			ctx.lineTo(offsetWidth + offsetx, height);
			ctx.lineTo(offsetWidth * 2 + offsetx, height * 2);
			ctx.fillStyle =`hsl(198, 100%, 60%)`;
			ctx.strokeStyle = "#212121";
			ctx.fill();		

			ctx.beginPath();
			ctx.moveTo(offsetWidth + offsetx, height);
			ctx.lineTo(offsetWidth * 2 + offsetx,0);
			ctx.lineTo(offsetWidth * 2 + offsetx, height * 2);
			ctx.fillStyle =`hsl(198, 100%, 50%)`;
			ctx.strokeStyle = "#212121";
			ctx.fill();		

			width -= offsetWidth*2;
			count++;
		}
	}

	render() {
		return (
			<header class={style.header}>
				<canvas
					id="canvas"
					height={this.state.height}
					width={this.state.width}
				></canvas>				
			</header>
		);
	}
}
