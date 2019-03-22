import React, { Component }  from 'react'

class ListOrder extends Component {

    render() {
        const { count, increment, incrementAsync, isIncrementing, decrement, decrementAsync, isDecrementing, changePage } = this.props;
    return (
        <div>
        <h1>Home</h1>
        <p>Count: {count} </p>
    
        <p>
          <button onClick={increment}>Increment</button>
          <button onClick={incrementAsync} disabled={isIncrementing}>
            Increment Async
          </button>
        </p>
    
        <p>
          <button onClick={decrement}>Decrement</button>
          <button onClick={decrementAsync} disabled={isDecrementing}>
            Decrement Async
          </button>
        </p>
    
        <p>
          <button onClick={() => changePage()}>
            Go to about page via redux
          </button>
        </p>
      </div>
    )
  }
}
export default ListOrder;