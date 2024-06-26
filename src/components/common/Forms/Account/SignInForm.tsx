import { Input, Button, Spacer, Link, Checkbox } from '@nextui-org/react';
import { useCallback, useState } from 'react';
import { EyeSlashFilledIcon } from './EyeSlashFilledIcon';
import { EyeFilledIcon } from './EyeFilledIcon';
import { AccountOption, HaveAccountButton, Heading, PageContainer, PasswordHandleSection } from '@styles/AccountFormStyles';
import { GoogleLogin } from '@react-oauth/google';

interface SignInProps {
    toggleForm: () => void;
}

const SignInForm: React.FC<SignInProps> = ({ toggleForm }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleGoogleSuccess = useCallback(() => {
    },
        []
    );

    const handleGoogleFailure = useCallback(() => {
    }, []);

    return (
        <PageContainer>
            <Heading>LOGIN</Heading>
            <Spacer y={3} />
            <Input label="Email" placeholder="Enter your email" type="email" variant="bordered" />
            <Spacer y={3} />
            <Input
                autoComplete="off"
                endContent={
                    <button className="focus:outline-none" onClick={toggleVisibility} type="button">
                        {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                    </button>
                }
                label="Password"
                placeholder="Enter your password"
                type={isVisible ? "text" : "password"}
                variant="bordered"
            />
            <Spacer y={3} />
            <PasswordHandleSection>
                <Checkbox color="secondary">Remember me</Checkbox>
                <Link color="danger">
                    Forgot password?
                </Link>
            </PasswordHandleSection>
            <Spacer y={5} />
            <Button className='dark' color="default" onClick={toggleForm} style={{ width: '100%' }}>
                Sign In
            </Button>
            <Spacer y={5} />
            <GoogleLogin
                onError={handleGoogleFailure}
                onSuccess={handleGoogleSuccess}
                width="330px"
            />
            <AccountOption>
                Don’t have an account?{" "}
                <HaveAccountButton onClick={toggleForm}>Sign Up</HaveAccountButton>
            </AccountOption>
        </PageContainer>
    )
}

export default SignInForm
