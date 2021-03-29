import React from "react";
import author from "../logo.png";
import SkillBar from "react-skillbars";


const SKILLS = [
    {
      "type": "Java",
      "level": 100
    },
    {
      "type": "React",
      "level": 85
    },
    {
      "type": "Javascript",
      "level": 75
    },
    {
      "type": "Spring",
      "level": 50
    },
    {
      "type": "Docker",
      "level": 25
    },
    {
      "type": "HTML",
      "level": 20
    },
    {
      "type": "NoSQL",
      "level": 0
    }
  ]
const Barras = () => {
    return (
                        <SkillBar

                        skills={SKILLS}/>
    )

}
export default Barras