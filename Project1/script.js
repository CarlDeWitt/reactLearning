class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {  
        return (    
            <div>
                <h1>Fun Facts about React</h1>
                <ul>
                    <li>Was fistly realeased in 2013</li>
                    <li>Is a JavaScript library</li>
                    <li>Is used for building user interfaces</li>
                    <li>Is maintained by Facebook</li>
                    <li>Loved by the people </li>
                </ul>
            </div>
        );
    }   
}

ReactDOM.render(<Page/>, document.getElementById('root'));