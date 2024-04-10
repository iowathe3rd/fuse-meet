import { SignIn } from "@clerk/nextjs";

const SignInPage: React.FC = () => {
  return (
    <main className="w-full h-screen flex-center">
      <SignIn />
    </main>
  );
};
export default SignInPage;
