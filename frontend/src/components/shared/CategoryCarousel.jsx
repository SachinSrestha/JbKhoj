import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchJobQuery } from "@/store/jobslice";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Software Engineer",
  "Data Scientist",
  "FullStack Developer",
];

function CategoryCarousel() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchJobHandler= (input)=>{
    dispatch(setSearchJobQuery(input));
    navigate("/browse")
  }
  return (
    <div className="flex mt-16 justify-center items-center">
      <Carousel className="w-[670px]">
        <CarouselContent>
          {category.map((cat, index) => (

              <CarouselItem className="md:basis-1/3 lg-basis-1/2 " key={index} >
                <Button variant="outline" className="rounded-full font-medium" onClick ={()=> searchJobHandler(cat)} >
                  {cat}
                </Button>
              </CarouselItem>

          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;
