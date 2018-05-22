import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './static.css';

class Header extends Component{
  render(){
    return (
      <div className="expanded row header">
        <div className="clearfix">
          <div className="float-left logo">
            <img src="http://www.iconninja.com/files/409/4/1006/axe-icon.svg" alt="axe" />
          </div>
          <Options />
        </div>
        <div className="headline text-center small-12 columns">
          <h1>The Dwarf Underground</h1>
          <h3>Delving deep for the <span className="gold">shiniest</span> news</h3>
        </div>
      </div>
    )
  }
}

class Options extends Component{
  render(){
    return(
      <div className="float-right nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Log in</a>
          </div>
    )
  }
}


class Section extends Component{
  constructor(){
    super();

    this.state = {
      text: ['Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Marquee selectus non provisio incongruous feline nolo contendre Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum',
       'Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium. Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Gratuitous octopus niacin, sodium glutimate.',
       'Avast! A stray goblin!',
       'Quote meon an estimate et non interruptus stadium. Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito.',
       'Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium.' ,
        'Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Marquee selectus non provisio incongruous feline nolo contendre Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum.']
    }
  }
  render(){
    return(
      <section className="article-body">
        <p><span className="article-start gold">E</span>psum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium.</p>
          {this.state.text.map(text => <p>{text}</p>)}
         </section>
    )
  }
}

class AboveImages extends Component{
  render(){
    return(
      <div className="small-12 columns other-articles">
          <h2>From around the Realm</h2>
          
          <Images />
          
        </div>
    )
  }
}

class Images extends Component{
  constructor(){
    super();

    this.state = {
     img: [{src: 'https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif', text:'Single Orcs in Indianapolis'},
            {src: 'https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg',text: 'You won\'t believe what\'s under this mountain'},
            {src: 'http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg', text:'Mine 20% more gold with One Weird Trick' },
            {src: 'http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg', text: 'Surprise for Indiana Hobbits born before 1999'}]
  }
  }
  render(){
    return(
      <div>
        {this.state.img.map(img => {
          return(
            <div className="small-6 medium-3 columns other-article">
            <a href="#">
              <img src={img.src} alt="orc" />
              <p>{img.text}</p>
            </a>  
          </div>
          )
        })}
      </div>
    )
  }
}

class Main extends Component{
  render(){
    return(
      <main className="expanded row">
        <div className="large-8 medium-12 columns article">
          <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
          <div className="avatar">
            <img src="http://www.zbrushcentral.com/attachment.php?attachmentid=376082" alt="author" />
            <div className="author-info">
              <p className="author-name">By Domri, son of Flug</p>
              <p className="date">on 28 April, 3018 of the Third Age</p>
            </div>
          </div>

          <Section />
          
          <Buttons />
        </div>
        <Aside />
  
        <AboveImages />
        
      </main>
    )
  }
}

class Aside extends Component{
  render(){
    return(
      <aside className="large-4 medium-12 columns">
          <div className="ad">
            <h3>The Last Hammer You'll Ever Need</h3>
            <div className="ad-image">
              <img src="https://s-media-cache-ak0.pinimg.com/originals/b4/d5/ab/b4d5ab4a82b8f7efc1adaf548df1d089.jpg" alt="hammer" />
              <a href="#">visit sponsor</a>
            </div>  
            <h4>Mining diamonds or crushing the skulls of your enemies, the SmashMaster 4000 does it all</h4>
            <p className="ad-text">Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium.</p>
  
            <p className="ad-text">Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Marquee selectus non provisio incongruous feline nolo contendre Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum.</p>
          </div>
        </aside>
    )
  }
}

class Buttons extends Component{
  constructor(){
    super();

    this.state = {
      classList: 'hide',
      comments: [],
      inputValue: '',
    }
  }

  handleClick(){
    this.setState({
      classList: '',
    })
  }

  handleSubmit(ev){
    ev.preventDefault();
    const comments = [...this.state.comments];
    comments.push(this.state.inputValue);
    this.setState({
      comments: comments,
      classList: 'hide',
      inputValue: '',
    })
  }

  updateInputValue(ev){
    this.setState({
      inputValue: ev.target.value,
    });
  }

  render(){
    return(
      <div className="article-links">
            <a onClick = {() => this.handleClick()} className="article-link" >
              <i className="fa fa-comments-o"></i>
              <span className="article-link-text">Comments</span>
            </a>
            <a className="article-link" href="#">
              <i className="fa fa-share"></i>
              <span className="article-link-text">Share Post</span>
            </a>
            <form className = {this.state.classList}>
              <input ref={input => input && input.focus()} type = "text" value = {this.state.inputValue} onChange = {(ev) => {this.updateInputValue(ev)}}>
              </input>
              <button type = "submit" onClick = {(ev) => this.handleSubmit(ev)}></button>
            </form>

            {this.state.comments.map(comment => <p>{comment}</p>)}
            
          </div>
    )
  }
}

class Footer extends Component{
  render(){
    return(
      <footer className="expanded row">
        <h6>&copy; 2017 Erebor Industries</h6>
        <h6 class="float-right">All rights reserved</h6>      
      </footer>
    )
  }
}

class App extends Component {
  render() {
    return (
      <body>
      
      <Header />
      <Main />
      <Footer />
      
    </body>
    );
  }
}

export default App;
