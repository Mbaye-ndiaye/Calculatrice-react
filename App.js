class Calculatrice extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            // result: '',
            value: ''
        }
    } 
    handleChange = (e) => {
        e.preventDefault();
    }
   
    handleClick = (e) => {
        const name = e.target.name || e.target.value
        this.setState((prev) => ({
            value: prev.value + name
        }))
    }

    clear = () => {
        this.setState({value: ''})
        // console.log(e);
    }
    backpace = () => {
        // const {value} = this.state
        this.setState({value: this.state.value.slice(0, -1)})
       
    }

    calculate = () => {
        try {
            this.setState({value: eval(this.state.value).toString()})
            // return value
        } catch (error) {
            this.setState({value:'error'})
            
        }
    }

    render() {
       
        return (
            <div className='container'>
                <form className=''>
                    <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='0'/>
                </form>
                <div className='keypod'>
                    <button  onClick={this.clear} id='clear'>Clear</button>
                    <button  onClick={this.backpace} id='backpace'>C</button>
                    <button  name='%' onClick={this.handleClick}>%</button>
                    <button   name='7' onClick={this.handleClick}>7</button>
                    <button  name='8' onClick={this.handleClick}>8</button>
                    <button  name='9' onClick={this.handleClick}>9</button>
                    <button  name='x' onClick={this.handleClick}>&times;</button>
                    <button  name='4' onClick={this.handleClick}>4</button>
                    <button  name='5' onClick={this.handleClick}>5</button>
                    <button  name='6' onClick={this.handleClick}>6</button>
                    <button  name='-' onClick={this.handleClick}>&ndash;</button>
                    <button  name='1' onClick={this.handleClick}>1</button>
                    <button  name='2' onClick={this.handleClick}>2</button>
                    <button  name='3' onClick={this.handleClick}>3</button>
                    <button  name='+' onClick={this.handleClick}>+</button>
                    <button  name='0' onClick={this.handleClick}>0</button>
                    <button  name='.' onClick={this.handleClick}>.</button>
                    <button onClick={this.calculate} id='result'>=</button>
                </div>
            </div>
        ) 
    }
}




ReactDOM.render(<Calculatrice />, document.getElementById('root'))