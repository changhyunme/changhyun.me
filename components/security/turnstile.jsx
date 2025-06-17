"use client"
import Turnstile from 'react-turnstile';

const MyComponent = () => {
    return (
        <Turnstile
            sitekey='0x4AAAAAABhTtlyBRV7AwBTK'
            onVerify={(token) => {
                console.log('Turnstile token:', token);
                // 서버로 token 보내서 검증!
            }}
        />
    );
};

export default MyComponent;