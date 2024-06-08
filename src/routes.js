import { AuthRoute, HomeRoute, RegisterRoute, ProfilesRoute, UpdateProfileRoute } from "./utils/consts";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilesPage from "./pages/ProfilesPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";

export const publicRoutes = [
        {
                path: AuthRoute,
                Element: AuthPage
        },
        {
                path: HomeRoute,
                Element: HomePage
        },
        {
                path: RegisterRoute,
                Element: RegisterPage
        },
        {
                path: ProfilesRoute,
                Element: ProfilesPage
        },
        {
                path: UpdateProfileRoute,
                Element: UpdateProfilePage
        },

]