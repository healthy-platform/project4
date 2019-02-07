import React, {Component} from 'react'
import { Card } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class Main extends Component {
constructor(){
    super()
    this.state = {
        calories : 0,
        description: '',
        dish_item: '',
        price: 0,
        img: '',
        response:[]
    }
}


componentDidMount(event){

    //for not refreshing the page
    // event.preventDefault();
    const url = `http://localhost:3000/menus`;
    fetch(url)
    .then( response => response.json())
            .then( data => {
                console.log(data)
                this.setState({
                 
                    response : data

                })
            })
            .catch(error => {
             console.log(error);

            })

    }

    renderSearchResults(searchResponse){
        // render the state that stores the results from the API


        return searchResponse.map((response, index) => {
            
            return <div className="col m-2">
            
            <Card  style={{width:"25rem"}}key={index}>{response.menu.dish_item}
                <Card.Img variant="top" src={response.menu.img} alt={response.menu.dish_item}></Card.Img>
               <Card.Body>

               <Card.Title> Restaurant Name: {response.restaurant} </Card.Title>
               <Card.Title> Price: {response.menu.price} SAR</Card.Title>
                <Card.Text> {response.menu.description}</Card.Text>
               <Card.Text> Calories: {response.menu.calories}</Card.Text>
               <Button variant="primary">More</Button>
                </Card.Body>
                {/* <Card.Img width="34%" height="45px" src={response.img} alt={response.dish_item}></Card.Img>  */}
                {/* <p> {response.calories}</p> */}
                
               </Card>
               </div>
        })
    }

    render(){
        return(     
            <div className="container">

               <div className="row">
                {this.renderSearchResults(this.state.response)}
                </div>
                {/* Calroies:<div>{this.state.calories}</div>
                Dish Item: <div>{this.state.dish_item}</div>
                Description:<div>{this.state.description}</div> */}
                {/* <img src={this.state.img} alt={this.state.dish_item}></img> */}
            
            
            </div>



     
    





            


        )
    }  


}
    export default Main;






   