import styled from "styled-components";

const SecondButton = styled.div`
  width: ${(props) => (props.isZeroSign ? "1/3" : "65px")};
  height: ${(props) => (props.isEqualSign ? "132px" : "65px")};
  border-radius: 5.2px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5.2px 10.4px 0 rgba(0, 0, 0, 0.35),
    0 2.6px 3.9px 0 rgba(0, 0, 0, 0.25), inset 0 -2px 0 0 rgba(62, 64, 65, 0.5);
  background-blend-mode: overlay, normal;
  background-image: linear-gradient(
      to left,
      #fff 100%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(to bottom, #f0f0f0, #f0f0f0);
  ${(props) =>
    props.isEqualSign
      ? `grid-row: 4/6; 
      grid-column: 4/5; 
      background-image: linear-gradient(
      to left,
      #9a9a9a 100%,
      rgba(154, 154, 154, 0) 0%
    ),
    linear-gradient(to bottom, #b5b5b5, #9a9a9a);`
      : ``}
  ${(props) => (props.isZeroSign ? `grid-row: 5/5; grid-column: 1/3` : ``)}
`;

const Styledbutton = styled.button`
  font-family: Jura;
  font-size: 31.2px;
  font-weight: 600;
  text-align: center;
  color: ${(props) => (props.isOperator ? "#F07032" : "#1e1e1e")};
  width: ${(props) => (props.isZeroSign ? "91.78px" : "45.89px")};
  height: ${(props) => (props.isEqualSign ? "91.78px" : "45.89px")};
  border: none;
  border-radius: 10.45px;
  cursor: pointer;
  box-shadow: 0 2.6px 3.9px 0 rgba(0, 0, 0, 0.25),
    inset 0 -2px 0 0 rgba(62, 64, 65, 0.5);
  background-image: linear-gradient(to top, #fff 50%, rgba(255, 255, 255, 0)),
    linear-gradient(to bottom, #f0f0f0, #f0f0f0);
  ${(props) =>
    props.isAC ? `color: #C5441F; font-size: 26px; font-weight: 700;` : ``}
  ${(props) =>
    props.isEqualSign
      ? `color: #fff; 
      font-size: 26px; 
      background-image: linear-gradient(to top, #9a9a9a 50%, rgba(154, 154, 154, 0)),
    linear-gradient(to bottom, #b5b5b5, #9a9a9a);`
      : ``}
`;

const Button = ({ children, ...props }) => {
  return (
    <SecondButton {...props}>
      <Styledbutton {...props}>{children}</Styledbutton>
    </SecondButton>
  );
};
export default Button;
