// "use client";
// import Image from "next/image"; // next/image komponenti
// import React from "react";
// import styled from "styled-components";
// import NavIcon from "./components/rasmlar/NavIcon.jpg"; // Rasmingizni to'g'ri yo'ldan import qiling

// // Header bo'limi
// const Header = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: start;
//   width: 100%;
//   height: 100vh;
//   margin-top: 1rem;
// `;

// const Menu = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 80%;
//   height: 4rem;
//   border-bottom: 2px solid rgb(241, 241, 241);
// `;

// const Section = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 10rem;
// `;

// const Icon = styled.span`
//   width: 1.5rem;
//   height: 1.5rem;
// `;

// const Title = styled.div`
//   margin-left: 1rem;
//   margin-right: 1rem;
// `;

// const InputSearch = styled.input`
//   width: 200px;
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Subscribe = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const StyledImage = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.1); /* Hover effekti */
//   }
// `;

// const TitleSubscribe = styled.p`
//   font-weight: bold;

//   color: #555;

//   span {
//     color: rgb(177, 179, 181);
//   }
// `;

// const SignIn = styled.p`
//   color: blue;
//   cursor: pointer;
// `;

// const App = () => {
//   return (
//     <Header>
//       <Menu>
//         <Section>
//           <Icon>
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 20 20"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M19 17H1V15H19V17ZM13 11H1V9H13V11ZM1 5V3H19V5H1Z"
//                 fill="#BCBFC2"
//               />
//             </svg>
//           </Icon>
//           <Title>Section</Title>
//         </Section>
//         <InputSearch type="text" placeholder="Search..." />
//         <Subscribe>
//           <StyledImage src={NavIcon} alt="photo" />
//           <TitleSubscribe>
//             Subscribe Now <br />
//             <span>3 months for $19</span>
//           </TitleSubscribe>
//         </Subscribe>
//         <SignIn>Sign In</SignIn>
//       </Menu>
//     </Header>
//   );
// };

// export default App;

// -"use client";
// import Image from 'next/image';
// import React from "react";
// import styled from "styled-components";
// import NavIcon from "./components/rasmlar/NavIcon.jpg";
// // import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrapni import qilamiz

// // Header bo'limi
// const Header = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: start;
//   width: 100%;
//   height: 100vh;
//   margin-top: 1rem;
// `;

// const Menu = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 80%;
//   height: 4rem;
//   border-bottom: 2px solid rgb(241, 241, 241);
// `;

// const Section = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 10rem;
// `;

// const Icon = styled.span`
//   width: 1.5rem;
//   height: 1.5rem;
// `;

// const Title = styled.div`
//   margin-left: 1rem;
//   margin-right: 1rem;
// `;

// const InputSearch = styled.input`
//   width: 200px;
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Subscribe = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   background-color: #f9f9f9;
//   padding: 10px;
//   border-radius: 8px;
//   &:hover {
//     background-color: #e9ecef;
//   }
// `;

// const ImageSubscribe = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
// `;

// const TitleSubscribe = styled.div`
//   font-weight: bold;
//   color: #555;
//   span {
//     color: rgb(177, 179, 181);
//   }
// `;

// const SignIn = styled.p`
//   color: blue;
//   cursor: pointer;
// `;

// // Main App component
// const App = () => {
//   return (
//     <Header>
//       <Menu className="d-flex justify-content-between align-items-center w-80">
//         <Section className="d-flex align-items-center justify-content-center w-10">
//           <Icon>
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 20 20"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M19 17H1V15H19V17ZM13 11H1V9H13V11ZM1 5V3H19V5H1Z"
//                 fill="#BCBFC2"
//               />
//             </svg>
//           </Icon>
//           <Title>Section</Title>
//         </Section>
//         <InputSearch className="form-control" type="text" placeholder="Search..." />
//         <Subscribe className="d-flex align-items-center gap-3">
//           <Image src={NavIcon} alt="photo" className="rounded-circle" />
//           <TitleSubscribe>
//             Subscribe Now <br />
//             <span>3 months for $19</span>
//           </TitleSubscribe>
//         </Subscribe>
//         <SignIn className="text-primary cursor-pointer">Sign In</SignIn>
//       </Menu>
//     </Header>
//   );
// };

// export default App;

"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image"; // next/image import qilamiz
import NavIcon from "../../rasmlar/NavIcon.jpg"; // rasmni to'g'ri import qilish

// Header bo'limi
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100vh;
  margin-top: 1rem;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 4rem;
  border-bottom: 2px solid rgb(241, 241, 241);
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
`;

const Icon = styled.span`
  width: 1.5rem;
  height: 1.5rem;
`;

const Title = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
`;

const InputSearch = styled.input`
  width: 40rem;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
`;

const Subscribe = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .Image {
  width: 4.1rem;
  height: 2.7rem;
  }
`;

// const Image = styled.img`
//   width: 4.1rem;
//   height: 2.7rem;
//   border-radius: 50%;
// `;

const TitleSubscribe = styled.p`
  font-weight: bold;

  color: #555;

  span {
    color: rgb(177, 179, 181);
  }
`;

const SignIn = styled.p`
  color: blue;
  cursor: pointer;
`;

const App = () => {
  return (
    <Header>
      <Menu>
        <Section>
          <Icon>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 17H1V15H19V17ZM13 11H1V9H13V11ZM1 5V3H19V5H1Z"
                fill="#BCBFC2"
              />
            </svg>
          </Icon>
          <Title>Section</Title>
        </Section>
        <InputSearch type="text" placeholder="Search..." />
        <Subscribe className="d-flex align-items-center gap-3">
          <Image
            src={NavIcon}
            className="Image" // Rasmni next/image yordamida qo'shamiz
            alt="Nav Icon"
         />
          <TitleSubscribe>
            Subscribe Now <br />
            <span>3 months for $19</span>
          </TitleSubscribe>
        </Subscribe>
        <SignIn>Sign In</SignIn>
      </Menu>
    </Header>
  );
};

export default App;
