import { Box } from "@chakra-ui/react"
import { useState } from "react"
import FAQ from "./FAQ"



 const initData=[
    {
        id:1,
        question:"What is Revv?",
        answer:"Revv is a self drive car rental service that provides you with all the privacy, fun and convenience of your own car, without the hassles of owning and maintaining one. We drop and pick-up cars from your doorstep, so that you can spend time on the more important thing - your drive! The doorstep drop and pick-up of cars is our standard way of serving you, and is available throughout the areas served by us."
    },
    {
        id:2,
        question:"Am I eligible to use Revv's services?",
        answer:"To avail Revv's services, you must be at least 21 years old, and your driving license for must be at least 1 year old (at the time of starting the trip). Driving license printed on A4 sheet of paper (original or otherwise), driving license on Digilocker or M-Parivaahan app and commercial driving licenses will not be accepted."
    },
    {
        id:3,
        question:"Which are the areas where I can avail Revv's services?",
        answer:"We are currently serving in Bangalore, Hyderabad, Chennai, Mumbai, Pune, Delhi NCR, Chandigarh, Jaipur, Visakhapatnam, Mysore, Coimbatore, Mangalore, Kolkata, Kochi, Ahmedabad, Trivandrum, Surat, Tirupati , Vijayawada, Bhubaneswar, Nagpur & Vadodara"
    },
    {
        id:4,
        question:"Is there a Kilometres limit to how much I can drive?",
        answer:`This depends on the pricing plan that you select. If you go for the “Unlimited kms” pricing plans (available only without fuel, and only for bookings whose duration is more than 24 hours), there is absolutely no limit to the kilometres that you can drive, and you have complete flexibility of driving the car as much as you want. Revv it up! Other pricing plans have a "Kilometres limit", which varies based on the plan selected. You can still drive beyond the kilometres limit, but the additional kilometres clocked will attract an additional charge.`
    },
    {
        id:5,
        question:`Are there restrictions on where I can travel?`,
        answer:`All of our cars are equipped with an All India Tourist Permit, so you are free to drive anywhere in the country. All India Tourist Permit means that the car is legally permitted to ply in any state in the country, after paying the inter-state taxes at the state borders. However, we do not permit taking Revv vehicles to Leh/Ladakh region, Kaza/Nako region and spiti valley. We also advise you to avoid bad terrains (especially in non- SUV cars) and areas affected by civil unrest.

        Please note: Interstate taxes at the state borders are to be paid and borne by the customer. Our cars are equipped with Fast tag devices for your convenience. The toll charges incurred during your trip will be billed to you in your invoice.`
    },
    {
        id:6,
        question:`Do I have to bring the car back to the same location?`,
        answer:`No, you can choose different delivery and pickup locations within the same city, without any extra cost other than the standard delivery/pickup charges. However, this option needs to be availed while creating of the booking, before it is confirmed. You may also modify the booking later, however, it will then attract applicable modification charges.`
    },

]

const FAQData=()=>{
    const [data,setData]=useState(initData)

    return(
        <Box>
            {data.map((e)=>(
                <FAQ key={e.id} question={e.question} answer={e.answer}/>
            ))}
        </Box>
    )
}
export default FAQData