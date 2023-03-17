// import { Input } from "@material-tailwind/react";
import {useState, useEffect} from 'react'
// import { Button } from "@material-tailwind/react";
import {
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
// import {fetchData} from '../brains/getRandomText'
import DisplayPoems from './displayPoem'
 
export default function InputWithIcon() {
    const [result, setResult] = useState('')
    const [poem, setPoem] = useState('')
    const [nums, setNums] = useState(0)
    const [theme, setTheme] = useState('')


    async function handleSearch(e) {
        const { value } = e.target;
        setResult({ result: await fetchData(value) })

    }
    async function fetchData(val) {
        const trimVal = val.trim().toLowerCase();
        if (trimVal.length > 0) {
            const api = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${trimVal}`;

            const response = await fetch(api);
            if (!response.ok) {
                throw Error(response.statusText)
            }
            // await console.log(response.json())
            return await response.json();
        }
    }
    

    async function handleInput(event) {
        event.preventDefault()
        // console.log(event.target[0].value)
        setTheme(event.target[0].value)
        // console.log(event.target[1].value)
        // let data = await fetchData(event.target[0].value)
        // console.log(data)
        setResult({ result: await fetchData(event.target[0].value) })
        // console.log("i am res", result)
        setNums(event.target[1].value)
        // console.log("i am res.res", await result?.result.query)
        // setNums(8)
    }
   

      useEffect(() => {
        let poemText = []
        // console.log("I AM EFFECT RESULT", result)
        if(result){
            // console.log("butt1")
            if(result.result.query){
                // console.log("butt2")
        if (result.result.query.search.length >= nums){
            for (let i = 0; i < nums; i++){
                // console.log(result.result.query.search[i].snippet.split(/[,\\.>]+/).pop())
                poemText.push(result.result.query.search[i].snippet.split(/[,\\.>]+/).pop())
                // poemText.push(result.result.query.search.split('>').pop)
            }
        }
        else {
            for (let i = 0; i < result.result.query.search.length; i++){
                // poemText.push(result.result.query.search.split('>').pop)
                // console.log(result.result.query.search)
                // console.log(result.result.query.search[i].snippet.split(/[,\\.>]+/).pop())
                poemText.push(result.result.query.search[i].snippet.split(/[,\\.>]+/).pop())



            }
        }
        // console.log("mooooo")

            // console.log("poemText", poemText)
            setPoem(poemText)
        }
    }
      }, [result])
      


  return (
<div>
<div class="flex w-72 flex-col items-end gap-6">
  {/* <div class="relative h-10 w-full min-w-[200px]">
    <input
      class="peer h-full w-full rounded-[7px] border border-red-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-red-500 placeholder-shown:border-t-red-500 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "
    />
    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-red-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-red-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-red-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Input Error
    </label>
  </div> */}
  <form class='p-5'
  onSubmit={handleInput}>
  <div class="relative w-230 ..." style={{height:'9rem'}}>
  <div class="relative h-25 p-2 w-full min-w-[200px]">
    <input
      class="peer text-green-400 h-full w-full rounded-[7px] border border-green-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-500 placeholder-shown:border-t-green-500 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "
    />
    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-0.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-green-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-green-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Input a poem theme
    </label>
  </div>
  <div class="relative h-25 p-2 w-full min-w-[200px]">
    <input
      class="peer text-green-400 h-full w-full rounded-[7px] border border-green-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-500 placeholder-shown:border-t-green-500 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "
      type="text"
      inputMode="numeric"
    />
    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-0.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-green-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-green-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      number of lines
    </label>
  </div>
  {/* <br/> */}
  <button className="flex text-2xl absolute bottom-30 right-0 border-solid border-2 rounded-tl-md p-2 border-green-500 text-green-400 items-center gap-5 p-3">
        Generate
        <ArrowPathIcon strokeWidth={2} className="h-5 w-5" />
      </button>
      </div>
  </form>
  <br/>
  <br />
</div>
 <br />
  <DisplayPoems poem={poem} title={theme}/>
</div>
      );
}