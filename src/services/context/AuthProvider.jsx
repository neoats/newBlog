// // AuthProvider.jsx
// import React, { createContext, useContext, useState } from 'react';

// export const AuthContext = createContext(); // Export AuthContext

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);

//   const setAdminStatus = (status) => {
//     setIsAdmin(status);
//   };

//   const authContextValue = {
//     isLoggedIn,
//     isAdmin,
//     setAdminStatus,

//   };

//   // Check if children is defined before rendering
//   if (!children) {
//     console.warn("AuthProvider: 'children' prop is not provided.");
//     return null;
//   }
//   return (
//     <AuthContext.Provider value={{ authContextValue }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// export default AuthProvider;
