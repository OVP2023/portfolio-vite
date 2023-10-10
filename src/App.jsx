import { Component } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

class ProjectList extends Component{
  constructor(props) {
    super(props);
  } 
  
  render(){
    return (
      <div key={this.props.project.id} >
        <img
          className="ProjectList"
          src={this.props.project.img}
        /> 
        <div  className="Category" >{this.props.project.category}</div>
      </div>
    );  
  }
}


class ToolBar extends Component{
  constructor(props) {
    super(props);
  } 
    
  render(){
    return (
      this.props.filters.map((filter,index) =>
    //<button key={filter.toString()} className={filter == this.props.activeF?"active":filter.toString()} onClick={this.props.onSwitch}>
    <button key={index} className={filter == this.props.activeF?"active":filter.toString()} onClick={() => this.props.onSwitch(filter)}>
      {filter}
    </button>    
      )
    )

  }
}

class Portfolio extends Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn: "All"}
    this.projects = [{
      id:1,
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
      category: "Business Cards"
      }, {
      id:2,
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites"
      }, {
      id:3,
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites"
      }, {
      id:4,
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
      category: "Websites"
      }, {
      id:5,
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
      category: "Business Cards"
      }, {
      id:6,
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
      category: "Websites"
      }, {
      id:7,
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites"
      }, {
      id:8,
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards"
      }, {
      id:9,
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
      category: "Websites"
      }, {
      id:10,
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
      category: "Flayers"
      }, {
      id:11,
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
      category: "Websites"
      }, {
      id:12,
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
      category: "Business Cards"
      }, {
      id:13,
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
      category: "Websites"
      }, {
      id:14,
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites"
      }, {
      id:15,
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards"
      }, {
      id:16,
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
      category: "Websites"
      }, {
      id:17,
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
      category: "Flayers"
      }] 
  }
  
  render() { 
       const filters = ['All', 'Websites', 'Business Cards','Flayers'];
       var active = this.state.isToggleOn
       var activeProjects = [];
       
       if (this.state.isToggleOn == 'All'){
         for (let i=0; i<this.projects.length;i++){   
           activeProjects.push({
             img: this.projects[i].img,
             category: this.projects[i].category
           })
         }
       }    
    
       for (let i=0; i<this.projects.length;i++){ 
         if (this.projects[i].category == active){
           activeProjects.push({
             img: this.projects[i].img,
             category: this.projects[i].category
           })
         }
       }     
             
       return (
        <div>         
          <ToolBar 
            filters={filters}
            activeF={this.state.isToggleOn}
            //onSwitch={(e)=>{this.setState(state => ({
              //isToggleOn: e.target.textContent

            onSwitch={(filter)=>{this.setState(state => ({
                isToggleOn: filter
            }))}} 
          />
          {activeProjects.map(project => (
            <ProjectList  project = {project} />        
          ))}  
        </div>
      );
  }
}

export default Portfolio