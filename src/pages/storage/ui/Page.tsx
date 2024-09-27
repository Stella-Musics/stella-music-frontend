import React, { useState } from 'react';
import styled from 'styled-components';
import { Title1, Title2, Body1, Body2 } from '@/shared/ui/typo';
import { AppleLogo, GoogleLogo, StellaMusicLogo } from '@/shared/ui/icons'

const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 100%;
  padding: 0 16px;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px 0;

  @media (min-width: 768px) {
    max-width: 800px;
  }
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.color.cardBackground};
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PlaylistCard = styled(Card)`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const PlaylistInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LogoBackground = styled.div`
  background-color: ${({ theme }) => theme.color.cardBackground};
  border-radius: 8px;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;

const StyledStellaMusicLogo = styled(StellaMusicLogo)`
  width: 100%;
  height: 100%;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: calc(100vh - 160px);
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
  width: 100%;
`;

const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 20px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  width: 100%;
  max-width: 220px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  }

  @media (max-width: 420px) {
    font-size: 12px;
    height: 36px;
    max-width: 180px;
  }
`;

const GoogleLoginButton = styled(LoginButton)`
  background-color: #ffffff;
  color: #757575;
  border: 1px solid #dadce0;
  font-family: Roboto, sans-serif;

  .logo-wrapper {
    margin-right: 8px;
  }

  &:hover {
    background-color: #f8f8f8;
  }
`;

const AppleLoginButton = styled(LoginButton)`
  background-color: #000000;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

  .logo {
    margin-right: 8px;
  }

  &:hover {
    background-color: #2a2a2a;
  }
`;

const UserName = styled(Body2)`
  color: ${({ theme }) => theme.color.onBackgroundVariant};
  margin-top: 16px;
`;

const SongCount = styled(Body1)`
  color: ${({ theme }) => theme.color.onBackgroundVariant};
  font-size: 0.9rem;
`;

const ResponsiveTitle1 = styled(Title1)`
  font-size: 1.5rem;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const ResponsiveTitle2 = styled(Title2)`
  font-size: 1.2rem;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

const SyncStatusContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
`;

const SyncStatusCard = styled.div<{ isSynced: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 20px;
  background-color: ${({ theme, isSynced }) =>
    isSynced ? theme.color.point.blue + '20' : theme.color.point.red + '20'};
  color: ${({ theme, isSynced }) =>
    isSynced ? theme.color.point.blue : theme.color.point.red};
`;

const ServiceLogo = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const SyncButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.color.background};
  border: none;
  padding: 4px 8px;
  margin-left: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.color.background};
  }
`;

// SpotifyLogo component
const SpotifyLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" {...props}>
    <path fill="currentColor" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" />
  </svg>
);

interface Playlist {
  title: string;
  songCount: number;
}

interface SyncState {
  [key: string]: boolean;
}

const ArchivePage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [syncState, setSyncState] = useState<SyncState>({
    google: false,
    spotify: false
  });

  const handleLogin = (provider: string): void => {
    setIsLoggedIn(true);
    setUserName('사용자');
    setPlaylists([
      { title: '잔잔한 힐링 플리', songCount: 15 },
      { title: '개발할때 듣는 플리', songCount: 20 },
      { title: '자기전에 듣는 플리', songCount: 10 },
    ]);
    setSyncState(prev => ({ ...prev, google: provider === 'google' }));
  };

  const handleSync = (service: string) => {
    setSyncState(prev => ({ ...prev, [service]: true }));
  };

  return (
    <PageContainer>
      <ContentWrapper>
        {isLoggedIn ? (
          <>
            <SyncStatusContainer>
              <SyncStatusCard isSynced={syncState.google}>
                <ServiceLogo><GoogleLogo /></ServiceLogo>
                <Body1>Google {syncState.google ? '연동됨' : '연동 필요'}</Body1>
                {!syncState.google && (
                  <SyncButton onClick={() => handleSync('google')}>연동하기</SyncButton>
                )}
              </SyncStatusCard>
              <SyncStatusCard isSynced={syncState.spotify}>
                <ServiceLogo><SpotifyLogo /></ServiceLogo>
                <Body1>Spotify {syncState.spotify ? '연동됨' : '연동 필요'}</Body1>
                {!syncState.spotify && (
                  <SyncButton onClick={() => handleSync('spotify')}>연동하기</SyncButton>
                )}
              </SyncStatusCard>
            </SyncStatusContainer>
            <ResponsiveTitle1>{userName}님의 플레이리스트</ResponsiveTitle1>
            {playlists.map((playlist, index) => (
              <PlaylistCard key={index}>
                <LogoBackground>
                  <StyledStellaMusicLogo />
                </LogoBackground>
                <PlaylistInfo>
                  <ResponsiveTitle2>{playlist.title}</ResponsiveTitle2>
                  <SongCount>곡 수: {playlist.songCount}</SongCount>
                </PlaylistInfo>
              </PlaylistCard>
            ))}
            <UserName>{userName}님</UserName>
          </>
        ) : (
          <LoginContainer>
            <ResponsiveTitle1>
              스텔라이브의 음악을 스텔플레이와 함께 즐겨보세요
            </ResponsiveTitle1>
            <ButtonContainer>
              <GoogleLoginButton onClick={() => handleLogin('google')} aria-label="Google로 로그인">
                <div className="logo-wrapper">
                  <GoogleLogo />
                </div>
                <span className="text">Sign in with Google</span>
              </GoogleLoginButton>
              <AppleLoginButton onClick={() => handleLogin('apple')} aria-label="Apple로 로그인">
                <span className="logo"><AppleLogo /></span>
                <span className="text">Sign in with Apple</span>
              </AppleLoginButton>
            </ButtonContainer>
          </LoginContainer>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export const StoragePage: React.FC = () => {
  return <ArchivePage />;
};

export default ArchivePage;