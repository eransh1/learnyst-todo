import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // console.log(error, errorInfo);
        if (
            error.message.includes(
                "Failed to fetch dynamically imported module"
            )
        ) {
            if (typeof window !== 'undefined') {
                window.location.reload();
            }
            
        }
    }

    render() {
        if (this.state.hasError) {
            return <></>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
