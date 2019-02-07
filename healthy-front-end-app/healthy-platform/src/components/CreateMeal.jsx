import React, { Component } from "react";

class CreateMeal extends Component {
    constructor() {
        super()
        this.state = {
            dish_item: '',
            price: '',
            calories: null,
            description: '',
            img: '',
            restaurant_id: null
        }
    }


    componentDidMount() {
        console.log("\n\n\n\n\n ", "inside the menu form ")
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;



        this.setState({
            [name]: value
        }, () => { console.log(this.state) })

    }

    handleSubmit(event) {
        event.preventDefault()
        // this.props.renderNewMeal(this.state)

        // let data = this.state.menu

        let obj =
        {
            menu: {
                dish_item: this.state.dish_item,
                price: this.state.price,
                calories: this.state.calories,
                description: this.state.description,
                img: this.state.img,
                restaurant_id: this.state.restaurant_id
            }
        }


        let apiUrl = "http://localhost:3000/menus"
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(obj)

        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

            })
            .catch(error => {

                console.log("this is an error \n\n\n")
                console.log(error);
            });
    }


    render() {
        return (<div>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Dish: </label><input type="text" name="dish_item" onChange={this.handleChange.bind(this)} />
                <label>Price: </label><input type="text" name="price" onChange={this.handleChange.bind(this)} />
                <label>Calories: </label><input type="text" name="calories" onChange={this.handleChange.bind(this)} />
                <label>Description: </label><input type="text" name="description" onChange={this.handleChange.bind(this)} />
                <label>Image: </label><input type="text" name="img" onChange={this.handleChange.bind(this)} />
                <label>Restaurant</label>
                <select name="restaurant_id" onChange={this.handleChange.bind(this)}>
                    <option value="1">Kudu</option>
                    <option value="2">Herfy</option>
                    <option value="3">Alkhafeef</option>
                    <option value="4">Subway</option>
                    <option value="5">Roma Way</option>
                </select>
                <button>Submit</button>
            </form>
        </div>)
    }
}
export default CreateMeal;