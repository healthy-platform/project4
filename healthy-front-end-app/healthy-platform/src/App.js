import React, { Component } from 'react';
import './App.css';
import Main from "./components/Main"
import { getUser, logout} from "./services/authService";
import NavBar from "./components/NavBar";
import AuthForm from "./components/AuthForm";
import Profile from "./components/Profile";
import CreateMeal from './components/CreateMeal';

class App extends Component {
  constructor (){
    super()
    this.state ={
      calories : 0,
        description: '',
        dish_item: '',
        price: 0,
        img: '',
        response:[],
      user: null,
      newMeal: null,
      // activePage: "main"
    };
  }
checkForUser = () => {
  const user = getUser();
  if (user) {
    this.setState({ user });
  }
}

componentDidMount() {
  this.checkForUser();
}

renderMenu(allMenu){
  return allMenu.map((menu) => {
    return (
      <Main key={menu.id}
        menu={menu}/>
      // <div></div>
    )
  })
}

renderNewMeal(data){
  this.setState({
    newMeal: data
  })
}


changeActivePage =  (activePage) => {
  this.setState({activePage})

}
createMeal = (activePage) => {

 
console.log("\n\\nn\n\n\n menu created ")
  // return (
  //   <CreateMeal renderNewMeal={this.renderNewMeal.bind(this)} />
  // )
}

changeForm = type => {
  console.log(type);
  this.setState({
    form: type
  });
};

login = () => {



  console.log("\n\n\n\n\n\n\n\n\n\n\n\n" , "logging in ")
  const user = getUser();

  console.log("\n\n\n\n\n\n\n\n\n\n\n\n" , user)

  this.setState({ user });

  this.changeToMain();
};

logout = () => {
  logout();
  this.setState({ user: null });
};

changeToMain = () => {
  this.setState({
    activePage: 'main'
  })
}

getProducts = () => {};

render() {
  return (
    <div>
      <NavBar
        user={this.state.user}
        logout={this.logout}
        getProducts={this.getProducts}
        createMeal={this.createMeal}
        changeActivePage = {this.changeActivePage}
        changeToMain = {this.changeToMain}
      />
      <div className="container">

        {/* {this.state.user ? (
          <Profile user={this.state.user} />
        ) : ( ""
          // <AuthForm form={this.state.form} onLogin={this.login} />
        )} */}

        
      </div>
  

      {this.state.activePage === 'signup' ? <AuthForm form="signup" onLogin={this.login}/> : false}
      {this.state.activePage=== 'login' ?  <AuthForm form="login" onLogin={this.login}/> : ''}
      {/* {this.state.newMeal ? <AuthForm newMeal={this.state.newMeal}/> : null} */}

      {this.state.activePage === 'menuForm' ? <CreateMeal/> : ""}
      {this.state.activePage === 'main' ? <Main/> :  ""}
    </div>

    
  );
}
}


export default App;