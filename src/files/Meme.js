import React, { useState } from 'react';
import memesData from './MemesData';

export default function Meme() {
    
    const [thingsArray, setThingsArrary] = useState(["Thing 1", "Thing 2"])
    const thingsElement = thingsArray.map(thing => <p>{thing}</p>)

    function addThing() {
        setThingsArrary(prevArray => {
            return [...prevArray, `Thing ${prevArray.length + 1}`]
        })
    }

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "./1.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)


	function getMemeImage() {
		const memesArray = allMemeImages
		const randomNumber = Math.floor(Math.random() * memesArray.length)
		const url = memesArray[randomNumber].url
        setMeme(prevMeme => (
            {...prevMeme, randomImage: url}
        ))
	}

    return (            
        <main className="meme">
            <div className="form">
                <input type="text" className="form--input" placeholder="Top Text" />
                <input type="text" className="form--input" placeholder="Bottom Text"/>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image...</button>
            </div>
            {/* {thingsElement} */}
            <img src={meme.randomImage} className="meme--image" />
        </main>
    )
}