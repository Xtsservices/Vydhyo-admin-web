'use client'

import React, { useState, useEffect } from 'react';
import { 
  PhoneOutlined, 
  MessageOutlined
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const MobileLoginPage = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);
  const [error, setError] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer(timer => timer - 1);
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [otpTimer]);

  const validatePhone = (phoneNumber: string) => {
    return /^[0-9]{10}$/.test(phoneNumber);
  };

  const handleSendOTP = async () => {
    if (!phone || !validatePhone(phone)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    
    setIsLoading(true);
    setError('');
    setTimeout(() => {
      setOtpSent(true);
      setOtpTimer(30);
      setIsLoading(false);
    }, 1500);
  };

  const handleOTPVerification = () => {
    if (!otp || otp.length < 6) {
      setError('Please enter the complete 6-digit OTP');
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 1000);
  };

  const resetPhoneLogin = () => {
    setOtpSent(false);
    setOtpTimer(0);
    setError('');
    setPhone('');
    setOtp('');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(value);
    if (error) setError('');
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setOtp(value);
    if (error) setError('');
  };

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: isMobile ? '20px' : '40px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  };

  const wrapperStyle: React.CSSProperties = {
    maxWidth: '1100px',
    width: '100%',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '2rem' : '4rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'white',
    borderRadius: '20px',
    padding: isMobile ? '30px 20px' : '50px 40px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
  };

  const leftStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: isMobile ? '100%' : '500px',
    textAlign: 'center',
    order: isMobile ? 2 : 1
  };

  const rightStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: isMobile ? '100%' : '500px',
    order: isMobile ? 1 : 2
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: isMobile ? '250px' : '400px',
    height: 'auto',
    objectFit: 'contain'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '1.8rem' : '2.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#333'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '2rem'
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    height: '50px',
    padding: '0 15px 0 45px',
    fontSize: '16px',
    border: '2px solid #e1e1e1',
    borderRadius: '10px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    marginBottom: '1rem'
  };

  const inputContainerStyle: React.CSSProperties = {
    position: 'relative',
    marginBottom: '1.5rem'
  };

  const iconStyle: React.CSSProperties = {
    position: 'absolute',
    left: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#ccc',
    fontSize: '18px',
    zIndex: 1
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    height: '50px',
    fontSize: '16px',
    fontWeight: '600',
    color: 'white',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    marginBottom: '1rem'
  };

  const errorStyle: React.CSSProperties = {
    padding: '12px 16px',
    backgroundColor: '#fff2f0',
    border: '1px solid #ffccc7',
    borderRadius: '8px',
    color: '#ff4d4f',
    fontSize: '14px',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const avatarStyle: React.CSSProperties = {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem',
    color: 'white',
    fontSize: '24px'
  };

  const otpAvatarStyle: React.CSSProperties = {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: '#f6ffed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem',
    color: '#52c41a',
    fontSize: '20px'
  };

  return (
    <div style={containerStyle}>
      <div style={wrapperStyle}>
        <div style={leftStyle}>
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Doctor Illustration"
            style={imageStyle}
          />
          {!isMobile && (
            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ color: '#667eea', fontSize: '1.5rem', marginBottom: '1rem' }}>
                Welcome to HealthCare
              </h3>
              <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}>
                Your trusted healthcare companion. Secure, reliable, and always here for you.
              </p>
            </div>
          )}
        </div>

        <div style={rightStyle}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={avatarStyle}>
              <PhoneOutlined />
            </div>
            <h3 style={titleStyle}>Mobile Login</h3>
            <p style={subtitleStyle}>Enter your mobile number to continue</p>
          </div>

          {error && (
            <div style={errorStyle}>
              <span>⚠️</span>
              {error}
            </div>
          )}

          {!otpSent ? (
            <>
              <div style={inputContainerStyle}>
                <PhoneOutlined style={iconStyle} />
                <input
                  type="text"
                  placeholder="Enter your 10-digit mobile number"
                  value={phone}
                  onChange={handlePhoneChange}
                  style={{
                    ...inputStyle,
                    borderColor: error && !validatePhone(phone) ? '#ff4d4f' : '#e1e1e1'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e1e1e1'}
                />
              </div>

              <button
                style={{
                  ...buttonStyle,
                  opacity: !phone || phone.length !== 10 ? 0.6 : 1,
                  cursor: !phone || phone.length !== 10 ? 'not-allowed' : 'pointer'
                }}
                onClick={handleSendOTP}
                disabled={!phone || phone.length !== 10 || isLoading}
              >
                {isLoading ? 'Sending OTP...' : 'Send OTP'}
              </button>
            </>
          ) : (
            <>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={otpAvatarStyle}>
                  <MessageOutlined />
                </div>
                <p style={{ fontSize: '16px', marginBottom: '0.5rem' }}>
                  OTP sent to <strong>+91 {phone}</strong>
                </p>
                <button
                  onClick={resetPhoneLogin}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#667eea',
                    cursor: 'pointer',
                    fontSize: '14px',
                    textDecoration: 'underline'
                  }}
                >
                  ← Change number
                </button>
              </div>

              <div style={inputContainerStyle}>
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={handleOtpChange}
                  style={{
                    ...inputStyle,
                    textAlign: 'center',
                    letterSpacing: '5px',
                    fontSize: '18px',
                    paddingLeft: '15px',
                    borderColor: error && otp.length < 6 ? '#ff4d4f' : '#e1e1e1'
                  }}
                />
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem',
                fontSize: '14px'
              }}>
                <span style={{ color: '#666' }}>
                  {otpTimer > 0 ? `Resend OTP in ${otpTimer}s` : "Didn't receive OTP?"}
                </span>
                {otpTimer === 0 && (
                  <button
                    onClick={handleSendOTP}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#667eea',
                      cursor: 'pointer',
                      textDecoration: 'underline'
                    }}
                  >
                    Resend OTP
                  </button>
                )}
              </div>

              <button
                style={buttonStyle}
                onClick={handleOTPVerification}
                disabled={isLoading}
              >
                {isLoading ? 'Verifying...' : 'Verify & Sign In'}
              </button>
            </>
          )}

          <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '12px' }}>
            <p style={{ color: '#666' }}>
              By continuing, you agree to our{' '}
              <a href="#" style={{ color: '#667eea', textDecoration: 'none' }}>Terms of Service</a>
              {' '}and{' '}
              <a href="#" style={{ color: '#667eea', textDecoration: 'none' }}>Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '20px',
        width: '100%',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: '14px'
      }}>
        &copy; {new Date().getFullYear()} HealthCare Platform. All rights reserved.
      </div>
    </div>
  );
};

export default MobileLoginPage;