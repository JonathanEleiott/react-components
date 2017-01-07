// Create a variable named GroceryList
  // Create a div
  // create a list
    // Put apple, tomatoes and basil in the list

let GroceryList = () => (
  <div>
    <h2>Grocery List</ h2>
      <List listOfGroceries={['Appples', 'Basil']}/>
  </div>
)

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  } 

  eventActivated() {
    this.setState({
      done: !this.state.done
    })
  }

  render() {
    var style = {
      'fontWeight': this.state.done ? 'bold' : 'normal'
    }
    return (
      <li style={style} onMouseEnter={this.eventActivated.bind(this)} onMouseLeave={this.eventActivated.bind(this)}>{this.props.item}</li>
    );    
  } 
}

let List = (props) =>
  (<ul>
    {props.listOfGroceries.map(item => 
      <ListItem item={item} />     
    )}
  </ul>)



ReactDOM.render(<GroceryList />, document.getElementById('app'));