import { Component } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function ProjectList(props) {
  const {project} = props;
  return (
    <div>
      <img
        className="ProjectList"
        src={project.img}
      /> 
      <div className="Category">{project.category}</div>
 
    </div>
  );  
}


function ToolBar(props) {
  const filters = props.filters;
  const activeF = props.activeF
  const listItems = filters.map((filter) =>
    <button key={filter.toString()} className={filter == activeF?"active":filter.toString()} onClick={props.onSwitch}>
      {filter}
    </button> 
    
  );

  return (
     <div>
       {listItems}
     </div>
  );
}

class Portfolio extends Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn: "All"}
    this.projects = [{
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
      category: "Business Cards"
      }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites"
      }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites"
      }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
      category: "Websites"
      }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
      category: "Business Cards"
      }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
      category: "Websites"
      }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites"
      }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards"
      }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
      category: "Websites"
      }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
      category: "Flayers"
      }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
      category: "Websites"
      }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
      category: "Business Cards"
      }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
      category: "Websites"
      }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites"
      }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards"
      }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
      category: "Websites"
      }, {
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
            onSwitch={(e)=>{this.setState(state => ({
              isToggleOn: e.target.textContent
            }))}} 
          />
          {activeProjects.map(project => (
            <ProjectList project = {project} />        
          ))}  
        </div>
      );
  }
}
ReactDOM.render(
  <Portfolio />,
  document.getElementById('root')
);

export default Portfolio