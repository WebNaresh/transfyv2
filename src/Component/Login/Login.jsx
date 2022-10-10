import {
  TabsListUnstyled,
  TabPanelUnstyled,
  TabsUnstyled,
  TabUnstyled,
} from "@mui/base";

const Login = () => {
  return (
    <>
      <TabsUnstyled defaultValue={0}>
        <TabsListUnstyled>
          <TabUnstyled> My Accont1</TabUnstyled>
          <TabUnstyled> My Accont2</TabUnstyled>
          <TabUnstyled> My Accont3</TabUnstyled>
        </TabsListUnstyled>
        <TabPanelUnstyled value={0}>My accont1</TabPanelUnstyled>
        <TabPanelUnstyled value={1}>My accont2</TabPanelUnstyled>
        <TabPanelUnstyled value={2}>My accont3</TabPanelUnstyled>
      </TabsUnstyled>
    </>
  );
};
export default Login;
