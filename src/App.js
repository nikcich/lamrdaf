import './App.css';
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">

      <div className="head">
        <img className = "logoImg" src="https://media.discordapp.net/attachments/756344862944657428/756346155675287623/lamrwhite.png" ></img>
        <h1 className="lamr" id="lamrhead"> the one and only Lamr Daf </h1>
      </div>

      

      <div className = "top">
        <div className = "half">
          <div className="advert">
            <h1 className="lamr3" > become a member </h1>
            <h1 className="lamr3"> of the infamous </h1>
            <h1 className="lamr3"> lamr daf army </h1>
            <h1 className="lamr3"> join today </h1>
          </div>
          
        </div>
        <div className = "half">
          <img className= "halfImg" src="https://media.discordapp.net/attachments/500731868925394955/773720096450805760/lamrdafislamr.jpg"></img>
        </div>
      </div>

      <div className = "middle">
        <h1 className = "lamr4"> Testimonials</h1>

        <div className="pics"> 
          <img className = "picture" src="https://media.discordapp.net/attachments/507392638899716096/774791892038320128/PXL_20201107_211053893.MP.jpg" ></img>
          <img className = "picture" src="https://cdn.discordapp.com/attachments/269532516573118464/809886893298155580/unknown.png" ></img>
          <img className = "picture" src="https://cdn.discordapp.com/attachments/269532516573118464/809886775895130132/unknown.png" ></img>
        </div>


      </div>


      <div className = "third">
        <h1 className = "lamrthird">The Lamr Kingdom</h1>

        <div className="playerdiv">
          <ReactPlayer className = "player" url="https://www.youtube.com/watch?v=nsKPPzvHUvg" 
            height="100%"
            width = "100%"
          ></ReactPlayer>
        </div>
      </div>

 
      <div className="fourth">
        <div className="halffour">
          <div className = "box">
            <h1 className = "lamrbox">@isharren - lamr daf</h1>
          </div>

          <div className = "box">
            <h1 className = "lamrbox">@Nikolas - lamr daf bktch aeay</h1>
          </div>

          <div className = "box">
            <h1 className = "lamrbox">@TheMoostafian - lamr daf sire</h1>
          </div>

          <div className = "box">
            <h1 className = "lamrbox">@YammieNoob - lamr daf</h1>
          </div>
          
          <div className = "box">
            <h1 className = "lamrbox">@Spite - lamr daf boys</h1>
          </div>

          <div className = "box">
            <h1 className = "lamrbox">@Mommy - At first I was skeptical, but it works. Its lamr daf 100%.</h1>
          </div>

          <div className = "box">
            <h1 className = "lamrbox">@Kiko - its lamr or daf</h1>
          </div>
        </div>

        <div className = "halffour">
          <h1 className = "fourlamr">Join the lamr army today</h1>
        </div>
      
      </div>

      <div className = "fifth">
        <h1 className = "lamrthird">More Lamr Dafs</h1>


        <div className="playerdiv">
          <ReactPlayer className = "player" url="https://youtu.be/wbGlWCy1tzw" 
            height="100%"
            width = "100%"
          ></ReactPlayer>
        </div>



        <div className="pics"> 
          <img className = "picture" src="https://cdn.discordapp.com/attachments/269532516573118464/809887011191128104/unknown.png" ></img>
          <img className = "picture" src="https://cdn.discordapp.com/attachments/269532516573118464/809886893298155580/unknown.png" ></img>
          <img className = "picture" src="https://cdn.discordapp.com/attachments/269532516573118464/809886775895130132/unknown.png" ></img>
        </div>
      </div>


      
    

    </div>
  );
}

export default App;
