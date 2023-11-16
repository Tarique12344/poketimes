import React from 'react'

 const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'blue', 'yellow', 'green', 'blue', 'orange', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * 6)];
    const className = randomColor + '-text';
  return (props) => (
    <div className={className}>
        <WrappedComponent {...props}/>

    </div>
  )
}
export default Rainbow 