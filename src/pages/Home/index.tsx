import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLoaderData } from 'react-router-dom';

import { User } from '../../loaders/userLoader';
import { HomeContainer, ProfileCard, ProfileCardInfo, ProfileCardStats } from './styles';

export function Home() {
  const { data: user } = useLoaderData() as { data: User };

  return (
    <HomeContainer>
      <ProfileCard>
        <img src={user.avatar_url} alt='' />
        <ProfileCardInfo>
          <h1>{user.name}</h1>
          <p>{user.bio} </p>
        </ProfileCardInfo>
        <ProfileCardStats>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.login}</span>
          </div>
          {user.company && (
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{user.company}</span>
            </div>
          )}
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{user.followers} seguidores</span>
          </div>
        </ProfileCardStats>
      </ProfileCard>
    </HomeContainer>
  );
}
