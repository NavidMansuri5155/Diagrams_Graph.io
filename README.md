# How To Create A Graph With A Diagram In React.js?

I have created a group like reject using a diagram. And this is a very easy way to make a graph. To understand it more, let's take an example.
<img src="https://github.com/beautifulinteractions/beautiful-react-diagrams/raw/master/beautiful-react-diagrams.png" alt="pic...." />
     

> EX. Let's say one owner has 10 clients. So the data of 10 clients will come out from the owner. There will be a condition in the client that he is also a client and can become the owner in future. When the client becomes the owner, the same condition will be there that he can be the owner as well as the client. This means that the input and output from its box will also be. 


### We will first install a graph 📈.
```javascript
$ beautiful-react-diagrams
```

After that, we will initialize the data in a variable in `JSON` format something like this.

```javascript
const data = createSchema({
  nodes: [
    {
      id: "node-1",
      content: "@NAVBIZADA_NAVID_MANSURI",
      coordinates: [650, 10],
      inputs: [
        { id: "port-11-b", alignment: "left" }
      ],
      outputs: [{ id: "port-12", alignment: "left" }]
    }
  ],
```
And after that, we will pass this variable to a function. so that he can show us.Something a bit like this.

```javascript
const UncontrolledDiagram = () => {

  const [schema, { onChange }] = useSchema(data);

```
We will get our leader back after the is done so that it is ready to run on our browser.

> NOTE: We have to keep in mind that our style should be within this heart and not a separate file for it. If you create a separate file for this then it will not work because to create this group it must have its own separate page. 

```javascript
 return (

    <div >
      <div style={{ height: "70rem", width: "88rem" }}>
        <Diagram schema={schema} onChange={onChange} />
      </div>
    </div>

  );
```

and after that we will pass the function which we created above.

```javascript
export default function App() {
  return (
    <>
      <UncontrolledDiagram />
    </>
  )
};
```
<hr />

## Project Code 👨‍💻
Diagram source code: https://github.com/NavidMansuri5155/Diagrams_Graph.io <br/>
Live Demo: https://navidmansuri5155.github.io/Diagrams_Graph.io

## ☕ coffee Features:

<ul>
  <li>Concise API</li>
  <li>Small and lightweight</li>
  <li>Easy to use</li>
  <li>Easy to customise</li>
</ul>

## Tech Stack 💻
<ul>
  <li>How to use react-diagrams. </li>
  <li>How to make owner and clients systems.</li>
  <li>How to make a graph page.</li>
  <li>How to pass two-time function.</li>
</ul>

  <hr />
  
## Thank you for reading 🙏

If you enjoyed this article or found it helpful, give it a thumbs-up 👍

Feel free to connect 👋

[Instagram](https://www.instagram.com/nabizada_navid_mansuri/), [Facebook](https://www.facebook.com/navid.mansuri.5/), [Twitter](https://twitter.com/NAVIDMANSURI7)
  
