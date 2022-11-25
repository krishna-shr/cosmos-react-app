import React, { ErrorInfo } from 'react';
import { Wrapper } from './ErrorBoundary.styled';

interface IErrorBoundaryProps {
    pathname?: string;
    children: React.ReactNode;
}
export default class ErrorBoundary extends React.PureComponent<
    IErrorBoundaryProps,
    {
        hasError: boolean;
    }
> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidUpdate(prevProps) {
        const { pathname } = this.props;
        if (pathname && pathname !== prevProps.pathname) {
            this.setState({
                hasError: false,
            });
        }
    }

    static getDerivedStateFromError(error: Error): { hasError: boolean } {
        console.log('error', error);
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // log error to sentry
        console.log('error', error);
        console.log('errorInfo', errorInfo);
        return null;
    }

    render(): JSX.Element {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (
                <Wrapper>
                    <div>Error</div>
                    <button onClick={() => window.location.reload()}></button>
                </Wrapper>
            );
        }
        return children as JSX.Element;
    }
}
