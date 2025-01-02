import React from "react";
/**
 * used through another component
 * truyen theo props tu tren xuong duoi
 */

class ChildComponent extends React.Component {
    render() {
        console.log(`>> check props:`, this.props)

        let { name, age } = this.props

        return (
            <>
                <div>~~~~~Child Component: {name} - {age}~~~~~</div>
            </>
        )
    }
}

export default ChildComponent;