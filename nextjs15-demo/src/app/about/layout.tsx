import { ReactElement } from "react";
// dont use React.FC this is the preferred way to do it
// using the React.FC can sometimes assume the children to be optional ?
const AboutLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <p>This is a layout for the about page</p>
      {children}
    </div>
  );
};

export default AboutLayout;
