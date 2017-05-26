import { h, Component } from 'preact';
import './style';

//todo find some way to async this
export default class Fractal extends Component {    
    componentDidMount(){
		requestAnimationFrame(()=>this.generate());
	}
	generate(){
		let c = document.querySelector("canvas")
		let ctx = c.getContext("2d");

		let magFactor = 1600;
		let panX = -0.05;
		let panY = 0;
		for(let x=0; x < c.width; x++) {
			for(let y=0; y < c.height; y++) {
				let belongsToSet = this.checkBelongsToSet(x/magFactor - panX, y/magFactor - panY);
				if(belongsToSet == 0) {
					ctx.fillStyle = 'rgba(0,0,0,0)';
					ctx.fillRect(x,y, 1,1); // Draw a black pixel
				} else {
					ctx.fillStyle = 'hsl(151, 100%, ' + belongsToSet + '%)';
					ctx.fillRect(x,y, 1,1); // Draw a colorful pixel
				}
			} 
		}

		console.log("render complete");
	}
	checkBelongsToSet(x, y){
		let real = x;
		let imageinary = y;
		let max = 20;
		for(let i = 0; i < max; i++) {
			let tempReal = real * real
									- imageinary * imageinary
									+ x;
			let tempImaginary = 2 * real * imageinary
									+ y;
			real = tempReal;
			imageinary = tempImaginary;

			// Return a number as a percentage
			if(real * imageinary > 5){
				return (i/max * 100);
			}
		}
		return 0;   // Return zero if in set        
	}
	render() {
		return (
            <canvas height="1000" width="600"></canvas>			
		);
	}
}