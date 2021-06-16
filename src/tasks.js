import { useState } from "react";

export const Task1 = () => {
    const [string, setString] = useState('');

    return (
        <div className="Task1">
            <h1>Task 1</h1>
            <p> Please write a function that reverses a string</p>
            <label>Write String </label>
            <input type="text" onChange={(e)=>{setString(e.target.value.split('').reverse().join(''))}}/> Reverse string: {string}
            <hr/>
        </div>
    );
}
 

export const  Task2 = () => {
    const [string, setString] = useState('');

    return ( 
        <div className="Task2">
            <h1>Task 2</h1>
            <p>Please write a function that filters out numbers from a list</p>
            <label>Write String </label>
            <input type="text" onChange={(e)=>{setString(e.target.value.replace(/[0-9]/g, ''))}}/> String with out numbers: {string}
            <hr/>
        </div>
    );
}

export const  Task3 = () => {


    return ( 
        <div className="Task3">
            <h1>Task 3</h1>
            <p>Please write a function that shows the usage of closures</p>
            <label>???????????? </label>
            <hr/>
        </div>
    );
}
 

export const  Task4 = () => {
    const [arr, setArr] = useState("[[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]");
    const [out, setOut] = useState([]);

    let tTab =[];
    const doTask4 = () =>{
        tTab = [];
        let tArrays = eval(arr);
        recu(tArrays);
        setOut(tTab);
    }

    let recu = (fArr) =>{
        fArr.forEach((x)=>{
            if( Array.isArray(x) )
                recu(x);
            else
            tTab.push(x);
        });
    }


    return ( 
        <div className="Task4">
            <h1>Task 4</h1>
            <p>Please write a recursive function that flattens an list of items<br/>
                example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]<br/>
                example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]</p>
            <label>Input  </label><input type="text" value={arr} onChange={(e)=>{setArr(e.target.value)}} /><button onClick={()=>{ doTask4()}}>Generate output</button><br/>
            <label>Output :</label>{out.toString()}
            <hr/>
        </div>
    );
}

export const  Task5 = () => {
    const [arr1, setArr1] = useState( "b,3,4,76,c");
    const [arr2, setArr2] = useState("a,b,4,76,21,e");
    const [out, setOut] = useState([]);

    const doTask5 = () =>{
        let tOut = [];
        let tArr1 =  arr1.split(',');
        let tArr2 =  arr2.split(',');

        tArr1.forEach((x)=>{
            if( tArr2.includes(x) )
                    tOut.push(x);              
        });
        setOut(tOut);
    }

    return ( 
        <div className="Task5">
            <h1>Task 5</h1>
            <p>Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)<br/>
                example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']<br/>
                example output ['b', 4, 76]</p>
            <label> 1 Array: [ </label><input type="text" value={arr1} onChange={(e) => setArr1(e.target.value)}/>]<br/>
            <label> 2 Array: [ </label><input type="text" value={arr2} onChange={(e) => setArr2(e.target.value)} />]<br/><br/>
            <button onClick={()=>{ doTask5() }}>Get Common Elements</button><br/>
            <label>Output :</label> {out.toString()}
            <hr/>
        </div>
    );
}

export const  Task6 = () => {
    const [arr1, setArr1] = useState( "b,3,4,76,c");
    const [arr2, setArr2] = useState("a,b,4,76,21,e");
    const [out, setOut] = useState([]);

    const doTask6 = () =>{
        let tOut = []
        let tArr1 =  arr1.split(',');
        let tArr2 =  arr2.split(',');

        tArr1.forEach((x)=>{
            if( tArr2.includes(x) ){
                let tIndex = tArr2.indexOf(x);
                if( tIndex > -1)
                    tArr2.splice(tIndex, 1);
            }else
                tOut.push(x);
        });

        tArr2.forEach((x)=>{
            tOut.push(x);
        });

        setOut(tOut);
    }

    return ( 
        <div className="Task6">
            <h1>Task 6</h1>
            <p>Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)<br/>
                example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']<br/>
                example output ['a', 3, 21, 'c', 'e']</p>
            <label> 1 Array: [ </label><input type="text" value={arr1} onChange={(e) => setArr1(e.target.value)}/>]<br/>
            <label> 2 Array: [ </label><input type="text" value={arr2} onChange={(e) => setArr2(e.target.value)} />]<br/><br/>
            <button onClick={()=>{ doTask6() }}>Get Diffrent Elements</button><br/>
            <label>Output :</label> {out.toString()}
            <hr/>
        </div>
    );
}

export const  Task7 = () => {
    const [data, setData] = useState( '{ "color": "Blue", "id": "22","size": "xl" }' );
    const [out, setOut]= useState([]);

    let tOut = [];
    const doTask7 = () =>{
        tOut = [];
        let tData = JSON.parse( data );

        Object.keys(tData).forEach((x)=>{
            let tArr = [x, tData[x]];
            tOut.push(tArr);
        });

        setOut(tOut);

    }

    return ( 
        <div className="Task7">
            <h1>Task 7</h1>
            <p>Please write a function that transforms an object to a list of [key, value] tuples. <br/>
                example input   {data}  <br/>
                example output [['color', 'blue'], ['id', '22'], ['size', 'xl']]</p>
            <label> Input :</label><input type="text" value={data} onChange={(e)=>setData(e.target.value)}/><br/><br/>
            <button onClick={()=>{ doTask7() }}> Get List </button><br/>
            <label>Output :</label>{JSON.stringify(out)}
            <hr/>
        </div>
    );
}

export const  Task8 = () => {
    const [data, setData] = useState( "[['color', 'blue'], ['id', '22'], ['size', 'xl']]" );
    const [out, setOut]= useState({});

    let tObj = {};
    const doTask8 = () =>{
        tObj = {};

        let tArrays = eval(data);
        tArrays.forEach((x)=>{
            tObj[x[0]] = x[1];
        });

        setOut(tObj);
    }

    return ( 
        <div className="Task8">
            <h1>Task 8</h1>
            <p>Please write a function that transforms a list of [key, value] tuples to object. // reverse or task 7<br/>
                example input [['color', 'blue'], ['id', '22'], ['size', 'xl']]<br/>
                example output "color": "Blue", "id": "22","size": "xl" </p>
            <label> Input :</label><input type="text" value={data} onChange={(e)=>setData(e.target.value)}/><br/><br/>
            <button onClick={()=>{ doTask8() }}> Get List </button><br/>
            <label>Output :</label> { JSON.stringify(out) }
            <hr/>
        </div>
    );
}


export const  Task9 = () => {
    const [arr1, setArr1] = useState( "1,2,3");
    const [arr2, setArr2] = useState("4,5,6,7");
    const [out, setOut] = useState([]);

    const doTask9 = () =>{
        let tOut = []
        let tArr1 =  arr1.split(',');
        let tArr2 =  arr2.split(',');

        if(tArr1.length >= tArr2.length){
            for(let i=0; i <tArr2.length; i++){
                let tArry = [tArr1[i], tArr2[i]];
                tOut.push(tArry);
            }

        }else{
            for(let i=0; i <tArr1.length; i++){
                let tArry = [tArr1[i], tArr2[i]];
                tOut.push(tArry);
            }
        }

        setOut(tOut);
    }

    return ( 
        <div className="Task9">
            <h1>Task 9</h1>
            <p>Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.<br/>
                example input [1,2,3], [4,5,6,7]<br/>
                example output [[1,4], [2,5], [3,6]]</p>
            <label> 1 Array: [ </label><input type="text" value={arr1} onChange={(e) => setArr1(e.target.value)}/>]<br/>
            <label> 2 Array: [ </label><input type="text" value={arr2} onChange={(e) => setArr2(e.target.value)} />]<br/><br/>
            <button onClick={()=>{ doTask9() }}>Combine</button><br/>
            <label>Output :</label> {JSON.stringify(out)}
            <hr/>
        </div>
    );
}

export const  Task10 = () => {
    const [arr1, setArr1] = useState( "a,b,c,d");
    const [arr2, setArr2] = useState('{ "a": { "b": { "c": { "d": "23" } } } }');
    const [out, setOut] = useState([]);

    const doTask10 = () =>{
        let tOut = []
        let keys = arr1.split(',');
        let tObj = JSON.parse(arr2);

        keys.forEach((x)=>{
            // if( typeof(tObj[x]) != "undefined" ){
                console.log(typeof(tObj[x]));
                // tOut.push(tObj[x]);
            
        });
        setOut(tOut);

       
    }

    return ( 
        <div className="Task10">
            <h1>Task 10</h1>
            <p>Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.<br/>
                example inputs ['a', 'b', 'c', 'd'], {arr2}<br/>
                example output '23'</p>
            <label> Array: [ </label><input type="text" value={arr1} onChange={(e) => setArr1(e.target.value)}/>]<br/>
            <label> Object:  </label><input type="text" value={arr2} onChange={(e) => setArr2(e.target.value)} /><br/><br/>
            <button onClick={()=>{ doTask10() }}>Combine</button><br/>
            <label>Output :</label> {JSON.stringify(out)}
            <hr/>
        </div>
    );
}

export const  Task11 = () => {
    const [arr1, setArr1] = useState('{"a": "b", "c": "d" }');
    const [arr2, setArr2] = useState('{"c": "d", "a": "b" }');
    const [out, setOut] = useState(true);

    const doTask11 = () =>{
        let tObj1 = JSON.parse(arr1);
        let tObj2 = JSON.parse(arr2);

        if( Object.keys(tObj1).length ===  Object.keys(tObj2).length)
            setOut(true);
        else
            setOut(false);

       
    }

    let text1 = '{ "a": "c", "c": "a" }';
    let text2 = '{ "c": "d", "a": "b", "q": "s" }';

    return ( 
        <div className="Task11">
            <h1>Task 11</h1>
            <p>Please write compare function which compares 2 objects for equality.<br/>
                example input {arr1},  {arr2} /// output true<br/>
                example input {text1}, {text2}  /// output false</p>
            <label> Object:  </label><input type="text" value={arr1} onChange={(e) => setArr1(e.target.value)}/><br/>
            <label> Object:  </label><input type="text" value={arr2} onChange={(e) => setArr2(e.target.value)} /><br/><br/>
            <button onClick={()=>{ doTask11() }}>Compare</button><br/>
            <label>Output :</label> {out.toString()}
            <hr/>
        </div>
    );
}

export const  Task12 = () => {
    const [arr1, setArr1] = useState("color,size");
    const [arr2, setArr2] = useState('{ "color": "Blu", "id": "22", "size": "xl" }');
    const [out, setOut] = useState({});

    const doTask12 = () =>{
        let tOut = {};
        let keys = arr1.split(',')
        let tObj = JSON.parse(arr2);

        Object.keys(tObj).forEach((x)=>{
            if(!keys.includes(x))
                tOut[x] = tObj[x];
        });

        setOut(tOut);
       
    }

    let text1 = '{ "id": "22" }';

    return ( 
        <div className="Task12">
            <h1>Task 12</h1>
            <p>Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list<br/>
                example input ['color', 'size'], {arr2}<br/>
                example output {text1}</p>
            <label> Array:  </label>[<input type="text" value={arr1} onChange={(e) => setArr1(e.target.value)}/>]<br/>
            <label> Object:  </label><input type="text" value={arr2} onChange={(e) => setArr2(e.target.value)} /><br/><br/>
            <button onClick={()=>{ doTask12() }}>Generate</button><br/>
            <label>Output :</label> {JSON.stringify(out)}
            <hr/>
        </div>
    );
}