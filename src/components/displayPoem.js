import Typewriter from 'typewriter-effect';

export default function App(props) {

    // console.log("props.poem", props.poem)
  return (
<div>      


< div className="text-green-500">

{!props.poem && <Typewriter
  options={{
    strings: ['Hello',  'Create a poem from Wikipedia', 'input text', 'then the number of lines you want your poem', 'and I will generate one for you!'],
    autoStart: true,
    loop: true,
  }}
/>}

{/* {props && props.poem && props.poem.length > 0 &&
<Typewriter
    options={{
        // strings: props.poem,
        // autoStart: true,
        delay: 75,
        // loop: true,
      }}
  onInit={(typewriter) => {
    // typewriter.typeString('Hello World!')
    typewriter.typeString(props.poem.join('\n').replace(/&quot;|&#039;/g, "'"))

      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
} */}


<br />
<br />
{props && props.poem && props.poem.length > 0 && 
<h2 className='text-2xl'> Poem on {props.title}</h2>}
<br />
{props && props.poem && props.poem.length > 0  &&
props.poem.map((line, index)=><Typewriter
  options={{
    strings: line.replace(/&quot;|&#039;/g, "'"),
    autoStart: true,
    delay: 75,
    // loop: true,
  }}
  key={index}
/>)
}

<br />
<br />
{/* <Typewriter
  options={{
    strings: props.poem,
    autoStart: true,
    delay: 75,
    loop: true,
  }}
/> */}
</div>


  </div>
  )
}