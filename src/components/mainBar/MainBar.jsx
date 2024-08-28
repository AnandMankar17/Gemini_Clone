import React, { useState } from 'react'
import './MainBar.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import {AppContext} from '../../contexts/Context'

const MainBar = () => {
  const {
        input,
        setInput,
        onSent,
        recentPrompt,
        setRecentPrompt,
        prevPrompts,
        setPrevPrompts,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData,
        handleKeyDown

  } = useContext(AppContext);


  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
        {!showResult
        ?<>
            <div className="main-container">
          <div className="greet">
            <p><span>Hello, Dev.</span></p>
            <p>How can I help you today?</p>
          </div>
                <div className="cards">
                      <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                      </div>
                      <div className="card">
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt="" />
                      </div>
                      <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="" />
                      </div>
                      <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt="" />
                      </div>
                </div>
        </div>
        </>
        :<>
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {!loading
              ?<p dangerouslySetInnerHTML={{__html:resultData}}></p>
              :<div className='loader'>
              <hr />
              <hr />
              <hr />
              </div>
            }
            </div>
          </div>
        </>
      }
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>{setInput(e.target.value)}} onKeyDown={handleKeyDown} value={input} type="text" placeholder='Enter a prompt here'/>
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={()=>onSent(input)} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className='bottom-info'>
            Gemini may display inaccurate info, includeing about people, so double-check its responses. Your privacy and GeminiApps
          </p>
        
      </div>
    </div>
  )
}

export default MainBar
