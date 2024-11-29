import { AuthProvider } from "./AuthContext";
import { TestimonialProvider } from "./TestimonialContext";
export const GlobalProvider = ({ children }) => {
  return (
    <AuthProvider>
      <TestimonialProvider>{children}</TestimonialProvider>
    </AuthProvider>
  );
};
