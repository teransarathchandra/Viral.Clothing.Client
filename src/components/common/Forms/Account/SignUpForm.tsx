import { Input, Button, Spacer } from '@nextui-org/react';
import { AccountOption, HaveAccountButton, Heading, PageContainer } from '@styles/AccountFormStyles';
import { EyeSlashFilledIcon } from './EyeSlashFilledIcon';
import { EyeFilledIcon } from './EyeFilledIcon';
import { useState } from 'react';

interface SignInProps {
    toggleForm: () => void;
}

const SignUpForm: React.FC<SignInProps> = ({ toggleForm }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <PageContainer>
            <Heading>CREATE ACCOUNT</Heading>
            <Spacer y={3} />
            <Input fullWidth label="First Name" placeholder="First Name" variant="bordered" />
            <Spacer y={3} />
            <Input fullWidth label="Last Name" placeholder="Last Name" variant="bordered" />
            <Spacer y={3} />
            <Input fullWidth label="Email" placeholder="Email" variant="bordered" />
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
            <Spacer y={5} />
            <Button className='dark' color="default" onClick={toggleForm} style={{ width: '100%' }}>
                Create
            </Button>
            <Spacer y={1} />
            <AccountOption>
                Already have an account?{" "}
                <HaveAccountButton onClick={toggleForm}>Log in</HaveAccountButton>
            </AccountOption>
        </PageContainer>
    )
}

export default SignUpForm
