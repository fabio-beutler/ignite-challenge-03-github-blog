import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import { api } from "../../lib/api.ts";
import { User } from "../../loaders/userLoader";
import {
  HomeContainer,
  ProfileCard,
  ProfileCardInfo,
  ProfileCardStats,
} from "./styles";

export function Home() {
  const [userInfo, setUserInfo] = useState<User>({} as User);
  async function loadUserInfo() {
    const response = await api.get(`/users/fabio-beutler`);
    setUserInfo(response.data);
  }

  useEffect(() => {
    loadUserInfo();
  }, []);

  return (
    <HomeContainer>
      <ProfileCard>
        <img src={userInfo.avatar_url} alt="" />
        <div>
          <ProfileCardInfo>
            <h1>{userInfo.name}</h1>
            <p>{userInfo.bio} </p>
          </ProfileCardInfo>
          <ProfileCardStats>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>{userInfo.login}</span>
            </div>
            {userInfo.company && (
              <div>
                <FontAwesomeIcon icon={faBuilding} />
                <span>{userInfo.company}</span>
              </div>
            )}
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{userInfo.followers} seguidores</span>
            </div>
          </ProfileCardStats>
        </div>
        <a
          href={userInfo.html_url}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </ProfileCard>
    </HomeContainer>
  );
}
