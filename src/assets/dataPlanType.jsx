import ArcadeIcon from './images/icon-arcade.svg';
import Advanced from './images/icon-advanced.svg';
import Pro from './images/icon-pro.svg'

const dataPlanType = {
    "monthly" : [
        {
            "id" : 0,
            "plan": "Arcade",
            "price": 9,
            "image": ArcadeIcon,
            "class": "plan__sale--hide",
            "reduction" : "mo"
        },
        {
            "id" : 1,
            "plan": "Advanced",
            "price": 12,
            "image": Advanced,
            "class": "plan__sale--hide",
            "reduction" : "mo"
        },
        {
            "id" : 2,
            "plan": "Pro",
            "price": 15,
            "image": Pro,
            "class": "plan__sale--hide",
            "reduction" : "mo"
        }
    ],

    "yearly" :[
        {
            "id" : 0,
            "plan": "Arcade",
            "price": 90,
            "image": ArcadeIcon,
            "class" : "plan__sale-show",
            "reduction": "yr"
        },
        {
            "id" : 1,
            "plan": "Advanced",
            "price": 120,
            "image": Advanced,
            "class" : "plan__sale-show",
            "reduction": "yr"
        },
        {
            "id" : 2,
            "plan": "Pro",
            "price": 150,
            "image": Pro,
            "class" : "plan__sale-show",
            "reduction": "yr"
        }
    ]
}

export default dataPlanType
