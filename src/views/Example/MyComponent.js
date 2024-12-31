import React from "react";

/**
 * JSX -> tra ve 1 khoi html
 * 
 * su dung
 *      <React.Fragment> </React.Fragment> hoac <> </>
 * de tra ve nhieu khoi html
 * 
 * su dung js trong html voi {}
 */


class MyComponent extends React.Component {

    state = { //obj, key: value
        name1: 'roy',
        name2: 'yamaha',
        namex: '~input~',
    }

    handleOnChangeName = (event) => {
        this.setState({
            namex: event.target.value
        })
    }

    handleOnClickBtn = () => {
        alert("Thanks for clicked.");
    }

    render() {

        let name = "roy";

        return (
            <>
                <div className="1st">
                    Hello from my component!
                </div>
                <div className="2nd">
                    <div>
                        My name is {name}
                    </div>
                    <div>
                        Mne zavut {this.state.name1}, ili {this.state["name2"]}
                    </div>
                    <div>
                        <input value={this.state.namex} type="text"
                            onChange={(event) => this.handleOnChangeName(event)}></input>
                        -----Ten toi la {this.state.namex}
                    </div>
                </div>
                <div className="3rd">
                    <button onClick={() => this.handleOnClickBtn()}>
                        Click me!
                    </button>
                </div>
            </>
        )
    }
}

export default MyComponent;