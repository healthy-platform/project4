# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Menu.destroy_all

resturents = [
    {
        name: "Kudu"
    },
    {
        name: "Herfy"
    },
    {
        name: "Alkhafeef"
    },
    {
        name: "Subway"
    },
    {
        name: "Roma Way"
    }
]

resturents.each do |name|
    Restaurant.create(name)
end 
menus = [
{
     
    dish: "Diet Grilled Chicken Meal",
    price: "27 SR",
    calories: 561,
    description: "Comes with brown bread fresh salad ",
    image: "https://beta.kudu.com.sa/media/cache/menu_image/img/menu/101821.jpg",
    restaurant: Restaurant.find(1)

},
{
   
    dish: "Greek Salad",
    price: "12 SR",
    calories: 180,
    description: "Green salad with greek cheese",
    image: "https://i1.wp.com/ohmyveggies.com/wp-content/uploads/2017/05/vegan-greek-salad-with-tofu-feta-3.jpg",
    restaurant: Restaurant.find(2)

},
{
    
    dish: "Caesars chickin salad",
    price: "12 SR",
    calories: 200,
    description: "Grilled chichkin withe caesars salad",
    image: "https://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--327831_11.jpg",
    restaurant: Restaurant.find(2)

},
{
   
    dish: "Grilled Chicken",
    price: "15 SR",
    calories: 320,
    description: "Grilled chicken with tomatoe, lettuce and ranch sauce ",
    image:"http://www.alkhafeef.com.sa/wp-content/uploads/2014/03/CHICKEN-SANDWICH1.jpg",
    restaurant: Restaurant.find(3)

},
{
    
    dish: "Smoked Beef",
    price:"14 SR",
    calories: 350,
    description:"Try the amazing combination of wholesome thin dough, baked with smoked meat, kashkawan cheese, lettuce, fresh tomatoes, pickles and mayonnaise",
    image:"http://www.alkhafeef.com.sa/wp-content/uploads/2014/03/CHICKEN-SANDWICH1.jpg",
    restaurant: Restaurant.find(4)

},
{
    
    dish: "Chicken Teriyaki",
    price:"18 SR",
    calories: 450,
    description: "This gourmet specialty is a flavorful blend of tender teriyaki glazed chicken strips . Served hot & toasted on freshly baked bread.",
    image: "https://www.subway.com/ns/images/menu/SAU/ENG/RPLC-Chicken-Teriyaki_594x334_PR.jpg",
    restaurant: Restaurant.find(4)
},
{
    
    dish: "Oven Roasted Chicken",
    price: "16 SR",
    calories: 400,
    description:"Tender chicken patty on freshly baked bread... now that’s tempting to the max!",
    image: "https://www.subway.com/ns/images/menu/SAU/ENG/RPLC-Roasted_chicken_594x334_PR.jpg",
    restaurant: Restaurant.find(5)

},
{
   
    dish:"Bolognese",
    price:"15 SR",
    calories: 654,
    description:"Spaghetti and meet sauce",
    image: "https://roma-way.com/wp-content/uploads/2018/10/kids_m_1-364x250.jpg",
    restaurant: Restaurant.find(5)

}]

menus.each do |menu|
    Menu.create(dish_item: menu[:dish], price: menu[:price], calories: menu[:calories], description: menu[:description], img: menu[:image] , restaurant: menu[:restaurant])
    # p menu[:dish]
end 



turki = User.create({firstt_name: "Turki", last_name: "alomari", email: "t-matar@windowslive.com", password: "Y2ffooff"})


