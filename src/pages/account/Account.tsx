import SignInForm from "@components/common/Forms/Account/SignInForm";
import SignUpForm from "@components/common/Forms/Account/SignUpForm";
import { motion } from "framer-motion";
import { useState } from "react";
import fadeInOutAnimation from "src/animations/fadeInOutAnimation";

const Account = () => {
    const [showSignIn, setShowSignUp] = useState(true);

    const toggleForm = () => {
        setShowSignUp(!showSignIn);
    };

    const FormComponent = showSignIn ? SignInForm : SignUpForm;

    return (
        <motion.div key={showSignIn ? "signin" : "signup"} style={{ width: '400px', margin: 'auto', padding: '2rem' }} {...fadeInOutAnimation}>
            <FormComponent toggleForm={toggleForm} />
        </motion.div>
    )
}

export default Account
