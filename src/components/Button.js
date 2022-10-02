import styled from "styled-components";

const SecondButton = styled.div`
  width: 65px;
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
  grid-row: ${(props) => (props.isEqualSign ? "4/6" : "auto")};
  grid-column: ${(props) => (props.isEqualSign ? "4/5" : "auto")};
`;

const Styledbutton = styled.button`
  font-family: Jura;
  font-size: 31.2px;
  font-weight: 600;
  text-align: center;
  color: ${(props) => (props.isEqualSign ? "#FFCC48" : "#1e1e1e")};
  width: 45.89px;
  height: ${(props) => (props.isEqualSign ? "91.78px" : "45.89px")};
  border: none;
  border-radius: 10.45px;
  cursor: pointer;
  box-shadow: 0 2.6px 3.9px 0 rgba(0, 0, 0, 0.25),
    inset 0 -2px 0 0 rgba(62, 64, 65, 0.5);
  background-image: linear-gradient(to top, #fff 50%, rgba(255, 255, 255, 0)),
    linear-gradient(to bottom, #f0f0f0, #f0f0f0);
`;

const Button = ({ children, ...props }) => {
  console.log(props);
  return (
    <SecondButton {...props}>
      <Styledbutton {...props}>{children}</Styledbutton>
    </SecondButton>
  );
};
export default Button;
