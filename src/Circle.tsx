// import styled from "styled-components";

// interface ContainerProps {
//   bgColor: string;
//   borderColor: string;
// }

// const Container = styled.div<ContainerProps>`
//   width: 200px;
//   height: 200px;
//   background-color: ${(props) => props.bgColor};
//   border-radius: 100px;
//   border: 1px solid ${(props) => props.borderColor};
// `;

// //optional props를 지정하기 위해서는
// //interface에 똑같이 props 지정하고 '?' 넣기
// interface CircleProps {
//   bgColor: string;
//   borderColor?: string;
//   text?: string;
//   //borderColor: string | undefined; ,,이 방식도 가능
// }

// function Circle({
//   bgColor,
//   borderColor,
//   text = "default string",
// }: CircleProps) {
//   return (
//     <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
//       {text}
//     </Container>
//   );
// }

// //Circle 함수 안의 porps 적용을 위해
// //interface 를 적용해 줄 필요가 있다.
// //interface란 object shape(객체모양)을 typescript에게 설명해주는 typescript의 개념
// // 어떻게 component의 props에 type을 주는가??
// // 위의 2 interface는 둘 다 하나의 prop만 가지고 있으니깐 같다
// // ?? => 풀백이라 말하며 위의 코드와 같이 만약 borderColor가 있다면, borderColor를 사용하고 만일 없다면, bgColor 값을 사용하라

// export default Circle;
