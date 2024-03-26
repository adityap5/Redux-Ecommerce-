import App from '../App';
import { useRef } from "react";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react";

function Home() {
//     let d = new Date()
// const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// let day = weekday[d.getDay()];


const container = useRef();

useGSAP(() => {
    let tl = gsap.timeline()
  tl.from(".box", 
  {y:100,
    stagger : 0.4,
     opacity :0

}); 
}, { scope: container })
  return (
   <>
   
   <div className="h-screen bg-black text-white"> 
    <div ref={container}  className="app hero flex justify-between items-center p-14">
        <div className="left w-[56rem]">
            <img
            className='h-[36rem] w-full rounded-lg relative'
             src="https://graphicdesignjunction.com/wp-content/uploads/2021/07/korgen-font.jpg" alt="img" />
             <div className="absolute top-44 left-44 font-dance text-6xl">
             {/* <h3 >Black {day} Sale!</h3>
             <p>One place to Buy  all your {day} Needs.</p> */}
             </div>
        </div>
        <div className="right w-[30rem] grid gap-8">
            <div ref={container} className="app">
                <img 
                 className='h-[17rem] w-[30rem] '
                src="rtop.jpg" alt="" />
                <h3 className="box absolute uppercase top-[170px] text-6xl right-[100px]   font-bebas tracking-[1rem] text-white">night lotus</h3>
                <p className="box absolute uppercase top-[240px] text-4xl right-[100px] font-korgen tracking-wider text-[#ffecd1]">PERFUME</p>
            </div>
            <div>
            <img 
            className='h-56 w-48'
            src="watch.png" alt="" />
            <div className='absolute top-[480px] right-[30px] text-white text-4xl uppercase'>
            <h3 className='box text-6xl font-korgen font-medium'>luxry <br /> </h3>
            <h3 className='box text-5xl px-12'>watches</h3>
            <p className='box text-xl text-gray-500 line-clamp-2'>starting in the <br />swiss mountain</p>
            </div>
            </div>
        </div>

    </div>
    </div>
    <App />
   </>
  )
}
export default Home
