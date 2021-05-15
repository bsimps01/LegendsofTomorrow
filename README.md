# LegendsofTomorrow

Find someone who has all the hype but is under the radar? Post about the future star on our site to hear about their bright future!
<br>
<br>

## Usage

1. Request `/legends` to see all the future legends
1. Post to `/legends` to add a legend affiliated with your \_id
1. Change information within each Legend info using UPDATE
1. Find a Legend you don't like? use the DELETE method to change that


```javascript
{
    "Legends": [
        {
            "_id": "609f38c947fbe209f96880f1",
            "title": "Ken Griffey Jr.",
            "img": "kengriffeyjr.jpg",
            "summary": "Natural Swing, really puts a hurt on the ball!",
            "sport": "Baseball",
        },
        {
            "_id": "609f39a047fbe209f96880f2",
            "title": "Mia Hamm",
            "img": "miahamm.png",
            "summary": "Bends it like Beckham!",
            "sport": "Soccer",
        },
        ...
    ]
}