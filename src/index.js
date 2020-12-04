import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Card } from './Card';
import { Score } from './Score';
import { Timer } from './Timer';
import BackgroundImage1 from './Images/whm012220lavenderset-015-1583933144.png';
import BackgroundImage2 from './Images/dumbbell-exercises-1577465289.png';
import BackgroundImage3 from './Images/30-day-challenge-sldl-lb-wo0-1576613501.png';
import BackgroundImage4 from './Images/goblet-squat-image-1577744214.png';
import BackgroundImage5 from './Images/wh-fitness-lateral-lunge-with-balancef-1598382504.png';
import UserImage1 from './Images/pexels-andrea-piacquadio-8.png';
import UserImage2 from './Images/pexels-andrea-piacquadio-3768918.png';
import copypng from './Images/copy.png';
import mute from './Images/Group 7.png';
import call from './Images/phone-call (2).png';
import novideo from './Images/Group 8.png';
import unmute from './Images/microphone-black-shape.png';
import video from './Images/video-player.png';

import './index.css';
import 'react-bootstrap';
import './bootstrap.min.css';

const CategoryImages = [
  { ImageLink: BackgroundImage1, CateName: "LEGS" },
  { ImageLink: BackgroundImage2, CateName: "ARMS" },
  { ImageLink: BackgroundImage3, CateName: "CORE" },
  { ImageLink: BackgroundImage4, CateName: "CARDIO" },
  { ImageLink: BackgroundImage5, CateName: "FUN" },
]

const CHALLENGES = [
  [
    { number: 400, text: 'Squats, 30 secs', trainer: "" }, { number: 400, text: '10 sequential push-ups', trainer: "Amanta Ashly Lee" }, { number: 400, text: 'Bicycle kicks, 30 secs', trainer: "" }, { number: 400, text: 'Jumping jacks, 30 secs', trainer: "" }, { number: 400, text: 'Tissue challenge', link: 'https://vm.tiktok.com/ZMJyT2hrk/', trainer: "" },
  ],
  [
    { number: 500, text: 'Tree pose', trainer: "Lian Agram William" }, { number: 500, text: '25 plank side walks', link: 'https://www.youtube.com/watch?v=hffjRd86Zno&t=10s', trainer: "" }, { number: 500, text: 'Shoulder tap planks, 60 secs', link: 'https://www.youtube.com/watch?v=QOCn3_iOAro', trainer: "" }, { number: 500, text: '30 Skaters', link: 'https://greatist.com/fitness/cardio-bodyweight-exercises#:~:text=13.%20Skaters', trainer: "Lian Agram William" }, { number: 500, text: 'Toilet paper juggling', link: 'https://www.tiktok.com/@7annhi/video/6806545685652065541?lang=en', trainer: "Amanta Ashly Lee" },
  ],
  [
    { number: 600, text: '20 lunges (10 on each side)', trainer: "Amanta Ashly Lee" }, { number: 600, text: '10 rolling push-ups', link: 'https://www.youtube.com/watch?v=Wu5fWBMG20w', trainer: "Lian Agram William" }, { number: 600, text: '80 Russian twists', trainer: "Lian Agram William" }, { number: 600, text: 'Alternating starfish jumps (30)', link: 'https://www.youtube.com/watch?v=x8vQrqEmAfo', trainer: "" }, { number: 600, text: 'Cup push-up challenge', link: 'https://www.tiktok.com/@alphaslegend/video/6857925564989312262', trainer: "" },
  ],
  [
    { number: 700, text: 'High knees, 75 secs', trainer: "" }, { number: 700, text: '20 dive bomber push-ups', link: 'https://www.youtube.com/watch?v=mvNcSF-nXg4', trainer: "" }, { number: 700, text: '50 crunches', trainer: "" }, { number: 700, text: '25 MCs + 25 JJs sequentially', trainer: "Amanta Ashly Lee" }, { number: 700, text: 'Rollie challenge', link: 'https://www.tiktok.com/@demibagby/video/6818994324437568774', trainer: "" },
  ],
  [
    { number: 800, text: '40 power jacks', link: 'https://www.youtube.com/watch?v=alaZwJE20Ds', trainer: "" }, { number: 800, text: '50 commandos', link: 'https://www.youtube.com/watch?v=yD7nl9Hh160', trainer: "" }, { number: 800, text: 'Longest plank', trainer: "" }, { number: 800, text: '25 long jumps with jog back', link: 'https://greatist.com/fitness/cardio-bodyweight-exercises#:~:text=14.%20Long%20jump', trainer: "" }, { number: 800, text: '10 flip cup + burpees', trainer: "" },
  ],
];

const trainerData = [
  { trainerName: "Lian Agram William", gradientColor: "linear-gradient(to right, #FF8993, #FEC180)", points: "1600pts", userImage: UserImage1  },
  { trainerName: "Amanta Ashly Lee", gradientColor: "linear-gradient(to right, #679FE4, #34EBE9)", points: "1800pts", userImage: UserImage2 }
];

class Game extends React.Component {

  constructor(props){
    super(props);
    this.state={
      ismute: false,
      isvideo: false
    }
  }


  componentDidMount() {
    axios.get('http://localhost:5000/api/v0/game/1').then(res => {
      console.log('GET finished');
      console.log(res);
    });
  }

  switch (value) {
    if( value === "mute" )
      this.setState({
        ismute: !this.state.ismute
      });
    else
      this.setState({
        isvideo: !this.state.isvideo
      })
  };

  render() {

    return (
      <div>
        <div className="leftmaindiv">
          <div className="jeopardy">
              <div className="jeopardy-table">
                <div className="category-row">
                  {CategoryImages.map(category => 
                    <>
                      <div className="category">
                          <img src={category.ImageLink} width="100%" className="catimgitem"/>
                          <div className="categoryName">
                            {category.CateName}
                          </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="jeopardy-squares">
                  {Array.from(CHALLENGES.entries()).map(
                    row_pair => <div className="jeopardy-row">{
                      Array.from(row_pair[1].entries()).map(
                        entry_pair => <Card text={entry_pair[1].text} trainerData={trainerData} trainer={entry_pair[1].trainer} number={entry_pair[1].number} storageKey={'board' + row_pair[0] + entry_pair[0]} link={entry_pair[1].link} />
                      )
                    }</div>)}
                </div>
              </div>
            </div>
          <div className="leftboxtext d-flex align-items-center">
            <div className="innertext">
              Amanta, your turn to pick
            </div>
          </div>
        </div>
        <div className="rightmaindiv">
          { trainerData.map((value)=>{
            return(
              <>
                <img src={value.userImage} width="100%" className="userlogoImage" />
                <div className="userText" style={{background: value.gradientColor}}>
                  {value.trainerName}
                  <div className="userPoints">
                    {value.points}
                  </div>
                </div>
              </>
            );
          }) }
        </div>
        <div className="d-flex align-items-center bottommaindiv">
          <div className="bottomleft">
            <img src={copypng} className="copyimg" />
            <div className="copytext">
              Copy Room Joining Code
            </div>
          </div>
          <div className="bottomcenter">
            <div className="bottomicons">
              { this.state.ismute ? 
                  <img src={unmute} onClick={ () => this.switch("mute") } className="bottomiconimg" />
                :
                  <img src={mute} onClick={ () => this.switch("mute") } className="bottomiconimg" />
              }
              <img src={call} className="bottomiconimg" />
              { this.state.isvideo ?
                  <img src={video} onClick={ () => this.switch("video") } className="bottomiconimg" />
                :
                  <img src={novideo} onClick={ () => this.switch("video") } className="bottomiconimg" />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
