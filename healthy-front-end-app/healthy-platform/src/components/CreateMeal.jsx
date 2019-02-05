import React, {Component} from "react";

class CreateMeal extends Component{
    constructor(){
        super()
        this.state = {
            dish: '',
            price: '',
            calories: null,
            description: '',
            image: '',
            restaurant: null
        }
    }


    componentDidMount(){
        console.log("\n\n\n\n\n " , "inside the menu form " )
    }
    handleChange(event){
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        this.props.renderNewMeal(this.state)
    }

    render(){
        return (<div>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Dish: </label><input type="text" name="dish" onChange={this.handleChange.bind(this)} />
                <label>Price: </label><input type="text" name="price" onChange={this.handleChange.bind(this)} />
                <label>Calories: </label><input type="text" name="calories" onChange={this.handleChange.bind(this)} />
                <label>Description: </label><input type="text" name="description" onChange={this.handleChange.bind(this)} />
                <label>Image: </label><input type="text" name="image" onChange={this.handleChange.bind(this)} />
                <label>Restaurant</label>
                <select name="restaurant" onChange={this.handleChange.bind(this)}>
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