import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import errorBoundary from './errorBoundary';
import {setSearchFeild,  requestRobots } from './actions';


const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
//     isPending: state.requestRobots.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchFeild(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

//class App extends Component {
  //constructor() {
   // super()
    //this.state = {
      //robots: [] 
     // searchfield: ''
    //}
  //}

  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response =>{
  //     return response.json();
  //   })
  //   .then(users =>{
  //     this.setState({robots: users})
  //   })
    
    
  //}

      //onSearchChange = (event) => {
          //this.setState({ searchfield: event.target.value })
      //}

//     render() {
//         const {searchField, onSearchChange } = this.props;

//       const filteredRobots = this.state.robots.filter(robots => {
//         return robots.name.toLowerCase().includes(searchField.toLowerCase())
//           } 
//          );
// if(this.state.robots.length===0){
//   return <h1>loading</h1>
// } else{

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    
    return( 
      <div className ='tc'>
      <h1><b>ROBOFRIENDS</b></h1>
      <SearchBox searchChange={onSearchChange}/>
      <Scroll>
      <errorBoundary>
      <CardList robots={filteredRobots} />
      </errorBoundary>
      </Scroll>
      </div>
    );

   }   
  }

//export default App;
// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)

//instead of using if /else we can also use ternary operator.
// rather than using this.state everytime we can say:
//const {robots, searchfield } = this.state;
