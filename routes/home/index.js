import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	constructor(){
		super();
	}
	componentDidMount(){
		requestAnimationFrame(()=>this.generate())		
	}
	generate(){
		let myCanvas = document.querySelector("canvas")
		let ctx = myCanvas.getContext("2d");

		let magnificationFactor = 1600;
		let panX = -0.05;
		let panY = 0;
		for(let x=0; x < myCanvas.width; x++) {
			for(let y=0; y < myCanvas.height; y++) {
				let belongsToSet = this.checkIfBelongsToMandelbrotSet(x/magnificationFactor - panX, y/magnificationFactor - panY);
				if(belongsToSet == 0) {
					ctx.fillStyle = 'rgba(0,0,0,0)';
					ctx.fillRect(x,y, 1,1); // Draw a black pixel
				} else {
					ctx.fillStyle = 'hsl(151, 100%, ' + belongsToSet + '%)';
					ctx.fillRect(x,y, 1,1); // Draw a colorful pixel
				}
			} 
		}
	}
	checkIfBelongsToMandelbrotSet(x, y){
		let realComponentOfResult = x;
		let imaginaryComponentOfResult = y;
		let maxIterations = 20;
		for(let i = 0; i < maxIterations; i++) {
			let tempRealComponent = realComponentOfResult * realComponentOfResult
									- imaginaryComponentOfResult * imaginaryComponentOfResult
									+ x;
			let tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult
									+ y;
			realComponentOfResult = tempRealComponent;
			imaginaryComponentOfResult = tempImaginaryComponent;

			// Return a number as a percentage
			if(realComponentOfResult * imaginaryComponentOfResult > 5){
				return (i/maxIterations * 100);
			}
		}
		return 0;   // Return zero if in set        
	}
	render() {
		return (
			<div class={style.home}>
				<canvas height="1000" width="600"></canvas>
			</div>
		);
	}
}
