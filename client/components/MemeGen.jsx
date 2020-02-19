import React, {Component} from "react"

class MemeGen extends Component {
    constructor() {
        super()

        this.state = {
            text:'',
            randomImg:'http://i.imgflip.com/1bij.jpg',
            allMemeImgs:[]
                    }

this.handleChange = this.handleChange.bind(this)
this.handleSubmit = this.handleSubmit.bind(this)

    }

componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
    .then(response =>response.json()) 
    .then(response =>{
        const memes = response.data.memes
        
        this.setState({allMemeImgs:memes})
    })
}


handleChange(e) {
    this.setState({
        text: e.target.value
    })
}

handleSubmit(e){
    e.preventDefault()
    const randNum = Math.floor(Math.random()* this.state.allMemeImgs.length)
    const randMemeImg = this.state.allMemeImgs[randNum].url
    this.setState({randomImg:randMemeImg})

}


    render() {
        return (
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter text"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <br />
                    <br />
                    <button>Gen</button>
                    <br />
                    <br />
                    <div id="meme">
                        <p id="memeText">
                            {this.state.text}
                        </p>
                        <img src={this.state.randomImg} />
                    </div>
                </form>
            </div>
        )
    }
}

export default MemeGen