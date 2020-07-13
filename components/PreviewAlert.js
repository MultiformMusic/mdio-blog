import { Alert } from "react-bootstrap";

export default function PreviewAlert() {

    return (
        <Alert variant="secondary">
            This is preveiw mode ! {'    '}
            <Alert.Link href="/api/exit-preview">Click to leave preview mode</Alert.Link>
        </Alert>
    )
}