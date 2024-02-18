import React from 'react'

export default function Meme() {

  const [meme, setmeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })


  const [allMemes, setAllmemes] = React.useState()

  function handleChange(event) {
    const { name, type, value } = event.target
    setmeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))

  }


  console.log("ssss*")


  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(res => setAllmemes(res.data))
  },[])

  function getMemeImage() {

    let allmemeArr = allMemes.memes

    const randomNumber = Math.floor(Math.random(allmemeArr.length) * 100)

    const url = allmemeArr[randomNumber].url
    setmeme(prev => ({
      ...prev,
      randomImage: url
    }))
  }





  return (
    <main>
      <div className="form">
        <div>
          <label className="form--label">Top text</label>
          <input type="text" placeholder="Top text" className="form--input" value={meme.topText} onChange={handleChange} name="topText" />
        </div>


        <div>
          <label className="form--label" >Bottom text</label>


          <input type="text" placeholder="Bottom text" className="form--input" onChange={handleChange} name="bottomText" />
        </div>


        <button className="form--button" onClick={getMemeImage} >
          Get a new meme image 🖼
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
     
    </main>
  )
}
