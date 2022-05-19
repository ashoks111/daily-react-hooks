import { useEffect, useRef } from "react";
import { Shapes } from "../Utils/Shapes";
import { AudioData } from "../Utils/AudioData";

const AudioVisualizer = (props: any) => {
    const canvas = useRef<any>(null);
    const { audioBufferData } = props;

    const draw = () => {
        const canvasEl = canvas.current;
        if(canvasEl && audioBufferData) {
            const options = {
                count: 32,
                frequencyBand: "highs",
                lineColor: "#14ECD8",
                lineWidth: 2,
            }
            const {width, height} = canvasEl;
            const shapes = new Shapes(canvasEl.getContext('2d'));
            const audioData = new AudioData(audioBufferData)
            if (options.frequencyBand) audioData.setFrequencyBand(options.frequencyBand);
            audioData.scaleData(Math.min(width, height));
            canvasEl.getContext('2d').clearRect(0, 0, width, height);
            canvasEl.getContext('2d').fillStyle = "#000000";
           for (let i = 1; i <= options.count; i++) {
            let dataIndex = Math.floor(audioData.data.length / options.count) * i;
            let dataValue = audioData.data[dataIndex];

            let fromX = (width / options.count) * i;
            let fromY = height / 2;
            let toX = fromX;
            let toY = fromY - dataValue;

            shapes.line(fromX, fromY, toX, toY, options);

            fromX = (width / options.count) * i;
            fromY = height / 2;
            toX = fromX;
            toY = fromY + dataValue;

                shapes.line(fromX, fromY, toX, toY, options);
            }
        }
    }
    

    // const draw1 = () => {
    //     const canvasEl = canvas.current;
    //     if(canvasEl && audioData) {
    //         console.log("audioData", audioData, audioData.length);
    //         const height = canvasEl.height;
    //         const width = canvasEl.width;
    //         const context = canvasEl.getContext('2d');
    //         let x = 0;
    //         const sliceWidth = (width * 1.0) / audioData.length;
    //         console.log("sliceWidth", sliceWidth);
    
    //         context.lineWidth = 2;
    //         context.strokeStyle = '#14ECD8';
    //         context.clearRect(0, 0, width, height);
    
    //         context.beginPath();
    //         //context.rect
    //         context.moveTo(0, height / 2);
    //         for (const item of audioData) {
    //         const y = (item / 255.0) * height;
    //         context.lineTo(x, y);
    //         x += sliceWidth;
    //         }
    //         context.lineTo(x, height / 2);
    //         context.stroke();
    //     }
    // }

    useEffect(() => {
        
       const interval =  setInterval(() => {
            draw();
        }, 100)

        return(() => {

            if(interval) {
                clearInterval(interval)
            }
           
        })
        
    }, [audioBufferData])

    

    return <canvas width="300" height="150" ref={canvas} />;
}
export default AudioVisualizer;