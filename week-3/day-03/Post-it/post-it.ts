'use strict'
export{}

/*Post-it

    Create a PostIt a class that has
        a backgroundColor
        a text on it
        a textColor
    Create a few example post-it objects:
        an orange with blue text: "Idea 1"
        a pink with black text: "Awesome"
        a yellow with green text: "Superb!"
*/
/*
class PostIt {
     background : string
     text : string
     textColor : string
}

let text1 = new PostIt()
    text1.background='orange'
    text1.text='Idea 1'
    text1.textColor='blue'

let text2 = new PostIt()
    text2.background='pink'
    text2.text='Awesome'
    text2.textColor='blue'

let text3 = new PostIt()
    text3.background='yellow'
    text3.text='Superb!'
    text3.textColor='green'

___________________________________________________________________*/



class PostIt {
    private background : string
    private text : string
    private textColor : string 

    constructor(background : string, text: string, textColor: string){
        this.background= background;
        this.text= text;
        this.textColor= textColor;
    }

}

 let text1 = new PostIt('orange', 'Idea-1', 'blue')
 let text2 = new PostIt('pink','Awesome!','Blue')
 let text3 = new PostIt('yellow','Superb!','Green')