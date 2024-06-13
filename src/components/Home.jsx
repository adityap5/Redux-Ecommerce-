
import { useRef } from "react";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react";
import FeaturedProducts from "./FeaturedProducts";
import Categories from "./Categories";
import Weekly from "./Weekly";
import { useNavigate } from "react-router-dom";

function Home() {
  //     let d = new Date()
  // const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  // let day = weekday[d.getDay()];
const navigate = useNavigate()

  const container = useRef();

  useGSAP(() => {
    let tl = gsap.timeline()
    tl.from(".box",
      {
        x: -100,
        stagger: 0.4,
        opacity: 0,
        delay:.4

      });
      tl.from(".box1",{
        y: -100,
        stagger: 0.2,
        opacity: 0,

      })
  }, { scope: container  })
  return (
    <>
      {/* <div className="h-screen  text-white">
        <div ref={container} className="app hero flex justify-between items-center p-14">
          <div className="left w-[56rem]">
            <img
              className='h-[36rem] w-full rounded-lg relative'
              src="https://graphicdesignjunction.com/wp-content/uploads/2021/07/korgen-font.jpg" alt="img" />
            <div className="absolute top-44 left-44 font-dance text-6xl"> */}
              {/* <h3 >Black {day} Sale!</h3>
             <p>One place to Buy  all your {day} Needs.</p> */}
            {/* </div>
          </div> */}
          {/* <div className="right w-[30rem] grid gap-8">
            <div ref={container} className="app">
              <img
                className='h-[17rem] w-[30rem] rounded-lg'
                src="rtop.jpg" alt="" />
              <h3 className="box absolute uppercase top-[170px] text-6xl right-[100px]   font-bebas tracking-[1rem] text-white">night lotus</h3>
              <p className="box absolute uppercase top-[240px] text-4xl right-[100px] font-korgen tracking-wider text-[#ffecd1]">PERFUME</p>
            </div>
            <div>
              <img
                className='h-64 w-48 '
                src="watch.png" alt="" />
              <div className='absolute top-[480px] right-[30px] text-white text-4xl uppercase'>
                <h3 className='box text-6xl font-korgen font-medium'>luxry <br /> </h3>
                <h3 className='box text-5xl px-12'>watches</h3>
                <p className='box text-xl text-gray-500 line-clamp-2'>starting in the <br />swiss mountain</p>
              </div>
            </div>
          </div> */}

        {/* </div>
      </div> */}
       <div  ref={container} className="relative overflow-hidden ">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="box text-4xl font-bold tracking-tight text-zinc-200 sm:text-6xl">
              Summer styles are finally here
            </h1>
            <p className="box mt-4 text-xl text-gray-400">
              This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
              if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          className="box1 h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1610490634418-145ada5ebebd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          className="box1 h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                          alt=""
                          className="box1 h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          className="box1 h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          alt=""
                          className="box1 h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1523205565295-f8e91625443b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          className="box1 h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="box1 h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/53952986-dcba-46f7-aa9d-a05e6c804179/sportswear-short-sleeve-top-79SVHD.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p
              onClick={()=>navigate("/shop")}
                href="#"
                className="box1 inline-block cursor-pointer rounded-md border border-transparent bg-white px-8 py-3 text-center font-medium text-black hover:bg-zinc-400 hover:text-white"
              >
                Shop Collection
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
<FeaturedProducts/>
<Categories/>
<Weekly/>
    </>
  )
}
export default Home
