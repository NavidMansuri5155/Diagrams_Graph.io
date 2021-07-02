import React from "react";
import "beautiful-react-diagrams/styles.css";
import Diagram, { createSchema, useSchema } from "beautiful-react-diagrams";
import "./App.css"



const data = createSchema({
  nodes: [
    {
      id: "node-1",
      content: "@ANAND PATEL",
      coordinates: [650, 10],
      inputs: [
        { id: "port-11-b", alignment: "left" }
      ],
      outputs: [{ id: "port-12", alignment: "left" }]

    },
    {
      id: "node-2",
      content: "vishal_M",
      coordinates: [30, 126],
      inputs: [
        { id: "port-12-b", alignment: "left" }
      ],
      outputs: [
        { id: "port-13", alignment: "left" },

      ]
    },
    {
      id: "node-3",
      content: "Siddik",
      coordinates: [160, 127],
      inputs: [
        { id: "port-13-b", alignment: "left" }
      ],
      outputs: [
        { id: "port-14", alignment: "left" },

      ]
    },
    {
      id: "node-4",
      content: "Subhash",
      coordinates: [270, 126],
      inputs: [
        { id: "port-14-b", alignment: "left" }
      ],
      outputs: [
        { id: "port-15", alignment: "left" },
      ]
    },
    {
      id: "node-5",
      content: "Shubhadip",
      coordinates: [400, 126],
      inputs: [
        { id: "port-16-b", alignment: "left" }
      ],
      outputs: [
        { id: "port-17", alignment: "left" },
      ]
    },
    {
      id: "node-6",
      content: "Parmeshwar",
      coordinates: [660, 125],
      inputs: [
        { id: "port-18-b", alignment: "left" }
      ],
      outputs: [
        { id: "port-19", alignment: "left" },
      ]
    },
    {
      id: "node-7",
      content: "Anmol",
      coordinates: [930, 125],
      inputs: [
        { id: "port-20-b", alignment: "left" }
      ],
      outputs: [
        { id: "port-21", alignment: "left" },
      ]
    },
    {
      id: "node-8",
      content: "Sampath",
      coordinates: [1050, 125],
      inputs: [
        { id: "port-22-b", alignment: "left" }
      ],
      outputs: [
        { id: "port-23", alignment: "left" },
      ]
    },
    {
      id: "node-9",
      content: "Satpal",
      coordinates: [1180, 125],
      inputs: [
        { id: "port-24-b", alignment: "left" }
      ],
      outputs: [
        { id: "port-25", alignment: "left" },
      ]
    },
    {
      id: "node-10",
      content: "Rajkumar",
      coordinates: [1290, 125],
      inputs: [
        { id: "port-25-b", alignment: "left" }
      ],
      outputs: [
        { id: "port-26", alignment: "left" },
      ]
    },
    {
      id: "node-11",
      content: "Ankit",
      coordinates: [20, 570],
      inputs: [
        { id: "port-27-b", alignment: "left" }
      ],
      outputs: [
        { id: "port-28", alignment: "left" },
      ]
    },
    {
      id: "node-12",
      content: "Harshal",
      coordinates: [70, 430],
      inputs: [{ id: "port-81", alignment: "left" }],
      outputs: [{ id: "port-82", alignment: "right" }]
    },
    {
      id: "node-13",
      content: "Dhruv",
      coordinates: [140, 570],
      inputs: [
        { id: "port-29-b", alignment: "left" }
      ],
      outputs: [
        { id: "port-30", alignment: "left" },
      ]
    }, {
      id: "node-14",
      content: "Shubham_k",
      coordinates: [180, 430],
      inputs: [{ id: "port-81", alignment: "left" }],
      outputs: [{ id: "port-82", alignment: "right" }]
    },
    {
      id: "node-15",
      content: "Pravin",
      coordinates: [270, 570],
      inputs: [
        { id: "port-31-b", alignment: "left" }
      ],
      outputs: [
        { id: "port-32", alignment: "left" },
      ]
    }, {
      id: "node-16",
      content: "Hemant",
      coordinates: [330, 430],
      inputs: [{ id: "port-81", alignment: "left" }],
      outputs: [{ id: "port-82", alignment: "right" }]
    },
    {
      id: "node-17",
      content: "Ranjan",
      coordinates: [400, 570],
      inputs: [
        { id: "port-29-b", alignment: "left" }
      ],
      outputs: [
        { id: "port-30", alignment: "left" },
      ]
    }, {
      id: "node-18",
      content: "Suraj_k",
      coordinates: [460, 430],
      inputs: [{ id: "port-81", alignment: "left" }],
      outputs: [{ id: "port-82", alignment: "right" }]
    },
    {
      id: "node-19",
      content: "Suraj Sah",
      coordinates: [670, 330],
      inputs: [{ id: "port-81", alignment: "left" }],
      outputs: [{ id: "port-82", alignment: "right" }]
    }, {
      id: "node-20",
      content: "Tushar",
      coordinates: [927, 570],
      inputs: [
        { id: "port-31-b", alignment: "left" }
      ],
      outputs: [
        { id: "port-32", alignment: "left" },
      ]
    },
    {
      id: "node-21",
      content: "Rahul Sarayam",
      coordinates: [1030, 430],
      inputs: [{ id: "port-81", alignment: "left" }],
      outputs: [{ id: "port-82", alignment: "right" }]
    },
    {
      id: "node-22",
      content: "Nasir",
      coordinates: [1180, 570],
      inputs: [{ id: "port-81", alignment: "left" }],
      outputs: [{ id: "port-82", alignment: "right" }]
    }, {
      id: "node-23",
      content: "Akshay",
      coordinates: [1310, 430],
      inputs: [{ id: "port-81", alignment: "left" }],
      outputs: [{ id: "port-82", alignment: "right" }]
    },
    {
      id: "node-24",
      content: "Aarif_A",
      coordinates: [90, 850],
      inputs: [{ id: "port-81", alignment: "left" }],
      outputs: [{ id: "port-82", alignment: "right" }]
    }, {
      id: "node-25",
      content: "Saikiran",
      coordinates: [15, 950],
      inputs: [{ id: "port-81", alignment: "left" }],
      outputs: [{ id: "port-82", alignment: "right" }]
    },
    {
      id: "node-26",
      content: "Rajesh Anuragi",
      coordinates: [150, 950],
      inputs: [{ id: "port-81", alignment: "left" }],
      outputs: [{ id: "port-82", alignment: "right" }]
    },
    {
      id: "node-27",
      content: "Abhay",
      coordinates: [270, 850],
      inputs: [{ id: "port-81", alignment: "left" }],
      outputs: [{ id: "port-82", alignment: "right" }]
    },
    {
      id: "node-28",
      content: "Priyanshu",
      coordinates: [350, 950],
      inputs: [{ id: "port-81", alignment: "left" }],
      outputs: [{ id: "port-82", alignment: "right" }]
    },
    {
      id: "node-29",
      content: "Akshit_B",
      coordinates: [450, 850],
      inputs: [{ id: "port-81", alignment: "left" }],
      outputs: [{ id: "port-82", alignment: "right" }]
    },
    {
      id: "node-30",
      content: "Amol",
      coordinates: [890, 850],
      inputs: [{ id: "port-81", alignment: "left" }],
      outputs: [{ id: "port-82", alignment: "right" }]
    },




  ],
  links: [
    // note 1
    { input: "node-1", output: "node-2" },
    { input: "node-1", output: "node-3" },
    { input: "node-1", output: "node-4" },
    { input: "node-1", output: "node-5" },
    { input: "node-1", output: "node-6" },
    { input: "node-1", output: "node-7" },
    { input: "node-1", output: "node-8" },
    { input: "node-1", output: "node-9" },
    { input: "node-1", output: "node-10" },

    // note 2
    { input: "node-2", label: 'JS', output: "node-11" },
    { input: "node-2", label: 'Python', output: "node-12" },
    // note 3 
    { input: "node-3", label: 'JS', output: "node-13" },
    { input: "node-3", label: 'Python', output: "node-14" },
    // note 4
    { input: "node-4", label: 'JS', output: "node-15" },
    { input: "node-4", label: 'Python', output: "node-16" },
    // note 5
    { input: "node-5", label: 'JS', output: "node-17" },
    { input: "node-5", label: 'Python', output: "node-18" },
    // note 6
    { input: "node-6", label: 'JS', output: "node-19" },
    // note 7
    { input: "node-7", label: 'JS', output: "node-20" },
    // note 8
    { input: "node-8", label: 'Python', output: "node-21" },
    // note 9
    { input: "node-9", label: 'Python', output: "node-22" },
    // note 10
    { input: "node-10", label: 'Python', output: "node-23" },
    // note 11
    { input: "node-11", label: 'Python', output: "node-24" },
    { input: "node-11", label: 'Python', output: "node-25" },
    // note 13
    { input: "node-13", label: 'Python', output: "node-26" },
    // note 15
    { input: "node-15", label: 'Python', output: "node-27" },
    // note 17
    { input: "node-17", label: 'Python', output: "node-28" },
    { input: "node-17", label: 'Python', output: "node-29" },
    // note 20
    { input: "node-20", label: 'Python', output: "node-30" },

  ],


});

const UncontrolledDiagram = () => {



  const [schema, { onChange }] = useSchema(data);


  return (

    <div >
      <div style={{ height: "70rem", width: "88rem" }}>
        <Diagram schema={schema} onChange={onChange} />
      </div>
    </div>

  );
};



export default function App() {
  // C_diagrams
  return (
    <>
      <UncontrolledDiagram />
    </>
  )
};


