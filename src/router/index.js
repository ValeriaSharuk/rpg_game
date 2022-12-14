import Menu from "../pages/Menu";
import Error from "../pages/Error";
import EditCharacter_page_1 from "../pages/EditCharacter/page1/EditCharacter_page_1";
import EditCharacter_page2 from "../pages/EditCharacter/page2/EditCharacter_page_2";
import TrainingRoom from "../pages/TrainingRoom/TrainingRoom";
import Battle from "../pages/Battle/Battle";
import Start from "../pages/Start/Start";

export const routes = [
    { path: "/start", element: <Start />, exact: true },
    { path: "/train", element: <TrainingRoom />, exact: true },
    { path: "/battle", element: <Battle />, exact: true },
    { path: "/edit1", element: <EditCharacter_page_1 />, exact: true },
    { path: "/edit2", element: <EditCharacter_page2 />, exact: true },
    { path: "/", element: <Menu />, exact: true },
    { path: "*", element: <Error />, exact: true },
];