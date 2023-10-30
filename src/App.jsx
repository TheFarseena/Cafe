import { useState } from 'react'
import './App.css'

function App() {
  // string , boolean , array ,object

  // const [bgcolor, setBgcolor] = useState("yellow")
  // const [textColor, setTextColor] = useState("blue")
  // const [navItem, setNavItem] = useState(["HOME","ABOUT","MENU", "WHERE","HOME","ABOUT","MENU", "WHERE"])
  // console.log("my output",navItem)

  // navItem?.map((item)=>console.log(item))
  // -------------------
  const [drink, setDrink] = useState([])
  const [eat, setEat] = useState([]) //Array objects
  // FUNCTION
  function Eat() {
    // console.log("Eat")
    setEat([
      //  1st object
      {
        name: "Bread Basket",
        description: "Assortment of fresh baked fruit breads and muffins 5.50",
      },
      // 2nd object
      {
        name: "Honey Almond Granola with Fruits",
        description: "Natural cereal of honey toasted oats, raisins, almonds, and dates",

      },
      {
        name: "Belgian Waffle",
        description: "Vanilla flavored batter with malted flour 7.50",
      },
      {
        name: "Scrambled eggs",
        description: "Scrambled eggs, roasted red pepper and garlic, with green onions 7.50",
      },
      {
        name: "Blueberry Pancakes",
        description: "With syrup, butter and lots of berries 8.50",
      },
    ])
    setDrink([])
  }
  function Drink() {
    setDrink([
      {
        name: "Coffee",
        description: "Regular coffee 2.50",

      },
      {
        name: "Chocolato",
        description: "Chocolate espresso with milk 4.50",
      },
      {
        name: "Corretto",
        description: "Whiskey and coffee 5.00",
      },
      {
        name: "Iced tea",
        description: "Hot tea, except not hot 3.00",
      },
      {
        name: "Soda",
        description: "Coke, Sprite, Fanta, etc. 2.50",
      },

    ])
    setEat([])

  }
  return (
    <>
      <div>
        <div className="container">
          <div className="header-container">
            <ul>
              {/* {navItem.map((nav)=> <h1>{nav}</h1> )} */}
              {/* navItem :- ["HOME","ABOUT","MENU", "WHERE"] */}
              {/* item :- <li> HOME */}
              {/* item :- <li> ABOUT */}
              {/* item :- <li> MENU */}
              {/* item :- <li> WHERE */}
              <li>Home</li>
              <li><a href="#about">About</a></li>
              <li>Menu</li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="image-container" id='Home'>
            {/* <img src="https://anybodycanbake.com/wp-content/uploads/2019/03/Baking-History.jpg.webp" alt="unloaded" /> */}
            <h1>the <br></br>Cafe</h1>
            <h6>open from 6am to 5pm</h6>
            <h5>15 Adr street, 5015</h5>
          </div>
        </div>
        <div className="container1">
          <div id='about' className="about-container">
            <h3 >ABOUT THE CAFE</h3>
          </div>
          <p>The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches, as well as a selection of sides and salads and other good stuff.

          </p>
          <div className="abt-container">
            <p><i>"Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.</i></p>
            <p>Chef, Coffeeist and Owner: Liam Brown</p>
          </div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Two_men_at_coffee_shop_counter_%28Unsplash%29.jpg/1200px-Two_men_at_coffee_shop_counter_%28Unsplash%29.jpg?20170816101547" alt="unloading" />
          <h4>Opening hours: <span>everyday from 6am to 5pm.</span></h4>
          <h4>Address: <span> 15 Adr street, 5015, NY</span></h4>
          <div className="menu-container">
            <h3>THE MENU</h3>
          </div>
        </div>

        <div className="menu-sec">
          {/* btn div */}
          <div className='btns'>
            <button onClick={Eat}>Eat</button>
            <button onClick={Drink}>Drink</button>
          </div>

          {/* results */}
          <div className="result1">

            {eat.map(({ name, description }, index) => <div key={index}>
              <h3>{name}</h3>
              <p>{description}</p>

            </div>
            )}

            {drink.map(({ name, description }, index) => <div key={index}>
              <h3>{name}</h3>
              <p>{description}</p>

            </div>)}
          </div>


        </div>
        <div className='container1'>
          <img src="https://www.w3schools.com/w3images/coffeehouse2.jpg" alt="unloaded" />
        </div>


        <section id="contact">
          <div className="contact-container">
            <h3>Where To Find</h3>
            <h5>Find us at some address at some place.</h5>
            <img src="https://www.w3schools.com/w3images/map.jpg" alt="unloaded" />
            <p>
              <span className='bg-black'>FYI! </span> We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.
            </p>
            <p><span className='color'>Reserve</span> a table, ask for today's special or just send us a message:</p>
            <form action="">
              <p>
                <input className="inputBox" type="text" placeholder="Name" required />
              </p>
              <p>
                <input className="inputBox" type="number" placeholder="How Many People" />
              </p>
              <p>
                <input className="inputBox" type="datetime-local" placeholder="Date and Time" required name="date" value="2020-11-16 20:20" />
              </p>
              <p>
                <input className="inputBox" type="text" placeholder="Message \ special requirements" />
              </p>
              <button type='submit'>SEND MESSAGE</button>
            </form>
            <div className="footer">
              <p>Powered  by         <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
