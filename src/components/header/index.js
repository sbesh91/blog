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
			height: 100
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
	
		let width = this.state.width;		
		let offsetWidth = this.state.offsetWidth;
		let count = 0;					

		while(width > 0){	
			let total = Math.floor(this.state.width / (offsetWidth * 2));
			let isLast = count == total;			
			let offsetx = offsetWidth * 2 * count;			

			ctx.beginPath();
			ctx.moveTo(0 + offsetx,0);
			ctx.lineTo(offsetWidth * 2 + offsetx,0);
			ctx.lineTo(offsetWidth + offsetx,50);
			ctx.fillStyle =`hsl(198, 100%, ${isLast ? "80%" : "80%"})`;
			ctx.strokeStyle = "#212121";
			ctx.fill();

			ctx.beginPath();
			ctx.moveTo(0 + offsetx,0);
			ctx.lineTo(offsetWidth + offsetx,50);
			ctx.lineTo(0 + offsetx,100);
			ctx.fillStyle =`hsl(198, 100%, ${isLast ? "50%" : "70%"})`;
			ctx.strokeStyle = "#212121";
			ctx.fill();

			ctx.beginPath();
			ctx.moveTo(0 + offsetx,100);
			ctx.lineTo(offsetWidth + offsetx,50);
			ctx.lineTo(offsetWidth * 2 + offsetx,100);
			ctx.fillStyle =`hsl(198, 100%, ${isLast ? "60%" : "60%"})`;
			ctx.strokeStyle = "#212121";
			ctx.fill();		

			ctx.beginPath();
			ctx.moveTo(offsetWidth + offsetx,50);
			ctx.lineTo(offsetWidth * 2 + offsetx,0);
			ctx.lineTo(offsetWidth * 2 + offsetx,100);
			ctx.fillStyle =`hsl(198, 100%, ${isLast ? "70%" : "50%"})`;
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
