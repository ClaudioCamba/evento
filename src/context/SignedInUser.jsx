import { createContext, useState } from 'react';
export const SignedInUserContext = createContext(null);

export const SignedInUserProvider = ({ children }) => {
  const [signedInUser, setSignedInUser] = useState(null);

  return (
    <SignedInUserContext.Provider value={{ signedInUser, setSignedInUser }}>
      {children}
    </SignedInUserContext.Provider>
  );
};