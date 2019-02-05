import React, {Component} from 'react'
import { Card } from 'react-bootstrap';

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
            
            return <Card  style={{width:"280px", height:"180px"}}key={index}>{response.price}
                <Card.Img variant="top" src={response.img} alt={response.dish_item}></Card.Img>
               <Card.Body>
               <Card.Title>{response.dish_item}</Card.Title>
                <Card.Text> {response.description}</Card.Text>
               <Card.Text> {response.calories}</Card.Text>
                     </Card.Body>
                {/* <Card.Img width="34%" height="45px" src={response.img} alt={response.dish_item}></Card.Img>  */}
                {/* <p> {response.calories}</p> */}
                
               </Card>;
        })
    }

    render(){
        return(     
            <div>

               
                {this.renderSearchResults(this.state.response)}
                {/* Calroies:<div>{this.state.calories}</div>
                Dish Item: <div>{this.state.dish_item}</div>
                Description:<div>{this.state.description}</div> */}
                {/* <img src={this.state.img} alt={this.state.dish_item}></img> */}
            
            
            </div>








            


        )
    }  


}
    export default Main;






   