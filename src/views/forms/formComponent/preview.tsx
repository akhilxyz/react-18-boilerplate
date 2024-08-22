import { Button } from "antd";

const Preview = ({backgroundColor, textColor, secondaryColor, primaryColor , firstFormValues} :any) => {
    return (
        <div
            style={{
                width: '360px',
                height: '720px',
                padding: '5px',
                backgroundColor,
                color: textColor,
                border: `2px solid ${secondaryColor}`,
                borderRadius: '36px',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {/* Status Bar */}
            <div
                style={{
                    width: '100%',
                    height: '24px',
                    backgroundColor: '#000',
                    borderTopLeftRadius: '32px',
                    borderTopRightRadius: '32px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 12px',
                    boxSizing: 'border-box',
                    color: '#fff',
                    fontSize: '14px',
                }}
            >
                <div>12:34</div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <div>🔋</div>
                    <div>📶</div>
                    <div>WiFi</div>
                </div>
            </div>
            <div style={{marginTop : "10px" , }}>
                <h2 style={{ color: primaryColor, marginBottom: '16px'}}>{firstFormValues?.walletname ?? 'App Preview'}</h2>
            </div>

            {/* App Content */}
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ textAlign: 'center', marginBottom: '24px' }}>This is a preview of how your app will look.</p>
                <Button style={{ backgroundColor: primaryColor, color: textColor, marginBottom: '16px', width: '80%' }}>
                    Primary Button
                </Button>
                <Button style={{ backgroundColor: secondaryColor, color: textColor, width: '80%' }}>
                    Secondary Button
                </Button>
            </div>

            {/* Home Indicator */}
            <div
                style={{
                    width: '100px',
                    height: '5px',
                    backgroundColor: '#ccc',
                    borderRadius: '12px',
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
            />
        </div>
    );
};

export default Preview;
