import React, { useContext } from "react";
import "react-native-gesture-handler";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import App from "./src/navigators/LoginNavigator";

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOGMzYTI3ODQtYjdhZC00YjYyLTg5MTYtZTRmNTBjYjJkZTE4IiwidXNlcl9lbWFpbCI6InVzZXIxQGVtYWlsLmNvbSJ9.
//bFsRay2kt5ysIwd649Ix_l2alZsMGTQX5-Ayy5cF_TU

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzcxYTliMDEtMzNkNS00ZGU2LTg2MzktODI5NDI0MTE1ZDQ0IiwidXNlcl9lbWFpbCI6InVzZXIyQGVtYWlsLmNvbSJ9.
//pOZPRcQy3brO5bGVaqpHgvuTWZbluMb1-UlPAawbg9A
