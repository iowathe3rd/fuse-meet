import { SignUp } from "@clerk/nextjs";

const SignUpPage: React.FC = () => {
  return (
    <main className="w-full h-screen flex-center">
      <SignUp />
    </main>
  );
};
export default SignUpPage;
