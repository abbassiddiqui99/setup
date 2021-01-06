import React from "react";

const Categories = ({ categories, filterItemsHandler }) => {
  // console.log(categories);
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        // console.log(typeof category);
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItemsHandler(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
// const Categories = ({ categories, filterItemHandler }) => {
//   console.log(categories);
//   return (
//     <div className="btn-container">
//       {categories.map((category, index) => {
//         console.log(category);
//         return (
//           <button
//             type="button"
//             key={index}
//             className="filter-btn"
//             onClick={() => {
//               filterItemHandler(category);
//             }}
//           >
//             {category}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

export default Categories;
