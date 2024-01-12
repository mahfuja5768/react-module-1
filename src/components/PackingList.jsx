/* eslint-disable react/prop-types */
function Item({ name, isPacked }) {
     let itemContent = name;
  if (isPacked) {
    itemContent = name + " ✔";
  }
  //   if (isPacked) {
  //     //   return null;
  //     return <li className="item">{name} ✔</li>;
  //   }
  //   return <li className="item">{name}</li>;
  return (
    // <li className="item">
    //   {name}
    //   {isPacked ? "✔" : " "}
    // </li>

    //and

    // <li className="item">
    //   {name}
    //   {isPacked && "✔" }
    // </li>
    <li className="item">{itemContent}</li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Rides Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

// function Item({ name, importance }) {
//   return (
//     <li className="item">
//       {name} 
//        {importance < 0 && ''}
//       {importance > 0 && <i>(Importance: {importance})</i>}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item 
//           importance={9} 
//           name="Space suit" 
//         />
//         <Item 
//           importance={0} 
//           name="Helmet with a golden leaf" 
//         />
//         <Item 
//           importance={6} 
//           name="Photo of Tam" 
//         />
//       </ul>
//     </section>
//   );
// }

// just for memory
// const lang = "JavaScript1";

// const result1 = lang && "JavaScript"; // left side truthy hole right side return korbe, otherwise left side return korbe

// const result2 = lang || "JavaScript"; // left side falsy hole right side return korbe, otherwise left side return korbe

// const result3 = lang ?? "JavaScript"; // Nullish Coalescing Operator: left side Nullish (Null or Undefined) hole right side return korbe, otherwise left side return korbe

// console.log(result1); // JavaScript
// console.log(result2); // JavaScript1
// console.log(result3); // JavaScript1