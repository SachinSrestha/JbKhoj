import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const filterData = [
  {
    filterType: "Location",
    array: ["Banepa", "Bhaktapur", "Kathmandu", "Lalitpur", "Hetauda"],
  },
  {
    filterType: "Industry",
    array: [
      "FrontEnd Developer",
      "BackEnd Developer",
      "MERN Developer",
      "Data Engineer",
      "Software Engineer",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "20k-1lakh", "1lakh-5lakh"],
  },
];

function FilterCard() {
  return (
    <div>
      <h1 className="text-xl font-bold">Filter Jobs</h1>
      <hr className="mt-3" />
      <div>
        {filterData.map((data, index) => (
          <div key={index} className="mb-4">
            <div className="mb-[6px]">

            <h1 className="text-lg font-medium">{data.filterType}</h1>
            </div>
            <RadioGroup >
              {data.array.map((item, subIndex) => (
                <div
                  key={subIndex}
                  className="flex items-center space-x-2 my-[1.5px] "
                >
                  <RadioGroupItem value={item} id={item} />
                  <Label htmlFor={item}>{item}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterCard;
