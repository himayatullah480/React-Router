    import React from 'react'
    import img from '../src/assets/android.png'
    import ios from '../src/assets/ios.jpg'

    export default function Services() {
    return (
        <div>
        <div id='android'>
            <p>android app</p>
            <img src={img} alt=""  id='khani'/>
        
        </div>
        <div id='ios'>
            <p>ios development</p>
            <img src={ios} alt=""  id='ioss'/>

        </div>

        </div>
    
    )
}
