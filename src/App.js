var React = require('react');
var ReactDOM = require('react-dom');

var BodyStyle = {
	textAlign:"center",
	listStyle: "none",
	margin: "auto",
    width: "50%",
    padding: "10px"
};

var UlStyles = {
	listStyle: "none",
    margin: "0",
    padding: "0"
};

var LiStyles = {
	listStyle: "none",
    display: "inline",
    padding: "10"
};

var HeaderStyles = {
	padding: "1em",
	color: "white",
	backgroundColor: "black",
	clear: "left",
	textAlign: "center"
};



var MainApp = React.createClass({
	render: function() {
		return (
			<div>

				<div style={HeaderStyles}>
					<h1>We Sell Stuff And Things</h1>
					
					<div>
						<ul style={UlStyles}>
						  <li style={LiStyles}><a href="default.asp">Home</a></li>
						  <li style={LiStyles}><a href="news.asp">News</a></li>
						  <li style={LiStyles}><a href="contact.html">Contact</a></li>
						  <li style={LiStyles}><a href="about.asp">About</a></li>
						</ul>
					</div>

				</div>
				
				<ol style={BodyStyle}><h1>Main Body</h1>
					<ProductOne gifSource="https://media.giphy.com/media/3oz8xPYW0sc64eJEEU/giphy.gif" />

					<ProductOne gifSource="https://media.giphy.com/media/3o6ZtjHtp4I73pYpeE/giphy.gif"/>

					<ProductOne gifSource="https://media.giphy.com/media/h0m6DAVQ1zBfi/giphy.gif"/>
				</ol>

			</div>	
			)
	}
});

var ProductOne = React.createClass({
	render: function() {
		return (
				<li><img src={this.props.gifSource}></img>
					<ul style={UlStyles}>
						<li>It Bends Alot</li>
						<li>Price: It Costs Alot</li>
						<li>Devlivery: FREEE!!!</li>
					</ul>
				</li>
			)
	}
});

// var ProductTwo = React.createClass({
// 	render: function() {
// 		return (
// 				<li><img src="https://media.giphy.com/media/3oz8xPYW0sc64eJEEU/giphy.gif" alt="#"/>
// 					<ul>
// 						<li>It Bends A Bit</li>
// 						<li>Price: It Costs A bit</li>
// 						<li>Devlivery: ALOT!!!</li>
// 					</ul>
// 				</li>
// 			)
// 	}
// });

// var ProductThree = React.createClass({
// 	render: function() {
// 		return (
// 				<li><img src="https://media.giphy.com/media/3o6ZtjHtp4I73pYpeE/giphy.gif" alt="#"/>
// 					<ul>
// 						<li>It Bends Not</li>
// 						<li>Price: It Costs Not</li>
// 						<li>Devlivery: A Tonn!!!</li>
// 					</ul>

// 				</li>
// 			)
// 	}
// });




// ReactDOM.render(
//   <Header />,
//   document.getElementById('header')
// );

ReactDOM.render(
  <MainApp />,
  document.getElementById('root')
);







// Examples 

// <div>
// 	<Item itemName="Hammer"
// 	itemDescription="bestPants ever"
// 	itemSrc="http://sdfsdfsd.jpg"
// 	/>
// </div>






