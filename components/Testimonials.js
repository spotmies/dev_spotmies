import React, {useEffect, useRef, useState} from "react";
import {FiChevronLeft} from "react-icons/fi";
import {FiChevronRight} from "react-icons/fi";
import {act} from "react-dom/test-utils";


const people = [
    {
        image:
            "https://avatars.githubusercontent.com/u/38750492?v=4",
        description: "They are the best people. And this is the best platform to learn from distance.",
        name: "Manas Malla",
        designation: "Developer",
    },
    {
        image:
            "https://raw.githubusercontent.com/ManasMalla/WhatsApp/main/app/src/main/res/drawable/mrs_manas_malla.png",
        description: "Lorem ipsum dolor sit amet, consectetur adip",
        name: "Aarogya Tatineni",
        designation: "Doctor",
    },
    {
        image:
            "https://raw.githubusercontent.com/ManasMalla/WhatsApp/main/app/src/main/res/drawable/nani_mama.jpeg",
        description: "lorem ipsum dolor sit amet, consectetur adip",
        name: "Nani Villuri",
        designation: "Developer",
    },
    {
        image: "https://raw.githubusercontent.com/ManasMalla/WhatsApp/main/app/src/main/res/drawable/daddy.jpeg",
        description: "Wonderful service",
        name: "Ramarao Malla",
        designation: "Professor",
    },
    {
        image: "/assets/gamer.png",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A praesentium eligendi aperiam excepturi reiciendis possimus harum consequatur placeat alias quos, iusto aliquam fugit modi quisquam labore accusamus, tempora, ratione ad.",
        name: "Satish Kumar Saride",
        designation: "Developer",
    },
    {
        image: "/assets/gamer.png",
        description: "lorem ipsum dolor sit amet, consectetur adip",
        name: "Sekhar Javvadi",
        designation: "Designer",
    },
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [firstImageIndex, setFirstImageIndex] = useState(1);
    const [secondImageIndex, setSecondImageIndex] = useState(2);
    const [thirdImageIndex, setThirdImageIndex] = useState(3);
    const [fourthImageIndex, setFourthImageIndex] = useState(4);
    const [fifthImageIndex, setFifthImageIndex] = useState(5);

    const [windowWidth, setWindowWith] = useState(null)

    useEffect(() => {

        setWindowWith(window.innerWidth);
    })

    function nextTestimonial() {
        setActiveIndex(prevState => prevState + 1 === 6 ? 0 : prevState + 1)
        setFirstImageIndex(prevState => prevState + 1 === 6 ? 0 : prevState + 1)
        setSecondImageIndex(prevState => prevState + 1 === 6 ? 0 : prevState + 1)
        setThirdImageIndex(prevState => prevState + 1 === 6 ? 0 : prevState + 1)
        setFourthImageIndex(prevState => prevState + 1 === 6 ? 0 : prevState + 1)
        setFifthImageIndex(prevState => prevState + 1 === 6 ? 0 : prevState + 1)
    }

    function previousTestimonial() {
        setActiveIndex(prevState => prevState - 1 === -1 ? 5 : prevState - 1)
        setFirstImageIndex(prevState => prevState - 1 === -1 ? 5 : prevState - 1)
        setSecondImageIndex(prevState => prevState - 1 === -1 ? 5 : prevState - 1)
        setThirdImageIndex(prevState => prevState - 1 === -1 ? 5 : prevState - 1)
        setFourthImageIndex(prevState => prevState - 1 === -1 ? 5 : prevState - 1)
        setFifthImageIndex(prevState => prevState - 1 === -1 ? 5 : prevState - 1)
    }

    // useEffect(() => {
    //     console.log(activeIndex);
    //     if(activeIndex >= 5){
    //         setTimeout(function () {
    //
    //             setActiveIndex(0);
    //         }, 2000)
    //     }else{
    //         setTimeout(function () {
    //
    //             setActiveIndex(prevState =>
    //                 prevState + 1
    //             );
    //         }, 2000)
    //     }
    //
    // }, [activeIndex])

    return (
        <div>
            {windowWidth >= 1200 ?
                <div className="mx-auto  md:w-[87%] my-8 mb-16">
                    <h1 className="text-lg text-center mb-3 uppercase text-gray-400">
                        Testimonials
                    </h1>
                    <h2 className="text-4xl text-center font-bold mb-8">What our clients say about us</h2>
                    <div className="flex flex-row h-96 mt-16">
                        <div className="w-1/3 mt-16">
                            <img src="/assets/quotes.png" className="w-8 h-8 mb-4"/>
                            <p className="text-2xl mb-8 text-gray-600 h-40 text-ellipsis overflow-clip">{people[activeIndex]["description"]}</p>
                            <h3 className="font-bold pb-8">- {people[activeIndex]["name"]}, <span
                                className="text-gray-300">{people[activeIndex]["designation"]}</span>
                            </h3>
                            <div className=" flex w-20 justify-between">
                                <a onClick={
                                    () => previousTestimonial()
                                }
                                   className=" flex w-8 h-8 rounded-full outline outline-gray-700 items-center justify-center"><FiChevronLeft/></a>
                                <a onClick={
                                    () => nextTestimonial()
                                }
                                   className="flex w-8 h-8 rounded-full bg-blue-500 outline outline-blue-500 text-white items-center justify-center"><FiChevronRight/></a>
                            </div>
                        </div>
                        <div className="grow justify-center items-center flex relative ml-16">
                            <div className="mx-auto">
                                <img className="w-28 h-28 mx-auto rounded-full translate-x-36 -translate-y-8"
                                     src={people[firstImageIndex]["image"]}/>
                                <img className="w-24 h-24 mx-auto rounded-full translate-y-16"
                                     src={people[secondImageIndex]["image"]}/>
                                <img className="w-20 h-20 mx-auto rounded-full translate-x-48 translate-y-16"
                                     src={people[thirdImageIndex]["image"]}/>
                            </div>
                            <img className="w-48 h-48 mx-auto rounded-full" src={people[activeIndex]["image"]}/>
                            <div className="mx-auto">
                                <img className="w-32 h-32 mx-auto rounded-full -translate-x-36 -translate-y-20"
                                     src={people[fifthImageIndex]["image"]}/>
                                <img className="w-24 h-24 mx-auto rounded-full -translate-x-28 translate-y-20"
                                     src={people[fourthImageIndex]["image"]}/>
                            </div>
                        </div>
                    </div>

                </div>
                :

                <div className="mx-auto w-[87%] my-8 mb-16 pb-12">
                    <h1 className="text-lg text-center mb-3 uppercase text-gray-400">
                        Testimonials
                    </h1>
                    <h2 className="text-4xl text-center font-bold mb-8">What our clients say about us</h2>
                    <div className="flex h-32 mt-12">

                        <div className="justify-center items-center flex mx-auto overflow-x-clip">
                            {/*<img className="w-32 h-32 mx-8" src={people[4]["image"]}/>*/}
                            <img className="w-20 h-20 mx-4 rounded-full"
                                 src={people[activeIndex - 1 >= 0 ? activeIndex - 1 : 5]["image"]}/>
                            <img className="w-36 h-36 mx-4 rounded-full" src={people[activeIndex]["image"]}/>
                            <img className="w-20 h-20 mx-4 rounded-full"
                                 src={people[activeIndex + 1 <= 5 ? activeIndex + 1 : 0]["image"]}/>
                            {/*<img className="w-32 h-32 mx-8" src={people[4]["image"]}/>*/}
                        </div>
                    </div>
                    <div className="mt-16 mx-auto">
                        <img src="/assets/quotes.png" className="w-8 h-8 mb-4"/>
                        <p className="text-2xl pb-8 text-gray-600">{people[activeIndex]["description"]}</p>

                        <h3 className="font-bold pb-8">- {people[activeIndex]["name"]}, <span
                            className="text-gray-300">{people[activeIndex]["designation"]}</span></h3>
                        <div className=" flex w-20 justify-between">
                            <a onClick={
                                () => previousTestimonial()
                            }
                               className=" flex w-8 h-8 rounded-full outline outline-gray-700 items-center justify-center"><FiChevronLeft/></a>
                            <a onClick={
                                () => nextTestimonial()
                            }
                               className="flex w-8 h-8 rounded-full bg-blue-500 outline outline-blue-500 text-white items-center justify-center"><FiChevronRight/></a>
                        </div>
                    </div>
                </div>}
            <div className="bg-gray-100 h-24 mx-auto"></div>
        </div>
    );
};

export default Testimonials;
