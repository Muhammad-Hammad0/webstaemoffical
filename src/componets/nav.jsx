// // pages/index.js
// import { useState } from "react";

// export default function Home() {
//   const [activeSection, setActiveSection] = useState(null);

//   const sections = [
//     { id: "service", title: "Service", content: "Service ki detail yahan likhein." },
//     { id: "it", title: "IT", content: "IT ki detail yahan likhein." },
//     { id: "ecommerce", title: "E-commerce", content: "E-commerce ki detail yahan likhein." },
//     { id: "about", title: "About", content: "About ki detail yahan likhein." },
//   ];

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//       <h1>Sections Example</h1>
//       {sections.map((section) => (
//         <div key={section.id} style={{ marginBottom: "10px" }}>
//           <button
//             style={{
//               width: "100%",
//               textAlign: "left",
//               padding: "10px",
//               fontSize: "16px",
//               cursor: "pointer",
//               border: "1px solid #ccc",
//               borderRadius: "5px",
//               backgroundColor: activeSection === section.id ? "#f0f0f0" : "#fff",
//             }}
//             onClick={() =>
//               setActiveSection(activeSection === section.id ? null : section.id)
//             }
//           >
//             {section.title}
//           </button>
//           {activeSection === section.id && (
//             <div style={{ padding: "10px", border: "1px solid #ddd", borderTop: "none" }}>
//               {section.content}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
// import { useState } from "react";

// export default function VerticalText() {
//   const [isVertical, setIsVertical] = useState(false);

//   return (
//     <div style={{ padding: "20px" }}>
//       <button onClick={() => setIsVertical(!isVertical)}>
//         Toggle Text Orientation
//       </button>
//       <div
//         style={{
//           writingMode: isVertical ? "vertical-rl" : "horizontal-tb",
//           textOrientation: "upright",
//           border: "1px solid #ccc",
//           padding: "10px",
//           marginTop: "20px",
//           fontSize: "16px",
//         }}
//       >
//         {isVertical ? "This is vertical text." : "This is horizontal text."}
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import "./Navbar.css";



// export default function MenuSlider() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <button onClick={toggleMenu}>
//         {isOpen ? "Cancel" : "Open Menu"}
//       </button>
//       <div className={`${styles.slider} ${isOpen ? styles.open : ""}`}>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Services</li>
//           <li>Contact</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

