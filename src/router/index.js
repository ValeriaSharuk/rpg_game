import Start from "../pages/Start";
import Menu from "../pages/Menu";
import Error from "../pages/Error";
import EditCharacter_page1 from "../pages/EditCharacter/page1/EditCharacter_page1";
import EditCharacter_page2 from "../pages/EditCharacter/page2/EditCharacter_page2";

export const routes = [
    { path: "/start", element: <Start />, exact: true },
    { path: "/edit1", element: <EditCharacter_page1 />, exact: true },
    { path: "/edit2", element: <EditCharacter_page2 />, exact: true },
    { path: "/", element: <Menu />, exact: true },
    { path: "*", element: <Error />, exact: true },
];