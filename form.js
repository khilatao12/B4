class logIn{
    constructor(type,label,placeholder){
        this.container = document.createElement('div')

        this.label = document.createElement('label')
        this.label.innerHTML = label

        this.input = document.createElement('input')
        this.input.type = type
        this.input.placeholder = placeholder

    }
    render(){
        this.container.appendChild(this.label)
        this.container.appendChild(this.input)
        
        return this.container
    }
}
const dom = document.querySelector('.body')
let username = new logIn("Text","Username :","Name")
dom.appendChild(username.render())
let password = new logIn("password","Password :","Password")
dom.appendChild(password.render())

const submit = document.createElement('button')
submit.innerHTML="Submit"
dom.appendChild(submit)